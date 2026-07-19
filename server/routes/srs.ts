import { applySRS, xpForGrade, type Grade } from '../../src/shared/srs';
import type { Db } from '../db/types';
import { NotFoundError } from '../db/types';

export type SrsKind = 'vocab' | 'phrasebook' | 'pronounce' | 'listen' | 'builder';
const KINDS: SrsKind[] = ['vocab', 'phrasebook', 'pronounce', 'listen', 'builder'];

type SrsRow = { id: string; item_key: string; strength: number; interval_days: number; due_at: string; leech_count: number };

const LEECH_THRESHOLD = 8; // consecutive "again"s before we park it — matches the "pijawka" ask: stop grinding the user's motivation on one card

// GET /api/srs?kind=vocab — items due today, weakest memory first (rescue
// the ones about to be forgotten before the ones with headroom left).
export async function listDue(db: Db, userId: string, kind: SrsKind): Promise<SrsRow[]> {
  return db.query<SrsRow>(
    `select id, item_key, strength, interval_days, due_at, leech_count
     from srs_items
     where user_id = $1 and kind = $2 and due_at <= current_date and not suspended
     order by strength asc`,
    [userId, kind],
  );
}

// GET /api/srs/summary — due counts per kind, for the Home/Progress banners
export async function dueSummary(db: Db, userId: string): Promise<Record<SrsKind, number>> {
  const rows = await db.query<{ kind: SrsKind; count: string }>(
    `select kind, count(*) from srs_items
     where user_id = $1 and due_at <= current_date and not suspended
     group by kind`,
    [userId],
  );
  const out = Object.fromEntries(KINDS.map((k) => [k, 0])) as Record<SrsKind, number>;
  rows.forEach((r) => (out[r.kind] = Number(r.count)));
  return out;
}

// POST /api/srs/:id/rate  { grade }
// Applies the same interval math the client uses offline (src/shared/srs.ts)
// — one algorithm, whether the rating happens in the browser's local queue
// or lands here once synced.
export async function rateItem(db: Db, userId: string, itemId: string, grade: Grade) {
  const [row] = await db.query<SrsRow>(
    `select id, item_key, strength, interval_days, due_at, leech_count from srs_items where id = $1 and user_id = $2`,
    [itemId, userId],
  );
  if (!row) throw new NotFoundError(itemId);

  const updated = applySRS({ strength: row.strength, interval: row.interval_days, dueAt: row.due_at }, grade);
  const leechCount = grade === 'again' ? row.leech_count + 1 : 0;
  const suspended = leechCount >= LEECH_THRESHOLD;

  await db.query(
    `update srs_items
     set strength = $1, interval_days = $2, due_at = $3, leech_count = $4, suspended = $5, updated_at = now()
     where id = $6`,
    [updated.strength, updated.interval, updated.dueAt, leechCount, suspended, itemId],
  );

  return { strength: updated.strength, dueAt: updated.dueAt, xp: xpForGrade(grade), suspended };
}

// Fetch-standard adapter — drop into Vercel Edge / Cloudflare Workers / Deno
// / a Node http server almost unchanged. userId is assumed already resolved
// by whatever auth middleware sits in front of this (not implemented here —
// picking an auth provider is a product decision, not a code one).
export async function handleSrsRequest(req: Request, db: Db, userId: string): Promise<Response> {
  const url = new URL(req.url);

  if (req.method === 'GET' && url.pathname === '/api/srs') {
    const kind = url.searchParams.get('kind') as SrsKind | null;
    if (!kind || !KINDS.includes(kind)) return Response.json({ error: 'invalid kind' }, { status: 400 });
    return Response.json(await listDue(db, userId, kind));
  }

  if (req.method === 'GET' && url.pathname === '/api/srs/summary') {
    return Response.json(await dueSummary(db, userId));
  }

  const rateMatch = url.pathname.match(/^\/api\/srs\/([^/]+)\/rate$/);
  if (req.method === 'POST' && rateMatch) {
    const { grade } = (await req.json()) as { grade: Grade };
    try {
      return Response.json(await rateItem(db, userId, rateMatch[1], grade));
    } catch (e) {
      if (e instanceof NotFoundError) return Response.json({ error: 'not found' }, { status: 404 });
      throw e;
    }
  }

  return new Response('Not found', { status: 404 });
}

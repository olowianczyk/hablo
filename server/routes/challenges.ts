import { challengesSeed } from '../../src/data/content';
import type { Db } from '../db/types';

type ChallengeRow = { id: string; challenge_key: string; xp: number; done: boolean };

// GET /api/challenges — today's challenges, auto-assigned from the seed
// list on first touch each day (mirrors content.ts's challengesSeed).
export async function listTodayChallenges(db: Db, userId: string): Promise<ChallengeRow[]> {
  const existing = await db.query<ChallengeRow>(
    `select id, challenge_key, xp, done from challenges where user_id = $1 and assigned_date = current_date`,
    [userId],
  );
  if (existing.length) return existing;

  const rows = await db.query<ChallengeRow>(
    `insert into challenges (user_id, challenge_key, xp)
     select $1, k, x from unnest($2::text[], $3::int[]) as t(k, x)
     returning id, challenge_key, xp, done`,
    [userId, challengesSeed.map((c) => c.id), challengesSeed.map((c) => c.xp)],
  );
  return rows;
}

// POST /api/challenges/:id/toggle
export async function toggleChallenge(db: Db, userId: string, challengeId: string): Promise<ChallengeRow> {
  const [row] = await db.query<ChallengeRow>(
    `update challenges set done = not done where id = $1 and user_id = $2 returning id, challenge_key, xp, done`,
    [challengeId, userId],
  );
  return row;
}

export async function handleChallengesRequest(req: Request, db: Db, userId: string): Promise<Response> {
  const url = new URL(req.url);

  if (req.method === 'GET' && url.pathname === '/api/challenges') {
    return Response.json(await listTodayChallenges(db, userId));
  }
  const toggleMatch = url.pathname.match(/^\/api\/challenges\/([^/]+)\/toggle$/);
  if (req.method === 'POST' && toggleMatch) {
    return Response.json(await toggleChallenge(db, userId, toggleMatch[1]));
  }

  return new Response('Not found', { status: 404 });
}

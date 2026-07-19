import { recordActivity } from '../../src/shared/gamification';
import type { Db } from '../db/types';

type GamificationRow = {
  xp: number;
  xp_boost: boolean;
  streak: number;
  last_active_date: string | null;
  daily_done: number;
  daily_date: string | null;
  streak_freezes: number;
  streak_freeze_active: boolean;
};

// GET /api/gamification
export async function getGamification(db: Db, userId: string): Promise<GamificationRow> {
  const [row] = await db.query<GamificationRow>(`select * from gamification where user_id = $1`, [userId]);
  return row ?? { xp: 0, xp_boost: false, streak: 0, last_active_date: null, daily_done: 0, daily_date: null, streak_freezes: 2, streak_freeze_active: false };
}

// POST /api/gamification/activity  { xpGained }
// Same streak/daily-goal rules as the client (src/shared/gamification.ts) —
// called whenever a rating, review step, or challenge completes server-side.
export async function recordServerActivity(db: Db, userId: string, xpGained: number) {
  const current = await getGamification(db, userId);
  const next = recordActivity({
    streak: current.streak,
    lastActiveDate: current.last_active_date,
    dailyDone: current.daily_done,
    dailyDate: current.daily_date,
    streakFreezeActive: current.streak_freeze_active,
  });
  const xp = current.xp + (current.xp_boost ? xpGained * 2 : xpGained);

  await db.query(
    `insert into gamification (user_id, xp, streak, last_active_date, daily_done, daily_date, streak_freeze_active)
     values ($1, $2, $3, $4, $5, $6, $7)
     on conflict (user_id) do update set
       xp = excluded.xp, streak = excluded.streak, last_active_date = excluded.last_active_date,
       daily_done = excluded.daily_done, daily_date = excluded.daily_date, streak_freeze_active = excluded.streak_freeze_active`,
    [userId, xp, next.streak, next.lastActiveDate, next.dailyDone, next.dailyDate, next.streakFreezeActive],
  );

  return { xp, ...next };
}

// POST /api/gamification/freeze — consume a streak-freeze (mirrors store.ts's useFreeze)
export async function useStreakFreeze(db: Db, userId: string) {
  const current = await getGamification(db, userId);
  if (current.streak_freezes <= 0 || current.streak_freeze_active) return current;
  await db.query(
    `update gamification set streak_freezes = streak_freezes - 1, streak_freeze_active = true where user_id = $1`,
    [userId],
  );
  return { ...current, streak_freezes: current.streak_freezes - 1, streak_freeze_active: true };
}

export async function handleGamificationRequest(req: Request, db: Db, userId: string): Promise<Response> {
  const url = new URL(req.url);

  if (req.method === 'GET' && url.pathname === '/api/gamification') {
    return Response.json(await getGamification(db, userId));
  }
  if (req.method === 'POST' && url.pathname === '/api/gamification/activity') {
    const { xpGained } = (await req.json()) as { xpGained: number };
    return Response.json(await recordServerActivity(db, userId, xpGained));
  }
  if (req.method === 'POST' && url.pathname === '/api/gamification/freeze') {
    return Response.json(await useStreakFreeze(db, userId));
  }

  return new Response('Not found', { status: 404 });
}

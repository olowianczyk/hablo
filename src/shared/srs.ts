import { todayISO, addDays } from '../lib/date.ts';

export type Grade = 'again' | 'hard' | 'good' | 'easy';
export type SrsProgress = { strength: number; interval?: number; dueAt: string };

// ponytail: single source of truth for the scheduling math — imported by
// the client store (src/store.ts) and, once a backend exists, by the
// server route in server/routes/srs.ts. Never duplicate this logic.
// Takes/returns only the scheduling fields (not the whole SrsItem) so a
// DB row — which has no es/en/pl text, just item_key + these three
// columns — can be passed straight in without faking the rest of the shape.
export function applySRS(progress: SrsProgress, grade: Grade): SrsProgress {
  const interval = progress.interval ?? 1;
  if (grade === 'again') {
    return { interval: 1, strength: Math.max(5, progress.strength - 20), dueAt: todayISO() };
  }
  const mult = grade === 'hard' ? 1.2 : grade === 'easy' ? 4 : 2.5;
  const bump = grade === 'hard' ? 6 : grade === 'easy' ? 22 : 15;
  const newInterval = Math.max(1, Math.round(interval * mult));
  return { interval: newInterval, strength: Math.min(100, progress.strength + bump), dueAt: addDays(todayISO(), newInterval) };
}

export function xpForGrade(grade: Grade): number {
  return grade === 'again' ? 5 : grade === 'hard' ? 8 : grade === 'easy' ? 15 : 10;
}

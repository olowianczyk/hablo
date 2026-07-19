import { todayISO, addDays } from '../lib/date';

export const DAILY_GOAL = 5;

export type ActivityState = {
  streak: number;
  lastActiveDate: string | null;
  dailyDone: number;
  dailyDate: string | null;
  streakFreezeActive: boolean;
};

// ponytail: same reasoning as shared/srs.ts — the client store and the
// future server route (server/routes/gamification.ts) both call this so
// "how a streak breaks or survives a freeze" is defined exactly once.
export function recordActivity<T extends ActivityState>(s: T): Pick<T, 'streak' | 'lastActiveDate' | 'dailyDone' | 'dailyDate' | 'streakFreezeActive'> {
  const today = todayISO();
  if (s.lastActiveDate === today) {
    return { streak: s.streak, lastActiveDate: s.lastActiveDate, dailyDone: s.dailyDone + 1, dailyDate: s.dailyDate, streakFreezeActive: s.streakFreezeActive };
  }
  const yesterday = addDays(today, -1);
  const isFirstEver = s.lastActiveDate === null;
  const isConsecutive = s.lastActiveDate === yesterday;
  const savedByFreeze = !isFirstEver && !isConsecutive && s.streakFreezeActive;
  const streak = isFirstEver ? 1 : isConsecutive || savedByFreeze ? s.streak + 1 : 1;
  return {
    streak, lastActiveDate: today, dailyDone: 1, dailyDate: today,
    streakFreezeActive: savedByFreeze ? false : s.streakFreezeActive,
  };
}

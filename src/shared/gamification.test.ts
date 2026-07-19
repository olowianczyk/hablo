import { test } from 'node:test';
import assert from 'node:assert/strict';
import { recordActivity, type ActivityState } from './gamification.ts';
import { todayISO, addDays } from '../lib/date.ts';

const base: ActivityState = { streak: 0, lastActiveDate: null, dailyDone: 0, dailyDate: null, streakFreezeActive: false };

test('first-ever activity starts a 1-day streak', () => {
  const result = recordActivity(base);
  assert.equal(result.streak, 1);
  assert.equal(result.lastActiveDate, todayISO());
  assert.equal(result.dailyDone, 1);
});

test('a second activity the same day bumps dailyDone but not streak', () => {
  const afterFirst = recordActivity(base);
  const afterSecond = recordActivity({ ...base, ...afterFirst });
  assert.equal(afterSecond.streak, 1);
  assert.equal(afterSecond.dailyDone, 2);
});

test('activity on the very next day extends the streak', () => {
  const yesterday = addDays(todayISO(), -1);
  const result = recordActivity({ ...base, streak: 4, lastActiveDate: yesterday });
  assert.equal(result.streak, 5);
  assert.equal(result.dailyDone, 1, 'daily count resets for the new day');
});

test('a gap of 2+ days with no freeze breaks the streak', () => {
  const threeDaysAgo = addDays(todayISO(), -3);
  const result = recordActivity({ ...base, streak: 10, lastActiveDate: threeDaysAgo });
  assert.equal(result.streak, 1);
});

test('a streak freeze bridges a gap instead of breaking it, and gets consumed', () => {
  const threeDaysAgo = addDays(todayISO(), -3);
  const result = recordActivity({ ...base, streak: 10, lastActiveDate: threeDaysAgo, streakFreezeActive: true });
  assert.equal(result.streak, 11, 'streak continues through the frozen gap');
  assert.equal(result.streakFreezeActive, false, 'the freeze is spent, not reusable');
});

test('an unused freeze on a day with no gap is left alone', () => {
  const yesterday = addDays(todayISO(), -1);
  const result = recordActivity({ ...base, streak: 4, lastActiveDate: yesterday, streakFreezeActive: true });
  assert.equal(result.streakFreezeActive, true, 'nothing to save, so nothing consumed');
});

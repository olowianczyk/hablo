import { test } from 'node:test';
import assert from 'node:assert/strict';
import { applySRS, xpForGrade } from './srs.ts';
import { todayISO, addDays } from '../lib/date.ts';

test('again resets interval to 1 and schedules for today', () => {
  const result = applySRS({ strength: 50, interval: 10, dueAt: '2020-01-01' }, 'again');
  assert.equal(result.interval, 1);
  assert.equal(result.dueAt, todayISO());
});

test('again drops strength by 20 but floors at 5', () => {
  assert.equal(applySRS({ strength: 50, interval: 1, dueAt: todayISO() }, 'again').strength, 30);
  assert.equal(applySRS({ strength: 10, interval: 1, dueAt: todayISO() }, 'again').strength, 5);
});

test('hard/good/easy grow the interval and push dueAt out that far', () => {
  const cases: [ 'hard' | 'good' | 'easy', number ][] = [
    ['hard', 1.2],
    ['good', 2.5],
    ['easy', 4],
  ];
  for (const [grade, mult] of cases) {
    const result = applySRS({ strength: 50, interval: 10, dueAt: '2020-01-01' }, grade);
    const expectedInterval = Math.max(1, Math.round(10 * mult));
    assert.equal(result.interval, expectedInterval);
    assert.equal(result.dueAt, addDays(todayISO(), expectedInterval));
  }
});

test('strength never exceeds 100', () => {
  assert.equal(applySRS({ strength: 95, interval: 1, dueAt: todayISO() }, 'easy').strength, 100);
});

test('missing interval defaults to 1 (a brand-new item)', () => {
  const result = applySRS({ strength: 50, dueAt: todayISO() }, 'good');
  assert.equal(result.interval, Math.round(1 * 2.5));
});

test('xpForGrade rewards effort, not just correctness (easy > good > hard > again)', () => {
  assert.equal(xpForGrade('again'), 5);
  assert.equal(xpForGrade('hard'), 8);
  assert.equal(xpForGrade('good'), 10);
  assert.equal(xpForGrade('easy'), 15);
});

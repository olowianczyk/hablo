import { test } from 'node:test';
import assert from 'node:assert/strict';
import { dateKey, todayISO, addDays, isDueToday, daysUntil } from './date.ts';

test('todayISO matches YYYY-MM-DD', () => {
  assert.match(todayISO(), /^\d{4}-\d{2}-\d{2}$/);
});

test('addDays crosses a month boundary', () => {
  assert.equal(addDays('2026-01-30', 3), '2026-02-02');
});

test('addDays crosses a year boundary', () => {
  assert.equal(addDays('2026-12-30', 5), '2027-01-04');
});

test('addDays handles negative offsets (yesterday)', () => {
  assert.equal(addDays('2026-03-01', -1), '2026-02-28');
});

test('addDays(x, 0) is a no-op', () => {
  assert.equal(addDays('2026-06-15', 0), '2026-06-15');
});

test('isDueToday is true for today and any past date', () => {
  assert.equal(isDueToday(todayISO()), true);
  assert.equal(isDueToday('2020-01-01'), true);
});

test('isDueToday is false for a future date', () => {
  assert.equal(isDueToday(addDays(todayISO(), 5)), false);
});

test('daysUntil is 0 for today, negative for the past, positive for the future', () => {
  assert.equal(daysUntil(todayISO()), 0);
  assert.equal(daysUntil(addDays(todayISO(), -3)), -3);
  assert.equal(daysUntil(addDays(todayISO(), 7)), 7);
});

test('dateKey pads single-digit month/day', () => {
  assert.equal(dateKey(new Date(2026, 0, 5)), '2026-01-05');
});

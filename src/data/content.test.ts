import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildersFor, bankFor, pronFor, dictFor } from './content.ts';
import type { Level } from './content.ts';

const LEVELS: Level[] = ['A1', 'A2', 'B1', 'B2'];

test('every level ships a full set of exercises', () => {
  for (const lv of LEVELS) {
    assert.equal(buildersFor(lv).length, 8, lv);
    assert.equal(pronFor(lv).length, 12, lv);
    assert.equal(dictFor(lv).length, 12, lv);
  }
});

test('every exercise carries all three languages', () => {
  for (const lv of LEVELS) {
    for (const s of buildersFor(lv)) {
      assert.ok(s.en && s.pl && s.target.length, lv);
      assert.equal(s.glossary.length, s.target.length, `${lv}: ${s.target.join(' ')}`);
      for (const g of s.glossary) assert.ok(g.es && g.en && g.pl, `${lv}: ${g.es}`);
    }
    for (const p of pronFor(lv)) assert.ok(p.es && p.en && p.pl && p.tipEn && p.tipPl && p.tipEs, `${lv}: ${p.es}`);
    for (const d of dictFor(lv)) assert.ok(d.es && d.en && d.pl, `${lv}: ${d.es}`);
  }
});

test('the word bank holds every block exactly once, never in the answer order', () => {
  for (const lv of LEVELS) {
    buildersFor(lv).forEach((s, i) => {
      const bank = bankFor(lv, i);
      const label = `${lv}#${i} ${s.target.join(' ')}`;
      assert.deepEqual(bank.map((b) => b.id).slice().sort((a, b) => a - b), s.target.map((_, n) => n), label);
      assert.ok(bank.some((b, n) => b.id !== n), `${label} — bank is already solved`);
      for (const b of bank) assert.equal(b.es, s.target[b.id], label);
    });
  }
});

test('bankFor is stable across calls', () => {
  assert.deepEqual(bankFor('B1', 3), bankFor('B1', 3));
});

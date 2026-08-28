import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildersFor, bankFor, pronFor, dictFor, deckFor, phrasebookFor } from './content.ts';
import type { Level, UiLang } from './content.ts';

const LEVELS: Level[] = ['A1', 'A2', 'B1', 'B2'];
const TARGETS: UiLang[] = ['es', 'de'];

test('every level ships a full set of exercises', () => {
  for (const tg of TARGETS) {
    for (const lv of LEVELS) {
      assert.equal(buildersFor(lv, tg).length, 8, `${tg} ${lv}`);
      assert.equal(pronFor(lv, tg).length, 12, `${tg} ${lv}`);
      assert.equal(dictFor(lv).length, 12, lv);
    }
  }
});

test('targets without their own sets fall back to the Spanish ones', () => {
  assert.deepEqual(buildersFor('A1', 'pl'), buildersFor('A1', 'es'));
  assert.deepEqual(pronFor('B2', 'en'), pronFor('B2', 'es'));
});

test('every exercise carries all four languages', () => {
  for (const tg of TARGETS) {
    for (const lv of LEVELS) {
      for (const s of buildersFor(lv, tg)) {
        assert.ok(s.en && s.pl && s.target.length, `${tg} ${lv}`);
        assert.equal(s.glossary.length, s.target.length, `${tg} ${lv}: ${s.target.join(' ')}`);
        for (const g of s.glossary) assert.ok(g.es && g.en && g.pl, `${tg} ${lv}: ${g.es}`);
      }
      for (const p of pronFor(lv, tg)) assert.ok(p.es && p.en && p.pl && p.tipEn && p.tipPl && p.tipEs, `${tg} ${lv}: ${p.es}`);
      for (const d of dictFor(lv)) assert.ok(d.es && d.en && d.pl && d.de, `${lv}: ${d.es}`);
    }
  }
});

test('the German sets are really German, not the Spanish ones relabelled', () => {
  for (const lv of LEVELS) {
    for (const s of buildersFor(lv, 'de')) {
      assert.equal(s.de, s.target.join(' '), `${lv}: ${s.target.join(' ')}`);
      for (const g of s.glossary) assert.ok(g.de, `${lv}: missing de gloss in "${s.de}"`);
    }
    for (const p of pronFor(lv, 'de')) {
      assert.ok(p.de && p.tipDe, `${lv}: ${p.en}`);
      assert.equal(p.syl.join('').length > 0, true, `${lv}: ${p.de}`);
    }
  }
});

test('the word bank holds every block exactly once, never in the answer order', () => {
  for (const tg of TARGETS) {
    for (const lv of LEVELS) {
      buildersFor(lv, tg).forEach((s, i) => {
        const bank = bankFor(lv, i, tg);
        const label = `${tg} ${lv}#${i} ${s.target.join(' ')}`;
        assert.deepEqual(bank.map((b) => b.id).slice().sort((a, b) => a - b), s.target.map((_, n) => n), label);
        assert.ok(bank.some((b, n) => b.id !== n), `${label} — bank is already solved`);
        for (const b of bank) assert.equal(b.w, s.target[b.id], label);
      });
    }
  }
});

test('bankFor is stable across calls', () => {
  assert.deepEqual(bankFor('B1', 3), bankFor('B1', 3));
  assert.deepEqual(bankFor('B1', 3, 'de'), bankFor('B1', 3, 'de'));
});

// German is both a study target and a base language, so nothing authored here may
// fall back to English when the interface runs in German.
test('every authored item carries German', () => {
  for (const lv of LEVELS) {
    for (const w of deckFor(lv)) assert.ok(w.de && w.exDe, `deck ${lv} ${w.es}`);
    for (const c of phrasebookFor(lv)) {
      assert.ok(c.titleDe, `phrasebook ${lv} ${c.titleEn}`);
      for (const p of c.phrases) assert.ok(p.de, `phrase ${lv} ${p.es}`);
    }
    for (const p of dictFor(lv)) assert.ok(p.de, `dict ${lv} ${p.es}`);
    for (const tg of TARGETS) {
      for (const s of buildersFor(lv, tg)) {
        assert.ok(s.de, `builder ${tg} ${lv} ${s.en}`);
        for (const g of s.glossary) assert.ok(g.de, `gloss ${tg} ${lv} ${g.es}`);
      }
      for (const p of pronFor(lv, tg)) assert.ok(p.de && p.tipDe, `pron ${tg} ${lv} ${p.es}`);
    }
  }
});

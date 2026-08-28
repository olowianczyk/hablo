import { test } from 'node:test';
import assert from 'node:assert/strict';

const LEVELS = ['a1', 'a2', 'b1', 'b2'] as const;

// The German corpus is merged into the Spanish one by index, so a length or shape
// mismatch would silently pair a German word with the wrong entry.
test('German word files line up with their Spanish counterparts', async () => {
  for (const lv of LEVELS) {
    const key = lv.toUpperCase();
    const src: any = await import(`./words.${lv}.js`);
    const de: any = await import(`./words.de.${lv}.js`);
    const rows = src[`${key}WORDS`];
    const words = de[`${key}WORDS_DE`];
    assert.equal(words.length, rows.length, lv);
    for (const [i, w] of words.entries()) assert.ok(w && w.trim(), `${lv}#${i} is blank`);
  }
});

test('German phrase files line up category by category', async () => {
  for (const lv of LEVELS) {
    const key = lv.toUpperCase();
    const src: any = await import(`./phrases.${lv}.js`);
    const de: any = await import(`./phrases.de.${lv}.js`);
    const cats = src[`${key}PHRASES`];
    const deCats = de[`${key}PHRASES_DE`];
    assert.equal(deCats.length, cats.length, lv);
    cats.forEach((c: any, ci: number) => {
      assert.ok(deCats[ci].titleDe, `${lv} category ${ci} has no German title`);
      assert.equal(deCats[ci].phrases.length, c.phrases.length, `${lv} category ${ci}`);
      for (const [i, p] of deCats[ci].phrases.entries()) assert.ok(p && p.trim(), `${lv}.${ci}#${i} is blank`);
    });
  }
});

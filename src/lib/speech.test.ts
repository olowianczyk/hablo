import { test } from 'node:test';
import assert from 'node:assert/strict';
import { pickVoice, normalizeSpeech, similarity, scoreSpeech, syllabify, type VoiceLike } from './speech.ts';

const v = (name: string, lang: string, localService = true): VoiceLike => ({ name, lang, voiceURI: name, localService });

test('pickVoice prefers a neural voice over the robotic default', () => {
  const voices = [v('eSpeak Spanish', 'es-ES'), v('Google español', 'es-ES', false)];
  assert.equal(pickVoice(voices, 'es-ES')?.name, 'Google español');
});

test('pickVoice keeps an explicit user choice even if ranked lower', () => {
  const voices = [v('eSpeak Spanish', 'es-ES'), v('Google español', 'es-ES', false)];
  assert.equal(pickVoice(voices, 'es-ES', 'eSpeak Spanish')?.name, 'eSpeak Spanish');
});

test('pickVoice falls back to the language prefix, and gives up when nothing matches', () => {
  assert.equal(pickVoice([v('Polski', 'pl-PL'), v('Mexicano', 'es-MX')], 'es-ES')?.name, 'Mexicano');
  assert.equal(pickVoice([v('Polski', 'pl-PL')], 'es-ES'), undefined);
});

test('normalizeSpeech strips accents, case and punctuation', () => {
  assert.equal(normalizeSpeech('  ¿Cómo   estás? '), 'como estas');
});

test('similarity is accent-insensitive and drops with real errors', () => {
  assert.equal(similarity('gracias', 'Grácias'), 100);
  assert.ok(similarity('gracias', 'gracia') > 80);
  assert.ok(similarity('gracias', 'perro') < 40);
  assert.equal(similarity('gracias', ''), 0);
});

test('scoreSpeech scores every sentence word against what was heard', () => {
  const good = scoreSpeech(['buenos', 'días'], 'buenos dias', 'sentence');
  assert.deepEqual(good.map((k) => k.num), [100, 100]);
  const partial = scoreSpeech(['buenos', 'días'], 'buenos perro', 'sentence');
  assert.equal(partial[0].num, 100);
  assert.ok(partial[1].num < 50);
});

test('scoreSpeech reports zero when recognition returned nothing', () => {
  const none = scoreSpeech(['gra', 'cias'], null, 'word');
  assert.deepEqual(none.map((k) => k.num), [0, 0]);
  assert.equal(none[0].color, 'var(--accent-strong)');
});

test('scoreSpeech word mode rewards a matching transcript', () => {
  const syl = syllabify('gracias');
  const hit = scoreSpeech(syl, 'gracias', 'word');
  assert.ok(hit.every((k) => k.num > 60), JSON.stringify(hit));
  const miss = scoreSpeech(syl, 'perro', 'word');
  assert.ok(miss.reduce((a, k) => a + k.num, 0) < hit.reduce((a, k) => a + k.num, 0));
});

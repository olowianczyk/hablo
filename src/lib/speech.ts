export type VoiceLike = { name: string; lang: string; voiceURI: string; localService: boolean };

// Robotic formant synths that ship as the default on many Linux/Android builds.
const POOR_VOICE = /espeak|festival|flite|pico|mbrola|robo|compact|klatt/i;
// Neural / concatenative engines that actually sound human.
const GOOD_VOICE = /google|neural|natural|premium|enhanced|wavenet|siri|microsoft|nuance|vocalizer/i;

/** Rank installed voices so the default is the best-sounding match, not the first one. */
export function pickVoice<V extends VoiceLike>(voices: V[], lang: string, voiceURI?: string): V | undefined {
  if (voiceURI) {
    const chosen = voices.find((v) => v.voiceURI === voiceURI);
    if (chosen) return chosen;
  }
  const want = lang.toLowerCase().replace('_', '-');
  const prefix = want.slice(0, 2);
  const cand = voices.filter((v) => v.lang && v.lang.toLowerCase().replace('_', '-').startsWith(prefix));
  if (!cand.length) return undefined;
  const score = (v: V) => {
    let s = 0;
    if (v.lang.toLowerCase().replace('_', '-') === want) s += 4;
    if (GOOD_VOICE.test(v.name)) s += 8;
    if (POOR_VOICE.test(v.name)) s -= 12;
    if (!v.localService) s += 3;
    return s;
  };
  return cand.slice().sort((a, b) => score(b) - score(a))[0];
}

export function say(text: string, lang: string, rate: number, voiceURI?: string) {
  try {
    const synth = window.speechSynthesis;
    if (!synth) return;
    synth.cancel();
    let spoken = false;
    const go = () => {
      if (spoken) return;
      spoken = true;
      const u = new SpeechSynthesisUtterance(text);
      u.lang = lang;
      u.rate = rate;
      u.pitch = 1;
      const v = pickVoice(synth.getVoices() || [], lang, voiceURI);
      if (v) u.voice = v;
      synth.speak(u);
    };
    if ((synth.getVoices() || []).length) {
      // ponytail: Chrome swallows speak() fired in the same tick as cancel().
      setTimeout(go, 60);
      return;
    }
    // Voice list loads async on first use. Never assign synth.onvoiceschanged — Header owns that slot.
    synth.addEventListener('voiceschanged', go, { once: true });
    setTimeout(go, 1000); // ponytail: Safari sometimes never fires voiceschanged
  } catch {
    /* speechSynthesis unsupported */
  }
}

export function langCode(target: 'es' | 'en' | 'pl' | 'de'): string {
  return { es: 'es-ES', en: 'en-US', pl: 'pl-PL', de: 'de-DE' }[target];
}

export type RecError = 'unsupported' | 'not-allowed' | 'no-speech' | 'error' | null;
export type RecognitionResult = { transcript: string | null; error: RecError };

function getSpeechRecognition(): (new () => any) | undefined {
  return (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
}

/** Chrome (and Chromium derivatives) are the only engines shipping SpeechRecognition today. */
export function isRecognitionSupported(): boolean {
  return typeof window !== 'undefined' && !!getSpeechRecognition();
}

export function recognizeOnce(lang: string, onDone: (r: RecognitionResult) => void) {
  const SR = getSpeechRecognition();
  if (!SR) {
    onDone({ transcript: null, error: 'unsupported' });
    return;
  }
  let r: any;
  try {
    r = new SR();
  } catch {
    onDone({ transcript: null, error: 'unsupported' });
    return;
  }
  r.lang = lang;
  r.interimResults = false;
  r.maxAlternatives = 1;
  r.continuous = false;

  let done = false;
  let hard: ReturnType<typeof setTimeout>;
  const finish = (transcript: string | null, error: RecError) => {
    if (done) return;
    done = true;
    clearTimeout(hard);
    try {
      r.abort();
    } catch {
      /* already stopped */
    }
    onDone({ transcript, error });
  };

  r.onresult = (e: any) => finish(e.results[0][0].transcript, null);
  r.onerror = (e: any) => {
    const kind = e && e.error;
    finish(null, kind === 'not-allowed' || kind === 'service-not-allowed' ? 'not-allowed' : kind === 'no-speech' ? 'no-speech' : 'error');
  };
  r.onend = () => finish(null, 'no-speech');
  hard = setTimeout(() => finish(null, 'no-speech'), 8000);

  try {
    r.start();
  } catch {
    finish(null, 'error');
  }
}

export function syllabify(word: string): string[] {
  const v = 'aeiouáéíóúü';
  const out: string[] = [];
  let cur = '';
  for (let i = 0; i < word.length; i++) {
    const ch = word[i];
    cur += ch;
    const n = (word[i + 1] || '').toLowerCase();
    const n2 = (word[i + 2] || '').toLowerCase();
    if (v.includes(ch.toLowerCase()) && n && !v.includes(n) && v.includes(n2)) {
      out.push(cur);
      cur = '';
    }
  }
  if (cur) out.push(cur);
  return out.length ? out : [word];
}

/** Lowercase, strip accents and punctuation — speech engines are inconsistent about both. */
export function normalizeSpeech(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^\p{L}\p{N}\s]/gu, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function lev(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const row = [i];
    for (let j = 1; j <= b.length; j++) {
      row[j] = Math.min(prev[j] + 1, row[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = row;
  }
  return prev[b.length];
}

/** 0..100 similarity of two spoken strings after normalization. */
export function similarity(a: string, b: string): number {
  const x = normalizeSpeech(a);
  const y = normalizeSpeech(b);
  if (!x && !y) return 100;
  if (!x || !y) return 0;
  return Math.round(100 * (1 - lev(x, y) / Math.max(x.length, y.length)));
}

export type ScoredToken = { t: string; num: number; pct: string; width: string; color: string };

function mk(t: string, num: number): ScoredToken {
  const pct = Math.max(0, Math.min(100, Math.round(num)));
  const color = pct >= 85 ? 'var(--good)' : pct >= 70 ? 'var(--warn)' : 'var(--accent-strong)';
  return { t, num: pct, pct: pct + '%', width: pct + '%', color };
}

/**
 * Score each target token against what the recognizer actually returned.
 * `tokens` are words in sentence mode, syllables in word mode.
 */
export function scoreSpeech(tokens: string[], heard: string | null, mode: 'word' | 'sentence'): ScoredToken[] {
  if (!tokens.length) return [];
  if (heard === null) return tokens.map((t) => mk(t, 0));

  if (mode === 'sentence') {
    const words = normalizeSpeech(heard).split(' ').filter(Boolean);
    return tokens.map((t, i) => {
      // ponytail: ±1 index window instead of full DP alignment; upgrade if drift becomes visible
      const win = words.slice(Math.max(0, i - 1), i + 2);
      return mk(t, win.length ? Math.max(...win.map((w) => similarity(t, w))) : 0);
    });
  }

  const h = normalizeSpeech(heard);
  const norm = tokens.map(normalizeSpeech);
  const total = norm.reduce((a, s) => a + s.length, 0) || 1;
  let pos = 0;
  return tokens.map((t, i) => {
    const start = Math.round((pos / total) * h.length);
    pos += norm[i].length;
    const end = Math.round((pos / total) * h.length);
    // ponytail: proportional slice — a transcript carries no per-syllable timing
    return mk(t, similarity(norm[i], h.slice(start, end)));
  });
}

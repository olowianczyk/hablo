export function say(text: string, lang: string, rate: number, voiceURI?: string) {
  try {
    const synth = window.speechSynthesis;
    if (!synth) return;
    synth.cancel();
    const go = () => {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = lang;
      u.rate = rate;
      const vs = synth.getVoices() || [];
      const pre = lang.slice(0, 2).toLowerCase();
      let v = voiceURI ? vs.find((x) => x.voiceURI === voiceURI) : undefined;
      if (!v) v = vs.find((x) => x.lang && x.lang.toLowerCase().replace('_', '-') === lang.toLowerCase()) || vs.find((x) => x.lang && x.lang.toLowerCase().startsWith(pre));
      if (v) u.voice = v;
      synth.speak(u);
    };
    setTimeout(go, 90);
  } catch {
    /* speechSynthesis unsupported */
  }
}

export function langCode(target: 'es' | 'en' | 'pl'): string {
  return { es: 'es-ES', en: 'en-US', pl: 'pl-PL' }[target];
}

type RecognitionResult = { transcript: string | null };

function getSpeechRecognition(): (new () => any) | undefined {
  return (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
}

export function recognizeOnce(lang: string, onDone: (r: RecognitionResult) => void) {
  const SR = getSpeechRecognition();
  if (SR) {
    try {
      const r = new SR();
      r.lang = lang;
      r.interimResults = false;
      r.maxAlternatives = 1;
      let finished = false;
      const finish = (transcript: string | null) => {
        if (finished) return;
        finished = true;
        onDone({ transcript });
      };
      r.onresult = (e: any) => finish(e.results[0][0].transcript);
      r.onerror = () => finish(null);
      r.start();
      setTimeout(() => {
        try {
          r.stop();
        } catch {
          /* already stopped */
        }
      }, 5000);
      setTimeout(() => finish(null), 6500);
      return;
    } catch {
      /* fall through to mock */
    }
  }
  setTimeout(() => onDone({ transcript: null }), 1800);
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

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

export type ScoredToken = { t: string; num: number; pct: string; width: string; color: string };

export function scoreTokens(text: string, mode: 'word' | 'sentence'): ScoredToken[] {
  const tokens = mode === 'sentence' ? text.split(/\s+/) : syllabify(text);
  return tokens.map((tk) => {
    const pct = 82 + (hash(tk) % 16);
    const color = pct >= 85 ? 'var(--good)' : pct >= 70 ? 'var(--warn)' : 'var(--accent-strong)';
    return { t: tk, num: pct, pct: pct + '%', width: pct + '%', color };
  });
}

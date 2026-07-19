import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  type Level, type Challenge, type SrsItem, type Word, type PhraseCategory,
  challengesSeed, srsSeed, srsPhrasesSeed, srsPronSeed, srsDictSeed, srsBuilderSeed,
  deckFor, pronFor, dictFor,
} from './data/content';
import { fld } from './lib/format';
import { say, langCode, recognizeOnce, scoreTokens, syllabify, type ScoredToken } from './lib/speech';

export type Screen = 'home' | 'levels' | 'vocab' | 'phrasebook' | 'listen' | 'builder' | 'pronounce' | 'srs' | 'stats';
export type Direction = 'es>en' | 'es>pl' | 'en>es' | 'en>pl' | 'pl>es' | 'pl>en';
export type Grade = 'again' | 'hard' | 'good' | 'easy';
export type ReviewKind = 'vocab' | 'phrasebook' | 'pronounce' | 'listen' | 'builder';
export type Rec2 = {
  ctx: 'vocab' | 'builder';
  target: string;
  active: boolean;
  done: boolean;
  score?: number;
  tokens?: ScoredToken[];
  heard?: string;
  tip?: string;
};

interface HabloState {
  screen: Screen;
  level: Level;
  dir: Direction;
  dark: boolean;
  accent: string;
  speakRate: number;
  voiceSel: Record<string, string>;

  xp: number;
  xpBoost: boolean;
  streakFreezes: number;
  streakFreezeActive: boolean;
  challenges: Challenge[];
  streak: number;
  lastActiveDate: string | null;
  dailyDone: number;
  dailyDate: string | null;

  vIdx: number;
  vFlip: boolean;

  slots: number[];
  builderChecked: boolean;

  dIdx: number;
  dInput: string;
  dChecked: boolean;

  pWord: number;
  recording: boolean;
  recDone: boolean;
  recScore: number;
  syllables: { text: string; pct: string; width: string; color: string }[];
  heard: string;
  metrics: { key: string; v: number }[];
  tip: string;
  rec2: Rec2 | null;

  reviewQueue: { kind: ReviewKind; item: SrsItem }[];
  reviewPos: number;
  reviewDone: boolean;

  srs: SrsItem[];
  srsPhrases: SrsItem[];
  srsPron: SrsItem[];
  srsDict: SrsItem[];
  srsBuilder: SrsItem[];

  extraWords: Partial<Record<Level, Word[]>>;
  extraPhrases: Partial<Record<Level, PhraseCategory[]>>;

  showInstall: boolean;

  go: (s: Screen) => void;
  pickLevel: (lv: Level) => void;
  setLevel: (lv: Level) => void;
  flip: () => void;
  rate: (g: Grade) => void;

  addSlot: (id: number) => void;
  removeSlot: (id: number) => void;
  clearSlots: () => void;
  checkBuilder: () => void;

  dictType: (v: string) => void;
  dictCheck: () => void;
  dictReveal: () => void;
  dictNext: () => void;
  dictReplay: () => void;
  dictSlow: () => void;

  selectWord: (i: number) => void;
  startRec: () => void;
  startRec2: (text: string, mode: 'word' | 'sentence', ctx: 'vocab' | 'builder') => void;

  toggleDark: () => void;
  setAccent: (hex: string) => void;
  setDir: (d: Direction) => void;
  setVoice: (targetLang: string, uri: string) => void;
  setSpeedRate: (r: number) => void;

  useFreeze: () => void;
  toggleBoost: () => void;
  toggleChallenge: (id: string) => void;
  gainXp: (base: number) => void;

  startReview: () => void;
  reviewNext: (grade?: Grade) => void;
  exitReview: () => void;

  loadExtraWords: (lv: Level, words: Word[]) => void;
  loadExtraPhrases: (lv: Level, cats: PhraseCategory[]) => void;
  setShowInstall: (v: boolean) => void;

  speak: (text: string, code?: string) => void;
  speakSlow: (text: string, code?: string) => void;
}

function targetOf(dir: Direction): 'es' | 'en' | 'pl' {
  return dir.split('>')[0] as 'es' | 'en' | 'pl';
}

export const DAILY_GOAL = 5;

function dateKey(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
function todayKey(): string {
  return dateKey(new Date());
}
function yesterdayKey(today: string): string {
  const [y, m, d] = today.split('-').map(Number);
  return dateKey(new Date(y, m - 1, d - 1));
}

function applySRS(item: SrsItem, grade: Grade): SrsItem {
  const interval = item.interval ?? 1;
  if (grade === 'again') {
    return { ...item, interval: 1, today: true, strength: Math.max(5, item.strength - 20), dueEn: 'Today', duePl: 'Dzisiaj' };
  }
  const mult = grade === 'hard' ? 1.2 : grade === 'easy' ? 4 : 2.5;
  const bump = grade === 'hard' ? 6 : grade === 'easy' ? 22 : 15;
  const newInterval = Math.max(1, Math.round(interval * mult));
  const dueEn = newInterval === 1 ? 'Tomorrow' : 'in ' + newInterval + ' days';
  const duePl = newInterval === 1 ? 'Jutro' : 'za ' + newInterval + ' dni';
  return { ...item, interval: newInterval, strength: Math.min(100, item.strength + bump), today: false, dueEn, duePl };
}

function replaceInList(list: SrsItem[], es: string, grade: Grade): SrsItem[] {
  return list.map((it) => (it.es === es ? applySRS(it, grade) : it));
}

export const useHablo = create<HabloState>()(
  persist(
    (set, get) => ({
      screen: 'home', level: 'A1', dir: 'es>en', dark: false, accent: '#DE5B3B', speakRate: 1, voiceSel: {},

      xp: 240, xpBoost: false, streakFreezes: 2, streakFreezeActive: false, challenges: challengesSeed,
      streak: 0, lastActiveDate: null, dailyDone: 0, dailyDate: null,

      vIdx: 0, vFlip: false,
      slots: [], builderChecked: false,
      dIdx: 0, dInput: '', dChecked: false,
      pWord: 0, recording: false, recDone: false, recScore: 0, syllables: [], heard: '', metrics: [], tip: '', rec2: null,

      reviewQueue: [], reviewPos: 0, reviewDone: false,

      srs: srsSeed, srsPhrases: srsPhrasesSeed, srsPron: srsPronSeed, srsDict: srsDictSeed, srsBuilder: srsBuilderSeed,

      extraWords: {}, extraPhrases: {},
      showInstall: false,

      go: (screen) => set({ screen }),
      pickLevel: (level) => set({ level, vIdx: 0, vFlip: false, slots: [], builderChecked: false, pWord: 0, recording: false, recDone: false, rec2: null, dIdx: 0, dInput: '', dChecked: false }),
      setLevel: (level) => set({ level, screen: 'vocab', vIdx: 0, vFlip: false, slots: [], builderChecked: false, pWord: 0, recording: false, recDone: false, rec2: null, dIdx: 0, dInput: '', dChecked: false }),
      flip: () => set((s) => ({ vFlip: !s.vFlip })),

      rate: (grade) => {
        const s = get();
        const target = targetOf(s.dir);
        const deckA = deckFor(s.level, s.extraWords[s.level]);
        const c = deckA[Math.min(s.vIdx, deckA.length - 1)];
        const xpGain = grade === 'again' ? 5 : grade === 'hard' ? 8 : grade === 'easy' ? 15 : 10;
        set({ srs: c ? replaceInList(s.srs, fld(c, 'es'), grade) : s.srs });
        get().gainXp(xpGain);
        if (get().reviewQueue.length) {
          get().reviewNext(grade);
          return;
        }
        const len = deckA.length;
        set((st) => ({ vIdx: (st.vIdx + 1) % len, vFlip: false, rec2: null }));
        void target;
      },

      addSlot: (id) => set((s) => (s.slots.includes(id) ? s : { slots: [...s.slots, id], builderChecked: false, rec2: null })),
      removeSlot: (id) => set((s) => ({ slots: s.slots.filter((x) => x !== id), builderChecked: false, rec2: null })),
      clearSlots: () => set({ slots: [], builderChecked: false, rec2: null }),
      checkBuilder: () => set({ builderChecked: true }),

      dictType: (v) => set({ dInput: v }),
      dictCheck: () => set({ dChecked: true }),
      dictReveal: () => {
        const s = get();
        const target = targetOf(s.dir);
        const dict = dictFor(s.level);
        const di = dict[Math.min(s.dIdx, dict.length - 1)];
        set({ dChecked: true, dInput: fld(di, target) });
      },
      dictNext: () => {
        const dict = dictFor(get().level);
        set((s) => ({ dIdx: (s.dIdx + 1) % dict.length, dInput: '', dChecked: false }));
      },
      dictReplay: () => {
        const s = get();
        const target = targetOf(s.dir);
        const dict = dictFor(s.level);
        const di = dict[Math.min(s.dIdx, dict.length - 1)];
        get().speak(fld(di, target));
      },
      dictSlow: () => {
        const s = get();
        const target = targetOf(s.dir);
        const dict = dictFor(s.level);
        const di = dict[Math.min(s.dIdx, dict.length - 1)];
        get().speakSlow(fld(di, target));
      },

      selectWord: (i) => set({ pWord: i, recording: false, recDone: false }),
      startRec: () => {
        set({ recording: true, recDone: false });
        const s = get();
        const list = pronFor(s.level);
        const p = list[Math.min(s.pWord, list.length - 1)];
        recognizeOnce('es-ES', ({ transcript }) => {
          if (!get().recording) return;
          const syl = p.syl.map((tx, i) => {
            const pct = p.scores[i];
            const color = pct >= 85 ? 'var(--good)' : pct >= 70 ? 'var(--warn)' : 'var(--accent-strong)';
            return { text: tx, pct: pct + '%', width: pct + '%', color };
          });
          const score = Math.round(p.scores.reduce((a, b) => a + b, 0) / p.scores.length);
          const clamp = (n: number) => Math.max(55, Math.min(100, Math.round(n)));
          const metrics = [
            { key: 'accuracy', v: score },
            { key: 'fluency', v: clamp(score - 4) },
            { key: 'completeness', v: 96 },
            { key: 'intonation', v: clamp(score - 2) },
          ];
          const base = s.dir.split('>')[1];
          const tip = base === 'pl' ? p.tipPl : p.tipEn;
          set({ recording: false, recDone: true, recScore: score, syllables: syl, heard: transcript || p.es, metrics, tip });
        });
      },
      startRec2: (text, mode, ctx) => {
        set({ rec2: { ctx, target: text, active: true, done: false } });
        recognizeOnce('es-ES', ({ transcript }) => {
          const cur = get().rec2;
          if (!cur || cur.target !== text || !cur.active) return;
          const toks = scoreTokens(text, mode);
          const score = Math.round(toks.reduce((a, b) => a + b.num, 0) / toks.length);
          let wi = 0;
          toks.forEach((x, i) => {
            if (x.num < toks[wi].num) wi = i;
          });
          const tip = `Focus on "${toks[wi].t}" — slow down and match the model audio.`;
          set({ rec2: { ctx, target: text, active: false, done: true, score, tokens: toks, heard: transcript || text, tip } });
        });
        void syllabify;
      },

      toggleDark: () => set((s) => ({ dark: !s.dark })),
      setAccent: (accent) => set({ accent }),
      setDir: (dir) => set({ dir }),
      setVoice: (targetLang, uri) => set((s) => ({ voiceSel: { ...s.voiceSel, [targetLang]: uri } })),
      setSpeedRate: (speakRate) => set({ speakRate }),

      useFreeze: () => set((s) => (s.streakFreezes > 0 && !s.streakFreezeActive ? { streakFreezes: s.streakFreezes - 1, streakFreezeActive: true } : s)),
      toggleBoost: () => set((s) => ({ xpBoost: !s.xpBoost })),
      toggleChallenge: (id) =>
        set((s) => {
          const item = s.challenges.find((c) => c.id === id);
          if (!item) return s;
          const willBeDone = !item.done;
          const delta = (willBeDone ? item.xp : -item.xp) * (s.xpBoost ? 2 : 1);
          return {
            challenges: s.challenges.map((c) => (c.id === id ? { ...c, done: willBeDone } : c)),
            xp: Math.max(0, s.xp + delta),
          };
        }),
      gainXp: (base) =>
        set((s) => {
          const today = todayKey();
          const xp = s.xp + (s.xpBoost ? base * 2 : base);
          if (s.lastActiveDate === today) return { xp, dailyDone: s.dailyDone + 1 };
          const isFirstEver = s.lastActiveDate === null;
          const isConsecutive = s.lastActiveDate === yesterdayKey(today);
          const savedByFreeze = !isFirstEver && !isConsecutive && s.streakFreezeActive;
          const streak = isFirstEver ? 1 : isConsecutive || savedByFreeze ? s.streak + 1 : 1;
          return {
            xp, streak, lastActiveDate: today, dailyDone: 1, dailyDate: today,
            streakFreezeActive: savedByFreeze ? false : s.streakFreezeActive,
          };
        }),

      startReview: () => {
        const s = get();
        const items: { kind: ReviewKind; item: SrsItem }[] = [];
        s.srs.forEach((it) => it.today && items.push({ kind: 'vocab', item: it }));
        s.srsPhrases.forEach((it) => it.today && items.push({ kind: 'phrasebook', item: it }));
        s.srsPron.forEach((it) => it.today && items.push({ kind: 'pronounce', item: it }));
        s.srsDict.forEach((it) => it.today && items.push({ kind: 'listen', item: it }));
        s.srsBuilder.forEach((it) => it.today && items.push({ kind: 'builder', item: it }));
        if (!items.length) return;
        set({ reviewQueue: items, reviewPos: 0, screen: items[0].kind, reviewDone: false });
      },
      reviewNext: (grade = 'good') => {
        const s = get();
        const q = s.reviewQueue;
        const pos = s.reviewPos;
        if (pos < q.length) {
          const { kind, item } = q[pos];
          const listKey = ({ vocab: 'srs', phrasebook: 'srsPhrases', pronounce: 'srsPron', listen: 'srsDict', builder: 'srsBuilder' } as const)[kind];
          set({ [listKey]: replaceInList(s[listKey], item.es, grade) } as Partial<HabloState>);
          get().gainXp(10);
        }
        const next = pos + 1;
        if (next < q.length) {
          set({ reviewPos: next, screen: q[next].kind });
        } else {
          set({ reviewQueue: [], reviewPos: 0, screen: 'srs', reviewDone: true });
          setTimeout(() => set({ reviewDone: false }), 3500);
        }
      },
      exitReview: () => set({ reviewQueue: [], reviewPos: 0 }),

      loadExtraWords: (lv, words) => set((s) => ({ extraWords: { ...s.extraWords, [lv]: words } })),
      loadExtraPhrases: (lv, cats) => set((s) => ({ extraPhrases: { ...s.extraPhrases, [lv]: cats } })),
      setShowInstall: (v) => set({ showInstall: v }),

      speak: (text, code) => {
        const s = get();
        const target = targetOf(s.dir);
        const lang = code || langCode(target);
        say(text, lang, 0.9 * s.speakRate, s.voiceSel[target]);
      },
      speakSlow: (text, code) => {
        const s = get();
        const target = targetOf(s.dir);
        const lang = code || langCode(target);
        say(text, lang, 0.55, s.voiceSel[target]);
      },
    }),
    {
      name: 'hablo-storage',
      partialize: (s) => ({
        level: s.level, dir: s.dir, dark: s.dark, accent: s.accent, speakRate: s.speakRate, voiceSel: s.voiceSel,
        xp: s.xp, xpBoost: s.xpBoost, streakFreezes: s.streakFreezes, streakFreezeActive: s.streakFreezeActive, challenges: s.challenges,
        streak: s.streak, lastActiveDate: s.lastActiveDate, dailyDone: s.dailyDone, dailyDate: s.dailyDate,
        srs: s.srs, srsPhrases: s.srsPhrases, srsPron: s.srsPron, srsDict: s.srsDict, srsBuilder: s.srsBuilder,
      }),
    },
  ),
);

export function displayStreak(s: HabloState): number {
  if (!s.lastActiveDate) return 0;
  const today = todayKey();
  if (s.lastActiveDate === today || s.lastActiveDate === yesterdayKey(today)) return s.streak;
  return s.streakFreezeActive ? s.streak : 0;
}

export function displayDailyDone(s: HabloState): number {
  return s.dailyDate === todayKey() ? Math.min(s.dailyDone, DAILY_GOAL) : 0;
}

export { targetOf };

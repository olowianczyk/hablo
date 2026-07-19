import { useEffect, useState } from 'react';
import { useHablo, displayStreak, displayDailyDone, DAILY_GOAL, type Screen, type Direction } from '../store';
import { useUi } from '../lib/useUi';
import { accentSwatches } from '../data/content';
import { IconSun, IconMoon } from './Icons';

const PAGE_TITLE_KEY: Record<Screen, keyof ReturnType<typeof useUi>['t']> = {
  home: 'home', levels: 'levels', vocab: 'vocab', phrasebook: 'phrases',
  listen: 'dictNav', builder: 'builder', pronounce: 'pronounce', srs: 'review', stats: 'statsNav',
};

const DIR_OPTIONS: { value: Direction; label: string }[] = [
  { value: 'es>en', label: 'Learn Spanish · from English' },
  { value: 'es>pl', label: 'Ucz się hiszpańskiego · po polsku' },
  { value: 'en>es', label: 'Aprende inglés · desde español' },
  { value: 'en>pl', label: 'Ucz się angielskiego · po polsku' },
  { value: 'pl>es', label: 'Aprende polaco · desde español' },
  { value: 'pl>en', label: 'Learn Polish · from English' },
];

const SPEED_OPTIONS = [
  { label: '1×', v: 1 },
  { label: '¾', v: 0.75 },
  { label: '½', v: 0.5 },
  { label: '¼', v: 0.25 },
];

const CIRC = 100.53;

function useVoices() {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  useEffect(() => {
    const synth = window.speechSynthesis;
    if (!synth) return;
    const update = () => setVoices(synth.getVoices());
    update();
    synth.onvoiceschanged = update;
    return () => {
      synth.onvoiceschanged = null;
    };
  }, []);
  return voices;
}

export function Header() {
  const { t, target } = useUi();
  const screen = useHablo((s) => s.screen);
  const dir = useHablo((s) => s.dir);
  const setDir = useHablo((s) => s.setDir);
  const speakRate = useHablo((s) => s.speakRate);
  const setSpeedRate = useHablo((s) => s.setSpeedRate);
  const voiceSel = useHablo((s) => s.voiceSel);
  const setVoice = useHablo((s) => s.setVoice);
  const dark = useHablo((s) => s.dark);
  const toggleDark = useHablo((s) => s.toggleDark);
  const accent = useHablo((s) => s.accent);
  const setAccent = useHablo((s) => s.setAccent);
  const xp = useHablo((s) => s.xp);
  const streak = useHablo(displayStreak);
  const dailyDone = useHablo(displayDailyDone);

  const voices = useVoices();
  const voiceList = voices.filter((v) => v.lang && v.lang.toLowerCase().startsWith(target));
  const voiceLabel = ({ es: 'Voz', en: 'Voice', pl: 'Głos' } as const)[target];

  return (
    <header
      style={{
        flex: 'none', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 10, padding: '14px 24px',
        background: 'var(--bg-blur)', backdropFilter: 'blur(8px)', borderBottom: '1px solid var(--border)',
      }}
    >
      <div style={{ fontSize: 19, fontWeight: 800, letterSpacing: '-.01em', flexShrink: 0, marginRight: 'auto' }}>
        {t[PAGE_TITLE_KEY[screen]]}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 10, padding: '6px 12px', fontWeight: 700, fontSize: 13.5 }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)' }} />
        {streak} <span style={{ color: 'var(--muted)', fontWeight: 600 }}>{t.streak}</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 10, padding: '5px 12px 5px 8px' }}>
        <svg width={34} height={34} viewBox="0 0 40 40">
          <circle cx={20} cy={20} r={16} fill="none" stroke="var(--panel)" strokeWidth={5} />
          <circle cx={20} cy={20} r={16} fill="none" style={{ stroke: 'var(--accent)' }} strokeWidth={5} strokeLinecap="round" strokeDasharray={`${(Math.min(dailyDone, DAILY_GOAL) / DAILY_GOAL) * CIRC} ${CIRC}`} transform="rotate(-90 20 20)" />
        </svg>
        <div>
          <div style={{ fontSize: 13, fontWeight: 800 }}>{dailyDone}/{DAILY_GOAL}</div>
          <div style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 600 }}>{t.dailyGoal}</div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', background: 'var(--panel)', borderRadius: 10, padding: 3 }} title="Audio speed">
        {SPEED_OPTIONS.map((sp) => (
          <div
            key={sp.label}
            onClick={() => setSpeedRate(sp.v)}
            style={{ padding: '5px 9px', borderRadius: 8, fontSize: 12.5, fontWeight: 700, cursor: 'pointer', background: speakRate === sp.v ? 'var(--surface)' : 'transparent', color: speakRate === sp.v ? 'var(--accent-strong)' : 'var(--faint)' }}
          >
            {sp.label}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'var(--panel)', borderRadius: 10, padding: '5px 10px' }} title="Course direction">
        <select
          value={dir}
          onChange={(e) => setDir(e.target.value as Direction)}
          style={{ border: 'none', background: 'transparent', fontFamily: 'inherit', fontWeight: 700, fontSize: 12.5, color: 'var(--ink)', cursor: 'pointer', outline: 'none' }}
        >
          {DIR_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>

      {voiceList.length > 0 && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'var(--panel)', borderRadius: 10, padding: '5px 10px' }} title={voiceLabel}>
          <select
            value={voiceSel[target] || ''}
            onChange={(e) => setVoice(target, e.target.value)}
            style={{ border: 'none', background: 'transparent', fontFamily: 'inherit', fontWeight: 700, fontSize: 12.5, color: 'var(--ink)', cursor: 'pointer', outline: 'none', maxWidth: 150 }}
          >
            <option value="">{voiceLabel}: auto</option>
            {voiceList.map((v) => (
              <option key={v.voiceURI} value={v.voiceURI}>{v.name + (v.localService ? '' : ' ☁')}</option>
            ))}
          </select>
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        {accentSwatches.map((hex) => (
          <div
            key={hex}
            onClick={() => setAccent(hex)}
            style={{ width: 18, height: 18, borderRadius: '50%', background: hex, cursor: 'pointer', border: hex === accent ? '2px solid var(--ink)' : '2px solid var(--border)' }}
          />
        ))}
      </div>

      <div
        onClick={toggleDark}
        style={{ width: 38, height: 38, borderRadius: 10, background: 'var(--panel)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
      >
        {dark ? <IconSun color="var(--ink)" /> : <IconMoon color="var(--ink)" />}
      </div>

      <div
        title={`${xp} XP`}
        style={{ width: 38, height: 38, borderRadius: '50%', background: 'linear-gradient(145deg,#E0A030,var(--accent))', flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 14 }}
      >
        A
      </div>
    </header>
  );
}

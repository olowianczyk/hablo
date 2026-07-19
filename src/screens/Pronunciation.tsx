import { useHablo } from '../store';
import { useUi } from '../lib/useUi';
import { pronFor } from '../data/content';
import { fld } from '../lib/format';
import { LevelToggle } from '../components/LevelToggle';
import { IconSpeakerLoud } from '../components/Icons';
import { Tap } from '../components/Tap';

const WF_HEIGHTS = [8, 15, 26, 13, 30, 19, 34, 11, 28, 17, 32, 21, 10, 24, 30, 16, 25, 14, 20, 28, 12, 22, 18, 10];

export function Pronunciation() {
  const { t, base } = useUi();
  const level = useHablo((s) => s.level);
  const pWord = useHablo((s) => s.pWord);
  const selectWord = useHablo((s) => s.selectWord);
  const recording = useHablo((s) => s.recording);
  const recDone = useHablo((s) => s.recDone);
  const recScore = useHablo((s) => s.recScore);
  const syllables = useHablo((s) => s.syllables);
  const heard = useHablo((s) => s.heard);
  const metrics = useHablo((s) => s.metrics);
  const tip = useHablo((s) => s.tip);
  const startRec = useHablo((s) => s.startRec);
  const speak = useHablo((s) => s.speak);
  const goReview = useHablo((s) => s.go);

  const words = pronFor(level);
  const cp = words[Math.min(pWord, words.length - 1)];
  const scoreColor = recScore >= 90 ? 'var(--good)' : recScore >= 75 ? 'var(--warn)' : 'var(--accent-strong)';
  const verdict = recScore >= 90 ? t.great : recScore >= 75 ? t.goodJob : t.keepPracticing;
  const recIdle = !recording && !recDone;

  const metricLabel: Record<string, string> = { accuracy: t.accuracy, fluency: t.fluency, completeness: t.completeness, intonation: t.intonation };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto' }}>
      <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-.02em' }}>{t.pronTitle}</div>
      <div style={{ fontSize: 14, color: 'var(--muted)', marginTop: 4 }}>{t.pronSub}</div>
      <div style={{ marginTop: 12 }}>
        <LevelToggle />
      </div>

      <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '.06em', margin: '20px 0 10px' }}>{t.practiceWords}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {words.map((w, i) => {
          const on = i === pWord;
          return (
            <Tap
              key={i}
              onClick={() => selectWord(i)}
              aria-pressed={on}
              style={{ fontWeight: 700, fontSize: 14, padding: '9px 15px', borderRadius: 11, background: on ? 'var(--accent)' : '#ffffff', color: on ? '#ffffff' : 'var(--ink-2)', border: `1px solid ${on ? 'var(--accent)' : 'var(--border-2)'}` }}
            >
              {w.es}
            </Tap>
          );
        })}
      </div>

      <div style={{ marginTop: 18, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 24, padding: '32px 28px', textAlign: 'center' }}>
        <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-.02em' }}>{cp.es}</div>
        <div style={{ fontSize: 15, color: 'var(--muted)', marginTop: 6 }}>{fld(cp, base)}</div>
        <Tap onClick={() => speak(cp.es, 'es-ES')} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, marginTop: 14, color: 'var(--accent-strong)', fontWeight: 700, fontSize: 13.5 }}>
          <IconSpeakerLoud size={16} />
          {t.listen}
        </Tap>

        <div style={{ height: 56, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 3, margin: '22px 0 4px' }}>
          {WF_HEIGHTS.map((h, i) => (
            <div
              key={i}
              style={{
                width: 5, height: h, background: recording ? 'var(--accent)' : recDone ? 'var(--good)' : '#DAD5CC', borderRadius: 3, transformOrigin: 'bottom',
                animation: recording ? `hb-eq ${(0.6 + (i % 5) * 0.12).toFixed(2)}s ease-in-out infinite ${((i % 7) * 0.05).toFixed(2)}s` : 'none',
              }}
            />
          ))}
        </div>

        <div style={{ marginTop: 14, display: 'flex', justifyContent: 'center' }}>
          <Tap
            onClick={startRec}
            aria-label={recording ? t.listening : t.record}
            style={{ width: 84, height: 84, borderRadius: '50%', background: recording ? 'var(--accent-strong)' : 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: recording ? 'hb-pulse 1.4s infinite' : 'none' }}
          >
            <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="3" width="6" height="11" rx="3" />
              <path d="M5 11a7 7 0 0014 0" />
              <path d="M12 18v3" />
            </svg>
          </Tap>
        </div>
        {recIdle && <div style={{ fontSize: 13.5, color: 'var(--faint)', fontWeight: 600, marginTop: 16 }}>{t.record}</div>}
        {recording && <div style={{ fontSize: 13.5, color: 'var(--accent)', fontWeight: 700, marginTop: 16 }}>{t.listening}</div>}
      </div>

      {recDone && (
        <div style={{ marginTop: 16, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 22, padding: '26px 28px', animation: 'hb-rise .3s ease' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
            <div style={{ textAlign: 'center', flex: 'none' }}>
              <div style={{ fontSize: 52, fontWeight: 800, lineHeight: 1, color: scoreColor }}>{recScore}%</div>
              <div style={{ fontSize: 12, color: 'var(--faint)', fontWeight: 600, marginTop: 4 }}>{t.yourScore}</div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: scoreColor }}>{verdict}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginTop: 12 }}>
                {metrics.map((m) => {
                  const color = m.v >= 85 ? 'var(--good)' : m.v >= 70 ? 'var(--warn)' : 'var(--accent-strong)';
                  return (
                    <div key={m.key} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 108, fontSize: 12.5, fontWeight: 600, color: 'var(--ink-2)' }}>{metricLabel[m.key]}</div>
                      <div style={{ flex: 1, height: 7, background: 'var(--panel)', borderRadius: 7, overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${m.v}%`, background: color }} />
                      </div>
                      <div style={{ width: 38, textAlign: 'right', fontSize: 12, fontWeight: 700, color }}>{m.v}%</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
            <div style={{ flex: 1, background: 'var(--panel-soft)', borderRadius: 13, padding: '13px 15px' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '.05em' }}>{t.targetLabel}</div>
              <div style={{ fontSize: 16, fontWeight: 700, marginTop: 3 }}>{cp.es}</div>
            </div>
            <div style={{ flex: 1, background: 'var(--good-soft)', borderRadius: 13, padding: '13px 15px' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--good)', textTransform: 'uppercase', letterSpacing: '.05em' }}>{t.weHeard}</div>
              <div style={{ fontSize: 16, fontWeight: 700, marginTop: 3 }}>{heard}</div>
            </div>
          </div>

          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '.07em', margin: '20px 0 10px' }}>{t.syllableBreakdown}</div>
          <div style={{ display: 'flex', gap: 10 }}>
            {syllables.map((s, i) => (
              <div key={i} style={{ flex: 1, maxWidth: 96 }}>
                <div style={{ height: 56, background: 'var(--panel)', borderRadius: 10, display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
                  <div style={{ width: '100%', background: s.color, height: s.width, borderRadius: '10px 10px 0 0' }} />
                </div>
                <div style={{ fontWeight: 700, fontSize: 14, marginTop: 8, textAlign: 'center' }}>{s.text}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: s.color, textAlign: 'center' }}>{s.pct}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 18, background: 'var(--warn-soft)', borderRadius: 14, padding: '14px 16px', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <div style={{ width: 26, height: 26, borderRadius: 8, background: '#E0A030', flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 15 }}>!</div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--warn)' }}>{t.tipLabel}</div>
              <div style={{ fontSize: 13.5, color: 'var(--warn)', marginTop: 2, lineHeight: 1.45 }}>{tip}</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
            <Tap onClick={startRec} style={{ flex: 1, textAlign: 'center', background: 'var(--accent)', color: '#fff', fontWeight: 800, fontSize: 14.5, padding: 13, borderRadius: 13 }}>{t.tryAgain} ↺</Tap>
            <Tap onClick={() => goReview('srs')} style={{ flex: 1, textAlign: 'center', background: 'var(--surface)', border: '1px solid var(--border-2)', color: 'var(--ink)', fontWeight: 700, fontSize: 14.5, padding: 13, borderRadius: 13 }}>{t.saveReview}</Tap>
          </div>
        </div>
      )}
    </div>
  );
}

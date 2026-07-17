import { useHablo } from '../store';
import { useUi } from '../lib/useUi';
import { dictFor } from '../data/content';
import { fld, normalize } from '../lib/format';
import { LevelToggle } from '../components/LevelToggle';
import { IconPlay, IconSpeaker } from '../components/Icons';

export function Dictation() {
  const { t, target, base } = useUi();
  const level = useHablo((s) => s.level);
  const dIdx = useHablo((s) => s.dIdx);
  const dInput = useHablo((s) => s.dInput);
  const dChecked = useHablo((s) => s.dChecked);
  const dictType = useHablo((s) => s.dictType);
  const dictCheck = useHablo((s) => s.dictCheck);
  const dictReveal = useHablo((s) => s.dictReveal);
  const dictNext = useHablo((s) => s.dictNext);
  const dictReplay = useHablo((s) => s.dictReplay);
  const dictSlow = useHablo((s) => s.dictSlow);

  const dict = dictFor(level);
  const di = dict[Math.min(dIdx, dict.length - 1)];
  const target_ = fld(di, target);
  const dCorrect = normalize(dInput) === normalize(target_);
  const dInWords = normalize(dInput).split(' ').filter(Boolean);
  const dictWords = target_.split(/\s+/).map((w) => ({ w, color: dInWords.includes(normalize(w)) ? 'var(--good)' : 'var(--accent-strong)' }));

  return (
    <div style={{ maxWidth: 600, margin: '0 auto' }}>
      <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-.02em' }}>{t.dictTitle}</div>
      <div style={{ fontSize: 14, color: 'var(--muted)', marginTop: 4 }}>{t.dictSub}</div>
      <div style={{ marginTop: 12 }}>
        <LevelToggle />
      </div>

      <div style={{ marginTop: 18, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 22, padding: 28 }}>
        <div style={{ textAlign: 'center', fontSize: 13, fontWeight: 700, color: 'var(--muted)', fontFamily: "'JetBrains Mono',monospace" }}>{t.card} {dIdx + 1} / {dict.length}</div>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 16 }}>
          <div onClick={dictReplay} style={{ display: 'flex', alignItems: 'center', gap: 9, background: 'var(--accent)', color: '#fff', fontWeight: 800, fontSize: 15, padding: '14px 24px', borderRadius: 14, cursor: 'pointer' }}>
            <IconPlay />
            {t.dictReplay}
          </div>
          <div onClick={dictSlow} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'var(--surface)', border: '1px solid var(--border-2)', color: 'var(--ink)', fontWeight: 700, fontSize: 14, padding: '14px 18px', borderRadius: 14, cursor: 'pointer' }}>
            <IconSpeaker size={17} />
            {t.dictSlow}
          </div>
        </div>
        <div style={{ fontSize: 12.5, color: 'var(--faint)', marginTop: 18, textAlign: 'center' }}>{t.dictType}</div>
        <input
          value={dInput}
          onChange={(e) => dictType(e.target.value)}
          placeholder={t.dictPlaceholder}
          style={{ width: '100%', marginTop: 10, padding: '14px 16px', border: '1px solid var(--border-2)', borderRadius: 13, fontSize: 16, fontFamily: 'inherit', color: 'var(--ink)', outline: 'none', boxSizing: 'border-box' }}
        />
        <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
          <div onClick={dictCheck} style={{ flex: 1, textAlign: 'center', background: 'var(--invert-bg)', color: '#fff', fontWeight: 800, fontSize: 15, padding: 14, borderRadius: 14, cursor: 'pointer' }}>{t.dictCheck}</div>
          <div onClick={dictReveal} style={{ textAlign: 'center', background: 'var(--surface)', border: '1px solid var(--border-2)', color: 'var(--muted)', fontWeight: 700, fontSize: 14, padding: '14px 20px', borderRadius: 14, cursor: 'pointer' }}>{t.dictReveal}</div>
        </div>

        {dChecked && (
          <div style={{ marginTop: 18 }}>
            {dCorrect ? (
              <div style={{ background: 'var(--good-soft)', color: 'var(--good-strong)', fontWeight: 700, fontSize: 14.5, padding: '13px 16px', borderRadius: 13 }}>{t.dictCorrect}</div>
            ) : (
              <div style={{ background: 'var(--accent-soft)', color: 'var(--accent-strong)', fontWeight: 700, fontSize: 14.5, padding: '13px 16px', borderRadius: 13 }}>{t.dictWrong}</div>
            )}
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '.06em', margin: '16px 0 6px' }}>{t.dictAnswer}</div>
            <div style={{ fontSize: 22, fontWeight: 800, display: 'flex', flexWrap: 'wrap', gap: 8, letterSpacing: '-.01em' }}>
              {dictWords.map((w, i) => (
                <span key={i} style={{ color: w.color }}>{w.w}</span>
              ))}
            </div>
            <div style={{ fontSize: 14, color: 'var(--muted)', marginTop: 8 }}>{fld(di, base)}</div>
            <div onClick={dictNext} style={{ textAlign: 'center', background: 'var(--accent)', color: '#fff', fontWeight: 800, fontSize: 15, padding: 14, borderRadius: 14, cursor: 'pointer', marginTop: 18 }}>{t.dictNext} →</div>
          </div>
        )}
      </div>
    </div>
  );
}

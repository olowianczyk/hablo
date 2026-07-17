import { useHablo } from '../store';
import { useUi } from '../lib/useUi';
import { levels } from '../data/content';
import { IconLock } from '../components/Icons';

export function Levels() {
  const { t, lang } = useUi();
  const setLevel = useHablo((s) => s.setLevel);

  return (
    <div>
      <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-.02em' }}>{t.levelsTitle}</div>
      <div style={{ fontSize: 14, color: 'var(--muted)', marginTop: 4 }}>{t.levelsSub}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 22 }}>
        {levels.map((l) => {
          const locked = l.status === 'locked';
          const unlocked = !locked;
          const badge = l.status === 'active'
            ? { label: t.inProgress, bg: 'var(--accent-soft)', fg: 'var(--accent-strong)' }
            : l.status === 'available'
              ? { label: t.available, bg: 'var(--good-soft)', fg: 'var(--good)' }
              : { label: t.locked, bg: 'var(--panel)', fg: 'var(--faint)' };
          const codeBg = locked ? 'var(--panel)' : l.status === 'active' ? 'var(--accent)' : 'var(--good)';
          const codeFg = locked ? 'var(--faint)' : '#FFFFFF';
          const name = lang === 'pl' ? l.pl : lang === 'es' ? l.code : l.en;
          return (
            <div
              key={l.code}
              onClick={() => !locked && setLevel(l.code as 'A1' | 'A2' | 'B1' | 'B2')}
              style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 18, padding: '20px 22px', display: 'flex', alignItems: 'center', gap: 20, cursor: locked ? 'default' : 'pointer' }}
            >
              <div style={{ width: 56, height: 56, borderRadius: 16, flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 18, background: codeBg, color: codeFg, position: 'relative' }}>
                {l.code}
                {locked && (
                  <div style={{ position: 'absolute', bottom: -5, right: -5, width: 22, height: 22, borderRadius: '50%', background: 'var(--surface)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IconLock color="var(--faint)" />
                  </div>
                )}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ fontWeight: 800, fontSize: 16 }}>{l.code} · {name}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, padding: '3px 9px', borderRadius: 20, background: badge.bg, color: badge.fg }}>{badge.label}</div>
                </div>
                <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 5, lineHeight: 1.45 }}>{lang === 'pl' ? l.dPl : l.dEn}</div>
                {unlocked && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 12 }}>
                    <div style={{ flex: 1, height: 7, background: 'var(--panel)', borderRadius: 7, overflow: 'hidden' }}>
                      <div style={{ height: '100%', background: 'var(--accent)', width: `${l.progress}%` }} />
                    </div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--muted)' }}>{l.progress}%</div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

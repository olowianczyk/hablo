import { useHablo, displayStreak, type Screen } from '../store';
import { useUi } from '../lib/useUi';
import { IconHome, IconLevels, IconVocab, IconPhrases, IconListen, IconBuilder, IconPron, IconReview, IconStats } from './Icons';
import { Tap } from './Tap';

const NAV: { key: Screen; Icon: typeof IconHome; label: (t: ReturnType<typeof useUi>['t']) => string }[] = [
  { key: 'home', Icon: IconHome, label: (t) => t.home },
  { key: 'levels', Icon: IconLevels, label: (t) => t.levels },
  { key: 'vocab', Icon: IconVocab, label: (t) => t.vocab },
  { key: 'phrasebook', Icon: IconPhrases, label: (t) => t.phrases },
  { key: 'listen', Icon: IconListen, label: (t) => t.dictNav },
  { key: 'builder', Icon: IconBuilder, label: (t) => t.builder },
  { key: 'pronounce', Icon: IconPron, label: (t) => t.pronounce },
  { key: 'srs', Icon: IconReview, label: (t) => t.review },
  { key: 'stats', Icon: IconStats, label: (t) => t.statsNav },
];

export function Sidebar() {
  const { t } = useUi();
  const screen = useHablo((s) => s.screen);
  const go = useHablo((s) => s.go);
  const streak = useHablo(displayStreak);

  return (
    <aside
      className="hb-sidebar"
      style={{
        flex: 'none', width: 252, background: 'var(--surface)', borderRight: '1px solid var(--border)',
        display: 'flex', flexDirection: 'column', padding: '20px 14px', overflowY: 'auto',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '6px 8px 20px' }}>
        <div
          style={{
            position: 'relative', width: 36, height: 36, borderRadius: 12,
            background: 'linear-gradient(145deg,var(--accent),#E0A030)', flex: 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(222,91,59,.28)',
          }}
        >
          <div style={{ position: 'absolute', top: 11, left: 9, width: 6, height: 6, borderRadius: '50%', background: 'var(--surface)' }} />
          <div style={{ position: 'absolute', top: 11, right: 9, width: 6, height: 6, borderRadius: '50%', background: 'var(--surface)' }} />
          <div style={{ position: 'absolute', bottom: 9, width: 12, height: 6, borderBottom: '2.5px solid #fff', borderRadius: '0 0 10px 10px' }} />
        </div>
        <div style={{ fontWeight: 800, fontSize: 20, letterSpacing: '-.02em' }}>
          hablo<span style={{ color: 'var(--accent)' }}>.</span>
        </div>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: 3 }} aria-label="Main">
        {NAV.map(({ key, Icon, label }) => {
          const active = screen === key;
          return (
            <Tap
              key={key}
              onClick={() => go(key)}
              aria-current={active ? 'page' : undefined}
              style={{
                display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 11,
                fontSize: 14.5, fontWeight: 600, width: '100%', textAlign: 'left',
                background: active ? 'var(--accent-soft)' : 'transparent',
                color: active ? 'var(--accent-strong)' : 'var(--ink-2)',
              }}
            >
              <Icon size={20} />
              {label(t)}
            </Tap>
          );
        })}
      </nav>

      {/* ponytail: leagues need real accounts/opponents (backend, punkt 7) —
          showing a fabricated rank would be a lie. Real streak instead. */}
      <div style={{ marginTop: 'auto', background: 'var(--invert-bg)', color: '#fff', borderRadius: 16, padding: 16 }}>
        <div style={{ fontSize: 12, color: 'var(--faint)', fontWeight: 600 }}>{t.streak}</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 6 }}>
          <div style={{ fontSize: 26, fontWeight: 800, color: '#E0A030' }}>{streak}</div>
        </div>
        <div style={{ marginTop: 12, height: 6, background: '#33312D', borderRadius: 6, overflow: 'hidden' }}>
          <div style={{ width: `${Math.min(100, (streak / 7) * 100)}%`, height: '100%', background: 'linear-gradient(90deg,#E0A030,var(--accent))' }} />
        </div>
        <div style={{ fontSize: 11.5, color: 'var(--faint)', marginTop: 8 }}>{t.keepGoing}</div>
      </div>
    </aside>
  );
}

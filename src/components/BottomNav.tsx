import { useHablo, type Screen } from '../store';
import { useUi } from '../lib/useUi';
import { IconHome, IconVocab, IconPhrases, IconReview, IconStats } from './Icons';
import { Tap } from './Tap';

const TABS: { key: Screen; Icon: typeof IconHome; label: (t: ReturnType<typeof useUi>['t']) => string }[] = [
  { key: 'home', Icon: IconHome, label: (t) => t.home },
  { key: 'vocab', Icon: IconVocab, label: (t) => t.vocab },
  { key: 'phrasebook', Icon: IconPhrases, label: (t) => t.phrases },
  { key: 'srs', Icon: IconReview, label: (t) => t.review },
  { key: 'stats', Icon: IconStats, label: (t) => t.statsNav },
];

export function BottomNav() {
  const { t } = useUi();
  const screen = useHablo((s) => s.screen);
  const go = useHablo((s) => s.go);

  return (
    <nav
      className="hb-bottomnav"
      style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, height: 68, zIndex: 80,
        background: 'var(--surface)', borderTop: '1px solid var(--border)',
        alignItems: 'stretch', justifyContent: 'space-around',
      }}
    >
      {TABS.map(({ key, Icon, label }) => {
        const active = screen === key;
        return (
          <Tap
            key={key}
            onClick={() => go(key)}
            aria-current={active ? 'page' : undefined}
            style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 3, color: active ? 'var(--accent-strong)' : 'var(--faint)' }}
          >
            <Icon size={20} color={active ? 'var(--accent-strong)' : 'var(--faint)'} />
            <div style={{ fontSize: 10.5, fontWeight: 700 }}>{label(t)}</div>
          </Tap>
        );
      })}
    </nav>
  );
}

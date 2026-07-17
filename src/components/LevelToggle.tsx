import { useHablo } from '../store';
import { LEVELS } from '../lib/useUi';
import type { Level } from '../data/content';

export function LevelToggle({ dense, onPick }: { dense?: boolean; onPick?: (lv: Level) => void }) {
  const level = useHablo((s) => s.level);
  const pickLevel = useHablo((s) => s.pickLevel);
  return (
    <div style={{ display: 'flex', background: 'var(--panel)', borderRadius: 9, padding: 3, width: 'fit-content' }}>
      {LEVELS.map((lv) => (
        <div
          key={lv}
          onClick={() => (onPick ? onPick(lv) : pickLevel(lv))}
          style={{
            padding: dense ? '4px 12px' : '5px 15px',
            borderRadius: 7,
            fontSize: 12.5,
            fontWeight: 700,
            cursor: 'pointer',
            background: level === lv ? 'var(--surface)' : 'transparent',
            color: level === lv ? 'var(--accent-strong)' : 'var(--faint)',
          }}
        >
          {lv}
        </div>
      ))}
    </div>
  );
}

import type { SrsItem } from '../data/content';
import { fld, dueLabel, strengthColor } from '../lib/format';
import type { Lang } from '../lib/format';
import type { UiLang } from '../data/content';
import { isDueToday } from '../lib/date';
import { IconSpeaker } from './Icons';
import { Tap } from './Tap';

export function SrsTable({
  title, memoryLabel, dueLabelHeader, items, target, base, lang, onSpeak, onPractice,
}: {
  title: string;
  memoryLabel: string;
  dueLabelHeader: string;
  items: SrsItem[];
  target: Lang;
  base: Lang;
  lang: UiLang;
  onSpeak?: (es: string) => void;
  onPractice?: () => void;
}) {
  return (
    <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 18, overflow: 'hidden' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr auto', gap: 12, padding: '12px 20px', fontSize: 11, fontWeight: 700, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '.06em', borderBottom: '1px solid var(--panel)' }}>
        <div>{title}</div><div>{memoryLabel}</div><div>{dueLabelHeader}</div><div />
      </div>
      {items.map((s, i) => {
        const es = fld(s, target);
        const Row = onPractice ? Tap : 'div';
        return (
          <Row
            key={i}
            onClick={onPractice}
            style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr auto', gap: 12, alignItems: 'center', padding: '14px 20px', borderTop: '1px solid var(--border)', width: '100%', textAlign: 'left', cursor: onPractice ? 'pointer' : 'default' }}
          >
            <div>
              <div style={{ fontWeight: 700, fontSize: 15 }}>{es}</div>
              <div style={{ fontSize: 12.5, color: 'var(--muted)' }}>{fld(s, base)}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ flex: 1, maxWidth: 80, height: 6, background: 'var(--panel)', borderRadius: 6, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${s.strength}%`, background: strengthColor(s.strength) }} />
              </div>
              <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--muted)' }}>{s.strength}</span>
            </div>
            <div>
              <span style={{ fontSize: 12, fontWeight: 700, padding: '4px 10px', borderRadius: 20, background: isDueToday(s.dueAt) ? 'var(--accent-soft)' : 'var(--panel)', color: isDueToday(s.dueAt) ? 'var(--accent-strong)' : 'var(--muted)' }}>
                {dueLabel(s, lang)}
              </span>
            </div>
            {onSpeak ? (
              <Tap
                onClick={(e) => { e.stopPropagation(); onSpeak(es); }}
                aria-label="Listen"
                style={{ width: 34, height: 34, borderRadius: 10, background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <IconSpeaker size={15} color="var(--accent-strong)" />
              </Tap>
            ) : (
              <div style={{ width: 34, height: 34, borderRadius: 10, background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <IconSpeaker size={15} color="var(--accent-strong)" />
              </div>
            )}
          </Row>
        );
      })}
    </div>
  );
}

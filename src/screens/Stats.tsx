import { useHablo } from '../store';
import { useUi } from '../lib/useUi';
import { deckFor, badgesSeed } from '../data/content';

const WEEK_XP = [120, 180, 90, 240, 160, 300, 240];
const MAX_XP = Math.max(...WEEK_XP);
const WEEK_DAYS: Record<'es' | 'en' | 'pl', string[]> = {
  pl: ['P', 'W', 'Ś', 'C', 'P', 'S', 'N'],
  es: ['L', 'M', 'X', 'J', 'V', 'S', 'D'],
  en: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
};
const CAL_DONE = [0, 1, 2, 4, 5, 6, 7, 8, 10, 11, 12, 13, 15, 17, 18, 19, 20, 22, 23, 24, 25, 26, 27];
const LEARNED = 214;

export function Stats() {
  const { t, lang } = useUi();
  const extraWords = useHablo((s) => s.extraWords);
  const srs = useHablo((s) => s.srs);
  const srsPhrases = useHablo((s) => s.srsPhrases);
  const srsPron = useHablo((s) => s.srsPron);
  const srsDict = useHablo((s) => s.srsDict);
  const srsBuilder = useHablo((s) => s.srsBuilder);
  const startReview = useHablo((s) => s.startReview);

  const a1n = deckFor('A1', extraWords.A1).length;
  const a2n = deckFor('A2', extraWords.A2).length;
  const a1pct = Math.round(Math.min(LEARNED, a1n) / a1n * 100);
  const a2pct = Math.round(Math.max(0, LEARNED - a1n) / a2n * 100);
  const dueCount = [srs, srsPhrases, srsPron, srsDict, srsBuilder].reduce((sum, list) => sum + list.filter((i) => i.today).length, 0);
  const srsBreakdown = [
    `${srs.filter((s) => s.today).length} ${t.vocab.toLowerCase()}`,
    `${srsPhrases.filter((s) => s.today).length} ${t.phrases.toLowerCase()}`,
    `${srsPron.filter((s) => s.today).length} ${t.pronounce.toLowerCase()}`,
    `${srsDict.filter((s) => s.today).length} ${t.dictNav.toLowerCase()}`,
    `${srsBuilder.filter((s) => s.today).length} ${t.builder.toLowerCase()}`,
  ].join(' · ');

  return (
    <div>
      <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-.02em' }}>{t.statsTitle}</div>
      <div style={{ fontSize: 14, color: 'var(--muted)', marginTop: 4 }}>{t.statsSub}</div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginTop: 22 }}>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, padding: 18 }}>
          <div style={{ fontSize: 30, fontWeight: 800, color: 'var(--accent-strong)' }}>{LEARNED}</div>
          <div style={{ fontSize: 12.5, color: 'var(--muted)', fontWeight: 600, marginTop: 2 }}>{t.wordsLearned}</div>
        </div>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, padding: 18 }}>
          <div style={{ fontSize: 30, fontWeight: 800, color: 'var(--good)' }}>87%</div>
          <div style={{ fontSize: 12.5, color: 'var(--muted)', fontWeight: 600, marginTop: 2 }}>{t.accuracy2}</div>
        </div>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, padding: 18 }}>
          <div style={{ fontSize: 30, fontWeight: 800 }}>340</div>
          <div style={{ fontSize: 12.5, color: 'var(--muted)', fontWeight: 600, marginTop: 2 }}>{t.minutes}</div>
        </div>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, padding: 18 }}>
          <div style={{ fontSize: 30, fontWeight: 800 }}>46</div>
          <div style={{ fontSize: 12.5, color: 'var(--muted)', fontWeight: 600, marginTop: 2 }}>{t.lessonsDone}</div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 16, marginTop: 16, flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 320, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 18, padding: 20 }}>
          <div style={{ fontSize: 13, fontWeight: 800 }}>{t.weeklyXP}</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, height: 150, marginTop: 18 }}>
            {WEEK_XP.map((v, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, height: '100%', justifyContent: 'flex-end' }}>
                <div style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--faint)' }}>{v}</div>
                <div style={{ width: '100%', height: `${Math.round((v / MAX_XP) * 100)}%`, background: i === 5 ? 'var(--accent)' : 'var(--accent-soft2)', borderRadius: '8px 8px 0 0', minHeight: 6 }} />
                <div style={{ fontSize: 11.5, fontWeight: 700, color: 'var(--muted)' }}>{WEEK_DAYS[lang][i]}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 280, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 18, padding: 20 }}>
          <div style={{ fontSize: 13, fontWeight: 800 }}>{t.activity}</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 7, marginTop: 18 }}>
            {Array.from({ length: 28 }, (_, i) => (
              <div key={i} style={{ aspectRatio: '1', borderRadius: 7, background: CAL_DONE.includes(i) ? 'var(--accent)' : 'var(--panel)' }} />
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 16 }}>
            <div style={{ fontSize: 12.5, color: 'var(--muted)' }}>
              <span style={{ fontWeight: 800, color: 'var(--ink)' }}>21</span> {t.days} · {t.bestStreak}
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 18, padding: 20, marginTop: 16 }}>
        <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 14 }}>{t.levelProgress}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
          <div style={{ width: 40, fontWeight: 800, color: 'var(--accent-strong)' }}>A1</div>
          <div style={{ flex: 1, height: 10, background: 'var(--panel)', borderRadius: 8, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${a1pct}%`, background: 'var(--accent)' }} />
          </div>
          <div style={{ width: 56, textAlign: 'right', fontSize: 12.5, fontWeight: 700, color: 'var(--muted)' }}>{a1pct}%</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 40, fontWeight: 800, color: 'var(--good)' }}>A2</div>
          <div style={{ flex: 1, height: 10, background: 'var(--panel)', borderRadius: 8, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${a2pct}%`, background: 'var(--good)' }} />
          </div>
          <div style={{ width: 56, textAlign: 'right', fontSize: 12.5, fontWeight: 700, color: 'var(--muted)' }}>{a2pct}%</div>
        </div>
      </div>

      <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 18, padding: 20, marginTop: 16 }}>
        <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 14 }}>{t.achievements}</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 12 }}>
          {badgesSeed.map((b, i) => (
            <div key={i} style={{ textAlign: 'center', background: b.got ? 'var(--warn-soft)' : 'var(--panel)', borderRadius: 14, padding: '16px 8px', opacity: b.got ? 1 : 0.4 }}>
              <div style={{ fontSize: 28 }}>{b.ic}</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink-2)', marginTop: 6, lineHeight: 1.3 }}>{b[lang]}</div>
            </div>
          ))}
        </div>
      </div>

      <div onClick={startReview} style={{ marginTop: 16, background: 'var(--invert-bg)', color: '#fff', borderRadius: 18, padding: 20, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ width: 46, height: 46, borderRadius: 13, background: 'rgba(255,255,255,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
          <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#E0A030" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12a8 8 0 0113.7-5.6L20 8" />
            <path d="M20 4v4h-4" />
          </svg>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 800, fontSize: 15.5 }}>{t.reviewTitle}</div>
          <div style={{ fontSize: 13, color: 'var(--faint)', marginTop: 2 }}>{srsBreakdown}</div>
        </div>
        <div style={{ fontSize: 26, fontWeight: 800, color: '#E0A030' }}>{dueCount}</div>
      </div>
    </div>
  );
}

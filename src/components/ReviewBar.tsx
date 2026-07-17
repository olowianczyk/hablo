import { useHablo } from '../store';
import { useUi } from '../lib/useUi';

export function ReviewBar() {
  const { lang } = useUi();
  const reviewQueue = useHablo((s) => s.reviewQueue);
  const reviewPos = useHablo((s) => s.reviewPos);
  const reviewNext = useHablo((s) => s.reviewNext);
  const exitReview = useHablo((s) => s.exitReview);

  if (!reviewQueue.length) return null;

  const reviewingLabel = { pl: 'Powtórka', es: 'Repaso', en: 'Reviewing' }[lang];
  const nextLabel = { pl: 'Dalej', es: 'Siguiente', en: 'Next' }[lang];

  return (
    <div
      className="hb-reviewbar"
      style={{
        position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)', zIndex: 90,
        background: 'var(--invert-bg)', color: '#fff', borderRadius: 16, padding: '14px 18px',
        display: 'flex', alignItems: 'center', gap: 16, boxShadow: '0 16px 40px rgba(0,0,0,.3)',
      }}
    >
      <div style={{ fontSize: 13, fontWeight: 700 }}>{reviewingLabel} · {reviewPos + 1}/{reviewQueue.length}</div>
      <div onClick={() => reviewNext()} style={{ background: 'var(--accent)', color: '#fff', fontWeight: 800, fontSize: 13, padding: '9px 16px', borderRadius: 10, cursor: 'pointer' }}>{nextLabel} →</div>
      <div onClick={exitReview} style={{ color: 'var(--faint)', fontWeight: 700, fontSize: 13, cursor: 'pointer', padding: 4 }}>✕</div>
    </div>
  );
}

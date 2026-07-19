import { useHablo } from '../store';
import { useUi } from '../lib/useUi';
import { isDueToday } from '../lib/date';
import { SrsTable } from '../components/SrsTable';

export function Review() {
  const { t, lang, target, base } = useUi();
  const srs = useHablo((s) => s.srs);
  const srsPhrases = useHablo((s) => s.srsPhrases);
  const srsPron = useHablo((s) => s.srsPron);
  const srsDict = useHablo((s) => s.srsDict);
  const srsBuilder = useHablo((s) => s.srsBuilder);
  const startReview = useHablo((s) => s.startReview);
  const reviewDone = useHablo((s) => s.reviewDone);
  const speak = useHablo((s) => s.speak);
  const go = useHablo((s) => s.go);

  const dueCount = [srs, srsPhrases, srsPron, srsDict, srsBuilder].reduce((sum, list) => sum + list.filter((i) => isDueToday(i.dueAt)).length, 0);
  const reviewDoneLabel = { pl: 'Sesja ukończona! 🎉', es: '¡Sesión completada! 🎉', en: 'Session complete! 🎉' }[lang];

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 280 }}>
          <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-.02em' }}>{t.reviewTitle}</div>
          <div style={{ fontSize: 14, color: 'var(--muted)', marginTop: 4, lineHeight: 1.5, maxWidth: 440 }}>{t.reviewSub}</div>
        </div>
        <div style={{ background: 'var(--invert-bg)', color: '#fff', borderRadius: 18, padding: '18px 22px', minWidth: 200 }}>
          {reviewDone ? (
            <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--good)' }}>{reviewDoneLabel}</div>
          ) : (
            <>
              <div style={{ fontSize: 34, fontWeight: 800, color: '#E0A030' }}>{dueCount}</div>
              <div style={{ fontSize: 12.5, color: 'var(--faint)', fontWeight: 600 }}>{t.itemsDue}</div>
            </>
          )}
          <div onClick={startReview} style={{ marginTop: 14, textAlign: 'center', background: 'var(--accent)', color: '#fff', fontWeight: 800, fontSize: 13.5, padding: 11, borderRadius: 11, cursor: 'pointer' }}>{t.startReview}</div>
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <SrsTable title={t.vocab} memoryLabel={t.memory} dueLabelHeader={t.due} items={srs} target={target} base={base} lang={lang} onSpeak={(es) => speak(es)} />
      </div>

      <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', margin: '24px 0 10px' }}>{t.phrases}</div>
      <SrsTable title={t.phrases} memoryLabel={t.memory} dueLabelHeader={t.due} items={srsPhrases} target={target} base={base} lang={lang} onSpeak={(es) => speak(es)} />

      <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', margin: '24px 0 10px' }}>{t.pronounce}</div>
      <SrsTable title={t.pronounce} memoryLabel={t.memory} dueLabelHeader={t.due} items={srsPron} target={target} base={base} lang={lang} onPractice={() => go('pronounce')} />

      <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', margin: '24px 0 10px' }}>{t.dictNav}</div>
      <SrsTable title={t.dictNav} memoryLabel={t.memory} dueLabelHeader={t.due} items={srsDict} target={target} base={base} lang={lang} onPractice={() => go('listen')} />

      <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', margin: '24px 0 10px' }}>{t.builder}</div>
      <SrsTable title={t.builder} memoryLabel={t.memory} dueLabelHeader={t.due} items={srsBuilder} target={target} base={base} lang={lang} onPractice={() => go('builder')} />
    </div>
  );
}

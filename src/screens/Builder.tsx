import { useHablo } from '../store';
import { useUi } from '../lib/useUi';
import { builderFor, bankFor } from '../data/content';
import { fld } from '../lib/format';
import { LevelToggle } from '../components/LevelToggle';
import { IconSpeakerLoud, IconMic } from '../components/Icons';
import { Tap } from '../components/Tap';

export function Builder() {
  const { t, lang, base } = useUi();
  const level = useHablo((s) => s.level);
  const slots = useHablo((s) => s.slots);
  const builderChecked = useHablo((s) => s.builderChecked);
  const addSlot = useHablo((s) => s.addSlot);
  const removeSlot = useHablo((s) => s.removeSlot);
  const clearSlots = useHablo((s) => s.clearSlots);
  const checkBuilder = useHablo((s) => s.checkBuilder);
  const speak = useHablo((s) => s.speak);
  const rec2 = useHablo((s) => s.rec2);
  const startRec2 = useHablo((s) => s.startRec2);

  const sentence = builderFor(level);
  const bank = bankFor(level);
  const byId = (id: number) => bank.find((b) => b.id === id)!;
  const correct = slots.map((id) => byId(id).es).join(' ') === sentence.target.join(' ');
  const sentenceEs = sentence.target.join(' ');
  const prompt = lang === 'pl' ? sentence.pl : sentence.en;

  const showResult = !!(rec2 && rec2.ctx === 'builder' && rec2.done);
  const pwActive = !!(rec2 && rec2.active);
  const pwScore = rec2 ? rec2.score || 0 : 0;
  const pwColor = showResult ? (pwScore >= 90 ? 'var(--good)' : pwScore >= 75 ? 'var(--warn)' : 'var(--accent-strong)') : 'var(--good)';

  return (
    <div style={{ maxWidth: 640, margin: '0 auto' }}>
      <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-.02em' }}>{t.builderTitle}</div>
      <div style={{ fontSize: 14, color: 'var(--muted)', marginTop: 4 }}>{t.builderSub}</div>
      <div style={{ marginTop: 12 }}>
        <LevelToggle />
      </div>

      <div style={{ marginTop: 20, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{ flex: 1 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '.06em' }}>{t.build}</span>
          <div style={{ fontSize: 17, fontWeight: 700, marginTop: 3 }}>{prompt}</div>
        </div>
        <Tap onClick={() => speak(sentenceEs, 'es-ES')} aria-label={t.listen} style={{ width: 40, height: 40, borderRadius: 12, background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
          <IconSpeakerLoud size={18} color="var(--accent-strong)" />
        </Tap>
      </div>

      <div style={{ marginTop: 16, minHeight: 72, background: 'var(--panel-soft)', border: '2px dashed var(--border-2)', borderRadius: 16, padding: 16, display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center', alignContent: 'center' }}>
        {slots.map((id) => (
          <Tap key={id} onClick={() => removeSlot(id)} style={{ background: 'var(--invert-bg)', color: '#fff', fontWeight: 700, fontSize: 15, padding: '11px 16px', borderRadius: 12, boxShadow: '0 3px 8px rgba(0,0,0,.15)' }}>
            {byId(id).es}
          </Tap>
        ))}
      </div>

      <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {bank.filter((b) => !slots.includes(b.id)).map((b) => (
          <Tap key={b.id} onClick={() => addSlot(b.id)} style={{ background: 'var(--surface)', border: '1px solid var(--border-2)', color: 'var(--ink)', fontWeight: 700, fontSize: 15, padding: '11px 16px', borderRadius: 12 }}>
            {b.es}
          </Tap>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
        <Tap onClick={checkBuilder} style={{ flex: 1, textAlign: 'center', background: 'var(--accent)', color: '#fff', fontWeight: 800, fontSize: 15, padding: 14, borderRadius: 14 }}>{t.check}</Tap>
        <Tap onClick={clearSlots} style={{ textAlign: 'center', background: 'var(--surface)', border: '1px solid var(--border-2)', color: 'var(--muted)', fontWeight: 700, fontSize: 15, padding: '14px 22px', borderRadius: 14 }}>{t.clear}</Tap>
      </div>

      {builderChecked && (
        correct
          ? <div style={{ marginTop: 16, background: 'var(--good-soft)', color: 'var(--good-strong)', fontWeight: 700, fontSize: 14.5, padding: '14px 18px', borderRadius: 14 }}>{t.correct}</div>
          : <div style={{ marginTop: 16, background: 'var(--accent-soft)', color: 'var(--accent-strong)', fontWeight: 700, fontSize: 14.5, padding: '14px 18px', borderRadius: 14 }}>{t.wrong}</div>
      )}

      <div style={{ marginTop: 20, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, padding: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
          <Tap
            onClick={() => startRec2(sentenceEs, 'sentence', 'builder')}
            aria-label={t.checkSentencePron}
            style={{ width: 48, height: 48, borderRadius: '50%', background: pwActive ? 'var(--accent-strong)' : 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none', animation: pwActive ? 'hb-pulse 1.4s infinite' : 'none' }}
          >
            <IconMic />
          </Tap>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 14.5 }}>{t.checkSentencePron}</div>
            <div style={{ fontSize: 12.5, color: 'var(--faint)' }}>{pwActive ? t.listening : t.checkPronSub}</div>
          </div>
        </div>
        {showResult && rec2 && (
          <div style={{ marginTop: 14, borderTop: '1px solid var(--panel)', paddingTop: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ fontSize: 30, fontWeight: 800, color: pwColor }}>{pwScore}%</div>
              <div style={{ fontSize: 12, color: 'var(--faint)', fontWeight: 600 }}>{t.yourScore}</div>
              <div style={{ flex: 1 }} />
              <div style={{ fontSize: 12, color: 'var(--muted)' }}>{t.weHeard}: <span style={{ fontWeight: 700, color: 'var(--ink)' }}>{rec2.heard}</span></div>
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
              {(rec2.tokens || []).map((k, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ height: 40, width: 52, background: 'var(--panel)', borderRadius: 8, display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
                    <div style={{ width: '100%', background: k.color, height: k.width, borderRadius: '8px 8px 0 0' }} />
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 700, marginTop: 4 }}>{k.t}</div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: k.color }}>{k.pct}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 12, background: 'var(--warn-soft)', borderRadius: 11, padding: '10px 13px', fontSize: 12.5, color: 'var(--warn)', lineHeight: 1.45 }}>{rec2.tip}</div>
          </div>
        )}
      </div>

      <div style={{ marginTop: 20, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 18, padding: 20 }}>
        <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '.01em' }}>{t.glossary}</div>
        <div style={{ fontSize: 12, color: 'var(--faint)', marginTop: 2 }}>{t.glossaryHint}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 12 }}>
          {sentence.glossary.map((g, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '9px 4px', borderTop: '1px solid var(--border)' }}>
              <Tap onClick={() => speak(g.es, 'es-ES')} aria-label={t.listen} style={{ width: 34, height: 34, borderRadius: 10, background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                <IconSpeakerLoud size={15} color="var(--accent-strong)" />
              </Tap>
              <div style={{ fontWeight: 700, fontSize: 15, minWidth: 80 }}>{g.es}</div>
              <div style={{ fontSize: 14, color: 'var(--muted)' }}>{fld(g, base)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

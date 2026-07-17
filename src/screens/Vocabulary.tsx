import { useHablo } from '../store';
import { useUi } from '../lib/useUi';
import { deckFor } from '../data/content';
import { fld, exFld } from '../lib/format';
import { LevelToggle } from '../components/LevelToggle';
import { IconSpeakerLoud, IconMic } from '../components/Icons';

const TOPIC: Record<string, Record<'en' | 'pl' | 'es', string>> = {
  A1: { en: 'Basics', pl: 'Podstawy', es: 'Básico' },
  A2: { en: 'Past tense & shopping', pl: 'Przeszłość i zakupy', es: 'Pasado y compras' },
  B1: { en: 'Society & opinions', pl: 'Społeczeństwo i opinie', es: 'Sociedad y opiniones' },
  B2: { en: 'Abstract & nuance', pl: 'Abstrakcja i niuanse', es: 'Abstracción y matices' },
};

export function Vocabulary() {
  const { t, lang, target, base } = useUi();
  const level = useHablo((s) => s.level);
  const extraWords = useHablo((s) => s.extraWords);
  const vIdx = useHablo((s) => s.vIdx);
  const vFlip = useHablo((s) => s.vFlip);
  const flip = useHablo((s) => s.flip);
  const speak = useHablo((s) => s.speak);
  const rate = useHablo((s) => s.rate);
  const rec2 = useHablo((s) => s.rec2);
  const startRec2 = useHablo((s) => s.startRec2);

  const deckA = deckFor(level, extraWords[level]);
  const c = deckA[Math.min(vIdx, deckA.length - 1)];
  if (!c) return null;

  const cardEs = fld(c, target);
  const cardTr = fld(c, base);
  const hasEx = !!exFld(c, target);
  const showResult = !!(rec2 && rec2.ctx === 'vocab' && rec2.done);
  const pwActive = !!(rec2 && rec2.active);
  const pwScore = rec2 ? (rec2.score || 0) : 0;
  const pwColor = showResult ? (pwScore >= 90 ? 'var(--good)' : pwScore >= 75 ? 'var(--warn)' : 'var(--accent-strong)') : 'var(--good)';

  return (
    <div style={{ maxWidth: 560, margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <LevelToggle dense />
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--muted)' }}>{level} · {TOPIC[level][lang]}</div>
        </div>
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--muted)', fontFamily: "'JetBrains Mono',monospace" }}>{t.card} {vIdx + 1} / {deckA.length}</div>
      </div>

      <div
        onClick={flip}
        style={{ marginTop: 14, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 24, padding: '44px 32px', minHeight: 280, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', cursor: 'pointer', boxShadow: '0 10px 30px rgba(0,0,0,.05)' }}
      >
        {!vFlip ? (
          <div>
            <div style={{ fontSize: 42, fontWeight: 800, letterSpacing: '-.02em' }}>{cardEs}</div>
            <div
              onClick={(e) => { e.stopPropagation(); speak(cardEs); }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 22, background: 'var(--accent-soft)', color: 'var(--accent-strong)', fontWeight: 700, fontSize: 14, padding: '10px 18px', borderRadius: 12 }}
            >
              <IconSpeakerLoud />
              {t.listen}
            </div>
            <div style={{ fontSize: 12.5, color: 'var(--faint)', marginTop: 26, fontWeight: 600 }}>{t.flipHint}</div>
          </div>
        ) : (
          <div>
            <div style={{ fontSize: 32, fontWeight: 800, color: 'var(--accent)' }}>{cardTr}</div>
            {hasEx && (
              <>
                <div style={{ height: 1, background: 'var(--border)', margin: '22px auto', width: 60 }} />
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '.08em' }}>{t.example}</div>
                <div style={{ fontSize: 19, fontWeight: 700, marginTop: 8 }}>{exFld(c, target)}</div>
                <div style={{ fontSize: 14, color: 'var(--muted)', marginTop: 5 }}>{exFld(c, base)}</div>
              </>
            )}
          </div>
        )}
      </div>

      <div style={{ marginTop: 16, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, padding: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
          <div
            onClick={() => startRec2(cardEs, 'word', 'vocab')}
            style={{ width: 48, height: 48, borderRadius: '50%', background: pwActive ? 'var(--accent-strong)' : 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flex: 'none', animation: pwActive ? 'hb-pulse 1.4s infinite' : 'none' }}
          >
            <IconMic />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 14.5 }}>{t.checkPron}</div>
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
                  <div style={{ height: 40, width: 48, background: 'var(--panel)', borderRadius: 8, display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
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

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, marginTop: 16 }}>
        <div onClick={() => rate('again')} style={{ textAlign: 'center', padding: '12px 6px', borderRadius: 13, background: 'var(--surface)', border: '1px solid var(--border)', fontWeight: 700, fontSize: 13.5, cursor: 'pointer', color: 'var(--accent-strong)' }}>{t.again}</div>
        <div onClick={() => rate('hard')} style={{ textAlign: 'center', padding: '12px 6px', borderRadius: 13, background: 'var(--surface)', border: '1px solid var(--border)', fontWeight: 700, fontSize: 13.5, cursor: 'pointer', color: 'var(--warn)' }}>{t.hard}</div>
        <div onClick={() => rate('good')} style={{ textAlign: 'center', padding: '12px 6px', borderRadius: 13, background: 'var(--surface)', border: '1px solid var(--border)', fontWeight: 700, fontSize: 13.5, cursor: 'pointer', color: 'var(--good)' }}>{t.good}</div>
        <div onClick={() => rate('easy')} style={{ textAlign: 'center', padding: '12px 6px', borderRadius: 13, background: 'var(--invert-bg)', color: '#fff', fontWeight: 700, fontSize: 13.5, cursor: 'pointer' }}>{t.easy}</div>
      </div>
    </div>
  );
}

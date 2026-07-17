import { useHablo } from '../store';
import { useUi } from '../lib/useUi';
import { phrasebookFor } from '../data/content';
import { fld } from '../lib/format';
import { LevelToggle } from '../components/LevelToggle';
import { IconSpeaker } from '../components/Icons';

export function Phrasebook() {
  const { t, lang, target, base } = useUi();
  const level = useHablo((s) => s.level);
  const extraPhrases = useHablo((s) => s.extraPhrases);
  const speak = useHablo((s) => s.speak);

  const cats = phrasebookFor(level, extraPhrases[level]);

  return (
    <div>
      <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-.02em' }}>{t.phrasesTitle}</div>
      <div style={{ fontSize: 14, color: 'var(--muted)', marginTop: 4 }}>{t.phrasesSub}</div>
      <div style={{ marginTop: 12 }}>
        <LevelToggle />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 22 }}>
        {cats.map((cat, ci) => (
          <div key={ci}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              <div style={{ fontSize: 15, fontWeight: 800 }}>{lang === 'pl' ? cat.titlePl : cat.titleEn}</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--faint)', background: 'var(--panel)', padding: '2px 8px', borderRadius: 20 }}>{cat.phrases.length}</div>
            </div>
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden' }}>
              {cat.phrases.map((p, pi) => (
                <div key={pi} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '15px 18px', borderTop: pi ? '1px solid var(--panel)' : 'none' }}>
                  <div onClick={() => speak(fld(p, target))} style={{ width: 38, height: 38, borderRadius: 11, background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none', cursor: 'pointer' }}>
                    <IconSpeaker size={17} color="var(--accent-strong)" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 15.5 }}>{fld(p, target)}</div>
                    <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 2 }}>{fld(p, base)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

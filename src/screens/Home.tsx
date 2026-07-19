import { useHablo, displayStreak } from '../store';
import { useUi } from '../lib/useUi';
import { isDueToday } from '../lib/date';
import { IconVocab, IconBuilder, IconPron, IconReview, IconArrowRight, IconCheckmark } from '../components/Icons';

export function Home() {
  const { t, lang } = useUi();
  const go = useHablo((s) => s.go);
  const xp = useHablo((s) => s.xp);
  const streak = useHablo(displayStreak);
  const streakFreezes = useHablo((s) => s.streakFreezes);
  const streakFreezeActive = useHablo((s) => s.streakFreezeActive);
  const useFreeze = useHablo((s) => s.useFreeze);
  const xpBoost = useHablo((s) => s.xpBoost);
  const toggleBoost = useHablo((s) => s.toggleBoost);
  const challenges = useHablo((s) => s.challenges);
  const toggleChallenge = useHablo((s) => s.toggleChallenge);
  const srs = useHablo((s) => s.srs);
  const srsPhrases = useHablo((s) => s.srsPhrases);
  const srsPron = useHablo((s) => s.srsPron);
  const srsDict = useHablo((s) => s.srsDict);
  const srsBuilder = useHablo((s) => s.srsBuilder);

  const dueCount = [srs, srsPhrases, srsPron, srsDict, srsBuilder].reduce((sum, list) => sum + list.filter((i) => isDueToday(i.dueAt)).length, 0);
  const dailyChallenges = { pl: 'Dzienne wyzwania', es: 'Retos diarios', en: 'Daily challenges' }[lang];
  const doneCount = challenges.filter((c) => c.done).length;

  return (
    <div>
      <div className="hb-hero-row" style={{ display: 'flex', gap: 20, alignItems: 'stretch', flexWrap: 'wrap' }}>
        <div className="hb-hero-card" style={{ flex: 1, minWidth: 340, background: 'linear-gradient(135deg,var(--accent),var(--accent-strong))', borderRadius: 22, padding: '28px 30px', color: '#fff', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: -30, bottom: -30, width: 150, height: 150, borderRadius: '50%', background: 'rgba(255,255,255,.08)' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ fontSize: 13, fontWeight: 600, opacity: 0.85 }}>{t.continueSub}</div>
            <div style={{ fontSize: 26, fontWeight: 800, marginTop: 6, letterSpacing: '-.02em' }}>{t.greet}</div>
            <div style={{ fontSize: 14.5, opacity: 0.9, marginTop: 8, maxWidth: 360, lineHeight: 1.5 }}>{t.greetSub}</div>
            <div
              onClick={() => go('vocab')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 20, background: 'var(--surface)', color: 'var(--accent-strong)', fontWeight: 800, fontSize: 14.5, padding: '12px 20px', borderRadius: 12, cursor: 'pointer' }}
            >
              {t.start}
              <IconArrowRight />
            </div>
          </div>
        </div>
        <div className="hb-hero-stats" style={{ flex: 'none', width: 230, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 22, padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: 13, background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <div style={{ width: 14, height: 14, borderRadius: '50%', background: 'var(--accent)' }} />
              {streakFreezeActive && <div style={{ position: 'absolute', top: -4, right: -4, fontSize: 13 }}>🧊</div>}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 24, fontWeight: 800, lineHeight: 1 }}>{streak}</div>
              <div style={{ fontSize: 12.5, color: 'var(--muted)', fontWeight: 600 }}>{t.streak}</div>
            </div>
            <div
              onClick={useFreeze}
              style={{ fontSize: 11, fontWeight: 800, padding: '5px 8px', borderRadius: 9, background: streakFreezeActive ? 'var(--accent-soft2)' : 'var(--panel)', color: streakFreezeActive ? 'var(--accent-strong)' : 'var(--muted)', cursor: 'pointer', whiteSpace: 'nowrap' }}
            >
              🧊 {streakFreezes}
            </div>
          </div>
          <div style={{ height: 1, background: 'var(--border)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: 13, background: 'var(--warn-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 14, height: 14, borderRadius: 4, background: '#E0A030' }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 24, fontWeight: 800, lineHeight: 1 }}>{xp}</div>
              <div style={{ fontSize: 12.5, color: 'var(--muted)', fontWeight: 600 }}>{t.xpToday}</div>
            </div>
            <div
              onClick={toggleBoost}
              style={{ fontSize: 11, fontWeight: 800, padding: '5px 8px', borderRadius: 9, background: xpBoost ? '#E0A030' : 'var(--panel)', color: xpBoost ? '#fff' : 'var(--muted)', cursor: 'pointer', whiteSpace: 'nowrap' }}
            >
              ⚡ 2X
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 20, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 18, padding: '18px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 13, fontWeight: 800 }}>{dailyChallenges}</div>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--muted)' }}>{doneCount}/{challenges.length}</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 10 }}>
          {challenges.map((c) => (
            <div key={c.id} onClick={() => toggleChallenge(c.id)} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '9px 2px', cursor: 'pointer' }}>
              <div style={{ width: 22, height: 22, borderRadius: 7, flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', background: c.done ? 'var(--good)' : 'transparent', border: `1.5px solid ${c.done ? 'var(--good)' : 'var(--border-2)'}` }}>
                {c.done && <IconCheckmark />}
              </div>
              <div style={{ flex: 1, fontSize: 14, fontWeight: 600, color: c.done ? 'var(--muted)' : 'var(--ink)', textDecoration: c.done ? 'line-through' : 'none' }}>{c[lang]}</div>
              <div style={{ fontSize: 12, fontWeight: 800, color: '#E0A030' }}>+{c.xp}</div>
            </div>
          ))}
        </div>
      </div>

      <div onClick={() => go('srs')} style={{ marginTop: 14, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 18, padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }}>
        <div style={{ width: 46, height: 46, borderRadius: 13, background: 'var(--good-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
          <IconReview size={22} color="var(--good)" />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 800, fontSize: 15.5 }}>
            <span style={{ color: 'var(--accent)' }}>{dueCount}</span> {t.dueToday}
          </div>
          <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 2 }}>{t.reviewNow}</div>
        </div>
        <IconArrowRight size={20} color="var(--faint)" />
      </div>

      <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', margin: '26px 0 14px' }}>{t.quick}</div>
      <div className="hb-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
        <div onClick={() => go('vocab')} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 18, padding: 20, cursor: 'pointer' }}>
          <div style={{ width: 42, height: 42, borderRadius: 12, background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <IconVocab size={21} color="var(--accent)" />
          </div>
          <div style={{ fontWeight: 800, fontSize: 15, marginTop: 14 }}>{t.vocab}</div>
          <div style={{ fontSize: 12.5, color: 'var(--muted)', marginTop: 3, lineHeight: 1.4 }}>A1 · Basics · 8 cards</div>
        </div>
        <div onClick={() => go('builder')} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 18, padding: 20, cursor: 'pointer' }}>
          <div style={{ width: 42, height: 42, borderRadius: 12, background: 'var(--good-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <IconBuilder size={21} color="var(--good)" />
          </div>
          <div style={{ fontWeight: 800, fontSize: 15, marginTop: 14 }}>{t.builder}</div>
          <div style={{ fontSize: 12.5, color: 'var(--muted)', marginTop: 3, lineHeight: 1.4 }}>A1 · Word order</div>
        </div>
        <div onClick={() => go('pronounce')} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 18, padding: 20, cursor: 'pointer' }}>
          <div style={{ width: 42, height: 42, borderRadius: 12, background: 'var(--warn-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <IconPron size={21} color="#E0A030" />
          </div>
          <div style={{ fontWeight: 800, fontSize: 15, marginTop: 14 }}>{t.pronounce}</div>
          <div style={{ fontSize: 12.5, color: 'var(--muted)', marginTop: 3, lineHeight: 1.4 }}>Speech recognition</div>
        </div>
      </div>
    </div>
  );
}

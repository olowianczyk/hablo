import { useEffect } from 'react';
import { useHablo } from './store';
import { themeVars } from './lib/colors';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { ReviewBar } from './components/ReviewBar';
import { InstallPrompt } from './components/InstallPrompt';
import { Home } from './screens/Home';
import { Levels } from './screens/Levels';
import { Vocabulary } from './screens/Vocabulary';
import { Phrasebook } from './screens/Phrasebook';
import { Dictation } from './screens/Dictation';
import { Builder } from './screens/Builder';
import { Pronunciation } from './screens/Pronunciation';
import { Review } from './screens/Review';
import { Stats } from './screens/Stats';
import type { Level, Word, PhraseCategory } from './data/content';

const SCREENS: Record<string, () => React.ReactElement | null> = {
  home: Home, levels: Levels, vocab: Vocabulary, phrasebook: Phrasebook,
  listen: Dictation, builder: Builder, pronounce: Pronunciation, srs: Review, stats: Stats,
};

const LEVEL_KEYS: Level[] = ['A1', 'A2', 'B1', 'B2'];

function App() {
  const screen = useHablo((s) => s.screen);
  const dark = useHablo((s) => s.dark);
  const accent = useHablo((s) => s.accent);
  const loadExtraWords = useHablo((s) => s.loadExtraWords);
  const loadExtraPhrases = useHablo((s) => s.loadExtraPhrases);

  useEffect(() => {
    import('./data/words.js').then((m: any) => {
      const map = (a: any[]) => (a || []).map((w) => ({ es: w[0], en: w[1], pl: w[2], exEs: w[3], exEn: w[4], exPl: w[5] } as Word));
      LEVEL_KEYS.forEach((lv) => loadExtraWords(lv, map(m[`${lv}WORDS`])));
    });
    import('./data/phrases.js').then((m: any) => {
      const cat = (c: any): PhraseCategory => ({ titleEn: c.titleEn, titlePl: c.titlePl, phrases: (c.phrases || []).map((p: any) => ({ es: p[0], en: p[1], pl: p[2] })) });
      LEVEL_KEYS.forEach((lv) => loadExtraPhrases(lv, (m[`${lv}PHRASES`] || []).map(cat)));
    });
  }, [loadExtraWords, loadExtraPhrases]);

  const Screen = SCREENS[screen];
  const vars = themeVars(dark, accent);

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100%', overflow: 'hidden', background: 'var(--bg)', ...(vars as React.CSSProperties) }}>
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <Header />
        <main style={{ flex: 1, overflow: 'auto', padding: '32px 40px' }}>
          <div key={screen} style={{ maxWidth: 960, margin: '0 auto', animation: 'hb-rise .3s ease' }}>
            <Screen />
          </div>
        </main>
      </div>
      <ReviewBar />
      <InstallPrompt />
    </div>
  );
}

export default App;

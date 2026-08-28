import { useEffect } from 'react';
import { useHablo } from './store';
import { themeVars } from './lib/colors';
import { Sidebar } from './components/Sidebar';
import { BottomNav } from './components/BottomNav';
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
import { loadWords, loadPhrases } from './data/load';

const SCREENS: Record<string, () => React.ReactElement | null> = {
  home: Home, levels: Levels, vocab: Vocabulary, phrasebook: Phrasebook,
  listen: Dictation, builder: Builder, pronounce: Pronunciation, srs: Review, stats: Stats,
};

// ponytail: each level's word/phrase file is its own module (~60-80KB) so a
// learner on A1 never downloads B2's vocabulary. Loaded on demand as the
// user picks a level, not all four upfront.
function useLevelContent() {
  const level = useHablo((s) => s.level);
  const hasWords = useHablo((s) => !!s.extraWords[s.level]);
  const hasPhrases = useHablo((s) => !!s.extraPhrases[s.level]);
  const loadExtraWords = useHablo((s) => s.loadExtraWords);
  const loadExtraPhrases = useHablo((s) => s.loadExtraPhrases);

  useEffect(() => {
    if (hasWords) return;
    loadWords(level).then((words) => loadExtraWords(level, words));
  }, [level, hasWords, loadExtraWords]);

  useEffect(() => {
    if (hasPhrases) return;
    loadPhrases(level).then((cats) => loadExtraPhrases(level, cats));
  }, [level, hasPhrases, loadExtraPhrases]);
}

function App() {
  const screen = useHablo((s) => s.screen);
  const dark = useHablo((s) => s.dark);
  const accent = useHablo((s) => s.accent);
  useLevelContent();

  const Screen = SCREENS[screen];
  const vars = themeVars(dark, accent);

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100%', overflow: 'hidden', background: 'var(--bg)', ...(vars as React.CSSProperties) }}>
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <Header />
        <main className="hb-main" style={{ flex: 1, overflow: 'auto', padding: '32px 40px' }}>
          <div key={screen} style={{ maxWidth: 960, margin: '0 auto', animation: 'hb-rise .3s ease' }}>
            <Screen />
          </div>
        </main>
      </div>
      <BottomNav />
      <ReviewBar />
      <InstallPrompt />
    </div>
  );
}

export default App;

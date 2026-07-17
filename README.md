# hablo.

Spanish/English/Polish language-learning web app — vocabulary flashcards, phrasebook, sentence builder, pronunciation analysis (speech recognition), listening dictation, and a spaced-repetition (SRS) review hub. CEFR levels A1–C2, six learning directions, light/dark themes, user-selectable accent color, and a small gamification layer (streaks, XP, daily challenges, badges).

Built from the design handoff in [`design_handoff_hablo_app/`](design_handoff_hablo_app/README.md).

## Stack

- React + TypeScript + Vite
- Zustand (state, persisted to `localStorage`)
- Web Speech API (`speechSynthesis` for TTS, `SpeechRecognition` for pronunciation/dictation)
- No backend — all content is static; SRS scheduling and gamification state live in the browser

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Project layout

- `src/data/content.ts` — decks, phrasebook, sentence-builder sentences, pronunciation drills, SRS seed data, UI strings (es/en/pl)
- `src/data/words.js`, `src/data/phrases.js` — bulk vocabulary/phrasebook content
- `src/store.ts` — app state and logic (SRS scheduling, XP/gamification, TTS, speech recognition)
- `src/screens/` — the 9 screens (Home, Levels, Vocabulary, Phrasebook, Dictation, Sentence Builder, Pronunciation, Review, Progress)
- `src/components/` — Sidebar, Header, shared UI pieces

# Handoff: Hablo — Spanish/English/Polish Learning App

## Overview
Hablo is a language-learning web app (desktop + a companion mobile screen set) covering CEFR levels A1–C2, built around six core learning loops: vocabulary flashcards, a phrasebook, a drag-style sentence builder, pronunciation analysis (speech recognition), listening dictation, and a spaced-repetition (SRS) review hub. It supports six learning directions (Spanish/English/Polish in any pairing), light/dark themes, a user-selectable accent color, and a small gamification layer (streaks, XP, daily challenges, badges).

## About the Design Files
The files in `design_reference/` are **HTML design prototypes**, not production code to copy directly. They were built in a proprietary component format (`.dc.html`: a template + a plain-JS logic class, streamed and re-rendered by a custom runtime script `support.js` — **do not port that runtime**). Treat every `.dc.html` file purely as a visual/interaction reference.

**Your task:** recreate these designs in the target codebase's existing stack (React/Vue/SwiftUI/native/etc.), following its established patterns, component library, and state-management conventions. If no app codebase exists yet, choose the framework best suited to the product (a React + TypeScript SPA, or React Native/Flutter if truly native mobile apps are wanted) and implement fresh — don't try to run the `.dc.html` files as-is or reuse `support.js`.

## Fidelity
**High-fidelity.** Colors, spacing, typography, and copy in the reference files are final — recreate pixel-accurately. Exact hex values and a full token table are below.

## Screens / Views

### 1. App shell (desktop, `Hablo.dc.html`)
Two-column layout: fixed left sidebar (252px) + main content area.
- **Sidebar**: logo mark (36×36 rounded-12 gradient square with a simple smiling-face glyph) + wordmark "hablo." (20px/800), then a vertical nav list (7 items: Home, Levels, Vocabulary, Phrasebook, Dictation, Sentence Builder, Pronunciation, Review — each a row: 20px icon + 14.5px/600 label, 11px border-radius, active state = accent-soft background + accent-strong text), then a pinned-to-bottom "league" card (dark/invert background, rounded-16, shows league rank "#4 / 30" with a progress bar).
- **Header** (sticky, blurred backdrop): page title (19px/800) — spacer — streak pill (colored dot + count + "day streak") — daily-goal ring (SVG circular progress, 34×34, stroke `--accent`) with "3/5 Daily goal" — direction selector (`<select>`: 6 options, e.g. "Learn Spanish · from English") — voice picker (`<select>`, only shown if browser voices exist for the current target language) — EN/PL language pill — user avatar circle (38×38 gradient, initial letter).
- **Main content**: centered column, max-width 960px, padding 32px/40px, fades/rises in on screen change (`opacity 0→1, translateY 8px→0`, 0.3s ease).

### 2. Home
- Hero card (full width minus a 230px stats card): gradient background (`accent → accent-strong`), greeting + subtitle + "Continue" pill button (white bg, accent-strong text).
- Stats card: streak row (icon + count) and XP row (icon + count), each with a small action pill — 🧊 streak-freeze counter (click to consume 1 of 2 freezes, badges the streak icon with a frost emoji when active) and ⚡ 2X XP-boost toggle (turns amber when active; doubles all XP gains while on).
- "X due for review" banner (clickable → Review screen).
- **Daily Challenges card**: header with "n/6 done" counter, list of checkbox rows (22×22 rounded-7 checkbox, strike-through label + muted color when done, "+XP" amber badge on the right). Checking a challenge adds its XP to the running total (doubled under the 2X boost).
- "Jump back in" 3-up grid: Vocabulary / Sentence Builder / Pronunciation quick-launch cards (42×42 icon tile, 15px/800 title, 12.5px muted subtitle).

### 3. Levels (CEFR path)
Vertical list of 6 level rows (A1–C2). Each row: 56×56 rounded-16 code badge (accent for active, good-green for unlocked/available, panel-gray for locked) + level name + status pill (In progress / Available / Locked) + description + progress bar (only for unlocked levels). Clicking an unlocked level jumps to Vocabulary at that level.

### 4. Vocabulary (flashcards)
Level toggle (A1/A2/B1/B2 pill switcher). Card: large front word (42px/800) with a "Listen" pill button (plays TTS); tap-to-flip reveals translation (32px/800, accent-strong) + a horizontal rule + an example sentence pair (target + base language) if present. Below the card: 4-way SRS rating row — **Again / Hard / Good / Easy** — each a distinct color (accent / warn / good / invert-black) and each applies a different spaced-repetition interval (see State Management).

### 5. Phrasebook
Level toggle (A1–B2). Categories rendered as titled sections (category name + phrase count pill), each a card list of phrase rows: speaker icon button (38×38, plays target-language TTS) + Spanish phrase (15.5px/700) + translation (13px, muted).

### 6. Dictation (listening)
Level toggle (A1–B2). Card: "Card n/N" mono-font counter, a large "▶ Replay" pill button (solid accent) + a "🐢 Slow" secondary button (plays at 0.55x rate), a text input for the typed transcription, a "Check" button. On check: word-by-word diff coloring (good-green for correct words typed, accent-red for the rest) plus a correct/wrong banner and the full answer + translation revealed, with a "Next" button.

### 7. Sentence Builder
Level toggle (A1–B2). Shows the target-language sentence prompt (translated into the base language) + a "hear full sentence" speaker button. A dashed drop-zone area holds word blocks the user has placed (dark pill blocks, click to remove); below it, a wrapping row of the shuffled remaining word-bank blocks (click to append). "Check" / "Clear" buttons; correct/incorrect banner on check. Below that, a **glossary card**: every word used in the sentence, each with its own small speaker button + translation — this list is always visible regardless of build state.

### 8. Pronunciation
Level toggle (A1–B2) plus a horizontal chip list of practice words/phrases for the current level. Card: large target text + translation + "Listen" link, a big circular mic button (88×88, pulses via `box-shadow` keyframe animation while recording — uses the Web Speech API `SpeechRecognition`), then per-syllable score bars (vertical bar chart, one bar per syllable, colored green/amber/red by score) plus an overall score and a level-appropriate pronunciation tip (amber tip callout).

### 9. Review (SRS hub)
Top: title + a dark "N items due today / Start review session" card. Below: **five separate tables**, one per content type — Vocabulary, Phrasebook, Pronunciation, Dictation, Sentence Builder — each row showing the item, a memory-strength bar + %, a due-date pill ("Today" highlighted in accent, otherwise "in N days"/"Tomorrow"), and a speaker icon (or, for pronunciation/dictation/builder rows, clicking the row jumps to that screen to practice the item).
A **floating session bar** (fixed, bottom-center, dark pill) appears once a review session starts: "Reviewing 2/7" + "Next →" button (marks the current item reviewed and advances to the next item's screen) + "✕" to exit early. Finishing the queue returns to Review with a "Session complete! 🎉" message.

### 10. Progress / Stats dashboard
4-up stat tiles (Words learned, Accuracy %, Minutes, Best streak). Weekly XP bar chart (7 bars, current day highlighted). A 28-day activity calendar grid (done/not-done dots). Level-progress bars (A1 %, A2 %). An achievements/badges grid (6+ badges: 🔥 21-day streak, 📚 200 words, 🎯 Perfect lesson, 🏆 Gold League, 🎤 50 pronunciations (locked), ⭐ A2 complete (locked), 📅 Perfect week, 🌱 7-day streak — locked badges shown at 40% opacity). Finally a dark "SRS due" summary card (per-category due breakdown text) that launches a review session.

### 11. Mobile screens (`Hablo Mobile.dc.html`)
A canvas gallery of 7 iPhone-framed screens (402×874, via the `ios-frame.jsx` device bezel) showing the same core loops adapted to a bottom tab bar (`HabloTab.dc.html`: Home / Vocab / Phrasebook / Review / Profile, 84px tall). Only the Phrasebook screen is interactive in this file (loads `phrases.js`, has its own A1–B2 toggle); the rest are static visual references of Home, Vocabulary, Sentence Builder, Pronunciation, Smart Review (now including the "All screens" due-count breakdown block), and Dictation.

## Interactions & Behavior
- **Text-to-speech**: every word/phrase/sentence has a speaker icon that calls the Web Speech API (`speechSynthesis`). Implementation detail worth preserving: call `speechSynthesis.cancel()`, then wait ~90ms before `speak()` — calling immediately clips the first syllable (especially noticeable in Polish). Voice selection: prefer an exact `lang` match (e.g. `pl-PL`), fall back to a language-prefix match (`pl`), and let the user override via the voice `<select>` in the header (persisted per target-language in state).
- **Speech recognition**: Pronunciation screen uses `SpeechRecognition`/`webkitSpeechRecognition`, language set to the current target language's BCP-47 code. Recording state drives the pulsing mic animation; on result, syllables are scored (mocked/simulated scores in this prototype — a real implementation needs actual phoneme/pronunciation scoring, e.g. via a server-side model or a service like Azure Pronunciation Assessment).
- **Direction switcher**: 6 combinations (es↔en, es↔pl, en↔pl in both directions) recompute which language is "target" (being learned, gets TTS + recognition) vs "base" (interface + translations). All content (vocab, phrases, dictation sentences) is stored trilingually so any pairing works without new data.
- **Theme**: light/dark toggle recomputes a full CSS-custom-property palette (see Design Tokens) injected via an inline `--var` style object on the root container; components consume `var(--token)` everywhere — no hardcoded colors outside the two palettes and level-code accent colors.
- **Accent color**: user-selectable; other accent-derived tokens (`--accent-soft`, `--accent-soft2`, `--accent-strong`) are computed at runtime via a color-mix helper (`_mix(color, white/black, ratio)`), not fixed hexes — recreate as a token-generation function, not a lookup table.
- **SRS rating → real intervals**: Again resets interval to 1 day, marks due "Today", strength −20. Hard: interval ×1.2, strength +6. Good: interval ×2.5, strength +15. Easy: interval ×4, strength +22. Strength clamps 0–100; due label derives from the resulting interval ("Today"/"Tomorrow"/"in N days").
- **Review session engine**: "Start review" builds one flat queue from all five due-item arrays (in a fixed type order), navigates screen-by-screen; "Next" applies the interval math to the current item and advances; finishing shows a completion state for ~3.5s.
- **Gamification**: XP is a running counter incremented by rating grade (Again +5, Hard +8, Good +10, Easy +15) or by completing a review-session step (+10) or a daily challenge (challenge-specific value), all doubled while the 2X boost is active. Streak-freeze is a simple counter (starts at 2) consumed on click, no expiry logic implemented (would need a "missed day" detection tied to real dates in production).
- **Animations**: page-content fade/rise on screen change (CSS keyframe `hb-rise`); mic-recording pulse (`hb-pulse`, animated `box-shadow` ring).

## State Management
Rebuild as normal app state (Redux/Zustand/Context/whatever the target app uses) — the prototype keeps it in one component's local state:
- `screen` (current view id), `level` (A1/A2/B1/B2), `dir` (learning-direction string, e.g. `"es>en"`), `lang`/UI language derived from `dir`'s base language.
- `dark` (theme), `accent` (hex), `voiceSel` (map of target-lang → chosen voice URI), `speakRate`.
- Per-screen ephemeral state: flashcard index/flip, builder slots, dictation input/checked, recording/result, pronunciation word index.
- **SRS data**: five arrays (`srs`, `srsPhrases`, `srsPron`, `srsDict`, `srsBuilder`), each item shaped `{ es, en, pl, strength, interval, today, dueEn, duePl }`. This is the data a real backend/DB should own — per-user, per-item scheduling state.
- **Review session**: `reviewQueue` (ordered list of `{kind, item}` refs), `reviewPos`, `reviewDone`.
- **Gamification**: `xp`, `xpBoost`, `streakFreezes`, `streakFreezeActive`, `challenges` (array of `{id, label, xp, done}`).
- No backend/data-fetching exists in the prototype — all content is static JS data (see Assets below). Production needs: user accounts, persisted SRS scheduling (ideally server-side, e.g. an SM-2 implementation), streak/XP persistence, and real pronunciation-scoring integration.

## Design Tokens

### Typography
- Font family: `'Plus Jakarta Sans', system-ui, sans-serif` (headings/body); `'JetBrains Mono', monospace` for small counters ("Card 3/8").
- Weights used: 400, 500, 600, 700, 800. Headings are 800; body/labels 600–700.
- Scale in use: 11 / 12 / 12.5 / 13 / 13.5 / 14 / 14.5 / 15 / 15.5 / 16 / 17 / 19 / 20 / 22 / 24 / 26 / 30 / 32 / 34 / 40 / 42px.

### Color — Light theme
| Token | Hex |
|---|---|
| `--bg` | `#F3F1EC` |
| `--surface` | `#FFFFFF` |
| `--panel` | `#EFEBE3` |
| `--panel-soft` | `#F7F5F1` |
| `--border` | `#E9E5DE` |
| `--border-2` | `#E0DCD3` |
| `--ink` | `#1C1B19` |
| `--ink-2` | `#57544E` |
| `--muted` | `#7A776F` |
| `--faint` | `#9B988F` |
| `--invert-bg` | `#1C1B19` |
| `--good` | `#2E9E6B` |
| `--good-strong` | `#1E7A50` |
| `--good-soft` | `#EAF3EE` |
| `--warn` | `#C98A2E` |
| `--warn-soft` | `#FBF3DE` |

### Color — Dark theme
| Token | Hex |
|---|---|
| `--bg` | `#1A1815` |
| `--surface` | `#242019` |
| `--panel` | `#2C2823` |
| `--panel-soft` | `#211E19` |
| `--border` | `#38332C` |
| `--border-2` | `#443E36` |
| `--ink` | `#F2EFE9` |
| `--ink-2` | `#C8C3B9` |
| `--muted` | `#A29C93` |
| `--faint` | `#847F76` |
| `--invert-bg` | `#000000` |
| `--good` | `#3FB77F` |
| `--good-strong` | `#54C692` |
| `--good-soft` | `#182A20` |
| `--warn` | `#D9A24A` |
| `--warn-soft` | `#2C2413` |

### Accent (user-selectable, default shown; others derived by color-mix at runtime)
- Default accent: `#DE5B3B` (terracotta). Preset swatch options used elsewhere in the app: `#DE5B3B`, `#E0902A`, `#2F9E7A`, `#2F86C9`, `#6C5CE0`, `#D9527E`.
- `--accent-strong`: accent mixed toward black ~15–20%.
- `--accent-soft`: accent mixed toward white ~85–90% (light) / toward `--bg` ~90% (dark) — used as icon-tile backgrounds and active-nav backgrounds.
- `--accent-soft2`: a slightly stronger soft mix (~72–80%), used for hover states.

### Spacing / radius
- Border radius scale: 7 / 9 / 10 / 11 / 12 / 13 / 14 / 16 / 18 / 20 / 22 / 24px (larger radii on hero/card containers, smaller on pills/buttons).
- Common gaps: 8 / 10 / 12 / 14 / 16 / 18 / 20px.
- Card padding: 16–32px depending on card size.

### Shadows
- Hero/card containers: no heavy shadow — the design is flat with borders, not shadow-driven (matches a "clean SaaS" aesthetic). The one exception is the floating review-session bar: `box-shadow: 0 16px 40px rgba(0,0,0,.3)`.

## Assets
- **`words.js`**: vocabulary data, ES modules exporting `A1WORDS`, `A2WORDS`, `B1WORDS`, `B2WORDS` — each entry is a tuple `[es, en, pl, exEs?, exEn?, exPl?]` (last three = optional example sentence). ~500+ words per level.
- **`phrases.js`**: phrasebook data, exporting `A1PHRASES`, `A2PHRASES`, `B1PHRASES`, `B2PHRASES` — each an array of categories `{titleEn, titlePl, phrases:[{es,en,pl}]}`, 40 phrases per category.
- **`icon-192.png` / `icon-512.png`**: app icon (PWA manifest icons).
- **`manifest.webmanifest`** / **`sw.js`**: PWA install/service-worker scaffolding from the prototype — reference only for install-prompt UX, not required to port verbatim.
- No other imagery is used — the whole UI is built from inline SVG icons (stroke-based, 1.9–2.4px stroke width, rounded caps/joins) and CSS shapes. No icon font, no external icon library.

## Files
- `design_reference/Hablo.dc.html` — the full desktop web app (all 10 screens, single file, template + logic class).
- `design_reference/Hablo Mobile.dc.html` — canvas gallery of 7 mobile screens in iPhone frames.
- `design_reference/HabloTab.dc.html` — shared mobile bottom tab-bar component.
- `design_reference/ios-frame.jsx` — device-bezel wrapper used only for presenting the mobile mockups; not part of the product UI itself.
- `design_reference/words.js`, `design_reference/phrases.js` — all vocabulary/phrasebook content data.
- `design_reference/icon-192.png`, `design_reference/icon-512.png`, `design_reference/manifest.webmanifest` — PWA assets.

import { todayISO, addDays } from '../lib/date.ts';

export type Word = {
  es: string;
  en: string;
  pl: string;
  de?: string;
  exEs?: string;
  exEn?: string;
  exPl?: string;
  exDe?: string;
};
export type Phrase = { es: string; en: string; pl: string; de?: string };
export type PhraseCategory = { titleEn: string; titlePl: string; titleDe?: string; phrases: Phrase[] };
export type Gloss = { es: string; en: string; pl: string; de?: string };
export type BuilderSentence = {
  /** The blocks to assemble, in the study language of the set this sentence belongs to. */
  target: string[];
  es?: string;
  en: string;
  pl: string;
  de?: string;
  glossary: Gloss[];
};
export type PronItem = {
  es: string;
  en: string;
  pl: string;
  de?: string;
  syl: string[];
  tipEn: string;
  tipPl: string;
  tipEs: string;
  tipDe?: string;
};
export type SrsItem = {
  es: string;
  en: string;
  pl: string;
  de?: string;
  strength: number;
  dueAt: string;
  interval?: number;
};
export type LevelDef = {
  code: string;
  en: string;
  pl: string;
  de: string;
  dEn: string;
  dPl: string;
  dDe: string;
  status: 'active' | 'available' | 'locked';
  progress: number;
};
export type Challenge = { id: string; en: string; pl: string; es: string; de: string; xp: number; done: boolean };
export type Level = 'A1' | 'A2' | 'B1' | 'B2';

export const strings = {
  es: {
    home: 'Inicio', levels: 'Niveles', vocab: 'Vocabulario', phrases: 'Conversación', builder: 'Formar frases', pronounce: 'Pronunciación', review: 'Repaso',
    greet: 'Buenos días, Alex', greetSub: 'Tienes 3 palabras para repasar hoy. ¿Empezamos?',
    continueSub: 'A1 · Básico · Saludos', start: 'Continuar',
    streak: 'días seguidos', dailyGoal: 'Meta diaria', league: 'Liga Oro', xpToday: 'XP hoy',
    quick: 'Retomar', dueToday: 'para repasar', reviewNow: 'Repasar ahora', keepGoing: 'Mantén tu racha',
    flipHint: 'Toca la tarjeta para girarla', again: 'Otra vez', hard: 'Difícil', good: 'Bien', easy: 'Fácil', example: 'Ejemplo', listen: 'Escuchar', card: 'Tarjeta',
    levelsTitle: 'Tu camino de aprendizaje', levelsSub: 'La escala MCER, de tus primeras palabras a la fluidez', locked: 'Bloqueado', inProgress: 'En curso', available: 'Disponible',
    phrasesTitle: 'Conversación', phrasesSub: 'Frases reales que sí usarás — toca una línea para oírla',
    builderTitle: 'Forma la frase', builderSub: 'Toca los bloques en el orden correcto', build: 'Forma:', check: 'Comprobar', clear: 'Borrar', correct: '¡Perfecto! Correcto.', wrong: 'Casi — prueba a reordenar.', glossary: 'Glosario — cada palabra de la frase', glossaryHint: 'Toca una palabra para oírla', nextSentence: 'Otra frase',
    pronTitle: 'Análisis de pronunciación', pronSub: 'Dilo en voz alta — analizamos cada sílaba', record: 'Toca para hablar', listening: 'Escuchando…', yourScore: 'Tu puntuación', tryAgain: 'Intentar de nuevo', great: '¡Excelente pronunciación!', goodJob: 'Bien — ¡casi lo tienes!', keepPracticing: 'Sigue practicando', syllableBreakdown: 'Sílaba por sílaba', accuracy: 'Precisión', fluency: 'Fluidez', completeness: 'Integridad', intonation: 'Entonación', weHeard: 'Oímos', targetLabel: 'Objetivo', tipLabel: 'Consejo', practiceWords: 'Palabras de práctica', saveReview: 'Guardar para repasar', checkPron: 'Comprobar mi pronunciación', checkPronSub: 'Toca el micro y dilo en voz alta', checkSentencePron: 'Comprobar pronunciación de la frase', chromeNote: 'Chrome es el navegador recomendado — el reconocimiento de voz solo funciona bien ahí.', recUnsupported: 'Este navegador no reconoce la voz. Abre Hablo en Chrome.', recDenied: 'Sin acceso al micrófono. Permítelo en los ajustes del navegador.', recNoSpeech: 'No oímos nada — acércate al micro e inténtalo de nuevo.', recFailed: 'Falló el reconocimiento — inténtalo de nuevo.', dictNav: 'Dictado', dictTitle: 'Escucha y escribe', dictSub: 'Reproduce la frase y escribe lo que oigas', dictType: 'Escribe lo que oyes', dictPlaceholder: 'Escribe aquí…', dictCheck: 'Comprobar', dictReveal: 'Ver respuesta', dictReplay: 'Reproducir', dictSlow: 'Lento 0.5×', dictNext: 'Siguiente', dictCorrect: '¡Correcto! Perfecto.', dictWrong: 'Casi — compara abajo.', dictAnswer: 'Respuesta', installTitle: 'Instalar Hablo', installBody: 'Añade Hablo a tu escritorio para acceso rápido, lecciones sin conexión y pantalla completa.', installBtn: 'Instalar app', installLater: 'Ahora no', installHelp: 'Para instalar: abre el menú del navegador y elige «Instalar Hablo» o «Añadir a la pantalla de inicio».',
    reviewTitle: 'Repaso inteligente (SRS)', reviewSub: 'La repetición espaciada trae cada palabra justo antes de olvidarla', memory: 'Memoria', due: 'Toca', startReview: 'Empezar sesión de repaso', itemsDue: 'para repasar hoy', statsNav: 'Progreso', statsTitle: 'Tu progreso', statsSub: 'Sigue tu avance semana a semana', wordsLearned: 'Palabras aprendidas', accuracy2: 'Precisión', minutes: 'Minutos estudiados', bestStreak: 'Mejor racha', lessonsDone: 'Lecciones hechas', weeklyXP: 'XP semanal', activity: 'Actividad — últimas 4 semanas', levelProgress: 'Progreso por nivel', achievements: 'Logros', days: 'días',
  },
  en: {
    home: 'Home', levels: 'Levels', vocab: 'Vocabulary', phrases: 'Phrasebook', builder: 'Sentence Builder', pronounce: 'Pronunciation', review: 'Review',
    greet: 'Good morning, Alex', greetSub: 'You have 3 words due today. Ready to continue?',
    continueSub: 'A1 · Basics · Greetings', start: 'Continue',
    streak: 'day streak', dailyGoal: 'Daily goal', league: 'Gold League', xpToday: 'XP today',
    quick: 'Jump back in', dueToday: 'due for review', reviewNow: 'Review now', keepGoing: 'Keep your streak alive',
    flipHint: 'Tap the card to flip', again: 'Again', hard: 'Hard', good: 'Good', easy: 'Easy', example: 'Example', listen: 'Listen', card: 'Card',
    levelsTitle: 'Your learning path', levelsSub: 'The CEFR scale, from your first words to fluency', locked: 'Locked', inProgress: 'In progress', available: 'Available',
    phrasesTitle: 'Phrasebook', phrasesSub: "Real phrases you'll actually use — tap any line to hear it",
    builderTitle: 'Build the sentence', builderSub: 'Tap the blocks in the right order', build: 'Build:', check: 'Check', clear: 'Clear', correct: "¡Perfecto! That's right.", wrong: 'Not quite — try reordering.', glossary: 'Glossary — every word in this sentence', glossaryHint: 'Tap a word to hear it', nextSentence: 'Next sentence',
    pronTitle: 'Pronunciation check', pronSub: 'Say it out loud — we analyze every syllable', record: 'Tap to speak', listening: 'Listening…', yourScore: 'Your score', tryAgain: 'Try again', great: 'Great pronunciation!', goodJob: 'Good — almost there!', keepPracticing: 'Keep practicing', syllableBreakdown: 'Syllable by syllable', accuracy: 'Accuracy', fluency: 'Fluency', completeness: 'Completeness', intonation: 'Intonation', weHeard: 'We heard', targetLabel: 'Target', tipLabel: 'Coaching tip', practiceWords: 'Practice words', saveReview: 'Save to review', checkPron: 'Check my pronunciation', checkPronSub: 'Tap the mic and say it aloud', checkSentencePron: 'Check sentence pronunciation', chromeNote: 'Chrome is the recommended browser — speech recognition only works well there.', recUnsupported: 'This browser has no speech recognition. Open Hablo in Chrome.', recDenied: 'No microphone access. Allow it in your browser settings.', recNoSpeech: "We didn't hear anything — move closer to the mic and try again.", recFailed: 'Recognition failed — try again.', dictNav: 'Dictation', dictTitle: 'Listen & type', dictSub: 'Play the phrase and type what you hear', dictType: 'Type what you hear', dictPlaceholder: 'Type in Spanish…', dictCheck: 'Check', dictReveal: 'Show answer', dictReplay: 'Play', dictSlow: 'Slow 0.5×', dictNext: 'Next phrase', dictCorrect: '¡Correcto! Perfect.', dictWrong: 'Not quite — compare below.', dictAnswer: 'Answer', installTitle: 'Install Hablo', installBody: 'Add Hablo to your desktop for one-tap access, offline lessons and a full-screen experience.', installBtn: 'Install app', installLater: 'Not now', installHelp: 'To install: open your browser menu and choose "Install Hablo" or "Add to Home screen".',
    reviewTitle: 'Smart Review (SRS)', reviewSub: "Spaced repetition brings each word back right before you'd forget it", memory: 'Memory', due: 'Due', startReview: 'Start review session', itemsDue: 'items due today', statsNav: 'Progress', statsTitle: 'Your progress', statsSub: 'Track your Spanish journey week by week', wordsLearned: 'Words learned', accuracy2: 'Accuracy', minutes: 'Minutes studied', bestStreak: 'Best streak', lessonsDone: 'Lessons done', weeklyXP: 'Weekly XP', activity: 'Activity — last 4 weeks', levelProgress: 'Level progress', achievements: 'Achievements', days: 'days',
  },
  pl: {
    home: 'Start', levels: 'Poziomy', vocab: 'Słówka', phrases: 'Rozmówki', builder: 'Budowanie zdań', pronounce: 'Wymowa', review: 'Powtórki',
    greet: 'Dzień dobry, Alex', greetSub: 'Masz dziś 3 słówka do powtórki. Zaczynamy?',
    continueSub: 'A1 · Podstawy · Powitania', start: 'Kontynuuj',
    streak: 'dni z rzędu', dailyGoal: 'Cel dzienny', league: 'Liga Złota', xpToday: 'XP dziś',
    quick: 'Wróć do nauki', dueToday: 'do powtórki', reviewNow: 'Powtórz teraz', keepGoing: 'Utrzymaj serię',
    flipHint: 'Dotknij kartę, aby obrócić', again: 'Jeszcze raz', hard: 'Trudne', good: 'Dobre', easy: 'Łatwe', example: 'Przykład', listen: 'Odsłuchaj', card: 'Karta',
    levelsTitle: 'Twoja ścieżka nauki', levelsSub: 'Skala CEFR — od pierwszych słów do biegłości', locked: 'Zablokowane', inProgress: 'W trakcie', available: 'Dostępne',
    phrasesTitle: 'Rozmówki', phrasesSub: 'Zwroty, których naprawdę użyjesz — dotknij, aby odsłuchać',
    builderTitle: 'Ułóż zdanie', builderSub: 'Dotykaj klocki we właściwej kolejności', build: 'Ułóż:', check: 'Sprawdź', clear: 'Wyczyść', correct: '¡Perfecto! Zgadza się.', wrong: 'Prawie — zmień kolejność.', glossary: 'Słowniczek — każde słowo w tym zdaniu', glossaryHint: 'Dotknij słowo, aby je usłyszeć', nextSentence: 'Następne zdanie',
    pronTitle: 'Analiza wymowy', pronSub: 'Powiedz na głos — analizujemy każdą sylabę', record: 'Dotknij, aby mówić', listening: 'Słucham…', yourScore: 'Twój wynik', tryAgain: 'Spróbuj ponownie', great: 'Świetna wymowa!', goodJob: 'Dobrze — już blisko!', keepPracticing: 'Ćwicz dalej', syllableBreakdown: 'Sylaba po sylabie', accuracy: 'Dokładność', fluency: 'Płynność', completeness: 'Kompletność', intonation: 'Intonacja', weHeard: 'Usłyszeliśmy', targetLabel: 'Cel', tipLabel: 'Wskazówka', practiceWords: 'Słowa do ćwiczeń', saveReview: 'Zapisz do powtórek', checkPron: 'Sprawdź swoją wymowę', checkPronSub: 'Dotknij mikrofonu i powiedz na głos', checkSentencePron: 'Sprawdź wymowę zdania', chromeNote: 'Chrome to zalecana przeglądarka — rozpoznawanie mowy działa dobrze tylko tam.', recUnsupported: 'Ta przeglądarka nie obsługuje rozpoznawania mowy. Otwórz Hablo w Chrome.', recDenied: 'Brak dostępu do mikrofonu. Zezwól na niego w ustawieniach przeglądarki.', recNoSpeech: 'Nic nie usłyszeliśmy — podejdź bliżej mikrofonu i spróbuj ponownie.', recFailed: 'Rozpoznawanie nie powiodło się — spróbuj ponownie.', dictNav: 'Dyktando', dictTitle: 'Słuchaj i pisz', dictSub: 'Odtwórz zdanie i zapisz, co słyszysz', dictType: 'Zapisz, co słyszysz', dictPlaceholder: 'Pisz po hiszpańsku…', dictCheck: 'Sprawdź', dictReveal: 'Pokaż odpowiedź', dictReplay: 'Odtwórz', dictSlow: 'Wolno 0.5×', dictNext: 'Następne', dictCorrect: '¡Correcto! Idealnie.', dictWrong: 'Prawie — porównaj poniżej.', dictAnswer: 'Odpowiedź', installTitle: 'Zainstaluj Hablo', installBody: 'Dodaj Hablo na pulpit — szybki dostęp jednym kliknięciem, lekcje offline i tryb pełnoekranowy.', installBtn: 'Zainstaluj aplikację', installLater: 'Nie teraz', installHelp: 'Aby zainstalować: otwórz menu przeglądarki i wybierz „Zainstaluj Hablo" lub „Dodaj do ekranu głównego".',
    reviewTitle: 'Inteligentne powtórki (SRS)', reviewSub: 'System przypomina słowo tuż zanim je zapomnisz', memory: 'Pamięć', due: 'Termin', startReview: 'Rozpocznij sesję', itemsDue: 'do powtórki dziś', statsNav: 'Postępy', statsTitle: 'Twoje postępy', statsSub: 'Śledź naukę hiszpańskiego tydzień po tygodniu', wordsLearned: 'Nauczone słowa', accuracy2: 'Dokładność', minutes: 'Minuty nauki', bestStreak: 'Najlepsza seria', lessonsDone: 'Ukończone lekcje', weeklyXP: 'XP w tygodniu', activity: 'Aktywność — ostatnie 4 tygodnie', levelProgress: 'Postęp poziomów', achievements: 'Osiągnięcia', days: 'dni',
  },
  de: {
    home: 'Start', levels: 'Stufen', vocab: 'Wortschatz', phrases: 'Sprachführer', builder: 'Sätze bauen', pronounce: 'Aussprache', review: 'Wiederholung',
    greet: 'Guten Morgen, Alex', greetSub: 'Du hast heute 3 Wörter zu wiederholen. Sollen wir anfangen?',
    continueSub: 'A1 · Grundlagen · Begrüßungen', start: 'Weiter',
    streak: 'Tage in Folge', dailyGoal: 'Tagesziel', league: 'Goldliga', xpToday: 'XP heute',
    quick: 'Weitermachen', dueToday: 'zur Wiederholung', reviewNow: 'Jetzt wiederholen', keepGoing: 'Halte deine Serie am Leben',
    flipHint: 'Tippe auf die Karte, um sie zu drehen', again: 'Nochmal', hard: 'Schwer', good: 'Gut', easy: 'Leicht', example: 'Beispiel', listen: 'Anhören', card: 'Karte',
    levelsTitle: 'Dein Lernweg', levelsSub: 'Die GER-Skala, von den ersten Wörtern bis zur Sprachbeherrschung', locked: 'Gesperrt', inProgress: 'Läuft', available: 'Verfügbar',
    phrasesTitle: 'Sprachführer', phrasesSub: 'Wendungen, die du wirklich brauchst — tippe eine Zeile an, um sie zu hören',
    builderTitle: 'Bau den Satz', builderSub: 'Tippe die Blöcke in der richtigen Reihenfolge an', build: 'Bauen:', check: 'Prüfen', clear: 'Leeren', correct: 'Perfekt! Richtig.', wrong: 'Fast — ordne sie neu.', glossary: 'Glossar — jedes Wort dieses Satzes', glossaryHint: 'Tippe ein Wort an, um es zu hören', nextSentence: 'Nächster Satz',
    pronTitle: 'Ausspracheanalyse', pronSub: 'Sprich laut — wir prüfen jede Silbe', record: 'Zum Sprechen tippen', listening: 'Ich höre zu…', yourScore: 'Dein Ergebnis', tryAgain: 'Nochmal versuchen', great: 'Tolle Aussprache!', goodJob: 'Gut — fast geschafft!', keepPracticing: 'Üb weiter', syllableBreakdown: 'Silbe für Silbe', accuracy: 'Genauigkeit', fluency: 'Flüssigkeit', completeness: 'Vollständigkeit', intonation: 'Betonung', weHeard: 'Wir haben gehört', targetLabel: 'Ziel', tipLabel: 'Tipp', practiceWords: 'Übungswörter', saveReview: 'Zur Wiederholung speichern', checkPron: 'Meine Aussprache prüfen', checkPronSub: 'Tippe aufs Mikrofon und sprich laut', checkSentencePron: 'Satzaussprache prüfen',
    chromeNote: 'Chrome ist der empfohlene Browser — Spracherkennung funktioniert nur dort zuverlässig.', recUnsupported: 'Dieser Browser kennt keine Spracherkennung. Öffne Hablo in Chrome.', recDenied: 'Kein Zugriff aufs Mikrofon. Erlaube ihn in den Browsereinstellungen.', recNoSpeech: 'Wir haben nichts gehört — geh näher ans Mikrofon und versuch es nochmal.', recFailed: 'Erkennung fehlgeschlagen — versuch es nochmal.',
    dictNav: 'Diktat', dictTitle: 'Hören & tippen', dictSub: 'Spiel den Satz ab und tippe, was du hörst', dictType: 'Tippe, was du hörst', dictPlaceholder: 'Hier tippen…', dictCheck: 'Prüfen', dictReveal: 'Antwort zeigen', dictReplay: 'Abspielen', dictSlow: 'Langsam 0.5×', dictNext: 'Nächster Satz', dictCorrect: 'Richtig! Perfekt.', dictWrong: 'Fast — vergleiche unten.', dictAnswer: 'Antwort',
    installTitle: 'Hablo installieren', installBody: 'Leg Hablo auf den Desktop — ein Klick zum Start, Lektionen offline und Vollbildmodus.', installBtn: 'App installieren', installLater: 'Jetzt nicht', installHelp: 'Zum Installieren: Browsermenü öffnen und „Hablo installieren" oder „Zum Startbildschirm hinzufügen" wählen.',
    reviewTitle: 'Intelligente Wiederholung (SRS)', reviewSub: 'Verteiltes Wiederholen holt jedes Wort zurück, kurz bevor du es vergisst', memory: 'Gedächtnis', due: 'Fällig', startReview: 'Wiederholung starten', itemsDue: 'heute fällig', statsNav: 'Fortschritt', statsTitle: 'Dein Fortschritt', statsSub: 'Verfolge deinen Fortschritt Woche für Woche', wordsLearned: 'Gelernte Wörter', accuracy2: 'Genauigkeit', minutes: 'Lernminuten', bestStreak: 'Beste Serie', lessonsDone: 'Lektionen geschafft', weeklyXP: 'XP pro Woche', activity: 'Aktivität — letzte 4 Wochen', levelProgress: 'Fortschritt pro Stufe', achievements: 'Erfolge', days: 'Tage',
  },
} as const;

export type UiLang = keyof typeof strings;
export type Strings = (typeof strings)['en'];

export const deck: Word[] = [
  { es: 'hola', en: 'hello', pl: 'cześć', de: 'hallo', exEs: '¡Hola! ¿Cómo estás?', exEn: 'Hi! How are you?', exPl: 'Cześć! Jak się masz?', exDe: 'Hallo! Wie geht es dir?' },
  { es: 'gracias', en: 'thank you', pl: 'dziękuję', de: 'danke', exEs: 'Muchas gracias por todo.', exEn: 'Thank you very much for everything.', exPl: 'Bardzo dziękuję za wszystko.', exDe: 'Vielen Dank für alles.' },
  { es: 'agua', en: 'water', pl: 'woda', de: 'Wasser', exEs: 'Un vaso de agua, por favor.', exEn: 'A glass of water, please.', exPl: 'Szklankę wody, proszę.', exDe: 'Ein Glas Wasser, bitte.' },
  { es: 'casa', en: 'house / home', pl: 'dom', de: 'Haus', exEs: 'Mi casa es tu casa.', exEn: 'My house is your house.', exPl: 'Mój dom jest twoim domem.', exDe: 'Mein Haus ist dein Haus.' },
  { es: 'comer', en: 'to eat', pl: 'jeść', de: 'essen', exEs: 'Quiero comer algo rico.', exEn: 'I want to eat something tasty.', exPl: 'Chcę zjeść coś dobrego.', exDe: 'Ich möchte etwas Leckeres essen.' },
  { es: 'amigo', en: 'friend', pl: 'przyjaciel', de: 'Freund', exEs: 'Él es mi mejor amigo.', exEn: 'He is my best friend.', exPl: 'On jest moim najlepszym przyjacielem.', exDe: 'Er ist mein bester Freund.' },
  { es: 'hoy', en: 'today', pl: 'dzisiaj', de: 'heute', exEs: 'Hoy hace mucho sol.', exEn: "It's very sunny today.", exPl: 'Dzisiaj jest bardzo słonecznie.', exDe: 'Heute scheint die Sonne sehr.' },
  { es: 'bien', en: 'well / good', pl: 'dobrze', de: 'gut', exEs: 'Estoy muy bien, gracias.', exEn: "I'm very well, thank you.", exPl: 'Czuję się bardzo dobrze, dziękuję.', exDe: 'Mir geht es sehr gut, danke.' },
];

export const deckA2: Word[] = [
  { es: 'ayer', en: 'yesterday', pl: 'wczoraj', de: 'gestern', exEs: 'Ayer fui al mercado.', exEn: 'Yesterday I went to the market.', exPl: 'Wczoraj poszedłem na targ.', exDe: 'Gestern war ich auf dem Markt.' },
  { es: 'compré', en: 'I bought', pl: 'kupiłem', de: 'ich kaufte', exEs: 'Compré pan y fruta.', exEn: 'I bought bread and fruit.', exPl: 'Kupiłem chleb i owoce.', exDe: 'Ich kaufte Brot und Obst.' },
  { es: 'barato', en: 'cheap', pl: 'tani', de: 'billig', exEs: 'Todo es muy barato aquí.', exEn: 'Everything is very cheap here.', exPl: 'Wszystko jest tu bardzo tanie.', exDe: 'Hier ist alles sehr billig.' },
  { es: 'izquierda', en: 'left', pl: 'lewo', de: 'links', exEs: 'Gira a la izquierda.', exEn: 'Turn to the left.', exPl: 'Skręć w lewo.', exDe: 'Biege links ab.' },
  { es: 'derecha', en: 'right', pl: 'prawo', de: 'rechts', exEs: 'Sigue todo a la derecha.', exEn: 'Keep going to the right.', exPl: 'Idź prosto, potem w prawo.', exDe: 'Halte dich immer rechts.' },
  { es: 'siempre', en: 'always', pl: 'zawsze', de: 'immer', exEs: 'Siempre me levanto temprano.', exEn: 'I always get up early.', exPl: 'Zawsze wstaję wcześnie.', exDe: 'Ich stehe immer früh auf.' },
  { es: 'probar', en: 'to try / try on', pl: 'przymierzyć', de: 'anprobieren', exEs: '¿Puedo probarlo?', exEn: 'Can I try it on?', exPl: 'Czy mogę to przymierzyć?', exDe: 'Kann ich es anprobieren?' },
  { es: 'rebajas', en: 'sales', pl: 'wyprzedaże', de: 'Schlussverkauf', exEs: 'Hay rebajas en la tienda.', exEn: 'There are sales at the store.', exPl: 'W sklepie są wyprzedaże.', exDe: 'Im Geschäft ist Schlussverkauf.' },
];

export const phrasebook: PhraseCategory[] = [
  { titleEn: 'Greetings', titlePl: 'Powitania', titleDe: 'Begrüßungen', phrases: [
    { es: 'Buenos días', en: 'Good morning', pl: 'Dzień dobry', de: 'Guten Morgen' },
    { es: '¿Cómo estás?', en: 'How are you?', pl: 'Jak się masz?', de: 'Wie geht es dir?' },
    { es: 'Mucho gusto', en: 'Nice to meet you', pl: 'Miło mi', de: 'Freut mich' },
  ] },
  { titleEn: 'At the restaurant', titlePl: 'W restauracji', titleDe: 'Im Restaurant', phrases: [
    { es: 'La cuenta, por favor', en: 'The check, please', pl: 'Poproszę rachunek', de: 'Die Rechnung, bitte' },
    { es: '¿Qué me recomienda?', en: 'What do you recommend?', pl: 'Co pan poleca?', de: 'Was empfehlen Sie?' },
    { es: 'Para mí, un café', en: 'For me, a coffee', pl: 'Dla mnie kawa', de: 'Für mich einen Kaffee' },
  ] },
  { titleEn: 'Getting around', titlePl: 'W mieście', titleDe: 'Unterwegs', phrases: [
    { es: '¿Dónde está el baño?', en: 'Where is the bathroom?', pl: 'Gdzie jest toaleta?', de: 'Wo ist die Toilette?' },
    { es: '¿Cuánto cuesta?', en: 'How much is it?', pl: 'Ile to kosztuje?', de: 'Was kostet das?' },
    { es: 'Estoy perdido', en: "I'm lost", pl: 'Zgubiłem się', de: 'Ich habe mich verlaufen' },
  ] },
  { titleEn: 'At the hotel', titlePl: 'W hotelu', titleDe: 'Im Hotel', phrases: [
    { es: 'Tengo una reserva', en: 'I have a reservation', pl: 'Mam rezerwację', de: 'Ich habe eine Reservierung' },
    { es: '¿Tienen habitaciones libres?', en: 'Do you have any rooms free?', pl: 'Czy są wolne pokoje?', de: 'Haben Sie freie Zimmer?' },
    { es: '¿A qué hora es el desayuno?', en: 'What time is breakfast?', pl: 'O której jest śniadanie?', de: 'Wann gibt es Frühstück?' },
    { es: 'La llave, por favor', en: 'The key, please', pl: 'Poproszę klucz', de: 'Den Schlüssel, bitte' },
  ] },
  { titleEn: 'Emergencies', titlePl: 'Nagłe sytuacje', titleDe: 'Notfälle', phrases: [
    { es: '¡Ayuda!', en: 'Help!', pl: 'Pomocy!', de: 'Hilfe!' },
    { es: 'Llame a una ambulancia', en: 'Call an ambulance', pl: 'Proszę wezwać karetkę', de: 'Rufen Sie einen Krankenwagen' },
    { es: 'Necesito un médico', en: 'I need a doctor', pl: 'Potrzebuję lekarza', de: 'Ich brauche einen Arzt' },
    { es: 'He perdido mi pasaporte', en: "I've lost my passport", pl: 'Zgubiłem paszport', de: 'Ich habe meinen Reisepass verloren' },
  ] },
  { titleEn: 'Making friends', titlePl: 'Poznawanie ludzi', titleDe: 'Freunde finden', phrases: [
    { es: '¿De dónde eres?', en: 'Where are you from?', pl: 'Skąd jesteś?', de: 'Woher kommst du?' },
    { es: '¿A qué te dedicas?', en: 'What do you do?', pl: 'Czym się zajmujesz?', de: 'Was machst du beruflich?' },
    { es: '¿Tienes Instagram?', en: 'Do you have Instagram?', pl: 'Masz Instagrama?', de: 'Hast du Instagram?' },
    { es: 'Ha sido un placer', en: "It's been a pleasure", pl: 'Było mi bardzo miło', de: 'Es war mir ein Vergnügen' },
  ] },
  { titleEn: 'On the phone', titlePl: 'Przez telefon', titleDe: 'Am Telefon', phrases: [
    { es: '¿Diga?', en: 'Hello? (answering)', pl: 'Halo?', de: 'Hallo?' },
    { es: '¿Puedo hablar con Ana?', en: 'Can I speak with Ana?', pl: 'Czy mogę rozmawiać z Aną?', de: 'Kann ich mit Ana sprechen?' },
    { es: 'Un momento, por favor', en: 'One moment, please', pl: 'Chwileczkę, proszę', de: 'Einen Moment, bitte' },
    { es: 'Le llamo más tarde', en: "I'll call you later", pl: 'Zadzwonię później', de: 'Ich rufe Sie später an' },
  ] },
  { titleEn: 'Time & dates', titlePl: 'Czas i daty', titleDe: 'Zeit und Datum', phrases: [
    { es: '¿Qué hora es?', en: 'What time is it?', pl: 'Która godzina?', de: 'Wie spät ist es?' },
    { es: 'Son las tres', en: "It's three o'clock", pl: 'Jest trzecia', de: 'Es ist drei Uhr' },
    { es: '¿Qué día es hoy?', en: 'What day is it today?', pl: 'Jaki dziś dzień?', de: 'Welcher Tag ist heute?' },
    { es: 'Nos vemos el lunes', en: 'See you on Monday', pl: 'Do zobaczenia w poniedziałek', de: 'Bis Montag' },
  ] },
  { titleEn: 'Feelings & small talk', titlePl: 'Uczucia i pogawędki', titleDe: 'Gefühle und Smalltalk', phrases: [
    { es: 'Estoy muy cansado', en: "I'm very tired", pl: 'Jestem bardzo zmęczony', de: 'Ich bin sehr müde' },
    { es: '¡Qué buen tiempo hace!', en: 'What nice weather!', pl: 'Jaka ładna pogoda!', de: 'Was für schönes Wetter!' },
    { es: 'Estoy de acuerdo', en: 'I agree', pl: 'Zgadzam się', de: 'Ich stimme zu' },
    { es: 'No pasa nada', en: "It's no problem", pl: 'Nic się nie stało', de: 'Das ist kein Problem' },
  ] },
];

export const phrasebookA2: PhraseCategory[] = [
  { titleEn: 'Shopping', titlePl: 'Zakupy', titleDe: 'Einkaufen', phrases: [
    { es: '¿Tiene otra talla?', en: 'Do you have another size?', pl: 'Czy jest inny rozmiar?', de: 'Haben Sie eine andere Größe?' },
    { es: '¿Puedo pagar con tarjeta?', en: 'Can I pay by card?', pl: 'Czy mogę zapłacić kartą?', de: 'Kann ich mit Karte zahlen?' },
    { es: 'Me lo llevo', en: "I'll take it", pl: 'Biorę to', de: 'Ich nehme es' },
  ] },
  { titleEn: 'Directions', titlePl: 'Wskazówki', titleDe: 'Wegbeschreibung', phrases: [
    { es: '¿Cómo llego al centro?', en: 'How do I get downtown?', pl: 'Jak dojść do centrum?', de: 'Wie komme ich ins Zentrum?' },
    { es: 'Está a dos calles', en: "It's two blocks away", pl: 'To dwie przecznice stąd', de: 'Es ist zwei Straßen entfernt' },
    { es: 'Gire a la derecha', en: 'Turn right', pl: 'Proszę skręcić w prawo', de: 'Biegen Sie rechts ab' },
  ] },
  { titleEn: 'Daily routine', titlePl: 'Codzienność', titleDe: 'Tagesablauf', phrases: [
    { es: 'Me despierto a las siete', en: 'I wake up at seven', pl: 'Budzę się o siódmej', de: 'Ich wache um sieben auf' },
    { es: 'Trabajo por la mañana', en: 'I work in the morning', pl: 'Pracuję rano', de: 'Ich arbeite am Vormittag' },
    { es: 'Ceno con mi familia', en: 'I have dinner with my family', pl: 'Jem kolację z rodziną', de: 'Ich esse mit meiner Familie zu Abend' },
  ] },
  { titleEn: 'At the doctor', titlePl: 'U lekarza', titleDe: 'Beim Arzt', phrases: [
    { es: 'Me duele la cabeza', en: 'I have a headache', pl: 'Boli mnie głowa', de: 'Ich habe Kopfschmerzen' },
    { es: 'Tengo fiebre desde ayer', en: "I've had a fever since yesterday", pl: 'Mam gorączkę od wczoraj', de: 'Ich habe seit gestern Fieber' },
    { es: '¿Necesito receta?', en: 'Do I need a prescription?', pl: 'Czy potrzebuję recepty?', de: 'Brauche ich ein Rezept?' },
    { es: 'Soy alérgico a la penicilina', en: "I'm allergic to penicillin", pl: 'Mam alergię na penicylinę', de: 'Ich bin allergisch gegen Penizillin' },
  ] },
  { titleEn: 'At the bank & post', titlePl: 'W banku i na poczcie', titleDe: 'Bank und Post', phrases: [
    { es: 'Quiero abrir una cuenta', en: "I'd like to open an account", pl: 'Chcę otworzyć konto', de: 'Ich möchte ein Konto eröffnen' },
    { es: '¿Dónde puedo cambiar dinero?', en: 'Where can I change money?', pl: 'Gdzie mogę wymienić pieniądze?', de: 'Wo kann ich Geld wechseln?' },
    { es: 'Quiero enviar este paquete', en: 'I want to send this package', pl: 'Chcę wysłać tę paczkę', de: 'Ich möchte dieses Paket verschicken' },
    { es: '¿Cuánto es el franqueo?', en: 'How much is the postage?', pl: 'Ile kosztuje przesyłka?', de: 'Was kostet das Porto?' },
  ] },
  { titleEn: 'Job & work', titlePl: 'Praca', titleDe: 'Beruf und Arbeit', phrases: [
    { es: 'Tengo una entrevista mañana', en: 'I have an interview tomorrow', pl: 'Mam jutro rozmowę kwalifikacyjną', de: 'Ich habe morgen ein Vorstellungsgespräch' },
    { es: '¿Cuál es el horario?', en: 'What are the hours?', pl: 'Jakie są godziny pracy?', de: 'Wie sind die Arbeitszeiten?' },
    { es: 'Trabajo en equipo muy bien', en: 'I work well in a team', pl: 'Dobrze pracuję w zespole', de: 'Ich arbeite sehr gut im Team' },
    { es: '¿Cuándo puedo empezar?', en: 'When can I start?', pl: 'Kiedy mogę zacząć?', de: 'Wann kann ich anfangen?' },
  ] },
  { titleEn: 'Opinions & agreeing', titlePl: 'Opinie i zgadzanie się', titleDe: 'Meinungen und Zustimmung', phrases: [
    { es: 'En mi opinión…', en: 'In my opinion…', pl: 'Moim zdaniem…', de: 'Meiner Meinung nach …' },
    { es: 'Tienes toda la razón', en: "You're completely right", pl: 'Masz całkowitą rację', de: 'Du hast völlig recht' },
    { es: 'No estoy de acuerdo', en: "I don't agree", pl: 'Nie zgadzam się', de: 'Ich bin nicht einverstanden' },
    { es: 'Depende de la situación', en: 'It depends on the situation', pl: 'To zależy od sytuacji', de: 'Das hängt von der Situation ab' },
  ] },
  { titleEn: 'Complaints & problems', titlePl: 'Reklamacje i problemy', titleDe: 'Beschwerden und Probleme', phrases: [
    { es: 'Esto no funciona', en: "This doesn't work", pl: 'To nie działa', de: 'Das funktioniert nicht' },
    { es: 'Quiero hablar con el encargado', en: 'I want to speak to the manager', pl: 'Chcę rozmawiać z kierownikiem', de: 'Ich möchte mit dem Geschäftsführer sprechen' },
    { es: '¿Puedo cambiarlo?', en: 'Can I exchange it?', pl: 'Czy mogę to wymienić?', de: 'Kann ich es umtauschen?' },
    { es: 'Quiero un reembolso', en: "I'd like a refund", pl: 'Chcę zwrot pieniędzy', de: 'Ich möchte mein Geld zurück' },
  ] },
  { titleEn: 'Making plans', titlePl: 'Umawianie się', titleDe: 'Pläne schmieden', phrases: [
    { es: '¿Quedamos el sábado?', en: 'Shall we meet on Saturday?', pl: 'Umówimy się w sobotę?', de: 'Treffen wir uns am Samstag?' },
    { es: '¿Te apetece un café?', en: 'Do you fancy a coffee?', pl: 'Masz ochotę na kawę?', de: 'Hast du Lust auf einen Kaffee?' },
    { es: 'Te recojo a las ocho', en: "I'll pick you up at eight", pl: 'Odbiorę cię o ósmej', de: 'Ich hole dich um acht ab' },
    { es: 'Quizás la próxima vez', en: 'Maybe next time', pl: 'Może następnym razem', de: 'Vielleicht ein anderes Mal' },
  ] },
];

export const builderA1: BuilderSentence[] = [
  { target: ['Yo', 'quiero', 'un', 'café', 'con', 'leche'], en: 'I want a coffee with milk', pl: 'Chcę kawę z mlekiem', de: 'Ich möchte einen Milchkaffee', glossary: [
    { es: 'Yo', en: 'I', pl: 'ja', de: 'ich' }, { es: 'quiero', en: 'I want', pl: 'chcę', de: 'ich möchte' }, { es: 'un', en: 'a / one', pl: 'jeden', de: 'ein / eins' },
    { es: 'café', en: 'coffee', pl: 'kawa', de: 'Kaffee' }, { es: 'con', en: 'with', pl: 'z', de: 'mit' }, { es: 'leche', en: 'milk', pl: 'mleko', de: 'Milch' },
  ] },
  { target: ['Mi', 'hermana', 'vive', 'en', 'Madrid'], en: 'My sister lives in Madrid', pl: 'Moja siostra mieszka w Madrycie', de: 'Meine Schwester wohnt in Madrid', glossary: [
    { es: 'Mi', en: 'my', pl: 'moja', de: 'meine' }, { es: 'hermana', en: 'sister', pl: 'siostra', de: 'Schwester' }, { es: 'vive', en: 'lives', pl: 'mieszka', de: 'wohnt' },
    { es: 'en', en: 'in', pl: 'w', de: 'in' }, { es: 'Madrid', en: 'Madrid', pl: 'Madryt', de: 'Madrid' },
  ] },
  { target: ['Hoy', 'hace', 'mucho', 'calor'], en: "It's very hot today", pl: 'Dziś jest bardzo gorąco', de: 'Heute ist es sehr heiß', glossary: [
    { es: 'Hoy', en: 'today', pl: 'dziś', de: 'heute' }, { es: 'hace', en: 'it makes (weather verb)', pl: 'jest (o pogodzie)', de: 'es macht (Wetterverb)' },
    { es: 'mucho', en: 'a lot of', pl: 'bardzo dużo', de: 'viel' }, { es: 'calor', en: 'heat', pl: 'upał', de: 'Hitze' },
  ] },
  { target: ['La', 'casa', 'tiene', 'tres', 'ventanas'], en: 'The house has three windows', pl: 'Dom ma trzy okna', de: 'Das Haus hat drei Fenster', glossary: [
    { es: 'La', en: 'the', pl: 'ten (rodzajnik)', de: 'die' }, { es: 'casa', en: 'house', pl: 'dom', de: 'Haus' }, { es: 'tiene', en: 'has', pl: 'ma', de: 'hat' },
    { es: 'tres', en: 'three', pl: 'trzy', de: 'drei' }, { es: 'ventanas', en: 'windows', pl: 'okna', de: 'Fenster' },
  ] },
  { target: ['No', 'tengo', 'tiempo', 'ahora'], en: "I don't have time now", pl: 'Nie mam teraz czasu', de: 'Ich habe jetzt keine Zeit', glossary: [
    { es: 'No', en: 'not', pl: 'nie', de: 'nicht' }, { es: 'tengo', en: 'I have', pl: 'mam', de: 'ich habe' }, { es: 'tiempo', en: 'time', pl: 'czas', de: 'Zeit' },
    { es: 'ahora', en: 'now', pl: 'teraz', de: 'jetzt' },
  ] },
  { target: ['La', 'estación', 'está', 'muy', 'lejos'], en: 'The station is very far', pl: 'Dworzec jest bardzo daleko', de: 'Der Bahnhof ist sehr weit weg', glossary: [
    { es: 'La', en: 'the', pl: 'ten (rodzajnik)', de: 'die' }, { es: 'estación', en: 'station', pl: 'dworzec', de: 'Bahnhof' }, { es: 'está', en: 'is (location)', pl: 'jest (położenie)', de: 'ist (Ort)' },
    { es: 'muy', en: 'very', pl: 'bardzo', de: 'sehr' }, { es: 'lejos', en: 'far', pl: 'daleko', de: 'weit' },
  ] },
  { target: ['Los', 'niños', 'comen', 'fruta'], en: 'The children eat fruit', pl: 'Dzieci jedzą owoce', de: 'Die Kinder essen Obst', glossary: [
    { es: 'Los', en: 'the (plural)', pl: 'ci (rodzajnik mnogi)', de: 'die (Plural)' }, { es: 'niños', en: 'children', pl: 'dzieci', de: 'Kinder' },
    { es: 'comen', en: 'they eat', pl: 'jedzą', de: 'sie essen' }, { es: 'fruta', en: 'fruit', pl: 'owoce', de: 'Obst' },
  ] },
  { target: ['Me', 'gusta', 'mucho', 'tu', 'casa'], en: 'I like your house a lot', pl: 'Bardzo podoba mi się twój dom', de: 'Dein Haus gefällt mir sehr', glossary: [
    { es: 'Me', en: 'to me', pl: 'mi', de: 'mir' }, { es: 'gusta', en: 'is pleasing', pl: 'podoba się', de: 'gefällt' }, { es: 'mucho', en: 'a lot', pl: 'bardzo', de: 'viel' },
    { es: 'tu', en: 'your', pl: 'twój', de: 'dein' }, { es: 'casa', en: 'house', pl: 'dom', de: 'Haus' },
  ] },
];

export const builderA2: BuilderSentence[] = [
  { target: ['Ayer', 'compré', 'pan', 'en', 'el', 'mercado'], en: 'Yesterday I bought bread at the market', pl: 'Wczoraj kupiłem chleb na targu', de: 'Gestern habe ich Brot auf dem Markt gekauft', glossary: [
    { es: 'Ayer', en: 'yesterday', pl: 'wczoraj', de: 'gestern' }, { es: 'compré', en: 'I bought', pl: 'kupiłem', de: 'ich kaufte' }, { es: 'pan', en: 'bread', pl: 'chleb', de: 'Brot' },
    { es: 'en', en: 'at / in', pl: 'na / w', de: 'in' }, { es: 'el', en: 'the', pl: 'ten (rodzajnik)', de: 'der' }, { es: 'mercado', en: 'market', pl: 'targ', de: 'Markt' },
  ] },
  { target: ['El', 'año', 'pasado', 'viajamos', 'a', 'Portugal'], en: 'Last year we travelled to Portugal', pl: 'W zeszłym roku pojechaliśmy do Portugalii', de: 'Letztes Jahr sind wir nach Portugal gereist', glossary: [
    { es: 'El', en: 'the', pl: 'ten (rodzajnik)', de: 'das' }, { es: 'año', en: 'year', pl: 'rok', de: 'Jahr' }, { es: 'pasado', en: 'last / past', pl: 'zeszły', de: 'letzt / vergangen' },
    { es: 'viajamos', en: 'we travelled', pl: 'pojechaliśmy', de: 'wir reisten' }, { es: 'a', en: 'to', pl: 'do', de: 'nach' }, { es: 'Portugal', en: 'Portugal', pl: 'Portugalia', de: 'Portugal' },
  ] },
  { target: ['Gira', 'a', 'la', 'izquierda', 'en', 'la', 'esquina'], en: 'Turn left at the corner', pl: 'Skręć w lewo na rogu', de: 'Biege an der Ecke links ab', glossary: [
    { es: 'Gira', en: 'turn', pl: 'skręć', de: 'biege ab' }, { es: 'a', en: 'to', pl: 'w', de: 'nach' }, { es: 'la', en: 'the', pl: 'ta (rodzajnik)', de: 'die' },
    { es: 'izquierda', en: 'left', pl: 'lewo', de: 'links' }, { es: 'en', en: 'at', pl: 'na', de: 'in' }, { es: 'la', en: 'the', pl: 'ta (rodzajnik)', de: 'die' },
    { es: 'esquina', en: 'corner', pl: 'róg', de: 'Ecke' },
  ] },
  { target: ['Me', 'desperté', 'muy', 'temprano', 'esta', 'mañana'], en: 'I woke up very early this morning', pl: 'Obudziłem się bardzo wcześnie dziś rano', de: 'Ich bin heute Morgen sehr früh aufgewacht', glossary: [
    { es: 'Me', en: 'myself', pl: 'się', de: 'mir' }, { es: 'desperté', en: 'I woke up', pl: 'obudziłem', de: 'ich wachte auf' }, { es: 'muy', en: 'very', pl: 'bardzo', de: 'sehr' },
    { es: 'temprano', en: 'early', pl: 'wcześnie', de: 'früh' }, { es: 'esta', en: 'this', pl: 'dziś', de: 'diese' }, { es: 'mañana', en: 'morning', pl: 'rano', de: 'Morgen' },
  ] },
  { target: ['Hoy', 'pagué', 'con', 'tarjeta', 'en', 'la', 'tienda'], en: 'Today I paid by card at the shop', pl: 'Dziś zapłaciłem kartą w sklepie', de: 'Heute habe ich im Geschäft mit Karte bezahlt', glossary: [
    { es: 'Hoy', en: 'today', pl: 'dziś', de: 'heute' }, { es: 'pagué', en: 'I paid', pl: 'zapłaciłem', de: 'ich zahlte' }, { es: 'con', en: 'with / by', pl: 'kartą (narzędnik)', de: 'mit' },
    { es: 'tarjeta', en: 'card', pl: 'karta', de: 'Karte' }, { es: 'en', en: 'at / in', pl: 'w', de: 'in' }, { es: 'la', en: 'the', pl: 'ta (rodzajnik)', de: 'die' },
    { es: 'tienda', en: 'shop', pl: 'sklep', de: 'Geschäft' },
  ] },
  { target: ['Estos', 'zapatos', 'son', 'demasiado', 'caros'], en: 'These shoes are too expensive', pl: 'Te buty są za drogie', de: 'Diese Schuhe sind zu teuer', glossary: [
    { es: 'Estos', en: 'these', pl: 'te', de: 'diese' }, { es: 'zapatos', en: 'shoes', pl: 'buty', de: 'Schuhe' }, { es: 'son', en: 'are', pl: 'są', de: 'sind' },
    { es: 'demasiado', en: 'too', pl: 'za', de: 'zu' }, { es: 'caros', en: 'expensive', pl: 'drogie', de: 'teuer' },
  ] },
  { target: ['Siempre', 'desayuno', 'antes', 'de', 'salir'], en: 'I always have breakfast before going out', pl: 'Zawsze jem śniadanie przed wyjściem', de: 'Ich frühstücke immer, bevor ich rausgehe', glossary: [
    { es: 'Siempre', en: 'always', pl: 'zawsze', de: 'immer' }, { es: 'desayuno', en: 'I have breakfast', pl: 'jem śniadanie', de: 'ich frühstücke' }, { es: 'antes', en: 'before', pl: 'przed', de: 'vor' },
    { es: 'de', en: 'of', pl: '(przyimek)', de: 'von' }, { es: 'salir', en: 'to go out', pl: 'wyjściem', de: 'hinausgehen' },
  ] },
  { target: ['No', 'encontré', 'las', 'llaves', 'del', 'coche'], en: "I didn't find the car keys", pl: 'Nie znalazłem kluczyków od samochodu', de: 'Ich habe die Autoschlüssel nicht gefunden', glossary: [
    { es: 'No', en: 'not', pl: 'nie', de: 'nicht' }, { es: 'encontré', en: 'I found', pl: 'znalazłem', de: 'ich fand' }, { es: 'las', en: 'the (plural)', pl: 'te (rodzajnik mnogi)', de: 'die (Plural)' },
    { es: 'llaves', en: 'keys', pl: 'klucze', de: 'Schlüssel' }, { es: 'del', en: 'of the', pl: 'od', de: 'von dem' }, { es: 'coche', en: 'car', pl: 'samochód', de: 'Auto' },
  ] },
];

export const builderB1: BuilderSentence[] = [
  { target: ['Aunque', 'llueva', 'saldré', 'de', 'todas', 'formas'], en: "Even if it rains I'll go out anyway", pl: 'Nawet jeśli będzie padać, i tak wyjdę', de: 'Auch wenn es regnet, gehe ich trotzdem raus', glossary: [
    { es: 'Aunque', en: 'even though / even if', pl: 'chociaż / nawet jeśli', de: 'obwohl / auch wenn' }, { es: 'llueva', en: 'it rains (subjunctive)', pl: 'będzie padać', de: 'es regnet (Konjunktiv)' },
    { es: 'saldré', en: 'I will go out', pl: 'wyjdę', de: 'ich werde ausgehen' }, { es: 'de', en: 'of', pl: 'z', de: 'von' }, { es: 'todas', en: 'all', pl: 'wszystkie', de: 'alle' },
    { es: 'formas', en: 'ways', pl: 'sposoby', de: 'Arten' },
  ] },
  { target: ['Me', 'arrepiento', 'de', 'no', 'haber', 'estudiado', 'más'], en: 'I regret not having studied more', pl: 'Żałuję, że nie uczyłem się więcej', de: 'Ich bereue, nicht mehr gelernt zu haben', glossary: [
    { es: 'Me', en: 'myself', pl: 'się', de: 'mir' }, { es: 'arrepiento', en: 'I regret', pl: 'żałuję', de: 'ich bereue' }, { es: 'de', en: 'of', pl: '(przyimek)', de: 'von' },
    { es: 'no', en: 'not', pl: 'nie', de: 'nicht' }, { es: 'haber', en: 'having', pl: 'że (bezokolicznik złożony)', de: 'haben' }, { es: 'estudiado', en: 'studied', pl: 'uczyłem się', de: 'gelernt' },
    { es: 'más', en: 'more', pl: 'więcej', de: 'mehr' },
  ] },
  { target: ['A', 'largo', 'plazo', 'esto', 'será', 'beneficioso'], en: 'In the long run this will be beneficial', pl: 'Na dłuższą metę to będzie korzystne', de: 'Auf lange Sicht wird das von Vorteil sein', glossary: [
    { es: 'A', en: 'at / in', pl: 'na', de: 'auf / in' }, { es: 'largo', en: 'long', pl: 'dłuższą', de: 'lang' }, { es: 'plazo', en: 'term', pl: 'metę', de: 'Frist' },
    { es: 'esto', en: 'this', pl: 'to', de: 'das' }, { es: 'será', en: 'will be', pl: 'będzie', de: 'wird sein' }, { es: 'beneficioso', en: 'beneficial', pl: 'korzystne', de: 'vorteilhaft' },
  ] },
  { target: ['Espero', 'que', 'llegues', 'a', 'tiempo', 'mañana'], en: 'I hope you arrive on time tomorrow', pl: 'Mam nadzieję, że jutro zdążysz', de: 'Ich hoffe, du kommst morgen pünktlich an', glossary: [
    { es: 'Espero', en: 'I hope', pl: 'mam nadzieję', de: 'ich hoffe' }, { es: 'que', en: 'that', pl: 'że', de: 'dass' }, { es: 'llegues', en: 'you arrive (subjunctive)', pl: 'dotrzesz (tryb łączący)', de: 'du kommst an (Konjunktiv)' },
    { es: 'a', en: 'on', pl: 'na', de: 'nach' }, { es: 'tiempo', en: 'time', pl: 'czas', de: 'Zeit' }, { es: 'mañana', en: 'tomorrow', pl: 'jutro', de: 'Morgen' },
  ] },
  { target: ['Si', 'tuviera', 'dinero', 'me', 'compraría', 'una', 'moto'], en: 'If I had money I would buy a motorbike', pl: 'Gdybym miał pieniądze, kupiłbym motocykl', de: 'Wenn ich Geld hätte, würde ich mir ein Motorrad kaufen', glossary: [
    { es: 'Si', en: 'if', pl: 'gdyby', de: 'wenn' }, { es: 'tuviera', en: 'I had (subjunctive)', pl: 'miał (tryb łączący)', de: 'ich hätte (Konjunktiv)' }, { es: 'dinero', en: 'money', pl: 'pieniądze', de: 'Geld' },
    { es: 'me', en: 'for myself', pl: 'sobie', de: 'mir' }, { es: 'compraría', en: 'I would buy', pl: 'kupiłbym', de: 'ich würde kaufen' }, { es: 'una', en: 'a', pl: 'jeden', de: 'ein' },
    { es: 'moto', en: 'motorbike', pl: 'motocykl', de: 'Motorrad' },
  ] },
  { target: ['Me', 'acostumbré', 'a', 'vivir', 'sin', 'coche'], en: 'I got used to living without a car', pl: 'Przyzwyczaiłem się żyć bez samochodu', de: 'Ich habe mich daran gewöhnt, ohne Auto zu leben', glossary: [
    { es: 'Me', en: 'myself', pl: 'się', de: 'mir' }, { es: 'acostumbré', en: 'I got used', pl: 'przyzwyczaiłem', de: 'ich gewöhnte mich' }, { es: 'a', en: 'to', pl: 'do', de: 'nach' },
    { es: 'vivir', en: 'to live', pl: 'życia', de: 'leben' }, { es: 'sin', en: 'without', pl: 'bez', de: 'ohne' }, { es: 'coche', en: 'car', pl: 'samochodu', de: 'Auto' },
  ] },
  { target: ['Cabe', 'destacar', 'que', 'la', 'situación', 'cambió'], en: "It's worth noting that the situation changed", pl: 'Warto zaznaczyć, że sytuacja się zmieniła', de: 'Es sei angemerkt, dass sich die Lage geändert hat', glossary: [
    { es: 'Cabe', en: 'it is fitting', pl: 'warto', de: 'es ist angebracht' }, { es: 'destacar', en: 'to highlight', pl: 'zaznaczyć', de: 'hervorzuheben' }, { es: 'que', en: 'that', pl: 'że', de: 'dass' },
    { es: 'la', en: 'the', pl: 'ta (rodzajnik)', de: 'die' }, { es: 'situación', en: 'situation', pl: 'sytuacja', de: 'Lage' }, { es: 'cambió', en: 'changed', pl: 'zmieniła się', de: 'änderte sich' },
  ] },
  { target: ['No', 'creo', 'que', 'sea', 'buena', 'idea'], en: "I don't think it's a good idea", pl: 'Nie sądzę, żeby to był dobry pomysł', de: 'Ich glaube nicht, dass das eine gute Idee ist', glossary: [
    { es: 'No', en: 'not', pl: 'nie', de: 'nicht' }, { es: 'creo', en: 'I think', pl: 'sądzę', de: 'ich glaube' }, { es: 'que', en: 'that', pl: 'żeby', de: 'dass' },
    { es: 'sea', en: 'it is (subjunctive)', pl: 'był (tryb łączący)', de: 'es sei (Konjunktiv)' }, { es: 'buena', en: 'good', pl: 'dobry', de: 'gute' }, { es: 'idea', en: 'idea', pl: 'pomysł', de: 'Idee' },
  ] },
];

export const builderB2: BuilderSentence[] = [
  { target: ['Cabría', 'matizar', 'que', 'no', 'todos', 'están', 'de', 'acuerdo'], en: 'It would be worth noting that not everyone agrees', pl: 'Warto by doprecyzować, że nie wszyscy się zgadzają', de: 'Man müsste einschränken, dass nicht alle einverstanden sind', glossary: [
    { es: 'Cabría', en: 'it would be fitting to', pl: 'warto by', de: 'es wäre angebracht' }, { es: 'matizar', en: 'to qualify / clarify', pl: 'doprecyzować', de: 'zu präzisieren' }, { es: 'que', en: 'that', pl: 'że', de: 'dass' },
    { es: 'no', en: 'not', pl: 'nie', de: 'nicht' }, { es: 'todos', en: 'everyone', pl: 'wszyscy', de: 'alle' }, { es: 'están', en: 'are', pl: 'są', de: 'sind' },
    { es: 'de', en: 'of', pl: 'z', de: 'von' }, { es: 'acuerdo', en: 'agreement', pl: 'zgoda', de: 'Einigkeit' },
  ] },
  { target: ['Sin', 'lugar', 'a', 'dudas', 'fue', 'un', 'error'], en: 'Without a doubt it was a mistake', pl: 'Bez wątpienia to był błąd', de: 'Ohne jeden Zweifel war es ein Fehler', glossary: [
    { es: 'Sin', en: 'without', pl: 'bez', de: 'ohne' }, { es: 'lugar', en: 'room / place', pl: 'miejsca', de: 'Raum / Platz' }, { es: 'a', en: 'for', pl: 'na', de: 'nach' },
    { es: 'dudas', en: 'doubts', pl: 'wątpliwości', de: 'Zweifel' }, { es: 'fue', en: 'it was', pl: 'to był', de: 'es war' }, { es: 'un', en: 'a', pl: 'jeden', de: 'ein / eins' },
    { es: 'error', en: 'mistake', pl: 'błąd', de: 'Fehler' },
  ] },
  { target: ['No', 'obstante', 'ello', 'seguimos', 'adelante', 'con', 'el', 'plan'], en: "Nevertheless we're moving forward with the plan", pl: 'Niemniej jednak realizujemy plan dalej', de: 'Nichtsdestotrotz machen wir mit dem Plan weiter', glossary: [
    { es: 'No', en: 'not', pl: 'nie', de: 'nicht' }, { es: 'obstante', en: 'obstructing', pl: 'przeszkadzając', de: 'hindernd' }, { es: 'ello', en: 'that', pl: 'to', de: 'dies' },
    { es: 'seguimos', en: 'we continue', pl: 'kontynuujemy', de: 'wir machen weiter' }, { es: 'adelante', en: 'forward', pl: 'dalej', de: 'voran' }, { es: 'con', en: 'with', pl: 'z', de: 'mit' },
    { es: 'el', en: 'the', pl: 'ten (rodzajnik)', de: 'der' }, { es: 'plan', en: 'plan', pl: 'plan', de: 'Plan' },
  ] },
  { target: ['A', 'raíz', 'de', 'eso', 'cambiaron', 'la', 'estrategia'], en: 'As a result of that they changed the strategy', pl: 'W wyniku tego zmienili strategię', de: 'Infolgedessen änderten sie die Strategie', glossary: [
    { es: 'A', en: 'at', pl: 'w', de: 'auf / in' }, { es: 'raíz', en: 'root', pl: 'wyniku', de: 'Wurzel' }, { es: 'de', en: 'of', pl: '(przyimek)', de: 'von' },
    { es: 'eso', en: 'that', pl: 'tego', de: 'das' }, { es: 'cambiaron', en: 'they changed', pl: 'zmienili', de: 'sie änderten' }, { es: 'la', en: 'the', pl: 'tę (rodzajnik)', de: 'die' },
    { es: 'estrategia', en: 'strategy', pl: 'strategię', de: 'Strategie' },
  ] },
  { target: ['De', 'haberlo', 'sabido', 'habría', 'actuado', 'distinto'], en: 'Had I known I would have acted differently', pl: 'Gdybym wiedział, postąpiłbym inaczej', de: 'Hätte ich es gewusst, hätte ich anders gehandelt', glossary: [
    { es: 'De', en: 'if (with infinitive)', pl: 'gdyby (z bezokolicznikiem)', de: 'wenn (mit Infinitiv)' }, { es: 'haberlo', en: 'having it', pl: 'to (bezokolicznik złożony)', de: 'es gehabt' },
    { es: 'sabido', en: 'known', pl: 'wiedział', de: 'gewusst' }, { es: 'habría', en: 'I would have', pl: 'bym', de: 'ich hätte' }, { es: 'actuado', en: 'acted', pl: 'postąpił', de: 'gehandelt' },
    { es: 'distinto', en: 'differently', pl: 'inaczej', de: 'anders' },
  ] },
  { target: ['A', 'todas', 'luces', 'el', 'proyecto', 'era', 'inviable'], en: 'Clearly the project was unfeasible', pl: 'Ewidentnie projekt był niewykonalny', de: 'Das Projekt war offensichtlich undurchführbar', glossary: [
    { es: 'A', en: 'in', pl: 'w', de: 'auf / in' }, { es: 'todas', en: 'all', pl: 'każdym', de: 'alle' }, { es: 'luces', en: 'lights', pl: 'świetle', de: 'Lichter' },
    { es: 'el', en: 'the', pl: 'ten (rodzajnik)', de: 'der' }, { es: 'proyecto', en: 'project', pl: 'projekt', de: 'Projekt' }, { es: 'era', en: 'was', pl: 'był', de: 'war' },
    { es: 'inviable', en: 'unfeasible', pl: 'niewykonalny', de: 'undurchführbar' },
  ] },
  { target: ['Por', 'más', 'que', 'insistas', 'no', 'cambiaré', 'de', 'opinión'], en: "However much you insist I won't change my mind", pl: 'Choćbyś nalegał, nie zmienię zdania', de: 'Wie sehr du auch darauf bestehst, ich ändere meine Meinung nicht', glossary: [
    { es: 'Por', en: 'for', pl: 'choć', de: 'für' }, { es: 'más', en: 'more', pl: 'bardziej', de: 'mehr' }, { es: 'que', en: 'that', pl: 'byś', de: 'dass' },
    { es: 'insistas', en: 'you insist (subjunctive)', pl: 'nalegał (tryb łączący)', de: 'du bestehst darauf (Konjunktiv)' }, { es: 'no', en: 'not', pl: 'nie', de: 'nicht' },
    { es: 'cambiaré', en: 'I will change', pl: 'zmienię', de: 'ich werde ändern' }, { es: 'de', en: 'of', pl: '(przyimek)', de: 'von' }, { es: 'opinión', en: 'opinion', pl: 'zdania', de: 'Meinung' },
  ] },
  { target: ['Me', 'llama', 'la', 'atención', 'su', 'actitud'], en: 'Their attitude strikes me', pl: 'Uderza mnie ich postawa', de: 'Ihre Haltung fällt mir auf', glossary: [
    { es: 'Me', en: 'to me', pl: 'mnie', de: 'mir' }, { es: 'llama', en: 'calls', pl: 'przyciąga', de: 'ruft' }, { es: 'la', en: 'the', pl: 'tę (rodzajnik)', de: 'die' },
    { es: 'atención', en: 'attention', pl: 'uwagę', de: 'Aufmerksamkeit' }, { es: 'su', en: 'their', pl: 'ich', de: 'seine' }, { es: 'actitud', en: 'attitude', pl: 'postawa', de: 'Haltung' },
  ] },
];

/** Stable pseudo-shuffle: same sentence always yields the same block order, no seed state. */
function bankFrom(sentence: BuilderSentence) {
  const key = (word: string, i: number) => {
    let h = (i + 1) * 2654435761;
    for (let c = 0; c < word.length; c++) h = (h * 31 + word.charCodeAt(c)) >>> 0;
    return h >>> 0;
  };
  const ids = sentence.target.map((_, i) => i);
  const order = ids.slice().sort((a, b) => key(sentence.target[a], a) - key(sentence.target[b], b));
  // ponytail: a scramble that lands back on the original order makes the exercise free — rotate it
  if (order.every((id, i) => id === i) && order.length > 1) order.push(order.shift()!);
  return order.map((id) => ({ id, w: sentence.target[id] }));
}

export const pron: PronItem[] = [
  { es: 'Buenos días', en: 'Good morning', pl: 'Dzień dobry', de: 'Guten Morgen', syl: ['Bue', 'nos', 'dí', 'as'], tipEn: 'Keep the "d" in "días" soft — almost like the "th" in "this".', tipPl: 'Wymawiaj „d" w „días" miękko — prawie jak „th" w „this".', tipEs: 'La "d" de "días" es suave, casi como la "th" inglesa de "this".', tipDe: 'Das „d“ in „días“ bleibt weich — fast wie das englische „th“ in „this“.' },
  { es: 'gracias', en: 'thank you', pl: 'dziękuję', de: 'danke', syl: ['gra', 'cias'], tipEn: '"ci" is a soft "s" in Latin America ("th" in Spain).', tipPl: '„ci" to miękkie „s" (Ameryka) lub „th" (Hiszpania).', tipEs: 'La "ci" se sesea en América y se cecea en España.', tipDe: '„ci“ ist ein weiches „s“ in Lateinamerika (in Spanien ein „th“).' },
  { es: 'por favor', en: 'please', pl: 'proszę', syl: ['por', 'fa', 'vor'], tipEn: 'Tap the "r" once — a light flap, not a full roll.', tipPl: '„r" trąć raz — lekko, bez zwijania.', tipEs: 'La "r" simple es un solo golpe de lengua, no vibra.', de: 'bitte', tipDe: 'Das „r“ nur einmal antippen — kurzer Schlag, kein voller Roller.' },
  { es: 'hola', en: 'hello', pl: 'cześć', syl: ['ho', 'la'], tipEn: 'The "h" is completely silent — start straight on the "o".', tipPl: '„h" jest zupełnie nieme — zacznij od „o".', tipEs: 'La "h" es muda: empieza directamente en la "o".', de: 'hallo', tipDe: 'Das „h“ ist völlig stumm — direkt mit dem „o“ anfangen.' },
  { es: 'agua', en: 'water', pl: 'woda', de: 'Wasser', syl: ['a', 'gua'], tipEn: 'The "gu" is a hard "g" plus a "w" glide — never a "j" sound.', tipPl: '„gu" to twarde „g" plus „ł" — nigdy „dż".', tipEs: 'La "gu" suena /gw/, con la "u" bien pronunciada.', tipDe: '„gu“ ist ein hartes „g“ plus „w“-Gleitlaut — nie wie ein deutsches „j“.' },
  { es: 'casa', en: 'house', pl: 'dom', de: 'Haus', syl: ['ca', 'sa'], tipEn: 'Both "a" sounds are identical and short — no drift into "uh".', tipPl: 'Obie „a" są takie same i krótkie — bez zmiękczania.', tipEs: 'Las dos "a" suenan igual de abiertas y breves.', tipDe: 'Beide „a“ klingen gleich und kurz — nie in ein „ä“ abgleiten.' },
  { es: 'comer', en: 'to eat', pl: 'jeść', de: 'essen', syl: ['co', 'mer'], tipEn: 'Stress the last syllable: co-MER, not CO-mer.', tipPl: 'Akcent na ostatnią sylabę: co-MER, nie CO-mer.', tipEs: 'Acentúa la última sílaba: co-MER.', tipDe: 'Betonung auf der letzten Silbe: co-MER, nicht CO-mer.' },
  { es: 'amigo', en: 'friend', pl: 'przyjaciel', de: 'Freund', syl: ['a', 'mi', 'go'], tipEn: 'The "g" between vowels softens almost to a breath.', tipPl: '„g" między samogłoskami zmiękcza się prawie do tchnienia.', tipEs: 'La "g" entre vocales se relaja, casi fricativa.', tipDe: 'Das „g“ zwischen Vokalen wird fast zu einem Hauch.' },
  { es: 'España', en: 'Spain', pl: 'Hiszpania', syl: ['Es', 'pa', 'ña'], tipEn: '"ñ" is one sound — like the "ny" in "canyon", never "n"+"y".', tipPl: '„ñ" to jeden dźwięk — dokładnie polskie „ń".', tipEs: 'La "ñ" es un solo fonema palatal, no "n" más "i".', de: 'Spanien', tipDe: '„ñ“ ist ein Laut — wie „nj“ in „Kognak“, nie „n“+„j“.' },
  { es: 'cinco', en: 'five', pl: 'pięć', syl: ['cin', 'co'], tipEn: 'Soft "c" then hard "c" in one word — "sin-ko".', tipPl: 'Najpierw miękkie „c", potem twarde „k" — „sin-ko".', tipEs: 'Primera "c" sesea, segunda suena /k/.', de: 'fünf', tipDe: 'Erst weiches, dann hartes „c“ in einem Wort — „sin-ko“.' },
  { es: 'jueves', en: 'Thursday', pl: 'czwartek', syl: ['jue', 'ves'], tipEn: 'The "j" is a throaty "h", like the "ch" in Scottish "loch".', tipPl: '„j" to gardłowe „ch", jak w polskim „chleb".', tipEs: 'La "j" es velar, con fricción en la garganta.', de: 'Donnerstag', tipDe: 'Das „j“ ist ein kehliges „ch“ wie in „Bach“.' },
  { es: 'familia', en: 'family', pl: 'rodzina', syl: ['fa', 'mi', 'lia'], tipEn: '"lia" is one syllable — glide straight from "li" to "a".', tipPl: '„lia" to jedna sylaba — płynne przejście „li" do „a".', tipEs: '"lia" forma diptongo: una sola sílaba.', de: 'Familie', tipDe: '„lia“ ist eine Silbe — von „li“ direkt ins „a“ gleiten.' },
];
export const pronA2: PronItem[] = [
  { es: 'la izquierda', en: 'the left', pl: 'w lewo', de: 'links', syl: ['la', 'iz', 'quier', 'da'], tipEn: '"qu" is a hard "k" — say "kier", never "kwier".', tipPl: '„qu" to twarde „k" — mów „kier", nigdy „kwier".', tipEs: 'La "qu" suena /k/: la "u" no se pronuncia.', tipDe: '„qu“ ist ein hartes „k“ — sag „kier“, nie „kwier“.' },
  { es: 'derecha', en: 'right', pl: 'w prawo', syl: ['de', 're', 'cha'], tipEn: '"ch" sounds like the "ch" in "church".', tipPl: '„ch" brzmi jak polskie „cz".', tipEs: 'La "ch" es africada, como en "coche".', de: 'rechts', tipDe: '„ch“ klingt wie „tsch“ in „deutsch“.' },
  { es: 'rebajas', en: 'sales', pl: 'wyprzedaże', syl: ['re', 'ba', 'jas'], tipEn: 'The "j" is a throaty "h", like clearing your throat.', tipPl: '„j" to gardłowe „ch", jak chrząknięcie.', tipEs: 'La "j" raspa en el velo del paladar.', de: 'Schlussverkauf', tipDe: 'Das „j“ ist kehlig, wie beim Räuspern.' },
  { es: 'ayer', en: 'yesterday', pl: 'wczoraj', syl: ['a', 'yer'], tipEn: 'The "y" is like the "y" in "yes", and the stress falls on "yer".', tipPl: '„y" jak polskie „j"; akcent pada na „yer".', tipEs: 'La "y" es consonante aquí y el acento va en "yer".', de: 'gestern', tipDe: 'Das „y“ klingt wie „j“ in „ja“, Betonung auf „yer“.' },
  { es: 'barato', en: 'cheap', pl: 'tani', syl: ['ba', 'ra', 'to'], tipEn: 'The "b" between vowels is soft — lips barely touch.', tipPl: '„b" między samogłoskami jest miękkie — wargi ledwo się stykają.', tipEs: 'La "b" intervocálica es fricativa: labios sin cerrar del todo.', de: 'billig', tipDe: 'Das „b“ zwischen Vokalen ist weich — Lippen berühren sich kaum.' },
  { es: 'mercado', en: 'market', pl: 'targ', syl: ['mer', 'ca', 'do'], tipEn: 'Keep the "r" short — one tap, then straight into "ca".', tipPl: '„r" krótkie — jedno uderzenie, potem od razu „ca".', tipEs: 'La "r" es simple: un golpe y sigue.', de: 'Markt', tipDe: 'Das „r“ kurz halten — ein Schlag, dann direkt ins „ca“.' },
  { es: 'temprano', en: 'early', pl: 'wcześnie', syl: ['tem', 'pra', 'no'], tipEn: '"pra" is one crisp syllable — no vowel between "p" and "r".', tipPl: '„pra" to jedna zwarta sylaba — bez samogłoski między „p" a „r".', tipEs: '"pra" es una sola sílaba, sin vocal de apoyo.', de: 'früh', tipDe: '„pra“ ist eine knackige Silbe — kein Vokal zwischen „p“ und „r“.' },
  { es: 'ciudad', en: 'city', pl: 'miasto', syl: ['ciu', 'dad'], tipEn: 'Final "d" almost disappears — a light "th", not a hard "d".', tipPl: 'Końcowe „d" prawie znika — lekkie „th", nie twarde „d".', tipEs: 'La "d" final se relaja mucho, casi interdental.', de: 'Stadt', tipDe: 'Das End-„d“ verschwindet fast — ein leichtes „th“, kein hartes „d“.' },
  { es: 'cerveza', en: 'beer', pl: 'piwo', syl: ['cer', 've', 'za'], tipEn: 'The "v" sounds like a soft "b" — Spanish has no English "v".', tipPl: '„v" brzmi jak miękkie „b" — hiszpański nie ma „w".', tipEs: 'La "v" se pronuncia como "b": no existe la /v/ labiodental.', de: 'Bier', tipDe: 'Das „v“ klingt wie ein weiches „b“ — Spanisch kennt kein deutsches „w“.' },
  { es: 'trabajo', en: 'work', pl: 'praca', syl: ['tra', 'ba', 'jo'], tipEn: 'The "t" has no puff of air — touch the teeth, not the ridge.', tipPl: '„t" bez przydechu — język przy zębach, nie przy dziąsłach.', tipEs: 'La "t" es dental y sin aspiración.', de: 'Arbeit', tipDe: 'Das „t“ ohne Behauchung — Zunge an die Zähne, nicht an den Damm.' },
  { es: 'guitarra', en: 'guitar', pl: 'gitara', syl: ['gui', 'ta', 'rra'], tipEn: 'Silent "u" after "g", then a full rolled "rr".', tipPl: 'Nieme „u" po „g", potem pełne, drżące „rr".', tipEs: 'La "u" de "gui" no suena; la "rr" vibra varias veces.', de: 'Gitarre', tipDe: 'Stummes „u“ nach dem „g“, dann ein voll gerolltes „rr“.' },
  { es: 'cumpleaños', en: 'birthday', pl: 'urodziny', syl: ['cum', 'ple', 'a', 'ños'], tipEn: 'Four syllables with stress on "a" — cum-ple-A-ños.', tipPl: 'Cztery sylaby, akcent na „a" — cum-ple-A-ños.', tipEs: 'Cuatro sílabas y el acento cae en "a".', de: 'Geburtstag', tipDe: 'Vier Silben, Betonung auf „a“ — cum-ple-A-ños.' },
];
export const pronB1: PronItem[] = [
  { es: 'sin embargo', en: 'however', pl: 'jednak', de: 'jedoch', syl: ['sin', 'em', 'bar', 'go'], tipEn: "Link \"sin\" and \"embargo\" smoothly — Spanish doesn't pause between words.", tipPl: 'Połącz „sin" i „embargo" płynnie — hiszpański nie robi przerw między słowami.', tipEs: 'Enlaza "sin" con "embargo": no hay pausa entre palabras.', tipDe: '„sin“ und „embargo“ fließend verbinden — Spanisch pausiert nicht zwischen Wörtern.' },
  { es: 'me arrepiento', en: 'I regret it', pl: 'żałuję tego', syl: ['me', 'a', 'rre', 'pien', 'to'], tipEn: 'The double "rr" is a strong rolled trill — vibrate your tongue tip.', tipPl: 'Podwójne „rr" to mocno zwibrowane „r" — porusz czubkiem języka.', tipEs: 'La "rr" es vibrante múltiple: varios golpes de lengua.', de: 'ich bereue es', tipDe: 'Das doppelte „rr“ ist ein starker Roller — Zungenspitze vibrieren lassen.' },
  { es: 'a largo plazo', en: 'in the long run', pl: 'na dłuższą metę', syl: ['a', 'lar', 'go', 'pla', 'zo'], tipEn: '"pla" is one crisp syllable — no vowel between "p" and "l".', tipPl: '„pla" to jedna zwarta sylaba — bez samogłoski między „p" a „l".', tipEs: '"pla" se articula de golpe, sin vocal intermedia.', de: 'auf lange Sicht', tipDe: '„pla“ ist eine knackige Silbe — kein Vokal zwischen „p“ und „l“.' },
  { es: 'me acostumbré', en: 'I got used to it', pl: 'przyzwyczaiłem się', syl: ['me', 'a', 'cos', 'tum', 'bré'], tipEn: 'Stress falls on the final "bré" — keep it sharp and short.', tipPl: 'Akcent pada na ostatnie „bré" — wymów je krótko i wyraźnie.', tipEs: 'El acento va en "bré": breve y marcado.', de: 'ich habe mich daran gewöhnt', tipDe: 'Betonung auf dem End-„bré“ — kurz und scharf halten.' },
  { es: 'cabe destacar', en: "it's worth noting", pl: 'warto zaznaczyć', de: 'es sei angemerkt', syl: ['ca', 'be', 'des', 'ta', 'car'], tipEn: 'Keep every vowel pure and short — Spanish vowels never glide.', tipPl: 'Każda samogłoska krótka i czysta — hiszpańskie samogłoski się nie ślizgają.', tipEs: 'Las vocales españolas no se diptongan: cinco sonidos puros.', tipDe: 'Alle Vokale rein und kurz — spanische Vokale gleiten nie.' },
  { es: 'aunque llueva', en: 'even if it rains', pl: 'nawet jeśli pada', syl: ['aun', 'que', 'llue', 'va'], tipEn: '"au" is one diphthong, and "ll" sounds like the "y" in "yes".', tipPl: '„au" to jeden dyftong, a „ll" brzmi jak polskie „j".', tipEs: '"au" es diptongo y la "ll" se yeísmo como /y/.', de: 'auch wenn es regnet', tipDe: '„au“ ist ein Diphthong, und „ll“ klingt wie „j“ in „ja“.' },
  { es: 'desarrollo', en: 'development', pl: 'rozwój', syl: ['de', 'sa', 'rro', 'llo'], tipEn: 'Rolled "rr" in the middle, then "ll" as a "y" — de-sa-RRO-yo.', tipPl: 'Drżące „rr" w środku, potem „ll" jak „j" — de-sa-RRO-jo.', tipEs: 'Vibrante múltiple en "rro" y yeísmo en "llo".', de: 'Entwicklung', tipDe: 'Gerolltes „rr“ in der Mitte, dann „ll“ als „j“ — de-sa-RRO-jo.' },
  { es: 'aeropuerto', en: 'airport', pl: 'lotnisko', syl: ['a', 'e', 'ro', 'puer', 'to'], tipEn: '"a" and "e" stay separate — five syllables, not four.', tipPl: '„a" i „e" pozostają osobno — pięć sylab, nie cztery.', tipEs: '"a" y "e" no forman diptongo: son cinco sílabas.', de: 'Flughafen', tipDe: '„a“ und „e“ bleiben getrennt — fünf Silben, nicht vier.' },
  { es: 'extranjero', en: 'foreigner', pl: 'obcokrajowiec', syl: ['ex', 'tran', 'je', 'ro'], tipEn: 'The "x" is /ks/ and the "j" is throaty — eks-tran-HE-ro.', tipPl: '„x" to /ks/, a „j" gardłowe — eks-tran-CHE-ro.', tipEs: 'La "x" suena /ks/ y la "j" es velar.', de: 'Ausländer', tipDe: 'Das „x“ ist /ks/ und das „j“ kehlig — eks-tran-CHE-ro.' },
  { es: 'quizás', en: 'maybe', pl: 'może', syl: ['qui', 'zás'], tipEn: 'Silent "u", stress on the final syllable — ki-SAS.', tipPl: 'Nieme „u", akcent na ostatnią sylabę — ki-SAS.', tipEs: 'La "u" no suena y el acento va en "zás".', de: 'vielleicht', tipDe: 'Stummes „u“, Betonung auf der letzten Silbe — ki-SAS.' },
  { es: 'entrevista', en: 'interview', pl: 'rozmowa kwalifikacyjna', syl: ['en', 'tre', 'vis', 'ta'], tipEn: 'Keep the "tr" tight and the "v" soft, like a "b".', tipPl: '„tr" wymawiaj zwarcie, a „v" miękko, jak „b".', tipEs: 'Grupo "tr" bien unido y "v" como "b".', de: 'Vorstellungsgespräch', tipDe: '„tr“ eng halten und das „v“ weich, wie ein „b“.' },
  { es: 'desafortunadamente', en: 'unfortunately', pl: 'niestety', syl: ['de', 'sa', 'for', 'tu', 'na', 'da', 'men', 'te'], tipEn: 'Eight syllables, one breath — stress only on "men".', tipPl: 'Osiem sylab, jeden oddech — akcent tylko na „men".', tipEs: 'Ocho sílabas seguidas: solo "men" lleva el acento.', de: 'leider', tipDe: 'Acht Silben in einem Atemzug — betont nur „men“.' },
];
export const pronB2: PronItem[] = [
  { es: 'sin lugar a dudas', en: 'without a doubt', pl: 'bez wątpienia', syl: ['sin', 'lu', 'gar', 'a', 'du', 'das'], tipEn: 'Six syllables, one breath — practice it slowly first, then speed up.', tipPl: 'Sześć sylab, jeden oddech — najpierw powoli, potem szybciej.', tipEs: 'Seis sílabas de un tirón: primero despacio, luego rápido.', de: 'ohne jeden Zweifel', tipDe: 'Sechs Silben in einem Atemzug — erst langsam üben, dann schneller.' },
  { es: 'a raíz de eso', en: 'as a result of that', pl: 'w wyniku tego', syl: ['a', 'ra', 'íz', 'de', 'e', 'so'], tipEn: '"raíz" has a written accent — stress lands hard on the "í".', tipPl: '„raíz" ma akcent graficzny — mocny nacisk na „í".', tipEs: 'La tilde de "raíz" rompe el diptongo: acento en la "í".', de: 'infolgedessen', tipDe: '„raíz“ trägt einen Akzent — die Betonung fällt hart auf das „í“.' },
  { es: 'cabría matizar', en: 'it would be worth qualifying', pl: 'warto by doprecyzować', syl: ['ca', 'brí', 'a', 'ma', 'ti', 'zar'], tipEn: '"cabría" is conditional — soften the "b" between vowels almost to a "v".', tipPl: '„cabría" to tryb warunkowy — „b" między samogłoskami zmiękcz niemal do „v".', tipEs: 'En "cabría" la "b" intervocálica se relaja casi a fricativa.', de: 'man müsste einschränken', tipDe: '„cabría“ ist Konditional — das „b“ zwischen Vokalen fast zu einem „w“ erweichen.' },
  { es: 'no obstante ello', en: 'nevertheless', pl: 'niemniej jednak', syl: ['no', 'obs', 'tan', 'te', 'e', 'llo'], tipEn: '"ll" sounds like the "y" in "yes" in most dialects.', tipPl: '„ll" brzmi jak „j" w „jajko" w większości dialektów.', tipEs: 'El yeísmo hace que "ll" suene igual que "y".', de: 'nichtsdestotrotz', tipDe: '„ll“ klingt in den meisten Dialekten wie „j“ in „ja“.' },
  { es: 'a todas luces', en: 'clearly', pl: 'ewidentnie', de: 'offensichtlich', syl: ['a', 'to', 'das', 'lu', 'ces'], tipEn: '"ces" ends soft — a light "s", never a hard "z".', tipPl: '„ces" kończy się miękko — lekkie „s", nigdy twarde „z".', tipEs: '"ces" termina en /s/ suave, sin zumbido.', tipDe: '„ces“ endet weich — ein leichtes „s“, nie ein hartes „z“.' },
  { es: 'imprescindible', en: 'essential', pl: 'niezbędny', syl: ['im', 'pres', 'cin', 'di', 'ble'], tipEn: 'Three consonant clusters in a row — slow down on "pres-cin".', tipPl: 'Trzy zbitki spółgłoskowe z rzędu — zwolnij na „pres-cin".', tipEs: 'Tres grupos consonánticos seguidos: cuida "pres-cin".', de: 'unverzichtbar', tipDe: 'Drei Konsonantengruppen hintereinander — bei „pres-cin“ langsamer werden.' },
  { es: 'desenvolverse', en: 'to get by', pl: 'radzić sobie', syl: ['de', 'sen', 'vol', 'ver', 'se'], tipEn: 'Both "v" sounds are soft "b" — de-sen-bol-BER-se.', tipPl: 'Obie „v" to miękkie „b" — de-sen-bol-BER-se.', tipEs: 'Las dos "v" suenan como "b" bilabial.', de: 'zurechtkommen', tipDe: 'Beide „v“ sind weiche „b“ — de-sen-bol-BER-se.' },
  { es: 'paradójicamente', en: 'paradoxically', pl: 'paradoksalnie', syl: ['pa', 'ra', 'dó', 'ji', 'ca', 'men', 'te'], tipEn: 'The written accent on "dó" is the only stressed syllable.', tipPl: 'Akcent graficzny na „dó" to jedyna akcentowana sylaba.', tipEs: 'La tilde de "dó" marca la única sílaba tónica.', de: 'paradoxerweise', tipDe: 'Der Akzent auf „dó“ markiert die einzige betonte Silbe.' },
  { es: 'enriquecedor', en: 'enriching', pl: 'wzbogacający', syl: ['en', 'ri', 'que', 'ce', 'dor'], tipEn: '"r" after "n" rolls fully — en-RRI-que-ce-dor.', tipPl: '„r" po „n" jest w pełni drżące — en-RRI-que-ce-dor.', tipEs: 'Tras "n" la "r" vibra como múltiple.', de: 'bereichernd', tipDe: 'Das „r“ nach „n“ rollt voll — en-RRI-que-ce-dor.' },
  { es: 'sobrecogedor', en: 'overwhelming', pl: 'przejmujący', syl: ['so', 'bre', 'co', 'ge', 'dor'], tipEn: 'The "g" before "e" is throaty, like the "j".', tipPl: '„g" przed „e" jest gardłowe, jak „j".', tipEs: 'La "g" ante "e" suena velar, igual que la "j".', de: 'überwältigend', tipDe: 'Das „g“ vor „e“ ist kehlig, wie das „j“.' },
  { es: 'reivindicación', en: 'demand / claim', pl: 'roszczenie', syl: ['rei', 'vin', 'di', 'ca', 'ción'], tipEn: 'Start with a rolled "r"; "ción" is one syllable, stressed.', tipPl: 'Zacznij od drżącego „r"; „ción" to jedna sylaba, akcentowana.', tipEs: 'Empieza con "r" múltiple y acentúa "ción".', de: 'Forderung', tipDe: 'Mit gerolltem „r“ beginnen; „ción“ ist eine betonte Silbe.' },
  { es: 'inconmensurable', en: 'immeasurable', pl: 'niezmierzony', syl: ['in', 'con', 'men', 'su', 'ra', 'ble'], tipEn: 'Two "n" sounds meet in "conmen" — hold the nasal a beat longer.', tipPl: 'Dwa „n" spotykają się w „conmen" — przytrzymaj nosówkę chwilę dłużej.', tipEs: 'En "conmen" chocan dos nasales: alarga un poco el sonido.', de: 'unermesslich', tipDe: 'Zwei „n“ treffen in „conmen“ — den Nasal einen Takt länger halten.' },
];

export const dictA1: Phrase[] = [
  { es: 'Hola, ¿cómo estás?', en: 'Hello, how are you?', pl: 'Cześć, jak się masz?', de: 'Hallo, wie geht es dir?' },
  { es: 'Me llamo Ana', en: 'My name is Ana', pl: 'Nazywam się Ana', de: 'Ich heiße Ana' },
  { es: 'Tengo dos hermanos', en: 'I have two brothers', pl: 'Mam dwóch braci', de: 'Ich habe zwei Brüder' },
  { es: 'La casa es muy grande', en: 'The house is very big', pl: 'Dom jest bardzo duży', de: 'Das Haus ist sehr groß' },
  { es: 'Buenos días, ¿qué tal?', en: 'Good morning, how is it going?', pl: 'Dzień dobry, co słychać?', de: 'Guten Morgen, wie geht\'s?' },
  { es: 'Quiero un vaso de agua', en: 'I want a glass of water', pl: 'Chcę szklankę wody', de: 'Ich möchte ein Glas Wasser' },
  { es: 'Mi amigo vive en Barcelona', en: 'My friend lives in Barcelona', pl: 'Mój przyjaciel mieszka w Barcelonie', de: 'Mein Freund wohnt in Barcelona' },
  { es: 'Hoy no tengo clase', en: "I don't have class today", pl: 'Dziś nie mam zajęć', de: 'Heute habe ich keinen Unterricht' },
  { es: 'La comida está muy rica', en: 'The food is delicious', pl: 'Jedzenie jest bardzo smaczne', de: 'Das Essen ist sehr lecker' },
  { es: '¿Dónde está la estación?', en: 'Where is the station?', pl: 'Gdzie jest dworzec?', de: 'Wo ist der Bahnhof?' },
  { es: 'Son las cinco de la tarde', en: "It's five in the afternoon", pl: 'Jest piąta po południu', de: 'Es ist fünf Uhr nachmittags' },
  { es: 'Muchas gracias por todo', en: 'Thank you very much for everything', pl: 'Bardzo dziękuję za wszystko', de: 'Vielen Dank für alles' },
];
export const dictA2: Phrase[] = [
  { es: 'Ayer compré pan en el mercado', en: 'Yesterday I bought bread at the market', pl: 'Wczoraj kupiłem chleb na targu', de: 'Gestern habe ich auf dem Markt Brot gekauft' },
  { es: 'Gira a la izquierda en la esquina', en: 'Turn left at the corner', pl: 'Skręć w lewo na rogu', de: 'Bieg an der Ecke links ab' },
  { es: 'Me despierto a las siete', en: 'I wake up at seven', pl: 'Budzę się o siódmej', de: 'Ich wache um sieben auf' },
  { es: '¿Puedo pagar con tarjeta?', en: 'Can I pay by card?', pl: 'Czy mogę zapłacić kartą?', de: 'Kann ich mit Karte zahlen?' },
  { es: 'El año pasado viajamos a Portugal', en: 'Last year we travelled to Portugal', pl: 'W zeszłym roku pojechaliśmy do Portugalii', de: 'Letztes Jahr sind wir nach Portugal gereist' },
  { es: 'Estos zapatos son demasiado caros', en: 'These shoes are too expensive', pl: 'Te buty są za drogie', de: 'Diese Schuhe sind zu teuer' },
  { es: 'No encontré las llaves del coche', en: "I didn't find the car keys", pl: 'Nie znalazłem kluczyków od samochodu', de: 'Ich habe die Autoschlüssel nicht gefunden' },
  { es: 'Siempre desayuno antes de salir', en: 'I always have breakfast before going out', pl: 'Zawsze jem śniadanie przed wyjściem', de: 'Ich frühstücke immer, bevor ich rausgehe' },
  { es: 'La tienda cierra a las nueve', en: 'The shop closes at nine', pl: 'Sklep zamyka się o dziewiątej', de: 'Der Laden schließt um neun' },
  { es: 'Anoche vimos una película muy buena', en: 'Last night we watched a very good film', pl: 'Wczoraj wieczorem obejrzeliśmy bardzo dobry film', de: 'Gestern Abend haben wir einen sehr guten Film gesehen' },
  { es: 'Hay rebajas en toda la ciudad', en: 'There are sales all over the city', pl: 'W całym mieście są wyprzedaże', de: 'In der ganzen Stadt gibt es Schlussverkauf' },
  { es: '¿Cuánto tiempo dura el viaje?', en: 'How long does the trip take?', pl: 'Jak długo trwa podróż?', de: 'Wie lange dauert die Reise?' },
];
export const dictB1: Phrase[] = [
  { es: 'Aunque llueva, saldré de todas formas', en: "Even if it rains, I'll go out anyway", pl: 'Nawet jeśli będzie padać, i tak wyjdę', de: 'Auch wenn es regnet, gehe ich trotzdem raus' },
  { es: 'Me arrepiento de no haber estudiado más', en: 'I regret not having studied more', pl: 'Żałuję, że nie uczyłem się więcej', de: 'Ich bereue, nicht mehr gelernt zu haben' },
  { es: 'A largo plazo, esto será beneficioso', en: 'In the long run, this will be beneficial', pl: 'Na dłuższą metę to będzie korzystne', de: 'Auf lange Sicht wird das von Vorteil sein' },
  { es: 'Cabe destacar que la situación ha cambiado', en: "It's worth noting that the situation has changed", pl: 'Warto zaznaczyć, że sytuacja się zmieniła', de: 'Es sei angemerkt, dass sich die Lage geändert hat' },
  { es: 'Espero que llegues a tiempo mañana', en: 'I hope you arrive on time tomorrow', pl: 'Mam nadzieję, że jutro zdążysz', de: 'Ich hoffe, du kommst morgen pünktlich' },
  { es: 'Si tuviera dinero, me compraría una moto', en: 'If I had money, I would buy a motorbike', pl: 'Gdybym miał pieniądze, kupiłbym motocykl', de: 'Wenn ich Geld hätte, würde ich mir ein Motorrad kaufen' },
  { es: 'Me acostumbré a vivir sin coche', en: 'I got used to living without a car', pl: 'Przyzwyczaiłem się żyć bez samochodu', de: 'Ich habe mich daran gewöhnt, ohne Auto zu leben' },
  { es: 'No creo que sea una buena idea', en: "I don't think it's a good idea", pl: 'Nie sądzę, żeby to był dobry pomysł', de: 'Ich glaube nicht, dass das eine gute Idee ist' },
  { es: 'Desafortunadamente, el vuelo se retrasó', en: 'Unfortunately, the flight was delayed', pl: 'Niestety lot się opóźnił', de: 'Leider hatte der Flug Verspätung' },
  { es: 'Llevo tres años trabajando aquí', en: "I've been working here for three years", pl: 'Pracuję tu od trzech lat', de: 'Ich arbeite seit drei Jahren hier' },
  { es: 'Quizás deberíamos hablarlo con calma', en: 'Maybe we should talk it over calmly', pl: 'Może powinniśmy omówić to spokojnie', de: 'Vielleicht sollten wir in Ruhe darüber reden' },
  { es: 'En cuanto termine, te aviso', en: "As soon as I finish, I'll let you know", pl: 'Jak tylko skończę, dam ci znać', de: 'Sobald ich fertig bin, sage ich dir Bescheid' },
];
export const dictB2: Phrase[] = [
  { es: 'Sin lugar a dudas, esto marcará un antes y un después', en: 'Without a doubt, this will be a turning point', pl: 'Bez wątpienia to będzie punkt zwrotny', de: 'Ohne jeden Zweifel wird das ein Wendepunkt sein' },
  { es: 'Cabría matizar que no todos están de acuerdo', en: 'It would be worth noting that not everyone agrees', pl: 'Warto by doprecyzować, że nie wszyscy się zgadzają', de: 'Man müsste einschränken, dass nicht alle einverstanden sind' },
  { es: 'No obstante ello, seguimos adelante con el plan', en: "Nevertheless, we're moving forward with the plan", pl: 'Niemniej jednak realizujemy plan dalej', de: 'Dessen ungeachtet setzen wir den Plan fort' },
  { es: 'A raíz de eso cambiaron toda la estrategia', en: 'As a result of that they changed the whole strategy', pl: 'W wyniku tego zmienili całą strategię', de: 'Infolgedessen haben sie die ganze Strategie geändert' },
  { es: 'De haberlo sabido, habría actuado de otra manera', en: 'Had I known, I would have acted differently', pl: 'Gdybym wiedział, postąpiłbym inaczej', de: 'Hätte ich es gewusst, hätte ich anders gehandelt' },
  { es: 'A todas luces el proyecto era inviable', en: 'Clearly the project was unfeasible', pl: 'Ewidentnie projekt był niewykonalny', de: 'Das Projekt war offensichtlich undurchführbar' },
  { es: 'Por más que insistas, no cambiaré de opinión', en: "However much you insist, I won't change my mind", pl: 'Choćbyś nalegał, nie zmienię zdania', de: 'So sehr du auch darauf bestehst, ich ändere meine Meinung nicht' },
  { es: 'Me llama la atención su actitud ante el problema', en: 'Their attitude towards the problem strikes me', pl: 'Uderza mnie ich postawa wobec problemu', de: 'Ihre Haltung zu dem Problem fällt mir auf' },
  { es: 'Resulta imprescindible revisar las cifras', en: 'It is essential to review the figures', pl: 'Konieczne jest zweryfikowanie liczb', de: 'Es ist unerlässlich, die Zahlen zu prüfen' },
  { es: 'Se desenvuelve con soltura en cualquier situación', en: 'They handle any situation with ease', pl: 'Radzi sobie swobodnie w każdej sytuacji', de: 'Er kommt in jeder Situation mühelos zurecht' },
  { es: 'Paradójicamente, el error nos ayudó bastante', en: 'Paradoxically, the mistake helped us quite a lot', pl: 'Paradoksalnie ten błąd sporo nam pomógł', de: 'Paradoxerweise hat uns der Fehler ziemlich geholfen' },
  { es: 'Fue una experiencia sumamente enriquecedora', en: 'It was an extremely enriching experience', pl: 'To było wyjątkowo wzbogacające doświadczenie', de: 'Es war eine äußerst bereichernde Erfahrung' },
];

export const levels: LevelDef[] = [
  { code: 'A1', en: 'Beginner', pl: 'Początkujący', de: 'Anfänger', dEn: 'Greetings, numbers, everyday words and the simple present tense.', dPl: 'Powitania, liczby, codzienne słówka i czas teraźniejszy.', dDe: 'Begrüßungen, Zahlen, Alltagswörter und das einfache Präsens.', status: 'active', progress: 62 },
  { code: 'A2', en: 'Elementary', pl: 'Podstawowy', de: 'Grundstufe', dEn: 'Past tenses, shopping, directions and describing routines.', dPl: 'Czasy przeszłe, zakupy, wskazówki i opis rutyny.', dDe: 'Vergangenheitsformen, Einkaufen, Wegbeschreibungen und Alltagsroutinen.', status: 'available', progress: 8 },
  { code: 'B1', en: 'Intermediate', pl: 'Średnio zaawansowany', de: 'Mittelstufe', dEn: 'Opinions, future plans and handling most travel situations.', dPl: 'Opinie, plany na przyszłość i typowe sytuacje w podróży.', dDe: 'Meinungen, Zukunftspläne und die meisten Reisesituationen.', status: 'available', progress: 0 },
  { code: 'B2', en: 'Upper intermediate', pl: 'Ponad średni', de: 'Obere Mittelstufe', dEn: 'Abstract topics, nuanced arguments and fluent conversation.', dPl: 'Tematy abstrakcyjne, niuanse i płynna rozmowa.', dDe: 'Abstrakte Themen, differenzierte Argumente und flüssige Gespräche.', status: 'available', progress: 0 },
  { code: 'C1', en: 'Advanced', pl: 'Zaawansowany', de: 'Fortgeschritten', dEn: 'Complex texts, idioms and precise, spontaneous expression.', dPl: 'Złożone teksty, idiomy i precyzyjna, swobodna wypowiedź.', dDe: 'Komplexe Texte, Redewendungen und präziser, spontaner Ausdruck.', status: 'locked', progress: 0 },
  { code: 'C2', en: 'Mastery', pl: 'Biegłość', de: 'Sprachbeherrschung', dEn: 'Near-native command across any subject or register.', dPl: 'Biegłość bliska rodzimej w każdym temacie i rejestrze.', dDe: 'Nahezu muttersprachliche Beherrschung in jedem Thema und Register.', status: 'locked', progress: 0 },
];

const today = todayISO();
const due = (n: number) => addDays(today, n);

export const srsSeed: SrsItem[] = [
  { es: 'gracias', en: 'thank you', pl: 'dziękuję', de: 'danke', strength: 82, dueAt: due(3) },
  { es: 'comer', en: 'to eat', pl: 'jeść', de: 'essen', strength: 45, dueAt: due(0) },
  { es: 'casa', en: 'house', pl: 'dom', de: 'Haus', strength: 68, dueAt: due(1) },
  { es: 'amigo', en: 'friend', pl: 'przyjaciel', de: 'Freund', strength: 31, dueAt: due(0) },
  { es: 'hoy', en: 'today', pl: 'dzisiaj', de: 'heute', strength: 91, dueAt: due(6) },
  { es: 'agua', en: 'water', pl: 'woda', de: 'Wasser', strength: 54, dueAt: due(0) },
];
export const srsPhrasesSeed: SrsItem[] = [
  { es: '¿Dónde está el baño?', en: 'Where is the bathroom?', pl: 'Gdzie jest toaleta?', de: 'Wo ist die Toilette?', strength: 76, dueAt: due(2) },
  { es: 'La cuenta, por favor', en: 'The check, please', pl: 'Poproszę rachunek', de: 'Die Rechnung, bitte', strength: 38, dueAt: due(0) },
  { es: '¿Cuánto cuesta?', en: 'How much is it?', pl: 'Ile to kosztuje?', de: 'Was kostet das?', strength: 63, dueAt: due(1) },
  { es: 'Necesito ayuda urgente', en: 'I need urgent help', pl: 'Potrzebuję pilnej pomocy', de: 'Ich brauche dringend Hilfe', strength: 29, dueAt: due(0) },
  { es: 'Mucho gusto', en: 'Nice to meet you', pl: 'Miło mi', de: 'Sehr erfreut', strength: 88, dueAt: due(5) },
];
export const srsPronSeed: SrsItem[] = [
  { es: 'Buenos días', en: 'Good morning', pl: 'Dzień dobry', de: 'Guten Morgen', strength: 80, dueAt: due(3) },
  { es: 'gracias', en: 'thank you', pl: 'dziękuję', de: 'danke', strength: 42, dueAt: due(0) },
  { es: 'la izquierda', en: 'the left', pl: 'w lewo', de: 'links', strength: 57, dueAt: due(1) },
  { es: 'sin embargo', en: 'however', pl: 'jednak', de: 'jedoch', strength: 33, dueAt: due(0) },
  { es: 'a todas luces', en: 'clearly', pl: 'ewidentnie', de: 'offensichtlich', strength: 71, dueAt: due(4) },
];
export const srsDictSeed: SrsItem[] = [
  { es: 'Hola, ¿cómo estás?', en: 'Hello, how are you?', pl: 'Cześć, jak się masz?', de: 'Hallo, wie geht es dir?', strength: 69, dueAt: due(2) },
  { es: 'Me llamo Ana', en: 'My name is Ana', pl: 'Nazywam się Ana', de: 'Ich heiße Ana', strength: 35, dueAt: due(0) },
  { es: 'Tengo dos hermanos', en: 'I have two brothers', pl: 'Mam dwóch braci', de: 'Ich habe zwei Brüder', strength: 48, dueAt: due(1) },
  { es: 'La casa es muy grande', en: 'The house is very big', pl: 'Dom jest bardzo duży', de: 'Das Haus ist sehr groß', strength: 27, dueAt: due(0) },
];
export const srsBuilderSeed: SrsItem[] = [
  { es: 'Yo quiero un café con leche', en: 'I want a coffee with milk', pl: 'Chcę kawę z mlekiem', de: 'Ich möchte einen Milchkaffee', strength: 73, dueAt: due(3) },
  { es: 'Ayer compré pan en el mercado', en: 'Yesterday I bought bread at the market', pl: 'Wczoraj kupiłem chleb na targu', de: 'Gestern habe ich auf dem Markt Brot gekauft', strength: 31, dueAt: due(0) },
];

export const challengesSeed: Challenge[] = [
  { id: 'c1', en: 'Review 5 words', pl: 'Powtórz 5 słówek', es: 'Repasa 5 palabras', de: 'Wiederhole 5 Wörter', xp: 15, done: false },
  { id: 'c2', en: 'Build 1 sentence', pl: 'Ułóż 1 zdanie', es: 'Forma 1 frase', de: 'Baue 1 Satz', xp: 10, done: true },
  { id: 'c3', en: 'Practice pronunciation', pl: 'Poćwicz wymowę', es: 'Practica pronunciación', de: 'Übe die Aussprache', xp: 20, done: false },
  { id: 'c4', en: 'Learn 3 new phrases', pl: 'Naucz się 3 nowych zwrotów', es: 'Aprende 3 frases nuevas', de: 'Lerne 3 neue Wendungen', xp: 12, done: false },
  { id: 'c5', en: 'Complete a dictation drill', pl: 'Ukończ dyktando', es: 'Completa un dictado', de: 'Mach ein Diktat', xp: 18, done: false },
  { id: 'c6', en: 'Perfect score on 3 cards', pl: 'Perfekcyjny wynik na 3 kartach', es: 'Puntuación perfecta en 3 tarjetas', de: 'Perfekte Punktzahl auf 3 Karten', xp: 25, done: false },
];

export const badgesSeed = [
  { ic: '🔥', en: '21-day streak', pl: '21 dni z rzędu', es: 'Racha de 21 días', de: '21 Tage in Folge', got: true },
  { ic: '📚', en: '200 words', pl: '200 słów', es: '200 palabras', de: '200 Wörter', got: true },
  { ic: '🎯', en: 'Perfect lesson', pl: 'Idealna lekcja', es: 'Lección perfecta', de: 'Perfekte Lektion', got: true },
  { ic: '🏆', en: 'Gold League', pl: 'Liga Złota', es: 'Liga Oro', de: 'Goldliga', got: true },
  { ic: '🎤', en: '50 pronunciations', pl: '50 wymów', es: '50 pronunciaciones', de: '50 Aussprachen', got: false },
  { ic: '⭐', en: 'A2 complete', pl: 'A2 ukończone', es: 'A2 completado', de: 'A2 abgeschlossen', got: false },
  { ic: '📅', en: 'Perfect week', pl: 'Idealny tydzień', es: 'Semana perfecta', de: 'Perfekte Woche', got: true },
  { ic: '🌱', en: '7-day streak', pl: '7 dni z rzędu', es: 'Racha de 7 días', de: '7 Tage in Folge', got: true },
];

export const accentSwatches = ['#DE5B3B', '#E0902A', '#2F9E7A', '#2F86C9', '#6C5CE0', '#D9527E'];

export function deckFor(lv: Level, extra?: Word[]): Word[] {
  const base = lv === 'A1' ? deck : lv === 'A2' ? deckA2 : [];
  return base.concat(extra || []);
}
export const builderDeA1: BuilderSentence[] = [
  { target: ['Ich', 'möchte', 'einen', 'Kaffee', 'mit', 'Milch'], de: 'Ich möchte einen Kaffee mit Milch', en: 'I want a coffee with milk', pl: 'Chcę kawę z mlekiem', es: 'Quiero un café con leche', glossary: [
    { de: 'Ich', en: 'I', pl: 'ja', es: 'yo' }, { de: 'möchte', en: 'would like', pl: 'chcę', es: 'quiero' }, { de: 'einen', en: 'a (accusative)', pl: 'jeden (biernik)', es: 'un' },
    { de: 'Kaffee', en: 'coffee', pl: 'kawa', es: 'café' }, { de: 'mit', en: 'with', pl: 'z', es: 'con' }, { de: 'Milch', en: 'milk', pl: 'mleko', es: 'leche' },
  ] },
  { target: ['Meine', 'Schwester', 'wohnt', 'in', 'Berlin'], de: 'Meine Schwester wohnt in Berlin', en: 'My sister lives in Berlin', pl: 'Moja siostra mieszka w Berlinie', es: 'Mi hermana vive en Berlín', glossary: [
    { de: 'Meine', en: 'my', pl: 'moja', es: 'mi' }, { de: 'Schwester', en: 'sister', pl: 'siostra', es: 'hermana' }, { de: 'wohnt', en: 'lives', pl: 'mieszka', es: 'vive' },
    { de: 'in', en: 'in', pl: 'w', es: 'en' }, { de: 'Berlin', en: 'Berlin', pl: 'Berlin', es: 'Berlín' },
  ] },
  { target: ['Heute', 'ist', 'es', 'sehr', 'heiß'], de: 'Heute ist es sehr heiß', en: "It's very hot today", pl: 'Dziś jest bardzo gorąco', es: 'Hoy hace mucho calor', glossary: [
    { de: 'Heute', en: 'today', pl: 'dziś', es: 'hoy' }, { de: 'ist', en: 'is', pl: 'jest', es: 'es / hace' }, { de: 'es', en: 'it', pl: 'to', es: 'ello' },
    { de: 'sehr', en: 'very', pl: 'bardzo', es: 'muy' }, { de: 'heiß', en: 'hot', pl: 'gorąco', es: 'caluroso' },
  ] },
  { target: ['Das', 'Haus', 'hat', 'drei', 'Fenster'], de: 'Das Haus hat drei Fenster', en: 'The house has three windows', pl: 'Dom ma trzy okna', es: 'La casa tiene tres ventanas', glossary: [
    { de: 'Das', en: 'the', pl: 'ten', es: 'la' }, { de: 'Haus', en: 'house', pl: 'dom', es: 'casa' }, { de: 'hat', en: 'has', pl: 'ma', es: 'tiene' },
    { de: 'drei', en: 'three', pl: 'trzy', es: 'tres' }, { de: 'Fenster', en: 'windows', pl: 'okna', es: 'ventanas' },
  ] },
  { target: ['Ich', 'habe', 'jetzt', 'keine', 'Zeit'], de: 'Ich habe jetzt keine Zeit', en: "I don't have time now", pl: 'Nie mam teraz czasu', es: 'No tengo tiempo ahora', glossary: [
    { de: 'Ich', en: 'I', pl: 'ja', es: 'yo' }, { de: 'habe', en: 'have', pl: 'mam', es: 'tengo' }, { de: 'jetzt', en: 'now', pl: 'teraz', es: 'ahora' },
    { de: 'keine', en: 'no (negation)', pl: 'nie (przeczenie)', es: 'ninguna' }, { de: 'Zeit', en: 'time', pl: 'czas', es: 'tiempo' },
  ] },
  { target: ['Der', 'Bahnhof', 'ist', 'sehr', 'weit'], de: 'Der Bahnhof ist sehr weit', en: 'The station is very far', pl: 'Dworzec jest bardzo daleko', es: 'La estación está muy lejos', glossary: [
    { de: 'Der', en: 'the', pl: 'ten', es: 'la' }, { de: 'Bahnhof', en: 'station', pl: 'dworzec', es: 'estación' }, { de: 'ist', en: 'is', pl: 'jest', es: 'está' },
    { de: 'sehr', en: 'very', pl: 'bardzo', es: 'muy' }, { de: 'weit', en: 'far', pl: 'daleko', es: 'lejos' },
  ] },
  { target: ['Die', 'Kinder', 'essen', 'Obst'], de: 'Die Kinder essen Obst', en: 'The children eat fruit', pl: 'Dzieci jedzą owoce', es: 'Los niños comen fruta', glossary: [
    { de: 'Die', en: 'the (plural)', pl: 'ci (l. mnoga)', es: 'los' }, { de: 'Kinder', en: 'children', pl: 'dzieci', es: 'niños' },
    { de: 'essen', en: 'eat', pl: 'jedzą', es: 'comen' }, { de: 'Obst', en: 'fruit', pl: 'owoce', es: 'fruta' },
  ] },
  { target: ['Dein', 'Haus', 'gefällt', 'mir', 'sehr'], de: 'Dein Haus gefällt mir sehr', en: 'I like your house a lot', pl: 'Bardzo podoba mi się twój dom', es: 'Me gusta mucho tu casa', glossary: [
    { de: 'Dein', en: 'your', pl: 'twój', es: 'tu' }, { de: 'Haus', en: 'house', pl: 'dom', es: 'casa' }, { de: 'gefällt', en: 'is pleasing', pl: 'podoba się', es: 'gusta' },
    { de: 'mir', en: 'to me', pl: 'mi', es: 'me' }, { de: 'sehr', en: 'a lot', pl: 'bardzo', es: 'mucho' },
  ] },
];

export const builderDeA2: BuilderSentence[] = [
  { target: ['Gestern', 'habe', 'ich', 'Brot', 'gekauft'], de: 'Gestern habe ich Brot gekauft', en: 'Yesterday I bought bread', pl: 'Wczoraj kupiłem chleb', es: 'Ayer compré pan', glossary: [
    { de: 'Gestern', en: 'yesterday', pl: 'wczoraj', es: 'ayer' }, { de: 'habe', en: 'have (auxiliary)', pl: 'mam (posiłkowy)', es: 'he (auxiliar)' }, { de: 'ich', en: 'I', pl: 'ja', es: 'yo' },
    { de: 'Brot', en: 'bread', pl: 'chleb', es: 'pan' }, { de: 'gekauft', en: 'bought', pl: 'kupiłem', es: 'comprado' },
  ] },
  { target: ['Letztes', 'Jahr', 'sind', 'wir', 'nach', 'Portugal', 'gereist'], de: 'Letztes Jahr sind wir nach Portugal gereist', en: 'Last year we travelled to Portugal', pl: 'W zeszłym roku pojechaliśmy do Portugalii', es: 'El año pasado viajamos a Portugal', glossary: [
    { de: 'Letztes', en: 'last', pl: 'zeszły', es: 'pasado' }, { de: 'Jahr', en: 'year', pl: 'rok', es: 'año' }, { de: 'sind', en: 'are (auxiliary)', pl: 'jesteśmy (posiłkowy)', es: 'somos (auxiliar)' },
    { de: 'wir', en: 'we', pl: 'my', es: 'nosotros' }, { de: 'nach', en: 'to', pl: 'do', es: 'a' }, { de: 'Portugal', en: 'Portugal', pl: 'Portugalia', es: 'Portugal' },
    { de: 'gereist', en: 'travelled', pl: 'pojechaliśmy', es: 'viajado' },
  ] },
  { target: ['Bieg', 'an', 'der', 'Ecke', 'links', 'ab'], de: 'Bieg an der Ecke links ab', en: 'Turn left at the corner', pl: 'Skręć w lewo na rogu', es: 'Gira a la izquierda en la esquina', glossary: [
    { de: 'Bieg', en: 'turn', pl: 'skręć', es: 'gira' }, { de: 'an', en: 'at', pl: 'na', es: 'en' }, { de: 'der', en: 'the (dative)', pl: 'tym (celownik)', es: 'la' },
    { de: 'Ecke', en: 'corner', pl: 'róg', es: 'esquina' }, { de: 'links', en: 'left', pl: 'w lewo', es: 'a la izquierda' }, { de: 'ab', en: 'off (separable prefix)', pl: '(przedrostek rozdzielny)', es: '(prefijo separable)' },
  ] },
  { target: ['Heute', 'Morgen', 'bin', 'ich', 'früh', 'aufgewacht'], de: 'Heute Morgen bin ich früh aufgewacht', en: 'I woke up early this morning', pl: 'Dziś rano obudziłem się wcześnie', es: 'Esta mañana me desperté temprano', glossary: [
    { de: 'Heute', en: 'today', pl: 'dziś', es: 'hoy' }, { de: 'Morgen', en: 'morning', pl: 'rano', es: 'mañana' }, { de: 'bin', en: 'am (auxiliary)', pl: 'jestem (posiłkowy)', es: 'soy (auxiliar)' },
    { de: 'ich', en: 'I', pl: 'ja', es: 'yo' }, { de: 'früh', en: 'early', pl: 'wcześnie', es: 'temprano' }, { de: 'aufgewacht', en: 'woken up', pl: 'obudziłem się', es: 'despertado' },
  ] },
  { target: ['Ich', 'habe', 'mit', 'Karte', 'bezahlt'], de: 'Ich habe mit Karte bezahlt', en: 'I paid by card', pl: 'Zapłaciłem kartą', es: 'Pagué con tarjeta', glossary: [
    { de: 'Ich', en: 'I', pl: 'ja', es: 'yo' }, { de: 'habe', en: 'have (auxiliary)', pl: 'mam (posiłkowy)', es: 'he (auxiliar)' }, { de: 'mit', en: 'with / by', pl: '(narzędnik)', es: 'con' },
    { de: 'Karte', en: 'card', pl: 'karta', es: 'tarjeta' }, { de: 'bezahlt', en: 'paid', pl: 'zapłaciłem', es: 'pagado' },
  ] },
  { target: ['Diese', 'Schuhe', 'sind', 'viel', 'zu', 'teuer'], de: 'Diese Schuhe sind viel zu teuer', en: 'These shoes are far too expensive', pl: 'Te buty są o wiele za drogie', es: 'Estos zapatos son demasiado caros', glossary: [
    { de: 'Diese', en: 'these', pl: 'te', es: 'estos' }, { de: 'Schuhe', en: 'shoes', pl: 'buty', es: 'zapatos' }, { de: 'sind', en: 'are', pl: 'są', es: 'son' },
    { de: 'viel', en: 'much', pl: 'o wiele', es: 'mucho' }, { de: 'zu', en: 'too', pl: 'za', es: 'demasiado' }, { de: 'teuer', en: 'expensive', pl: 'drogie', es: 'caros' },
  ] },
  { target: ['Ich', 'frühstücke', 'immer', 'vor', 'der', 'Arbeit'], de: 'Ich frühstücke immer vor der Arbeit', en: 'I always have breakfast before work', pl: 'Zawsze jem śniadanie przed pracą', es: 'Siempre desayuno antes del trabajo', glossary: [
    { de: 'Ich', en: 'I', pl: 'ja', es: 'yo' }, { de: 'frühstücke', en: 'have breakfast', pl: 'jem śniadanie', es: 'desayuno' }, { de: 'immer', en: 'always', pl: 'zawsze', es: 'siempre' },
    { de: 'vor', en: 'before', pl: 'przed', es: 'antes de' }, { de: 'der', en: 'the (dative)', pl: 'tą (celownik)', es: 'el' }, { de: 'Arbeit', en: 'work', pl: 'praca', es: 'trabajo' },
  ] },
  { target: ['Ich', 'habe', 'den', 'Autoschlüssel', 'nicht', 'gefunden'], de: 'Ich habe den Autoschlüssel nicht gefunden', en: "I didn't find the car key", pl: 'Nie znalazłem kluczyka od samochodu', es: 'No encontré la llave del coche', glossary: [
    { de: 'Ich', en: 'I', pl: 'ja', es: 'yo' }, { de: 'habe', en: 'have (auxiliary)', pl: 'mam (posiłkowy)', es: 'he (auxiliar)' }, { de: 'den', en: 'the (accusative)', pl: 'ten (biernik)', es: 'la' },
    { de: 'Autoschlüssel', en: 'car key', pl: 'kluczyk od samochodu', es: 'llave del coche' }, { de: 'nicht', en: 'not', pl: 'nie', es: 'no' }, { de: 'gefunden', en: 'found', pl: 'znalazłem', es: 'encontrado' },
  ] },
];

export const builderDeB1: BuilderSentence[] = [
  { target: ['Auch', 'wenn', 'es', 'regnet', 'gehe', 'ich', 'raus'], de: 'Auch wenn es regnet gehe ich raus', en: 'Even if it rains I go out', pl: 'Nawet jeśli pada, wychodzę', es: 'Aunque llueva salgo igualmente', glossary: [
    { de: 'Auch', en: 'also / even', pl: 'nawet', es: 'incluso' }, { de: 'wenn', en: 'if', pl: 'jeśli', es: 'si' }, { de: 'es', en: 'it', pl: 'to', es: 'ello' },
    { de: 'regnet', en: 'rains (verb last in clause)', pl: 'pada (czasownik na końcu)', es: 'llueve (verbo al final)' }, { de: 'gehe', en: 'go', pl: 'idę', es: 'salgo' },
    { de: 'ich', en: 'I', pl: 'ja', es: 'yo' }, { de: 'raus', en: 'out', pl: 'na zewnątrz', es: 'fuera' },
  ] },
  { target: ['Ich', 'bereue', 'dass', 'ich', 'nicht', 'mehr', 'gelernt', 'habe'], de: 'Ich bereue dass ich nicht mehr gelernt habe', en: 'I regret that I did not study more', pl: 'Żałuję, że nie uczyłem się więcej', es: 'Me arrepiento de no haber estudiado más', glossary: [
    { de: 'Ich', en: 'I', pl: 'ja', es: 'yo' }, { de: 'bereue', en: 'regret', pl: 'żałuję', es: 'me arrepiento' }, { de: 'dass', en: 'that', pl: 'że', es: 'que' },
    { de: 'ich', en: 'I', pl: 'ja', es: 'yo' }, { de: 'nicht', en: 'not', pl: 'nie', es: 'no' }, { de: 'mehr', en: 'more', pl: 'więcej', es: 'más' },
    { de: 'gelernt', en: 'studied', pl: 'uczyłem się', es: 'estudiado' }, { de: 'habe', en: 'have (verb last)', pl: 'mam (czasownik na końcu)', es: 'he (verbo al final)' },
  ] },
  { target: ['Auf', 'lange', 'Sicht', 'wird', 'das', 'von', 'Vorteil', 'sein'], de: 'Auf lange Sicht wird das von Vorteil sein', en: 'In the long run this will be an advantage', pl: 'Na dłuższą metę to będzie korzystne', es: 'A largo plazo esto será beneficioso', glossary: [
    { de: 'Auf', en: 'on', pl: 'na', es: 'a' }, { de: 'lange', en: 'long', pl: 'dłuższą', es: 'largo' }, { de: 'Sicht', en: 'view / run', pl: 'metę', es: 'plazo' },
    { de: 'wird', en: 'will', pl: 'będzie', es: 'será' }, { de: 'das', en: 'that', pl: 'to', es: 'esto' }, { de: 'von', en: 'of', pl: '(przyimek)', es: 'de' },
    { de: 'Vorteil', en: 'advantage', pl: 'korzyść', es: 'ventaja' }, { de: 'sein', en: 'be (infinitive last)', pl: 'być (bezokolicznik na końcu)', es: 'ser (infinitivo al final)' },
  ] },
  { target: ['Ich', 'hoffe', 'dass', 'du', 'morgen', 'pünktlich', 'kommst'], de: 'Ich hoffe dass du morgen pünktlich kommst', en: 'I hope you arrive on time tomorrow', pl: 'Mam nadzieję, że jutro przyjdziesz punktualnie', es: 'Espero que mañana llegues a tiempo', glossary: [
    { de: 'Ich', en: 'I', pl: 'ja', es: 'yo' }, { de: 'hoffe', en: 'hope', pl: 'mam nadzieję', es: 'espero' }, { de: 'dass', en: 'that', pl: 'że', es: 'que' },
    { de: 'du', en: 'you', pl: 'ty', es: 'tú' }, { de: 'morgen', en: 'tomorrow', pl: 'jutro', es: 'mañana' }, { de: 'pünktlich', en: 'on time', pl: 'punktualnie', es: 'a tiempo' },
    { de: 'kommst', en: 'come (verb last)', pl: 'przyjdziesz (czasownik na końcu)', es: 'vienes (verbo al final)' },
  ] },
  { target: ['Wenn', 'ich', 'Geld', 'hätte', 'würde', 'ich', 'reisen'], de: 'Wenn ich Geld hätte würde ich reisen', en: 'If I had money I would travel', pl: 'Gdybym miał pieniądze, podróżowałbym', es: 'Si tuviera dinero viajaría', glossary: [
    { de: 'Wenn', en: 'if', pl: 'gdyby', es: 'si' }, { de: 'ich', en: 'I', pl: 'ja', es: 'yo' }, { de: 'Geld', en: 'money', pl: 'pieniądze', es: 'dinero' },
    { de: 'hätte', en: 'had (subjunctive II)', pl: 'miał (tryb przypuszczający)', es: 'tuviera' }, { de: 'würde', en: 'would', pl: 'bym', es: 'ría (condicional)' },
    { de: 'ich', en: 'I', pl: 'ja', es: 'yo' }, { de: 'reisen', en: 'travel', pl: 'podróżować', es: 'viajar' },
  ] },
  { target: ['Ich', 'habe', 'mich', 'an', 'das', 'Wetter', 'gewöhnt'], de: 'Ich habe mich an das Wetter gewöhnt', en: 'I got used to the weather', pl: 'Przyzwyczaiłem się do pogody', es: 'Me acostumbré al clima', glossary: [
    { de: 'Ich', en: 'I', pl: 'ja', es: 'yo' }, { de: 'habe', en: 'have (auxiliary)', pl: 'mam (posiłkowy)', es: 'he (auxiliar)' }, { de: 'mich', en: 'myself', pl: 'się', es: 'me' },
    { de: 'an', en: 'to', pl: 'do', es: 'a' }, { de: 'das', en: 'the (accusative)', pl: 'tę (biernik)', es: 'el' }, { de: 'Wetter', en: 'weather', pl: 'pogoda', es: 'clima' },
    { de: 'gewöhnt', en: 'got used', pl: 'przyzwyczaiłem', es: 'acostumbrado' },
  ] },
  { target: ['Es', 'sei', 'angemerkt', 'dass', 'sich', 'alles', 'geändert', 'hat'], de: 'Es sei angemerkt dass sich alles geändert hat', en: 'It should be noted that everything has changed', pl: 'Warto zaznaczyć, że wszystko się zmieniło', es: 'Cabe destacar que todo ha cambiado', glossary: [
    { de: 'Es', en: 'it', pl: 'to', es: 'ello' }, { de: 'sei', en: 'be (subjunctive I)', pl: 'niech będzie', es: 'sea' }, { de: 'angemerkt', en: 'noted', pl: 'zaznaczone', es: 'señalado' },
    { de: 'dass', en: 'that', pl: 'że', es: 'que' }, { de: 'sich', en: 'itself', pl: 'się', es: 'se' }, { de: 'alles', en: 'everything', pl: 'wszystko', es: 'todo' },
    { de: 'geändert', en: 'changed', pl: 'zmieniło', es: 'cambiado' }, { de: 'hat', en: 'has (verb last)', pl: 'ma (czasownik na końcu)', es: 'ha (verbo al final)' },
  ] },
  { target: ['Ich', 'glaube', 'nicht', 'dass', 'das', 'funktioniert'], de: 'Ich glaube nicht dass das funktioniert', en: "I don't think that works", pl: 'Nie sądzę, żeby to działało', es: 'No creo que eso funcione', glossary: [
    { de: 'Ich', en: 'I', pl: 'ja', es: 'yo' }, { de: 'glaube', en: 'think', pl: 'sądzę', es: 'creo' }, { de: 'nicht', en: 'not', pl: 'nie', es: 'no' },
    { de: 'dass', en: 'that', pl: 'żeby', es: 'que' }, { de: 'das', en: 'that', pl: 'to', es: 'eso' }, { de: 'funktioniert', en: 'works (verb last)', pl: 'działa (czasownik na końcu)', es: 'funciona (verbo al final)' },
  ] },
];

export const builderDeB2: BuilderSentence[] = [
  { target: ['Man', 'müsste', 'einschränken', 'dass', 'nicht', 'alle', 'zustimmen'], de: 'Man müsste einschränken dass nicht alle zustimmen', en: 'One would have to qualify that not everyone agrees', pl: 'Trzeba by doprecyzować, że nie wszyscy się zgadzają', es: 'Cabría matizar que no todos están de acuerdo', glossary: [
    { de: 'Man', en: 'one', pl: 'się (bezosobowo)', es: 'se / uno' }, { de: 'müsste', en: 'would have to', pl: 'trzeba by', es: 'habría que' }, { de: 'einschränken', en: 'to qualify', pl: 'doprecyzować', es: 'matizar' },
    { de: 'dass', en: 'that', pl: 'że', es: 'que' }, { de: 'nicht', en: 'not', pl: 'nie', es: 'no' }, { de: 'alle', en: 'everyone', pl: 'wszyscy', es: 'todos' },
    { de: 'zustimmen', en: 'agree (verb last)', pl: 'zgadzają się (czasownik na końcu)', es: 'están de acuerdo (verbo al final)' },
  ] },
  { target: ['Ohne', 'jeden', 'Zweifel', 'war', 'das', 'ein', 'Fehler'], de: 'Ohne jeden Zweifel war das ein Fehler', en: 'Without any doubt that was a mistake', pl: 'Bez wątpienia to był błąd', es: 'Sin lugar a dudas fue un error', glossary: [
    { de: 'Ohne', en: 'without', pl: 'bez', es: 'sin' }, { de: 'jeden', en: 'any', pl: 'żadnej', es: 'ninguna' }, { de: 'Zweifel', en: 'doubt', pl: 'wątpliwości', es: 'duda' },
    { de: 'war', en: 'was', pl: 'był', es: 'fue' }, { de: 'das', en: 'that', pl: 'to', es: 'eso' }, { de: 'ein', en: 'a', pl: 'jeden', es: 'un' },
    { de: 'Fehler', en: 'mistake', pl: 'błąd', es: 'error' },
  ] },
  { target: ['Dessen', 'ungeachtet', 'setzen', 'wir', 'den', 'Plan', 'fort'], de: 'Dessen ungeachtet setzen wir den Plan fort', en: 'Nevertheless we are continuing the plan', pl: 'Niemniej jednak kontynuujemy plan', es: 'No obstante ello seguimos con el plan', glossary: [
    { de: 'Dessen', en: 'of that', pl: 'tego', es: 'de ello' }, { de: 'ungeachtet', en: 'regardless', pl: 'mimo', es: 'a pesar de' }, { de: 'setzen', en: 'continue (part 1)', pl: 'kontynuujemy (część 1)', es: 'seguimos (parte 1)' },
    { de: 'wir', en: 'we', pl: 'my', es: 'nosotros' }, { de: 'den', en: 'the (accusative)', pl: 'ten (biernik)', es: 'el' }, { de: 'Plan', en: 'plan', pl: 'plan', es: 'plan' },
    { de: 'fort', en: 'on (separable prefix)', pl: '(przedrostek rozdzielny)', es: '(prefijo separable)' },
  ] },
  { target: ['Infolgedessen', 'wurde', 'die', 'Strategie', 'komplett', 'geändert'], de: 'Infolgedessen wurde die Strategie komplett geändert', en: 'As a result the strategy was completely changed', pl: 'W wyniku tego strategia została całkowicie zmieniona', es: 'A raíz de eso la estrategia cambió por completo', glossary: [
    { de: 'Infolgedessen', en: 'as a result', pl: 'w wyniku tego', es: 'a raíz de eso' }, { de: 'wurde', en: 'was (passive)', pl: 'została (strona bierna)', es: 'fue (pasiva)' },
    { de: 'die', en: 'the', pl: 'ta', es: 'la' }, { de: 'Strategie', en: 'strategy', pl: 'strategia', es: 'estrategia' }, { de: 'komplett', en: 'completely', pl: 'całkowicie', es: 'por completo' },
    { de: 'geändert', en: 'changed', pl: 'zmieniona', es: 'cambiada' },
  ] },
  { target: ['Hätte', 'ich', 'das', 'gewusst', 'hätte', 'ich', 'anders', 'gehandelt'], de: 'Hätte ich das gewusst hätte ich anders gehandelt', en: 'Had I known that I would have acted differently', pl: 'Gdybym o tym wiedział, postąpiłbym inaczej', es: 'De haberlo sabido habría actuado distinto', glossary: [
    { de: 'Hätte', en: 'had (conditional, no "wenn")', pl: 'gdybym (bez „wenn")', es: 'hubiera (sin "si")' }, { de: 'ich', en: 'I', pl: 'ja', es: 'yo' },
    { de: 'das', en: 'that', pl: 'o tym', es: 'lo' }, { de: 'gewusst', en: 'known', pl: 'wiedział', es: 'sabido' }, { de: 'hätte', en: 'would have', pl: 'bym', es: 'habría' },
    { de: 'ich', en: 'I', pl: 'ja', es: 'yo' }, { de: 'anders', en: 'differently', pl: 'inaczej', es: 'distinto' }, { de: 'gehandelt', en: 'acted', pl: 'postąpił', es: 'actuado' },
  ] },
  { target: ['Das', 'Projekt', 'war', 'offensichtlich', 'nicht', 'durchführbar'], de: 'Das Projekt war offensichtlich nicht durchführbar', en: 'The project was clearly not feasible', pl: 'Projekt był ewidentnie niewykonalny', es: 'A todas luces el proyecto era inviable', glossary: [
    { de: 'Das', en: 'the', pl: 'ten', es: 'el' }, { de: 'Projekt', en: 'project', pl: 'projekt', es: 'proyecto' }, { de: 'war', en: 'was', pl: 'był', es: 'era' },
    { de: 'offensichtlich', en: 'clearly', pl: 'ewidentnie', es: 'a todas luces' }, { de: 'nicht', en: 'not', pl: 'nie', es: 'no' }, { de: 'durchführbar', en: 'feasible', pl: 'wykonalny', es: 'viable' },
  ] },
  { target: ['Egal', 'wie', 'sehr', 'du', 'bestehst', 'ich', 'bleibe', 'dabei'], de: 'Egal wie sehr du bestehst ich bleibe dabei', en: 'No matter how much you insist I stand by it', pl: 'Choćbyś nalegał, obstaję przy swoim', es: 'Por más que insistas no cambio de opinión', glossary: [
    { de: 'Egal', en: 'no matter', pl: 'nieważne', es: 'da igual' }, { de: 'wie', en: 'how', pl: 'jak', es: 'cuánto' }, { de: 'sehr', en: 'much', pl: 'bardzo', es: 'mucho' },
    { de: 'du', en: 'you', pl: 'ty', es: 'tú' }, { de: 'bestehst', en: 'insist', pl: 'nalegasz', es: 'insistes' }, { de: 'ich', en: 'I', pl: 'ja', es: 'yo' },
    { de: 'bleibe', en: 'stay', pl: 'obstaję', es: 'me mantengo' }, { de: 'dabei', en: 'with it', pl: 'przy swoim', es: 'en ello' },
  ] },
  { target: ['Ihre', 'Haltung', 'fällt', 'mir', 'besonders', 'auf'], de: 'Ihre Haltung fällt mir besonders auf', en: 'Their attitude particularly strikes me', pl: 'Ich postawa szczególnie mnie uderza', es: 'Su actitud me llama especialmente la atención', glossary: [
    { de: 'Ihre', en: 'their', pl: 'ich', es: 'su' }, { de: 'Haltung', en: 'attitude', pl: 'postawa', es: 'actitud' }, { de: 'fällt', en: 'strikes (part 1)', pl: 'uderza (część 1)', es: 'llama (parte 1)' },
    { de: 'mir', en: 'me', pl: 'mnie', es: 'me' }, { de: 'besonders', en: 'particularly', pl: 'szczególnie', es: 'especialmente' }, { de: 'auf', en: 'up (separable prefix)', pl: '(przedrostek rozdzielny)', es: '(prefijo separable)' },
  ] },
];

export const pronDeA1: PronItem[] = [
  { de: 'Guten Morgen', en: 'Good morning', pl: 'Dzień dobry', es: 'Buenos días', syl: ['Gu', 'ten', 'Mor', 'gen'], tipEn: 'The "r" in "Morgen" is throaty, not rolled — it almost vanishes into the vowel.', tipPl: '„r" w „Morgen" jest gardłowe, nie drżące — niemal zanika w samogłosce.', tipEs: 'La "r" de "Morgen" es uvular, no vibrante: casi se funde con la vocal.', tipDe: 'Das "r" in "Morgen" wird hinten im Rachen gebildet und fast zum Vokal.' },
  { de: 'danke', en: 'thank you', pl: 'dziękuję', es: 'gracias', syl: ['dan', 'ke'], tipEn: 'The final "e" is a weak schwa — "dan-kuh", never "dan-kay".', tipPl: 'Końcowe „e" to słabe „y/e" — „dan-ke", nigdy „dan-kej".', tipEs: 'La "e" final es una vocal débil, casi muda.', tipDe: 'Das End-"e" ist ein Schwa — kurz und unbetont.' },
  { de: 'bitte', en: 'please', pl: 'proszę', es: 'por favor', syl: ['bit', 'te'], tipEn: 'Double "tt" shortens the vowel before it — a crisp, clipped "i".', tipPl: 'Podwójne „tt" skraca poprzedzającą samogłoskę — krótkie, ucięte „i".', tipEs: 'La "tt" doble acorta la vocal anterior: "i" breve.', tipDe: 'Doppel-"tt" kürzt den Vokal davor: kurzes, knappes "i".' },
  { de: 'hallo', en: 'hello', pl: 'cześć', es: 'hola', syl: ['hal', 'lo'], tipEn: 'Unlike Spanish, the German "h" is pronounced — breathe it out.', tipPl: 'W przeciwieństwie do hiszpańskiego niemieckie „h" wymawia się — wydmuchaj je.', tipEs: 'A diferencia del español, la "h" alemana sí se pronuncia.', tipDe: 'Das "h" wird deutlich behaucht, anders als im Spanischen.' },
  { de: 'Wasser', en: 'water', pl: 'woda', es: 'agua', syl: ['Was', 'ser'], tipEn: 'German "w" is an English "v" — "vasser", never "wosser".', tipPl: 'Niemieckie „w" to polskie „w" — „wasser", nie „łasser".', tipEs: 'La "w" alemana suena como la "v" inglesa, no como "gu".', tipDe: 'Das "w" ist ein stimmhafter Reibelaut, kein "u"-Gleitlaut.' },
  { de: 'Haus', en: 'house', pl: 'dom', es: 'casa', syl: ['Haus'], tipEn: '"au" is one diphthong that glides from "a" to "u" — one syllable.', tipPl: '„au" to jeden dyftong od „a" do „u" — jedna sylaba.', tipEs: '"au" es un diptongo: una sola sílaba.', tipDe: '"au" ist ein Diphthong — eine Silbe, kein Vokalpaar.' },
  { de: 'essen', en: 'to eat', pl: 'jeść', es: 'comer', syl: ['es', 'sen'], tipEn: 'Short open "e" and a sharp, unvoiced "ss".', tipPl: 'Krótkie otwarte „e" i ostre, bezdźwięczne „ss".', tipEs: '"e" breve y abierta, con "ss" sorda y tensa.', tipDe: 'Kurzes offenes "e", scharfes stimmloses "ss".' },
  { de: 'Freund', en: 'friend', pl: 'przyjaciel', es: 'amigo', syl: ['Freund'], tipEn: '"eu" sounds like "oy" in "boy" — "Froynd".', tipPl: '„eu" brzmi jak „oj" — „Frojnd".', tipEs: '"eu" suena como "oi": "Froind".', tipDe: '"eu" wird wie "oi" gesprochen.' },
  { de: 'Deutschland', en: 'Germany', pl: 'Niemcy', es: 'Alemania', syl: ['Deutsch', 'land'], tipEn: '"tsch" is one sound, like the "ch" in "church".', tipPl: '„tsch" to jeden dźwięk — polskie „cz".', tipEs: '"tsch" es un solo sonido, como la "ch" española.', tipDe: '"tsch" ist ein einziger Laut, keine Lautkette.' },
  { de: 'fünf', en: 'five', pl: 'pięć', es: 'cinco', syl: ['fünf'], tipEn: 'Round your lips for "i" and you get "ü" — the hardest vowel for beginners.', tipPl: 'Ułóż usta do „u", a powiedz „i" — tak powstaje „ü".', tipEs: 'Di "i" con los labios redondeados: así sale la "ü".', tipDe: 'Für "ü" die Lippen wie bei "u" runden und "i" sprechen.' },
  { de: 'Donnerstag', en: 'Thursday', pl: 'czwartek', es: 'jueves', syl: ['Don', 'ners', 'tag'], tipEn: 'Final "g" hardens to a "k" — "Donners-tak".', tipPl: 'Końcowe „g" twardnieje do „k" — „Donners-tak".', tipEs: 'La "g" final se ensordece y suena "k".', tipDe: 'Auslautverhärtung: das End-"g" klingt wie "k".' },
  { de: 'Familie', en: 'family', pl: 'rodzina', es: 'familia', syl: ['Fa', 'mi', 'li', 'e'], tipEn: 'Four syllables — the final "-ie" splits into "li-e", unlike Spanish.', tipPl: 'Cztery sylaby — końcówka „-ie" dzieli się na „li-e", inaczej niż po hiszpańsku.', tipEs: 'Cuatro sílabas: "-ie" se separa en "li-e", no forma diptongo.', tipDe: 'Vier Silben: "-ie" wird getrennt gesprochen.' },
];

export const pronDeA2: PronItem[] = [
  { de: 'links', en: 'left', pl: 'w lewo', es: 'a la izquierda', syl: ['links'], tipEn: 'The "nks" cluster stays crisp — do not add a vowel.', tipPl: 'Zbitka „nks" pozostaje zwarta — nie wstawiaj samogłoski.', tipEs: 'El grupo "nks" va seguido, sin vocal de apoyo.', tipDe: 'Die Konsonantengruppe "nks" ohne Sprossvokal sprechen.' },
  { de: 'rechts', en: 'right', pl: 'w prawo', es: 'a la derecha', syl: ['rechts'], tipEn: 'The "ch" after "e" is soft, like the "h" in "huge".', tipPl: '„ch" po „e" jest miękkie, bliskie polskiemu „ś/ch".', tipEs: 'La "ch" tras "e" es palatal y suave, no gutural.', tipDe: 'Nach "e" steht der Ich-Laut, nicht der Ach-Laut.' },
  { de: 'Schlussverkauf', en: 'clearance sale', pl: 'wyprzedaż', es: 'rebajas', syl: ['Schluss', 'ver', 'kauf'], tipEn: 'A compound word — stress the first part, "SCHLUSS".', tipPl: 'Złożenie — akcent na pierwszy człon, „SCHLUSS".', tipEs: 'Palabra compuesta: el acento va en la primera parte.', tipDe: 'Komposita betonen das erste Glied: SCHLUSSverkauf.' },
  { de: 'gestern', en: 'yesterday', pl: 'wczoraj', es: 'ayer', syl: ['ges', 'tern'], tipEn: 'The "st" inside a word stays "st", not "sht".', tipPl: '„st" w środku wyrazu zostaje „st", nie „szt".', tipEs: 'La "st" en medio de palabra no se pronuncia "sch-t".', tipDe: 'Im Wortinneren bleibt "st" ein reines /st/.' },
  { de: 'billig', en: 'cheap', pl: 'tani', es: 'barato', syl: ['bil', 'lig'], tipEn: 'Final "-ig" is pronounced "-ich" in standard German.', tipPl: 'Końcówkę „-ig" wymawia się „-ich" w standardowym niemieckim.', tipEs: 'La terminación "-ig" se pronuncia "-ich".', tipDe: 'Die Endung "-ig" spricht man standardsprachlich "-ich".' },
  { de: 'Markt', en: 'market', pl: 'targ', es: 'mercado', syl: ['Markt'], tipEn: 'The "r" colours the vowel and almost disappears before "kt".', tipPl: '„r" barwi samogłoskę i niemal znika przed „kt".', tipEs: 'La "r" tiñe la vocal y casi se pierde ante "kt".', tipDe: 'Das "r" vokalisiert sich vor "kt" fast vollständig.' },
  { de: 'früh', en: 'early', pl: 'wcześnie', es: 'temprano', syl: ['früh'], tipEn: 'The "h" only lengthens the "ü" — it is never spoken.', tipPl: '„h" tylko wydłuża „ü" — nie wymawia się go.', tipEs: 'La "h" solo alarga la "ü": no suena.', tipDe: 'Das Dehnungs-"h" wird nicht gesprochen.' },
  { de: 'Stadt', en: 'city', pl: 'miasto', es: 'ciudad', syl: ['Stadt'], tipEn: 'Word-initial "St" becomes "Sht" — "Shtat".', tipPl: 'Nagłosowe „St" brzmi jak „szt" — „Sztat".', tipEs: 'La "St" inicial suena "sch-t".', tipDe: 'Am Wortanfang wird "St" zu /ʃt/.' },
  { de: 'Bier', en: 'beer', pl: 'piwo', es: 'cerveza', syl: ['Bier'], tipEn: '"ie" is a long "ee" — one syllable, not "i-e".', tipPl: '„ie" to długie „i" — jedna sylaba, nie „i-e".', tipEs: '"ie" es una "i" larga, una sola sílaba.', tipDe: '"ie" ist ein langes /iː/, keine zwei Laute.' },
  { de: 'Arbeit', en: 'work', pl: 'praca', es: 'trabajo', syl: ['Ar', 'beit'], tipEn: '"ei" always sounds like "eye" — "Ar-bite".', tipPl: '„ei" zawsze brzmi jak „aj" — „Ar-bajt".', tipEs: '"ei" suena siempre como "ai".', tipDe: '"ei" wird immer wie /aɪ/ gesprochen.' },
  { de: 'Gitarre', en: 'guitar', pl: 'gitara', es: 'guitarra', syl: ['Gi', 'tar', 're'], tipEn: 'German never rolls "rr" — keep it throaty and soft.', tipPl: 'Niemiecki nigdy nie zwija „rr" — pozostaje gardłowe i miękkie.', tipEs: 'El alemán no vibra la "rr": queda uvular y suave.', tipDe: 'Das "rr" wird nicht gerollt, sondern uvular gesprochen.' },
  { de: 'Geburtstag', en: 'birthday', pl: 'urodziny', es: 'cumpleaños', syl: ['Ge', 'burts', 'tag'], tipEn: 'Stress lands on "burts", the middle syllable.', tipPl: 'Akcent pada na „burts", środkową sylabę.', tipEs: 'El acento cae en la sílaba central "burts".', tipDe: 'Die Betonung liegt auf der Mittelsilbe "burts".' },
];

export const pronDeB1: PronItem[] = [
  { de: 'jedoch', en: 'however', pl: 'jednak', es: 'sin embargo', syl: ['je', 'doch'], tipEn: 'German "j" is a "y" sound, and "ch" after "o" is guttural.', tipPl: 'Niemieckie „j" to polskie „j", a „ch" po „o" jest gardłowe.', tipEs: 'La "j" alemana suena /y/ y la "ch" tras "o" es gutural.', tipDe: 'Das "j" ist ein Halbvokal, das "ch" nach "o" ein Ach-Laut.' },
  { de: 'ich bereue', en: 'I regret', pl: 'żałuję', es: 'me arrepiento', syl: ['ich', 'be', 'reu', 'e'], tipEn: '"eu" is "oy" and the final "e" is a schwa — "be-ROY-uh".', tipPl: '„eu" to „oj", a końcowe „e" to szwa — „be-ROJ-e".', tipEs: '"eu" suena "oi" y la "e" final es débil.', tipDe: '"eu" wie "oi", das End-"e" bleibt ein Schwa.' },
  { de: 'auf lange Sicht', en: 'in the long run', pl: 'na dłuższą metę', es: 'a largo plazo', syl: ['auf', 'lan', 'ge', 'Sicht'], tipEn: 'Link the words — German joins them under one stress group.', tipPl: 'Połącz wyrazy — niemiecki wiąże je w jedną grupę akcentową.', tipEs: 'Enlaza las palabras en un solo grupo acentual.', tipDe: 'Die Wörter bilden eine Akzentgruppe und werden gebunden.' },
  { de: 'ich habe mich gewöhnt', en: 'I got used to it', pl: 'przyzwyczaiłem się', es: 'me acostumbré', syl: ['ich', 'ha', 'be', 'mich', 'ge', 'wöhnt'], tipEn: '"ö" is an "e" said with rounded lips.', tipPl: '„ö" to „e" wymówione z zaokrąglonymi ustami.', tipEs: 'La "ö" es una "e" con los labios redondeados.', tipDe: 'Für "ö" die Lippen runden und "e" sprechen.' },
  { de: 'es sei angemerkt', en: 'it should be noted', pl: 'warto zaznaczyć', es: 'cabe destacar', syl: ['es', 'sei', 'an', 'ge', 'merkt'], tipEn: 'A glottal stop precedes "angemerkt" — do not run it into "sei".', tipPl: 'Przed „angemerkt" jest zwarcie krtaniowe — nie zlewaj go z „sei".', tipEs: 'Hay una oclusión glotal antes de "angemerkt".', tipDe: 'Vor "angemerkt" steht ein Knacklaut.' },
  { de: 'obwohl es regnet', en: 'although it rains', pl: 'chociaż pada', es: 'aunque llueve', syl: ['ob', 'wohl', 'es', 'reg', 'net'], tipEn: 'The "b" in "obwohl" hardens to "p" before "w".', tipPl: '„b" w „obwohl" twardnieje do „p" przed „w".', tipEs: 'La "b" de "obwohl" se ensordece ante "w".', tipDe: 'In "obwohl" wird das "b" zu /p/ verhärtet.' },
  { de: 'Entwicklung', en: 'development', pl: 'rozwój', es: 'desarrollo', syl: ['Ent', 'wick', 'lung'], tipEn: 'Stress the first syllable and keep "-ung" short and unstressed.', tipPl: 'Akcent na pierwszą sylabę, a „-ung" krótkie i nieakcentowane.', tipEs: 'Acentúa la primera sílaba; "-ung" queda breve y átona.', tipDe: 'Erstsilbenbetonung; "-ung" bleibt kurz und unbetont.' },
  { de: 'Flughafen', en: 'airport', pl: 'lotnisko', es: 'aeropuerto', syl: ['Flug', 'ha', 'fen'], tipEn: 'A compound: "Flug" keeps the main stress, and its "g" hardens to "k".', tipPl: 'Złożenie: akcent główny na „Flug", a jego „g" twardnieje do „k".', tipEs: 'Compuesto: acento en "Flug" y la "g" se ensordece.', tipDe: 'Kompositum mit Hauptakzent auf "Flug"; das "g" wird verhärtet.' },
  { de: 'Ausländer', en: 'foreigner', pl: 'obcokrajowiec', es: 'extranjero', syl: ['Aus', 'län', 'der'], tipEn: '"ä" is an open "e", and the final "-er" sounds like a soft "a".', tipPl: '„ä" to otwarte „e", a końcówka „-er" brzmi jak słabe „a".', tipEs: 'La "ä" es una "e" abierta; "-er" final suena casi como "a".', tipDe: '"ä" ist ein offenes "e"; das End-"-er" wird vokalisiert.' },
  { de: 'vielleicht', en: 'maybe', pl: 'może', es: 'quizás', syl: ['viel', 'leicht'], tipEn: 'German "v" is an "f", and stress falls on the second syllable.', tipPl: 'Niemieckie „v" to „f", a akcent pada na drugą sylabę.', tipEs: 'La "v" alemana suena "f" y el acento va en la segunda sílaba.', tipDe: 'Das "v" klingt wie "f"; betont wird die zweite Silbe.' },
  { de: 'Vorstellungsgespräch', en: 'job interview', pl: 'rozmowa kwalifikacyjna', es: 'entrevista de trabajo', syl: ['Vor', 'stel', 'lungs', 'ge', 'spräch'], tipEn: 'Five syllables in one compound — keep the main stress on "Vor".', tipPl: 'Pięć sylab w jednym złożeniu — akcent główny na „Vor".', tipEs: 'Cinco sílabas en un compuesto; acento principal en "Vor".', tipDe: 'Fünf Silben, Hauptakzent auf dem ersten Glied "Vor".' },
  { de: 'leider', en: 'unfortunately', pl: 'niestety', es: 'desafortunadamente', syl: ['lei', 'der'], tipEn: '"ei" is "eye" — "LYE-da", with a vanishing final "r".', tipPl: '„ei" to „aj" — „LAJ-da", z zanikającym końcowym „r".', tipEs: '"ei" suena "ai" y la "r" final casi desaparece.', tipDe: '"ei" wie /aɪ/, das End-"r" wird vokalisiert.' },
];

export const pronDeB2: PronItem[] = [
  { de: 'ohne jeden Zweifel', en: 'without any doubt', pl: 'bez wątpienia', es: 'sin lugar a dudas', syl: ['oh', 'ne', 'je', 'den', 'Zwei', 'fel'], tipEn: '"Z" is always "ts" — "TSVY-fel".', tipPl: '„Z" to zawsze „c" — „CWAJ-fel".', tipEs: 'La "z" alemana suena siempre "ts".', tipDe: 'Das "Z" ist stets eine Affrikate /ts/.' },
  { de: 'infolgedessen', en: 'as a result', pl: 'w wyniku tego', es: 'a raíz de eso', syl: ['in', 'fol', 'ge', 'des', 'sen'], tipEn: 'Five syllables with the stress on "fol" — keep the rest light.', tipPl: 'Pięć sylab z akcentem na „fol" — reszta lekko.', tipEs: 'Cinco sílabas con el acento en "fol".', tipDe: 'Fünf Silben, Betonung auf "fol".' },
  { de: 'einschränken', en: 'to qualify', pl: 'doprecyzować', es: 'matizar', syl: ['ein', 'schrän', 'ken'], tipEn: '"schr" is three sounds run together — "shr", never "sk".', tipPl: '„schr" to trzy dźwięki razem — „szr", nigdy „sk".', tipEs: '"schr" es /ʃr/, nunca /sk/.', tipDe: '"schr" wird als /ʃr/ gesprochen.' },
  { de: 'dessen ungeachtet', en: 'nevertheless', pl: 'niemniej jednak', es: 'no obstante ello', syl: ['des', 'sen', 'un', 'ge', 'ach', 'tet'], tipEn: 'The "ach" here is the hard, guttural "ch".', tipPl: 'Tutaj „ach" to twarde, gardłowe „ch".', tipEs: 'Aquí "ach" lleva la "ch" gutural fuerte.', tipDe: 'Hier steht der harte Ach-Laut.' },
  { de: 'offensichtlich', en: 'clearly', pl: 'ewidentnie', es: 'a todas luces', syl: ['of', 'fen', 'sicht', 'lich'], tipEn: 'Two soft "ch" sounds in a row — keep both light and palatal.', tipPl: 'Dwa miękkie „ch" pod rząd — oba lekkie i podniebienne.', tipEs: 'Dos "ch" palatales seguidas: ambas suaves.', tipDe: 'Zwei Ich-Laute hintereinander, beide weich.' },
  { de: 'unerlässlich', en: 'essential', pl: 'niezbędny', es: 'imprescindible', syl: ['un', 'er', 'läss', 'lich'], tipEn: 'A glottal stop separates "un" from "erlässlich".', tipPl: 'Zwarcie krtaniowe oddziela „un" od „erlässlich".', tipEs: 'Una oclusión glotal separa "un" de "erlässlich".', tipDe: 'Ein Knacklaut trennt "un" von "erlässlich".' },
  { de: 'zurechtkommen', en: 'to get by', pl: 'radzić sobie', es: 'desenvolverse', syl: ['zu', 'recht', 'kom', 'men'], tipEn: 'Starts with "tsu" and the main stress sits on "recht".', tipPl: 'Zaczyna się od „cu", a akcent główny pada na „recht".', tipEs: 'Empieza en "tsu" y el acento principal cae en "recht".', tipDe: 'Beginnt mit /tsu/, Hauptakzent auf "recht".' },
  { de: 'paradoxerweise', en: 'paradoxically', pl: 'paradoksalnie', es: 'paradójicamente', syl: ['pa', 'ra', 'do', 'xer', 'wei', 'se'], tipEn: 'The "x" is "ks" and "-weise" carries a clear secondary stress.', tipPl: '„x" to „ks", a „-weise" niesie wyraźny akcent poboczny.', tipEs: 'La "x" es /ks/ y "-weise" lleva acento secundario.', tipDe: 'Das "x" ist /ks/; "-weise" trägt einen Nebenakzent.' },
  { de: 'bereichernd', en: 'enriching', pl: 'wzbogacający', es: 'enriquecedor', syl: ['be', 'rei', 'chernd'], tipEn: 'The final "-nd" devoices to "-nt".', tipPl: 'Końcowe „-nd" ubezdźwięcznia się do „-nt".', tipEs: 'La "-nd" final se ensordece en "-nt".', tipDe: 'Auslautverhärtung: "-nd" klingt wie "-nt".' },
  { de: 'überwältigend', en: 'overwhelming', pl: 'przytłaczający', es: 'sobrecogedor', syl: ['ü', 'ber', 'wäl', 'ti', 'gend'], tipEn: 'Opens on a bare "ü" — round the lips before you make a sound.', tipPl: 'Zaczyna się od samego „ü" — zaokrąglij usta przed dźwiękiem.', tipEs: 'Empieza con una "ü" sola: redondea los labios antes.', tipDe: 'Beginnt mit reinem "ü" — Lippen vorher runden.' },
  { de: 'Forderung', en: 'demand / claim', pl: 'roszczenie', es: 'reivindicación', syl: ['For', 'de', 'rung'], tipEn: 'Short "o" here — "Forderung" (demand), not "Förderung" (support).', tipPl: 'Krótkie „o" — „Forderung" (żądanie), nie „Förderung" (wsparcie).', tipEs: '"o" breve: "Forderung" (exigencia), no "Förderung" (apoyo).', tipDe: 'Kurzes "o": Forderung, nicht Förderung.' },
  { de: 'unermesslich', en: 'immeasurable', pl: 'niezmierzony', es: 'inconmensurable', syl: ['un', 'er', 'mess', 'lich'], tipEn: 'Four syllables with stress on "mess" and a light final "-lich".', tipPl: 'Cztery sylaby, akcent na „mess", końcowe „-lich" lekkie.', tipEs: 'Cuatro sílabas con acento en "mess" y "-lich" átono.', tipDe: 'Vier Silben, Betonung auf "mess", "-lich" unbetont.' },
];


// ponytail: only Spanish and German have authored exercise sets; other targets borrow the Spanish ones.
const PRON_SETS: Partial<Record<UiLang, Record<Level, PronItem[]>>> = {
  es: { A1: pron, A2: pronA2, B1: pronB1, B2: pronB2 },
  de: { A1: pronDeA1, A2: pronDeA2, B1: pronDeB1, B2: pronDeB2 },
};
const BUILDER_SETS: Partial<Record<UiLang, Record<Level, BuilderSentence[]>>> = {
  es: { A1: builderA1, A2: builderA2, B1: builderB1, B2: builderB2 },
  de: { A1: builderDeA1, A2: builderDeA2, B1: builderDeB1, B2: builderDeB2 },
};
export function pronFor(lv: Level, target: UiLang = 'es'): PronItem[] {
  return (PRON_SETS[target] || PRON_SETS.es!)[lv];
}
export function buildersFor(lv: Level, target: UiLang = 'es'): BuilderSentence[] {
  return (BUILDER_SETS[target] || BUILDER_SETS.es!)[lv];
}
export function builderFor(lv: Level, idx = 0, target: UiLang = 'es'): BuilderSentence {
  const list = buildersFor(lv, target);
  return list[Math.min(idx, list.length - 1)];
}
export function bankFor(lv: Level, idx = 0, target: UiLang = 'es') {
  return bankFrom(builderFor(lv, idx, target));
}
export function dictFor(lv: Level): Phrase[] {
  return lv === 'A1' ? dictA1 : lv === 'A2' ? dictA2 : lv === 'B1' ? dictB1 : dictB2;
}
export function phrasebookFor(lv: Level, extra?: PhraseCategory[]): PhraseCategory[] {
  if (extra && extra.length) return extra;
  return lv === 'A2' ? phrasebookA2 : phrasebook;
}

import { todayISO, addDays } from '../lib/date.ts';

export type Word = {
  es: string;
  en: string;
  pl: string;
  exEs?: string;
  exEn?: string;
  exPl?: string;
};
export type Phrase = { es: string; en: string; pl: string };
export type PhraseCategory = { titleEn: string; titlePl: string; phrases: Phrase[] };
export type BuilderSentence = {
  target: string[];
  en: string;
  pl: string;
  glossary: { es: string; en: string; pl: string }[];
};
export type PronItem = {
  es: string;
  en: string;
  pl: string;
  syl: string[];
  tipEn: string;
  tipPl: string;
  tipEs: string;
};
export type SrsItem = {
  es: string;
  en: string;
  pl: string;
  strength: number;
  dueAt: string;
  interval?: number;
};
export type LevelDef = {
  code: string;
  en: string;
  pl: string;
  dEn: string;
  dPl: string;
  status: 'active' | 'available' | 'locked';
  progress: number;
};
export type Challenge = { id: string; en: string; pl: string; es: string; xp: number; done: boolean };
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
} as const;

export type UiLang = keyof typeof strings;
export type Strings = (typeof strings)['en'];

export const deck: Word[] = [
  { es: 'hola', en: 'hello', pl: 'cześć', exEs: '¡Hola! ¿Cómo estás?', exEn: 'Hi! How are you?', exPl: 'Cześć! Jak się masz?' },
  { es: 'gracias', en: 'thank you', pl: 'dziękuję', exEs: 'Muchas gracias por todo.', exEn: 'Thank you very much for everything.', exPl: 'Bardzo dziękuję za wszystko.' },
  { es: 'agua', en: 'water', pl: 'woda', exEs: 'Un vaso de agua, por favor.', exEn: 'A glass of water, please.', exPl: 'Szklankę wody, proszę.' },
  { es: 'casa', en: 'house / home', pl: 'dom', exEs: 'Mi casa es tu casa.', exEn: 'My house is your house.', exPl: 'Mój dom jest twoim domem.' },
  { es: 'comer', en: 'to eat', pl: 'jeść', exEs: 'Quiero comer algo rico.', exEn: 'I want to eat something tasty.', exPl: 'Chcę zjeść coś dobrego.' },
  { es: 'amigo', en: 'friend', pl: 'przyjaciel', exEs: 'Él es mi mejor amigo.', exEn: 'He is my best friend.', exPl: 'On jest moim najlepszym przyjacielem.' },
  { es: 'hoy', en: 'today', pl: 'dzisiaj', exEs: 'Hoy hace mucho sol.', exEn: "It's very sunny today.", exPl: 'Dzisiaj jest bardzo słonecznie.' },
  { es: 'bien', en: 'well / good', pl: 'dobrze', exEs: 'Estoy muy bien, gracias.', exEn: "I'm very well, thank you.", exPl: 'Czuję się bardzo dobrze, dziękuję.' },
];

export const deckA2: Word[] = [
  { es: 'ayer', en: 'yesterday', pl: 'wczoraj', exEs: 'Ayer fui al mercado.', exEn: 'Yesterday I went to the market.', exPl: 'Wczoraj poszedłem na targ.' },
  { es: 'compré', en: 'I bought', pl: 'kupiłem', exEs: 'Compré pan y fruta.', exEn: 'I bought bread and fruit.', exPl: 'Kupiłem chleb i owoce.' },
  { es: 'barato', en: 'cheap', pl: 'tani', exEs: 'Todo es muy barato aquí.', exEn: 'Everything is very cheap here.', exPl: 'Wszystko jest tu bardzo tanie.' },
  { es: 'izquierda', en: 'left', pl: 'lewo', exEs: 'Gira a la izquierda.', exEn: 'Turn to the left.', exPl: 'Skręć w lewo.' },
  { es: 'derecha', en: 'right', pl: 'prawo', exEs: 'Sigue todo a la derecha.', exEn: 'Keep going to the right.', exPl: 'Idź prosto, potem w prawo.' },
  { es: 'siempre', en: 'always', pl: 'zawsze', exEs: 'Siempre me levanto temprano.', exEn: 'I always get up early.', exPl: 'Zawsze wstaję wcześnie.' },
  { es: 'probar', en: 'to try / try on', pl: 'przymierzyć', exEs: '¿Puedo probarlo?', exEn: 'Can I try it on?', exPl: 'Czy mogę to przymierzyć?' },
  { es: 'rebajas', en: 'sales', pl: 'wyprzedaże', exEs: 'Hay rebajas en la tienda.', exEn: 'There are sales at the store.', exPl: 'W sklepie są wyprzedaże.' },
];

export const phrasebook: PhraseCategory[] = [
  { titleEn: 'Greetings', titlePl: 'Powitania', phrases: [
    { es: 'Buenos días', en: 'Good morning', pl: 'Dzień dobry' },
    { es: '¿Cómo estás?', en: 'How are you?', pl: 'Jak się masz?' },
    { es: 'Mucho gusto', en: 'Nice to meet you', pl: 'Miło mi' },
  ] },
  { titleEn: 'At the restaurant', titlePl: 'W restauracji', phrases: [
    { es: 'La cuenta, por favor', en: 'The check, please', pl: 'Poproszę rachunek' },
    { es: '¿Qué me recomienda?', en: 'What do you recommend?', pl: 'Co pan poleca?' },
    { es: 'Para mí, un café', en: 'For me, a coffee', pl: 'Dla mnie kawa' },
  ] },
  { titleEn: 'Getting around', titlePl: 'W mieście', phrases: [
    { es: '¿Dónde está el baño?', en: 'Where is the bathroom?', pl: 'Gdzie jest toaleta?' },
    { es: '¿Cuánto cuesta?', en: 'How much is it?', pl: 'Ile to kosztuje?' },
    { es: 'Estoy perdido', en: "I'm lost", pl: 'Zgubiłem się' },
  ] },
  { titleEn: 'At the hotel', titlePl: 'W hotelu', phrases: [
    { es: 'Tengo una reserva', en: 'I have a reservation', pl: 'Mam rezerwację' },
    { es: '¿Tienen habitaciones libres?', en: 'Do you have any rooms free?', pl: 'Czy są wolne pokoje?' },
    { es: '¿A qué hora es el desayuno?', en: 'What time is breakfast?', pl: 'O której jest śniadanie?' },
    { es: 'La llave, por favor', en: 'The key, please', pl: 'Poproszę klucz' },
  ] },
  { titleEn: 'Emergencies', titlePl: 'Nagłe sytuacje', phrases: [
    { es: '¡Ayuda!', en: 'Help!', pl: 'Pomocy!' },
    { es: 'Llame a una ambulancia', en: 'Call an ambulance', pl: 'Proszę wezwać karetkę' },
    { es: 'Necesito un médico', en: 'I need a doctor', pl: 'Potrzebuję lekarza' },
    { es: 'He perdido mi pasaporte', en: "I've lost my passport", pl: 'Zgubiłem paszport' },
  ] },
  { titleEn: 'Making friends', titlePl: 'Poznawanie ludzi', phrases: [
    { es: '¿De dónde eres?', en: 'Where are you from?', pl: 'Skąd jesteś?' },
    { es: '¿A qué te dedicas?', en: 'What do you do?', pl: 'Czym się zajmujesz?' },
    { es: '¿Tienes Instagram?', en: 'Do you have Instagram?', pl: 'Masz Instagrama?' },
    { es: 'Ha sido un placer', en: "It's been a pleasure", pl: 'Było mi bardzo miło' },
  ] },
  { titleEn: 'On the phone', titlePl: 'Przez telefon', phrases: [
    { es: '¿Diga?', en: 'Hello? (answering)', pl: 'Halo?' },
    { es: '¿Puedo hablar con Ana?', en: 'Can I speak with Ana?', pl: 'Czy mogę rozmawiać z Aną?' },
    { es: 'Un momento, por favor', en: 'One moment, please', pl: 'Chwileczkę, proszę' },
    { es: 'Le llamo más tarde', en: "I'll call you later", pl: 'Zadzwonię później' },
  ] },
  { titleEn: 'Time & dates', titlePl: 'Czas i daty', phrases: [
    { es: '¿Qué hora es?', en: 'What time is it?', pl: 'Która godzina?' },
    { es: 'Son las tres', en: "It's three o'clock", pl: 'Jest trzecia' },
    { es: '¿Qué día es hoy?', en: 'What day is it today?', pl: 'Jaki dziś dzień?' },
    { es: 'Nos vemos el lunes', en: 'See you on Monday', pl: 'Do zobaczenia w poniedziałek' },
  ] },
  { titleEn: 'Feelings & small talk', titlePl: 'Uczucia i pogawędki', phrases: [
    { es: 'Estoy muy cansado', en: "I'm very tired", pl: 'Jestem bardzo zmęczony' },
    { es: '¡Qué buen tiempo hace!', en: 'What nice weather!', pl: 'Jaka ładna pogoda!' },
    { es: 'Estoy de acuerdo', en: 'I agree', pl: 'Zgadzam się' },
    { es: 'No pasa nada', en: "It's no problem", pl: 'Nic się nie stało' },
  ] },
];

export const phrasebookA2: PhraseCategory[] = [
  { titleEn: 'Shopping', titlePl: 'Zakupy', phrases: [
    { es: '¿Tiene otra talla?', en: 'Do you have another size?', pl: 'Czy jest inny rozmiar?' },
    { es: '¿Puedo pagar con tarjeta?', en: 'Can I pay by card?', pl: 'Czy mogę zapłacić kartą?' },
    { es: 'Me lo llevo', en: "I'll take it", pl: 'Biorę to' },
  ] },
  { titleEn: 'Directions', titlePl: 'Wskazówki', phrases: [
    { es: '¿Cómo llego al centro?', en: 'How do I get downtown?', pl: 'Jak dojść do centrum?' },
    { es: 'Está a dos calles', en: "It's two blocks away", pl: 'To dwie przecznice stąd' },
    { es: 'Gire a la derecha', en: 'Turn right', pl: 'Proszę skręcić w prawo' },
  ] },
  { titleEn: 'Daily routine', titlePl: 'Codzienność', phrases: [
    { es: 'Me despierto a las siete', en: 'I wake up at seven', pl: 'Budzę się o siódmej' },
    { es: 'Trabajo por la mañana', en: 'I work in the morning', pl: 'Pracuję rano' },
    { es: 'Ceno con mi familia', en: 'I have dinner with my family', pl: 'Jem kolację z rodziną' },
  ] },
  { titleEn: 'At the doctor', titlePl: 'U lekarza', phrases: [
    { es: 'Me duele la cabeza', en: 'I have a headache', pl: 'Boli mnie głowa' },
    { es: 'Tengo fiebre desde ayer', en: "I've had a fever since yesterday", pl: 'Mam gorączkę od wczoraj' },
    { es: '¿Necesito receta?', en: 'Do I need a prescription?', pl: 'Czy potrzebuję recepty?' },
    { es: 'Soy alérgico a la penicilina', en: "I'm allergic to penicillin", pl: 'Mam alergię na penicylinę' },
  ] },
  { titleEn: 'At the bank & post', titlePl: 'W banku i na poczcie', phrases: [
    { es: 'Quiero abrir una cuenta', en: "I'd like to open an account", pl: 'Chcę otworzyć konto' },
    { es: '¿Dónde puedo cambiar dinero?', en: 'Where can I change money?', pl: 'Gdzie mogę wymienić pieniądze?' },
    { es: 'Quiero enviar este paquete', en: 'I want to send this package', pl: 'Chcę wysłać tę paczkę' },
    { es: '¿Cuánto es el franqueo?', en: 'How much is the postage?', pl: 'Ile kosztuje przesyłka?' },
  ] },
  { titleEn: 'Job & work', titlePl: 'Praca', phrases: [
    { es: 'Tengo una entrevista mañana', en: 'I have an interview tomorrow', pl: 'Mam jutro rozmowę kwalifikacyjną' },
    { es: '¿Cuál es el horario?', en: 'What are the hours?', pl: 'Jakie są godziny pracy?' },
    { es: 'Trabajo en equipo muy bien', en: 'I work well in a team', pl: 'Dobrze pracuję w zespole' },
    { es: '¿Cuándo puedo empezar?', en: 'When can I start?', pl: 'Kiedy mogę zacząć?' },
  ] },
  { titleEn: 'Opinions & agreeing', titlePl: 'Opinie i zgadzanie się', phrases: [
    { es: 'En mi opinión…', en: 'In my opinion…', pl: 'Moim zdaniem…' },
    { es: 'Tienes toda la razón', en: "You're completely right", pl: 'Masz całkowitą rację' },
    { es: 'No estoy de acuerdo', en: "I don't agree", pl: 'Nie zgadzam się' },
    { es: 'Depende de la situación', en: 'It depends on the situation', pl: 'To zależy od sytuacji' },
  ] },
  { titleEn: 'Complaints & problems', titlePl: 'Reklamacje i problemy', phrases: [
    { es: 'Esto no funciona', en: "This doesn't work", pl: 'To nie działa' },
    { es: 'Quiero hablar con el encargado', en: 'I want to speak to the manager', pl: 'Chcę rozmawiać z kierownikiem' },
    { es: '¿Puedo cambiarlo?', en: 'Can I exchange it?', pl: 'Czy mogę to wymienić?' },
    { es: 'Quiero un reembolso', en: "I'd like a refund", pl: 'Chcę zwrot pieniędzy' },
  ] },
  { titleEn: 'Making plans', titlePl: 'Umawianie się', phrases: [
    { es: '¿Quedamos el sábado?', en: 'Shall we meet on Saturday?', pl: 'Umówimy się w sobotę?' },
    { es: '¿Te apetece un café?', en: 'Do you fancy a coffee?', pl: 'Masz ochotę na kawę?' },
    { es: 'Te recojo a las ocho', en: "I'll pick you up at eight", pl: 'Odbiorę cię o ósmej' },
    { es: 'Quizás la próxima vez', en: 'Maybe next time', pl: 'Może następnym razem' },
  ] },
];

export const builderA1: BuilderSentence[] = [
  { target: ['Yo', 'quiero', 'un', 'café', 'con', 'leche'], en: 'I want a coffee with milk', pl: 'Chcę kawę z mlekiem', glossary: [
    { es: 'Yo', en: 'I', pl: 'ja' }, { es: 'quiero', en: 'I want', pl: 'chcę' }, { es: 'un', en: 'a / one', pl: 'jeden' },
    { es: 'café', en: 'coffee', pl: 'kawa' }, { es: 'con', en: 'with', pl: 'z' }, { es: 'leche', en: 'milk', pl: 'mleko' },
  ] },
  { target: ['Mi', 'hermana', 'vive', 'en', 'Madrid'], en: 'My sister lives in Madrid', pl: 'Moja siostra mieszka w Madrycie', glossary: [
    { es: 'Mi', en: 'my', pl: 'moja' }, { es: 'hermana', en: 'sister', pl: 'siostra' }, { es: 'vive', en: 'lives', pl: 'mieszka' },
    { es: 'en', en: 'in', pl: 'w' }, { es: 'Madrid', en: 'Madrid', pl: 'Madryt' },
  ] },
  { target: ['Hoy', 'hace', 'mucho', 'calor'], en: "It's very hot today", pl: 'Dziś jest bardzo gorąco', glossary: [
    { es: 'Hoy', en: 'today', pl: 'dziś' }, { es: 'hace', en: 'it makes (weather verb)', pl: 'jest (o pogodzie)' },
    { es: 'mucho', en: 'a lot of', pl: 'bardzo dużo' }, { es: 'calor', en: 'heat', pl: 'upał' },
  ] },
  { target: ['La', 'casa', 'tiene', 'tres', 'ventanas'], en: 'The house has three windows', pl: 'Dom ma trzy okna', glossary: [
    { es: 'La', en: 'the', pl: 'ten (rodzajnik)' }, { es: 'casa', en: 'house', pl: 'dom' }, { es: 'tiene', en: 'has', pl: 'ma' },
    { es: 'tres', en: 'three', pl: 'trzy' }, { es: 'ventanas', en: 'windows', pl: 'okna' },
  ] },
  { target: ['No', 'tengo', 'tiempo', 'ahora'], en: "I don't have time now", pl: 'Nie mam teraz czasu', glossary: [
    { es: 'No', en: 'not', pl: 'nie' }, { es: 'tengo', en: 'I have', pl: 'mam' }, { es: 'tiempo', en: 'time', pl: 'czas' },
    { es: 'ahora', en: 'now', pl: 'teraz' },
  ] },
  { target: ['La', 'estación', 'está', 'muy', 'lejos'], en: 'The station is very far', pl: 'Dworzec jest bardzo daleko', glossary: [
    { es: 'La', en: 'the', pl: 'ten (rodzajnik)' }, { es: 'estación', en: 'station', pl: 'dworzec' }, { es: 'está', en: 'is (location)', pl: 'jest (położenie)' },
    { es: 'muy', en: 'very', pl: 'bardzo' }, { es: 'lejos', en: 'far', pl: 'daleko' },
  ] },
  { target: ['Los', 'niños', 'comen', 'fruta'], en: 'The children eat fruit', pl: 'Dzieci jedzą owoce', glossary: [
    { es: 'Los', en: 'the (plural)', pl: 'ci (rodzajnik mnogi)' }, { es: 'niños', en: 'children', pl: 'dzieci' },
    { es: 'comen', en: 'they eat', pl: 'jedzą' }, { es: 'fruta', en: 'fruit', pl: 'owoce' },
  ] },
  { target: ['Me', 'gusta', 'mucho', 'tu', 'casa'], en: 'I like your house a lot', pl: 'Bardzo podoba mi się twój dom', glossary: [
    { es: 'Me', en: 'to me', pl: 'mi' }, { es: 'gusta', en: 'is pleasing', pl: 'podoba się' }, { es: 'mucho', en: 'a lot', pl: 'bardzo' },
    { es: 'tu', en: 'your', pl: 'twój' }, { es: 'casa', en: 'house', pl: 'dom' },
  ] },
];

export const builderA2: BuilderSentence[] = [
  { target: ['Ayer', 'compré', 'pan', 'en', 'el', 'mercado'], en: 'Yesterday I bought bread at the market', pl: 'Wczoraj kupiłem chleb na targu', glossary: [
    { es: 'Ayer', en: 'yesterday', pl: 'wczoraj' }, { es: 'compré', en: 'I bought', pl: 'kupiłem' }, { es: 'pan', en: 'bread', pl: 'chleb' },
    { es: 'en', en: 'at / in', pl: 'na / w' }, { es: 'el', en: 'the', pl: 'ten (rodzajnik)' }, { es: 'mercado', en: 'market', pl: 'targ' },
  ] },
  { target: ['El', 'año', 'pasado', 'viajamos', 'a', 'Portugal'], en: 'Last year we travelled to Portugal', pl: 'W zeszłym roku pojechaliśmy do Portugalii', glossary: [
    { es: 'El', en: 'the', pl: 'ten (rodzajnik)' }, { es: 'año', en: 'year', pl: 'rok' }, { es: 'pasado', en: 'last / past', pl: 'zeszły' },
    { es: 'viajamos', en: 'we travelled', pl: 'pojechaliśmy' }, { es: 'a', en: 'to', pl: 'do' }, { es: 'Portugal', en: 'Portugal', pl: 'Portugalia' },
  ] },
  { target: ['Gira', 'a', 'la', 'izquierda', 'en', 'la', 'esquina'], en: 'Turn left at the corner', pl: 'Skręć w lewo na rogu', glossary: [
    { es: 'Gira', en: 'turn', pl: 'skręć' }, { es: 'a', en: 'to', pl: 'w' }, { es: 'la', en: 'the', pl: 'ta (rodzajnik)' },
    { es: 'izquierda', en: 'left', pl: 'lewo' }, { es: 'en', en: 'at', pl: 'na' }, { es: 'la', en: 'the', pl: 'ta (rodzajnik)' },
    { es: 'esquina', en: 'corner', pl: 'róg' },
  ] },
  { target: ['Me', 'desperté', 'muy', 'temprano', 'esta', 'mañana'], en: 'I woke up very early this morning', pl: 'Obudziłem się bardzo wcześnie dziś rano', glossary: [
    { es: 'Me', en: 'myself', pl: 'się' }, { es: 'desperté', en: 'I woke up', pl: 'obudziłem' }, { es: 'muy', en: 'very', pl: 'bardzo' },
    { es: 'temprano', en: 'early', pl: 'wcześnie' }, { es: 'esta', en: 'this', pl: 'dziś' }, { es: 'mañana', en: 'morning', pl: 'rano' },
  ] },
  { target: ['Hoy', 'pagué', 'con', 'tarjeta', 'en', 'la', 'tienda'], en: 'Today I paid by card at the shop', pl: 'Dziś zapłaciłem kartą w sklepie', glossary: [
    { es: 'Hoy', en: 'today', pl: 'dziś' }, { es: 'pagué', en: 'I paid', pl: 'zapłaciłem' }, { es: 'con', en: 'with / by', pl: 'kartą (narzędnik)' },
    { es: 'tarjeta', en: 'card', pl: 'karta' }, { es: 'en', en: 'at / in', pl: 'w' }, { es: 'la', en: 'the', pl: 'ta (rodzajnik)' },
    { es: 'tienda', en: 'shop', pl: 'sklep' },
  ] },
  { target: ['Estos', 'zapatos', 'son', 'demasiado', 'caros'], en: 'These shoes are too expensive', pl: 'Te buty są za drogie', glossary: [
    { es: 'Estos', en: 'these', pl: 'te' }, { es: 'zapatos', en: 'shoes', pl: 'buty' }, { es: 'son', en: 'are', pl: 'są' },
    { es: 'demasiado', en: 'too', pl: 'za' }, { es: 'caros', en: 'expensive', pl: 'drogie' },
  ] },
  { target: ['Siempre', 'desayuno', 'antes', 'de', 'salir'], en: 'I always have breakfast before going out', pl: 'Zawsze jem śniadanie przed wyjściem', glossary: [
    { es: 'Siempre', en: 'always', pl: 'zawsze' }, { es: 'desayuno', en: 'I have breakfast', pl: 'jem śniadanie' }, { es: 'antes', en: 'before', pl: 'przed' },
    { es: 'de', en: 'of', pl: '(przyimek)' }, { es: 'salir', en: 'to go out', pl: 'wyjściem' },
  ] },
  { target: ['No', 'encontré', 'las', 'llaves', 'del', 'coche'], en: "I didn't find the car keys", pl: 'Nie znalazłem kluczyków od samochodu', glossary: [
    { es: 'No', en: 'not', pl: 'nie' }, { es: 'encontré', en: 'I found', pl: 'znalazłem' }, { es: 'las', en: 'the (plural)', pl: 'te (rodzajnik mnogi)' },
    { es: 'llaves', en: 'keys', pl: 'klucze' }, { es: 'del', en: 'of the', pl: 'od' }, { es: 'coche', en: 'car', pl: 'samochód' },
  ] },
];

export const builderB1: BuilderSentence[] = [
  { target: ['Aunque', 'llueva', 'saldré', 'de', 'todas', 'formas'], en: "Even if it rains I'll go out anyway", pl: 'Nawet jeśli będzie padać, i tak wyjdę', glossary: [
    { es: 'Aunque', en: 'even though / even if', pl: 'chociaż / nawet jeśli' }, { es: 'llueva', en: 'it rains (subjunctive)', pl: 'będzie padać' },
    { es: 'saldré', en: 'I will go out', pl: 'wyjdę' }, { es: 'de', en: 'of', pl: 'z' }, { es: 'todas', en: 'all', pl: 'wszystkie' },
    { es: 'formas', en: 'ways', pl: 'sposoby' },
  ] },
  { target: ['Me', 'arrepiento', 'de', 'no', 'haber', 'estudiado', 'más'], en: 'I regret not having studied more', pl: 'Żałuję, że nie uczyłem się więcej', glossary: [
    { es: 'Me', en: 'myself', pl: 'się' }, { es: 'arrepiento', en: 'I regret', pl: 'żałuję' }, { es: 'de', en: 'of', pl: '(przyimek)' },
    { es: 'no', en: 'not', pl: 'nie' }, { es: 'haber', en: 'having', pl: 'że (bezokolicznik złożony)' }, { es: 'estudiado', en: 'studied', pl: 'uczyłem się' },
    { es: 'más', en: 'more', pl: 'więcej' },
  ] },
  { target: ['A', 'largo', 'plazo', 'esto', 'será', 'beneficioso'], en: 'In the long run this will be beneficial', pl: 'Na dłuższą metę to będzie korzystne', glossary: [
    { es: 'A', en: 'at / in', pl: 'na' }, { es: 'largo', en: 'long', pl: 'dłuższą' }, { es: 'plazo', en: 'term', pl: 'metę' },
    { es: 'esto', en: 'this', pl: 'to' }, { es: 'será', en: 'will be', pl: 'będzie' }, { es: 'beneficioso', en: 'beneficial', pl: 'korzystne' },
  ] },
  { target: ['Espero', 'que', 'llegues', 'a', 'tiempo', 'mañana'], en: 'I hope you arrive on time tomorrow', pl: 'Mam nadzieję, że jutro zdążysz', glossary: [
    { es: 'Espero', en: 'I hope', pl: 'mam nadzieję' }, { es: 'que', en: 'that', pl: 'że' }, { es: 'llegues', en: 'you arrive (subjunctive)', pl: 'dotrzesz (tryb łączący)' },
    { es: 'a', en: 'on', pl: 'na' }, { es: 'tiempo', en: 'time', pl: 'czas' }, { es: 'mañana', en: 'tomorrow', pl: 'jutro' },
  ] },
  { target: ['Si', 'tuviera', 'dinero', 'me', 'compraría', 'una', 'moto'], en: 'If I had money I would buy a motorbike', pl: 'Gdybym miał pieniądze, kupiłbym motocykl', glossary: [
    { es: 'Si', en: 'if', pl: 'gdyby' }, { es: 'tuviera', en: 'I had (subjunctive)', pl: 'miał (tryb łączący)' }, { es: 'dinero', en: 'money', pl: 'pieniądze' },
    { es: 'me', en: 'for myself', pl: 'sobie' }, { es: 'compraría', en: 'I would buy', pl: 'kupiłbym' }, { es: 'una', en: 'a', pl: 'jeden' },
    { es: 'moto', en: 'motorbike', pl: 'motocykl' },
  ] },
  { target: ['Me', 'acostumbré', 'a', 'vivir', 'sin', 'coche'], en: 'I got used to living without a car', pl: 'Przyzwyczaiłem się żyć bez samochodu', glossary: [
    { es: 'Me', en: 'myself', pl: 'się' }, { es: 'acostumbré', en: 'I got used', pl: 'przyzwyczaiłem' }, { es: 'a', en: 'to', pl: 'do' },
    { es: 'vivir', en: 'to live', pl: 'życia' }, { es: 'sin', en: 'without', pl: 'bez' }, { es: 'coche', en: 'car', pl: 'samochodu' },
  ] },
  { target: ['Cabe', 'destacar', 'que', 'la', 'situación', 'cambió'], en: "It's worth noting that the situation changed", pl: 'Warto zaznaczyć, że sytuacja się zmieniła', glossary: [
    { es: 'Cabe', en: 'it is fitting', pl: 'warto' }, { es: 'destacar', en: 'to highlight', pl: 'zaznaczyć' }, { es: 'que', en: 'that', pl: 'że' },
    { es: 'la', en: 'the', pl: 'ta (rodzajnik)' }, { es: 'situación', en: 'situation', pl: 'sytuacja' }, { es: 'cambió', en: 'changed', pl: 'zmieniła się' },
  ] },
  { target: ['No', 'creo', 'que', 'sea', 'buena', 'idea'], en: "I don't think it's a good idea", pl: 'Nie sądzę, żeby to był dobry pomysł', glossary: [
    { es: 'No', en: 'not', pl: 'nie' }, { es: 'creo', en: 'I think', pl: 'sądzę' }, { es: 'que', en: 'that', pl: 'żeby' },
    { es: 'sea', en: 'it is (subjunctive)', pl: 'był (tryb łączący)' }, { es: 'buena', en: 'good', pl: 'dobry' }, { es: 'idea', en: 'idea', pl: 'pomysł' },
  ] },
];

export const builderB2: BuilderSentence[] = [
  { target: ['Cabría', 'matizar', 'que', 'no', 'todos', 'están', 'de', 'acuerdo'], en: 'It would be worth noting that not everyone agrees', pl: 'Warto by doprecyzować, że nie wszyscy się zgadzają', glossary: [
    { es: 'Cabría', en: 'it would be fitting to', pl: 'warto by' }, { es: 'matizar', en: 'to qualify / clarify', pl: 'doprecyzować' }, { es: 'que', en: 'that', pl: 'że' },
    { es: 'no', en: 'not', pl: 'nie' }, { es: 'todos', en: 'everyone', pl: 'wszyscy' }, { es: 'están', en: 'are', pl: 'są' },
    { es: 'de', en: 'of', pl: 'z' }, { es: 'acuerdo', en: 'agreement', pl: 'zgoda' },
  ] },
  { target: ['Sin', 'lugar', 'a', 'dudas', 'fue', 'un', 'error'], en: 'Without a doubt it was a mistake', pl: 'Bez wątpienia to był błąd', glossary: [
    { es: 'Sin', en: 'without', pl: 'bez' }, { es: 'lugar', en: 'room / place', pl: 'miejsca' }, { es: 'a', en: 'for', pl: 'na' },
    { es: 'dudas', en: 'doubts', pl: 'wątpliwości' }, { es: 'fue', en: 'it was', pl: 'to był' }, { es: 'un', en: 'a', pl: 'jeden' },
    { es: 'error', en: 'mistake', pl: 'błąd' },
  ] },
  { target: ['No', 'obstante', 'ello', 'seguimos', 'adelante', 'con', 'el', 'plan'], en: "Nevertheless we're moving forward with the plan", pl: 'Niemniej jednak realizujemy plan dalej', glossary: [
    { es: 'No', en: 'not', pl: 'nie' }, { es: 'obstante', en: 'obstructing', pl: 'przeszkadzając' }, { es: 'ello', en: 'that', pl: 'to' },
    { es: 'seguimos', en: 'we continue', pl: 'kontynuujemy' }, { es: 'adelante', en: 'forward', pl: 'dalej' }, { es: 'con', en: 'with', pl: 'z' },
    { es: 'el', en: 'the', pl: 'ten (rodzajnik)' }, { es: 'plan', en: 'plan', pl: 'plan' },
  ] },
  { target: ['A', 'raíz', 'de', 'eso', 'cambiaron', 'la', 'estrategia'], en: 'As a result of that they changed the strategy', pl: 'W wyniku tego zmienili strategię', glossary: [
    { es: 'A', en: 'at', pl: 'w' }, { es: 'raíz', en: 'root', pl: 'wyniku' }, { es: 'de', en: 'of', pl: '(przyimek)' },
    { es: 'eso', en: 'that', pl: 'tego' }, { es: 'cambiaron', en: 'they changed', pl: 'zmienili' }, { es: 'la', en: 'the', pl: 'tę (rodzajnik)' },
    { es: 'estrategia', en: 'strategy', pl: 'strategię' },
  ] },
  { target: ['De', 'haberlo', 'sabido', 'habría', 'actuado', 'distinto'], en: 'Had I known I would have acted differently', pl: 'Gdybym wiedział, postąpiłbym inaczej', glossary: [
    { es: 'De', en: 'if (with infinitive)', pl: 'gdyby (z bezokolicznikiem)' }, { es: 'haberlo', en: 'having it', pl: 'to (bezokolicznik złożony)' },
    { es: 'sabido', en: 'known', pl: 'wiedział' }, { es: 'habría', en: 'I would have', pl: 'bym' }, { es: 'actuado', en: 'acted', pl: 'postąpił' },
    { es: 'distinto', en: 'differently', pl: 'inaczej' },
  ] },
  { target: ['A', 'todas', 'luces', 'el', 'proyecto', 'era', 'inviable'], en: 'Clearly the project was unfeasible', pl: 'Ewidentnie projekt był niewykonalny', glossary: [
    { es: 'A', en: 'in', pl: 'w' }, { es: 'todas', en: 'all', pl: 'każdym' }, { es: 'luces', en: 'lights', pl: 'świetle' },
    { es: 'el', en: 'the', pl: 'ten (rodzajnik)' }, { es: 'proyecto', en: 'project', pl: 'projekt' }, { es: 'era', en: 'was', pl: 'był' },
    { es: 'inviable', en: 'unfeasible', pl: 'niewykonalny' },
  ] },
  { target: ['Por', 'más', 'que', 'insistas', 'no', 'cambiaré', 'de', 'opinión'], en: "However much you insist I won't change my mind", pl: 'Choćbyś nalegał, nie zmienię zdania', glossary: [
    { es: 'Por', en: 'for', pl: 'choć' }, { es: 'más', en: 'more', pl: 'bardziej' }, { es: 'que', en: 'that', pl: 'byś' },
    { es: 'insistas', en: 'you insist (subjunctive)', pl: 'nalegał (tryb łączący)' }, { es: 'no', en: 'not', pl: 'nie' },
    { es: 'cambiaré', en: 'I will change', pl: 'zmienię' }, { es: 'de', en: 'of', pl: '(przyimek)' }, { es: 'opinión', en: 'opinion', pl: 'zdania' },
  ] },
  { target: ['Me', 'llama', 'la', 'atención', 'su', 'actitud'], en: 'Their attitude strikes me', pl: 'Uderza mnie ich postawa', glossary: [
    { es: 'Me', en: 'to me', pl: 'mnie' }, { es: 'llama', en: 'calls', pl: 'przyciąga' }, { es: 'la', en: 'the', pl: 'tę (rodzajnik)' },
    { es: 'atención', en: 'attention', pl: 'uwagę' }, { es: 'su', en: 'their', pl: 'ich' }, { es: 'actitud', en: 'attitude', pl: 'postawa' },
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
  return order.map((id) => ({ id, es: sentence.target[id] }));
}

export const pron: PronItem[] = [
  { es: 'Buenos días', en: 'Good morning', pl: 'Dzień dobry', syl: ['Bue', 'nos', 'dí', 'as'], tipEn: 'Keep the "d" in "días" soft — almost like the "th" in "this".', tipPl: 'Wymawiaj „d" w „días" miękko — prawie jak „th" w „this".', tipEs: 'La "d" de "días" es suave, casi como la "th" inglesa de "this".' },
  { es: 'gracias', en: 'thank you', pl: 'dziękuję', syl: ['gra', 'cias'], tipEn: '"ci" is a soft "s" in Latin America ("th" in Spain).', tipPl: '„ci" to miękkie „s" (Ameryka) lub „th" (Hiszpania).', tipEs: 'La "ci" se sesea en América y se cecea en España.' },
  { es: 'por favor', en: 'please', pl: 'proszę', syl: ['por', 'fa', 'vor'], tipEn: 'Tap the "r" once — a light flap, not a full roll.', tipPl: '„r" trąć raz — lekko, bez zwijania.', tipEs: 'La "r" simple es un solo golpe de lengua, no vibra.' },
  { es: 'hola', en: 'hello', pl: 'cześć', syl: ['ho', 'la'], tipEn: 'The "h" is completely silent — start straight on the "o".', tipPl: '„h" jest zupełnie nieme — zacznij od „o".', tipEs: 'La "h" es muda: empieza directamente en la "o".' },
  { es: 'agua', en: 'water', pl: 'woda', syl: ['a', 'gua'], tipEn: 'The "gu" is a hard "g" plus a "w" glide — never a "j" sound.', tipPl: '„gu" to twarde „g" plus „ł" — nigdy „dż".', tipEs: 'La "gu" suena /gw/, con la "u" bien pronunciada.' },
  { es: 'casa', en: 'house', pl: 'dom', syl: ['ca', 'sa'], tipEn: 'Both "a" sounds are identical and short — no drift into "uh".', tipPl: 'Obie „a" są takie same i krótkie — bez zmiękczania.', tipEs: 'Las dos "a" suenan igual de abiertas y breves.' },
  { es: 'comer', en: 'to eat', pl: 'jeść', syl: ['co', 'mer'], tipEn: 'Stress the last syllable: co-MER, not CO-mer.', tipPl: 'Akcent na ostatnią sylabę: co-MER, nie CO-mer.', tipEs: 'Acentúa la última sílaba: co-MER.' },
  { es: 'amigo', en: 'friend', pl: 'przyjaciel', syl: ['a', 'mi', 'go'], tipEn: 'The "g" between vowels softens almost to a breath.', tipPl: '„g" między samogłoskami zmiękcza się prawie do tchnienia.', tipEs: 'La "g" entre vocales se relaja, casi fricativa.' },
  { es: 'España', en: 'Spain', pl: 'Hiszpania', syl: ['Es', 'pa', 'ña'], tipEn: '"ñ" is one sound — like the "ny" in "canyon", never "n"+"y".', tipPl: '„ñ" to jeden dźwięk — dokładnie polskie „ń".', tipEs: 'La "ñ" es un solo fonema palatal, no "n" más "i".' },
  { es: 'cinco', en: 'five', pl: 'pięć', syl: ['cin', 'co'], tipEn: 'Soft "c" then hard "c" in one word — "sin-ko".', tipPl: 'Najpierw miękkie „c", potem twarde „k" — „sin-ko".', tipEs: 'Primera "c" sesea, segunda suena /k/.' },
  { es: 'jueves', en: 'Thursday', pl: 'czwartek', syl: ['jue', 'ves'], tipEn: 'The "j" is a throaty "h", like the "ch" in Scottish "loch".', tipPl: '„j" to gardłowe „ch", jak w polskim „chleb".', tipEs: 'La "j" es velar, con fricción en la garganta.' },
  { es: 'familia', en: 'family', pl: 'rodzina', syl: ['fa', 'mi', 'lia'], tipEn: '"lia" is one syllable — glide straight from "li" to "a".', tipPl: '„lia" to jedna sylaba — płynne przejście „li" do „a".', tipEs: '"lia" forma diptongo: una sola sílaba.' },
];
export const pronA2: PronItem[] = [
  { es: 'la izquierda', en: 'the left', pl: 'w lewo', syl: ['la', 'iz', 'quier', 'da'], tipEn: '"qu" is a hard "k" — say "kier", never "kwier".', tipPl: '„qu" to twarde „k" — mów „kier", nigdy „kwier".', tipEs: 'La "qu" suena /k/: la "u" no se pronuncia.' },
  { es: 'derecha', en: 'right', pl: 'w prawo', syl: ['de', 're', 'cha'], tipEn: '"ch" sounds like the "ch" in "church".', tipPl: '„ch" brzmi jak polskie „cz".', tipEs: 'La "ch" es africada, como en "coche".' },
  { es: 'rebajas', en: 'sales', pl: 'wyprzedaże', syl: ['re', 'ba', 'jas'], tipEn: 'The "j" is a throaty "h", like clearing your throat.', tipPl: '„j" to gardłowe „ch", jak chrząknięcie.', tipEs: 'La "j" raspa en el velo del paladar.' },
  { es: 'ayer', en: 'yesterday', pl: 'wczoraj', syl: ['a', 'yer'], tipEn: 'The "y" is like the "y" in "yes", and the stress falls on "yer".', tipPl: '„y" jak polskie „j"; akcent pada na „yer".', tipEs: 'La "y" es consonante aquí y el acento va en "yer".' },
  { es: 'barato', en: 'cheap', pl: 'tani', syl: ['ba', 'ra', 'to'], tipEn: 'The "b" between vowels is soft — lips barely touch.', tipPl: '„b" między samogłoskami jest miękkie — wargi ledwo się stykają.', tipEs: 'La "b" intervocálica es fricativa: labios sin cerrar del todo.' },
  { es: 'mercado', en: 'market', pl: 'targ', syl: ['mer', 'ca', 'do'], tipEn: 'Keep the "r" short — one tap, then straight into "ca".', tipPl: '„r" krótkie — jedno uderzenie, potem od razu „ca".', tipEs: 'La "r" es simple: un golpe y sigue.' },
  { es: 'temprano', en: 'early', pl: 'wcześnie', syl: ['tem', 'pra', 'no'], tipEn: '"pra" is one crisp syllable — no vowel between "p" and "r".', tipPl: '„pra" to jedna zwarta sylaba — bez samogłoski między „p" a „r".', tipEs: '"pra" es una sola sílaba, sin vocal de apoyo.' },
  { es: 'ciudad', en: 'city', pl: 'miasto', syl: ['ciu', 'dad'], tipEn: 'Final "d" almost disappears — a light "th", not a hard "d".', tipPl: 'Końcowe „d" prawie znika — lekkie „th", nie twarde „d".', tipEs: 'La "d" final se relaja mucho, casi interdental.' },
  { es: 'cerveza', en: 'beer', pl: 'piwo', syl: ['cer', 've', 'za'], tipEn: 'The "v" sounds like a soft "b" — Spanish has no English "v".', tipPl: '„v" brzmi jak miękkie „b" — hiszpański nie ma „w".', tipEs: 'La "v" se pronuncia como "b": no existe la /v/ labiodental.' },
  { es: 'trabajo', en: 'work', pl: 'praca', syl: ['tra', 'ba', 'jo'], tipEn: 'The "t" has no puff of air — touch the teeth, not the ridge.', tipPl: '„t" bez przydechu — język przy zębach, nie przy dziąsłach.', tipEs: 'La "t" es dental y sin aspiración.' },
  { es: 'guitarra', en: 'guitar', pl: 'gitara', syl: ['gui', 'ta', 'rra'], tipEn: 'Silent "u" after "g", then a full rolled "rr".', tipPl: 'Nieme „u" po „g", potem pełne, drżące „rr".', tipEs: 'La "u" de "gui" no suena; la "rr" vibra varias veces.' },
  { es: 'cumpleaños', en: 'birthday', pl: 'urodziny', syl: ['cum', 'ple', 'a', 'ños'], tipEn: 'Four syllables with stress on "a" — cum-ple-A-ños.', tipPl: 'Cztery sylaby, akcent na „a" — cum-ple-A-ños.', tipEs: 'Cuatro sílabas y el acento cae en "a".' },
];
export const pronB1: PronItem[] = [
  { es: 'sin embargo', en: 'however', pl: 'jednak', syl: ['sin', 'em', 'bar', 'go'], tipEn: "Link \"sin\" and \"embargo\" smoothly — Spanish doesn't pause between words.", tipPl: 'Połącz „sin" i „embargo" płynnie — hiszpański nie robi przerw między słowami.', tipEs: 'Enlaza "sin" con "embargo": no hay pausa entre palabras.' },
  { es: 'me arrepiento', en: 'I regret it', pl: 'żałuję tego', syl: ['me', 'a', 'rre', 'pien', 'to'], tipEn: 'The double "rr" is a strong rolled trill — vibrate your tongue tip.', tipPl: 'Podwójne „rr" to mocno zwibrowane „r" — porusz czubkiem języka.', tipEs: 'La "rr" es vibrante múltiple: varios golpes de lengua.' },
  { es: 'a largo plazo', en: 'in the long run', pl: 'na dłuższą metę', syl: ['a', 'lar', 'go', 'pla', 'zo'], tipEn: '"pla" is one crisp syllable — no vowel between "p" and "l".', tipPl: '„pla" to jedna zwarta sylaba — bez samogłoski między „p" a „l".', tipEs: '"pla" se articula de golpe, sin vocal intermedia.' },
  { es: 'me acostumbré', en: 'I got used to it', pl: 'przyzwyczaiłem się', syl: ['me', 'a', 'cos', 'tum', 'bré'], tipEn: 'Stress falls on the final "bré" — keep it sharp and short.', tipPl: 'Akcent pada na ostatnie „bré" — wymów je krótko i wyraźnie.', tipEs: 'El acento va en "bré": breve y marcado.' },
  { es: 'cabe destacar', en: "it's worth noting", pl: 'warto zaznaczyć', syl: ['ca', 'be', 'des', 'ta', 'car'], tipEn: 'Keep every vowel pure and short — Spanish vowels never glide.', tipPl: 'Każda samogłoska krótka i czysta — hiszpańskie samogłoski się nie ślizgają.', tipEs: 'Las vocales españolas no se diptongan: cinco sonidos puros.' },
  { es: 'aunque llueva', en: 'even if it rains', pl: 'nawet jeśli pada', syl: ['aun', 'que', 'llue', 'va'], tipEn: '"au" is one diphthong, and "ll" sounds like the "y" in "yes".', tipPl: '„au" to jeden dyftong, a „ll" brzmi jak polskie „j".', tipEs: '"au" es diptongo y la "ll" se yeísmo como /y/.' },
  { es: 'desarrollo', en: 'development', pl: 'rozwój', syl: ['de', 'sa', 'rro', 'llo'], tipEn: 'Rolled "rr" in the middle, then "ll" as a "y" — de-sa-RRO-yo.', tipPl: 'Drżące „rr" w środku, potem „ll" jak „j" — de-sa-RRO-jo.', tipEs: 'Vibrante múltiple en "rro" y yeísmo en "llo".' },
  { es: 'aeropuerto', en: 'airport', pl: 'lotnisko', syl: ['a', 'e', 'ro', 'puer', 'to'], tipEn: '"a" and "e" stay separate — five syllables, not four.', tipPl: '„a" i „e" pozostają osobno — pięć sylab, nie cztery.', tipEs: '"a" y "e" no forman diptongo: son cinco sílabas.' },
  { es: 'extranjero', en: 'foreigner', pl: 'obcokrajowiec', syl: ['ex', 'tran', 'je', 'ro'], tipEn: 'The "x" is /ks/ and the "j" is throaty — eks-tran-HE-ro.', tipPl: '„x" to /ks/, a „j" gardłowe — eks-tran-CHE-ro.', tipEs: 'La "x" suena /ks/ y la "j" es velar.' },
  { es: 'quizás', en: 'maybe', pl: 'może', syl: ['qui', 'zás'], tipEn: 'Silent "u", stress on the final syllable — ki-SAS.', tipPl: 'Nieme „u", akcent na ostatnią sylabę — ki-SAS.', tipEs: 'La "u" no suena y el acento va en "zás".' },
  { es: 'entrevista', en: 'interview', pl: 'rozmowa kwalifikacyjna', syl: ['en', 'tre', 'vis', 'ta'], tipEn: 'Keep the "tr" tight and the "v" soft, like a "b".', tipPl: '„tr" wymawiaj zwarcie, a „v" miękko, jak „b".', tipEs: 'Grupo "tr" bien unido y "v" como "b".' },
  { es: 'desafortunadamente', en: 'unfortunately', pl: 'niestety', syl: ['de', 'sa', 'for', 'tu', 'na', 'da', 'men', 'te'], tipEn: 'Eight syllables, one breath — stress only on "men".', tipPl: 'Osiem sylab, jeden oddech — akcent tylko na „men".', tipEs: 'Ocho sílabas seguidas: solo "men" lleva el acento.' },
];
export const pronB2: PronItem[] = [
  { es: 'sin lugar a dudas', en: 'without a doubt', pl: 'bez wątpienia', syl: ['sin', 'lu', 'gar', 'a', 'du', 'das'], tipEn: 'Six syllables, one breath — practice it slowly first, then speed up.', tipPl: 'Sześć sylab, jeden oddech — najpierw powoli, potem szybciej.', tipEs: 'Seis sílabas de un tirón: primero despacio, luego rápido.' },
  { es: 'a raíz de eso', en: 'as a result of that', pl: 'w wyniku tego', syl: ['a', 'ra', 'íz', 'de', 'e', 'so'], tipEn: '"raíz" has a written accent — stress lands hard on the "í".', tipPl: '„raíz" ma akcent graficzny — mocny nacisk na „í".', tipEs: 'La tilde de "raíz" rompe el diptongo: acento en la "í".' },
  { es: 'cabría matizar', en: 'it would be worth qualifying', pl: 'warto by doprecyzować', syl: ['ca', 'brí', 'a', 'ma', 'ti', 'zar'], tipEn: '"cabría" is conditional — soften the "b" between vowels almost to a "v".', tipPl: '„cabría" to tryb warunkowy — „b" między samogłoskami zmiękcz niemal do „v".', tipEs: 'En "cabría" la "b" intervocálica se relaja casi a fricativa.' },
  { es: 'no obstante ello', en: 'nevertheless', pl: 'niemniej jednak', syl: ['no', 'obs', 'tan', 'te', 'e', 'llo'], tipEn: '"ll" sounds like the "y" in "yes" in most dialects.', tipPl: '„ll" brzmi jak „j" w „jajko" w większości dialektów.', tipEs: 'El yeísmo hace que "ll" suene igual que "y".' },
  { es: 'a todas luces', en: 'clearly', pl: 'ewidentnie', syl: ['a', 'to', 'das', 'lu', 'ces'], tipEn: '"ces" ends soft — a light "s", never a hard "z".', tipPl: '„ces" kończy się miękko — lekkie „s", nigdy twarde „z".', tipEs: '"ces" termina en /s/ suave, sin zumbido.' },
  { es: 'imprescindible', en: 'essential', pl: 'niezbędny', syl: ['im', 'pres', 'cin', 'di', 'ble'], tipEn: 'Three consonant clusters in a row — slow down on "pres-cin".', tipPl: 'Trzy zbitki spółgłoskowe z rzędu — zwolnij na „pres-cin".', tipEs: 'Tres grupos consonánticos seguidos: cuida "pres-cin".' },
  { es: 'desenvolverse', en: 'to get by', pl: 'radzić sobie', syl: ['de', 'sen', 'vol', 'ver', 'se'], tipEn: 'Both "v" sounds are soft "b" — de-sen-bol-BER-se.', tipPl: 'Obie „v" to miękkie „b" — de-sen-bol-BER-se.', tipEs: 'Las dos "v" suenan como "b" bilabial.' },
  { es: 'paradójicamente', en: 'paradoxically', pl: 'paradoksalnie', syl: ['pa', 'ra', 'dó', 'ji', 'ca', 'men', 'te'], tipEn: 'The written accent on "dó" is the only stressed syllable.', tipPl: 'Akcent graficzny na „dó" to jedyna akcentowana sylaba.', tipEs: 'La tilde de "dó" marca la única sílaba tónica.' },
  { es: 'enriquecedor', en: 'enriching', pl: 'wzbogacający', syl: ['en', 'ri', 'que', 'ce', 'dor'], tipEn: '"r" after "n" rolls fully — en-RRI-que-ce-dor.', tipPl: '„r" po „n" jest w pełni drżące — en-RRI-que-ce-dor.', tipEs: 'Tras "n" la "r" vibra como múltiple.' },
  { es: 'sobrecogedor', en: 'overwhelming', pl: 'przejmujący', syl: ['so', 'bre', 'co', 'ge', 'dor'], tipEn: 'The "g" before "e" is throaty, like the "j".', tipPl: '„g" przed „e" jest gardłowe, jak „j".', tipEs: 'La "g" ante "e" suena velar, igual que la "j".' },
  { es: 'reivindicación', en: 'demand / claim', pl: 'roszczenie', syl: ['rei', 'vin', 'di', 'ca', 'ción'], tipEn: 'Start with a rolled "r"; "ción" is one syllable, stressed.', tipPl: 'Zacznij od drżącego „r"; „ción" to jedna sylaba, akcentowana.', tipEs: 'Empieza con "r" múltiple y acentúa "ción".' },
  { es: 'inconmensurable', en: 'immeasurable', pl: 'niezmierzony', syl: ['in', 'con', 'men', 'su', 'ra', 'ble'], tipEn: 'Two "n" sounds meet in "conmen" — hold the nasal a beat longer.', tipPl: 'Dwa „n" spotykają się w „conmen" — przytrzymaj nosówkę chwilę dłużej.', tipEs: 'En "conmen" chocan dos nasales: alarga un poco el sonido.' },
];

export const dictA1: Phrase[] = [
  { es: 'Hola, ¿cómo estás?', en: 'Hello, how are you?', pl: 'Cześć, jak się masz?' },
  { es: 'Me llamo Ana', en: 'My name is Ana', pl: 'Nazywam się Ana' },
  { es: 'Tengo dos hermanos', en: 'I have two brothers', pl: 'Mam dwóch braci' },
  { es: 'La casa es muy grande', en: 'The house is very big', pl: 'Dom jest bardzo duży' },
  { es: 'Buenos días, ¿qué tal?', en: 'Good morning, how is it going?', pl: 'Dzień dobry, co słychać?' },
  { es: 'Quiero un vaso de agua', en: 'I want a glass of water', pl: 'Chcę szklankę wody' },
  { es: 'Mi amigo vive en Barcelona', en: 'My friend lives in Barcelona', pl: 'Mój przyjaciel mieszka w Barcelonie' },
  { es: 'Hoy no tengo clase', en: "I don't have class today", pl: 'Dziś nie mam zajęć' },
  { es: 'La comida está muy rica', en: 'The food is delicious', pl: 'Jedzenie jest bardzo smaczne' },
  { es: '¿Dónde está la estación?', en: 'Where is the station?', pl: 'Gdzie jest dworzec?' },
  { es: 'Son las cinco de la tarde', en: "It's five in the afternoon", pl: 'Jest piąta po południu' },
  { es: 'Muchas gracias por todo', en: 'Thank you very much for everything', pl: 'Bardzo dziękuję za wszystko' },
];
export const dictA2: Phrase[] = [
  { es: 'Ayer compré pan en el mercado', en: 'Yesterday I bought bread at the market', pl: 'Wczoraj kupiłem chleb na targu' },
  { es: 'Gira a la izquierda en la esquina', en: 'Turn left at the corner', pl: 'Skręć w lewo na rogu' },
  { es: 'Me despierto a las siete', en: 'I wake up at seven', pl: 'Budzę się o siódmej' },
  { es: '¿Puedo pagar con tarjeta?', en: 'Can I pay by card?', pl: 'Czy mogę zapłacić kartą?' },
  { es: 'El año pasado viajamos a Portugal', en: 'Last year we travelled to Portugal', pl: 'W zeszłym roku pojechaliśmy do Portugalii' },
  { es: 'Estos zapatos son demasiado caros', en: 'These shoes are too expensive', pl: 'Te buty są za drogie' },
  { es: 'No encontré las llaves del coche', en: "I didn't find the car keys", pl: 'Nie znalazłem kluczyków od samochodu' },
  { es: 'Siempre desayuno antes de salir', en: 'I always have breakfast before going out', pl: 'Zawsze jem śniadanie przed wyjściem' },
  { es: 'La tienda cierra a las nueve', en: 'The shop closes at nine', pl: 'Sklep zamyka się o dziewiątej' },
  { es: 'Anoche vimos una película muy buena', en: 'Last night we watched a very good film', pl: 'Wczoraj wieczorem obejrzeliśmy bardzo dobry film' },
  { es: 'Hay rebajas en toda la ciudad', en: 'There are sales all over the city', pl: 'W całym mieście są wyprzedaże' },
  { es: '¿Cuánto tiempo dura el viaje?', en: 'How long does the trip take?', pl: 'Jak długo trwa podróż?' },
];
export const dictB1: Phrase[] = [
  { es: 'Aunque llueva, saldré de todas formas', en: "Even if it rains, I'll go out anyway", pl: 'Nawet jeśli będzie padać, i tak wyjdę' },
  { es: 'Me arrepiento de no haber estudiado más', en: 'I regret not having studied more', pl: 'Żałuję, że nie uczyłem się więcej' },
  { es: 'A largo plazo, esto será beneficioso', en: 'In the long run, this will be beneficial', pl: 'Na dłuższą metę to będzie korzystne' },
  { es: 'Cabe destacar que la situación ha cambiado', en: "It's worth noting that the situation has changed", pl: 'Warto zaznaczyć, że sytuacja się zmieniła' },
  { es: 'Espero que llegues a tiempo mañana', en: 'I hope you arrive on time tomorrow', pl: 'Mam nadzieję, że jutro zdążysz' },
  { es: 'Si tuviera dinero, me compraría una moto', en: 'If I had money, I would buy a motorbike', pl: 'Gdybym miał pieniądze, kupiłbym motocykl' },
  { es: 'Me acostumbré a vivir sin coche', en: 'I got used to living without a car', pl: 'Przyzwyczaiłem się żyć bez samochodu' },
  { es: 'No creo que sea una buena idea', en: "I don't think it's a good idea", pl: 'Nie sądzę, żeby to był dobry pomysł' },
  { es: 'Desafortunadamente, el vuelo se retrasó', en: 'Unfortunately, the flight was delayed', pl: 'Niestety lot się opóźnił' },
  { es: 'Llevo tres años trabajando aquí', en: "I've been working here for three years", pl: 'Pracuję tu od trzech lat' },
  { es: 'Quizás deberíamos hablarlo con calma', en: 'Maybe we should talk it over calmly', pl: 'Może powinniśmy omówić to spokojnie' },
  { es: 'En cuanto termine, te aviso', en: "As soon as I finish, I'll let you know", pl: 'Jak tylko skończę, dam ci znać' },
];
export const dictB2: Phrase[] = [
  { es: 'Sin lugar a dudas, esto marcará un antes y un después', en: 'Without a doubt, this will be a turning point', pl: 'Bez wątpienia to będzie punkt zwrotny' },
  { es: 'Cabría matizar que no todos están de acuerdo', en: 'It would be worth noting that not everyone agrees', pl: 'Warto by doprecyzować, że nie wszyscy się zgadzają' },
  { es: 'No obstante ello, seguimos adelante con el plan', en: "Nevertheless, we're moving forward with the plan", pl: 'Niemniej jednak realizujemy plan dalej' },
  { es: 'A raíz de eso cambiaron toda la estrategia', en: 'As a result of that they changed the whole strategy', pl: 'W wyniku tego zmienili całą strategię' },
  { es: 'De haberlo sabido, habría actuado de otra manera', en: 'Had I known, I would have acted differently', pl: 'Gdybym wiedział, postąpiłbym inaczej' },
  { es: 'A todas luces el proyecto era inviable', en: 'Clearly the project was unfeasible', pl: 'Ewidentnie projekt był niewykonalny' },
  { es: 'Por más que insistas, no cambiaré de opinión', en: "However much you insist, I won't change my mind", pl: 'Choćbyś nalegał, nie zmienię zdania' },
  { es: 'Me llama la atención su actitud ante el problema', en: 'Their attitude towards the problem strikes me', pl: 'Uderza mnie ich postawa wobec problemu' },
  { es: 'Resulta imprescindible revisar las cifras', en: 'It is essential to review the figures', pl: 'Konieczne jest zweryfikowanie liczb' },
  { es: 'Se desenvuelve con soltura en cualquier situación', en: 'They handle any situation with ease', pl: 'Radzi sobie swobodnie w każdej sytuacji' },
  { es: 'Paradójicamente, el error nos ayudó bastante', en: 'Paradoxically, the mistake helped us quite a lot', pl: 'Paradoksalnie ten błąd sporo nam pomógł' },
  { es: 'Fue una experiencia sumamente enriquecedora', en: 'It was an extremely enriching experience', pl: 'To było wyjątkowo wzbogacające doświadczenie' },
];

export const levels: LevelDef[] = [
  { code: 'A1', en: 'Beginner', pl: 'Początkujący', dEn: 'Greetings, numbers, everyday words and the simple present tense.', dPl: 'Powitania, liczby, codzienne słówka i czas teraźniejszy.', status: 'active', progress: 62 },
  { code: 'A2', en: 'Elementary', pl: 'Podstawowy', dEn: 'Past tenses, shopping, directions and describing routines.', dPl: 'Czasy przeszłe, zakupy, wskazówki i opis rutyny.', status: 'available', progress: 8 },
  { code: 'B1', en: 'Intermediate', pl: 'Średnio zaawansowany', dEn: 'Opinions, future plans and handling most travel situations.', dPl: 'Opinie, plany na przyszłość i typowe sytuacje w podróży.', status: 'available', progress: 0 },
  { code: 'B2', en: 'Upper intermediate', pl: 'Ponad średni', dEn: 'Abstract topics, nuanced arguments and fluent conversation.', dPl: 'Tematy abstrakcyjne, niuanse i płynna rozmowa.', status: 'available', progress: 0 },
  { code: 'C1', en: 'Advanced', pl: 'Zaawansowany', dEn: 'Complex texts, idioms and precise, spontaneous expression.', dPl: 'Złożone teksty, idiomy i precyzyjna, swobodna wypowiedź.', status: 'locked', progress: 0 },
  { code: 'C2', en: 'Mastery', pl: 'Biegłość', dEn: 'Near-native command across any subject or register.', dPl: 'Biegłość bliska rodzimej w każdym temacie i rejestrze.', status: 'locked', progress: 0 },
];

const today = todayISO();
const due = (n: number) => addDays(today, n);

export const srsSeed: SrsItem[] = [
  { es: 'gracias', en: 'thank you', pl: 'dziękuję', strength: 82, dueAt: due(3) },
  { es: 'comer', en: 'to eat', pl: 'jeść', strength: 45, dueAt: due(0) },
  { es: 'casa', en: 'house', pl: 'dom', strength: 68, dueAt: due(1) },
  { es: 'amigo', en: 'friend', pl: 'przyjaciel', strength: 31, dueAt: due(0) },
  { es: 'hoy', en: 'today', pl: 'dzisiaj', strength: 91, dueAt: due(6) },
  { es: 'agua', en: 'water', pl: 'woda', strength: 54, dueAt: due(0) },
];
export const srsPhrasesSeed: SrsItem[] = [
  { es: '¿Dónde está el baño?', en: 'Where is the bathroom?', pl: 'Gdzie jest toaleta?', strength: 76, dueAt: due(2) },
  { es: 'La cuenta, por favor', en: 'The check, please', pl: 'Poproszę rachunek', strength: 38, dueAt: due(0) },
  { es: '¿Cuánto cuesta?', en: 'How much is it?', pl: 'Ile to kosztuje?', strength: 63, dueAt: due(1) },
  { es: 'Necesito ayuda urgente', en: 'I need urgent help', pl: 'Potrzebuję pilnej pomocy', strength: 29, dueAt: due(0) },
  { es: 'Mucho gusto', en: 'Nice to meet you', pl: 'Miło mi', strength: 88, dueAt: due(5) },
];
export const srsPronSeed: SrsItem[] = [
  { es: 'Buenos días', en: 'Good morning', pl: 'Dzień dobry', strength: 80, dueAt: due(3) },
  { es: 'gracias', en: 'thank you', pl: 'dziękuję', strength: 42, dueAt: due(0) },
  { es: 'la izquierda', en: 'the left', pl: 'w lewo', strength: 57, dueAt: due(1) },
  { es: 'sin embargo', en: 'however', pl: 'jednak', strength: 33, dueAt: due(0) },
  { es: 'a todas luces', en: 'clearly', pl: 'ewidentnie', strength: 71, dueAt: due(4) },
];
export const srsDictSeed: SrsItem[] = [
  { es: 'Hola, ¿cómo estás?', en: 'Hello, how are you?', pl: 'Cześć, jak się masz?', strength: 69, dueAt: due(2) },
  { es: 'Me llamo Ana', en: 'My name is Ana', pl: 'Nazywam się Ana', strength: 35, dueAt: due(0) },
  { es: 'Tengo dos hermanos', en: 'I have two brothers', pl: 'Mam dwóch braci', strength: 48, dueAt: due(1) },
  { es: 'La casa es muy grande', en: 'The house is very big', pl: 'Dom jest bardzo duży', strength: 27, dueAt: due(0) },
];
export const srsBuilderSeed: SrsItem[] = [
  { es: 'Yo quiero un café con leche', en: 'I want a coffee with milk', pl: 'Chcę kawę z mlekiem', strength: 73, dueAt: due(3) },
  { es: 'Ayer compré pan en el mercado', en: 'Yesterday I bought bread at the market', pl: 'Wczoraj kupiłem chleb na targu', strength: 31, dueAt: due(0) },
];

export const challengesSeed: Challenge[] = [
  { id: 'c1', en: 'Review 5 words', pl: 'Powtórz 5 słówek', es: 'Repasa 5 palabras', xp: 15, done: false },
  { id: 'c2', en: 'Build 1 sentence', pl: 'Ułóż 1 zdanie', es: 'Forma 1 frase', xp: 10, done: true },
  { id: 'c3', en: 'Practice pronunciation', pl: 'Poćwicz wymowę', es: 'Practica pronunciación', xp: 20, done: false },
  { id: 'c4', en: 'Learn 3 new phrases', pl: 'Naucz się 3 nowych zwrotów', es: 'Aprende 3 frases nuevas', xp: 12, done: false },
  { id: 'c5', en: 'Complete a dictation drill', pl: 'Ukończ dyktando', es: 'Completa un dictado', xp: 18, done: false },
  { id: 'c6', en: 'Perfect score on 3 cards', pl: 'Perfekcyjny wynik na 3 kartach', es: 'Puntuación perfecta en 3 tarjetas', xp: 25, done: false },
];

export const badgesSeed = [
  { ic: '🔥', en: '21-day streak', pl: '21 dni z rzędu', es: 'Racha de 21 días', got: true },
  { ic: '📚', en: '200 words', pl: '200 słów', es: '200 palabras', got: true },
  { ic: '🎯', en: 'Perfect lesson', pl: 'Idealna lekcja', es: 'Lección perfecta', got: true },
  { ic: '🏆', en: 'Gold League', pl: 'Liga Złota', es: 'Liga Oro', got: true },
  { ic: '🎤', en: '50 pronunciations', pl: '50 wymów', es: '50 pronunciaciones', got: false },
  { ic: '⭐', en: 'A2 complete', pl: 'A2 ukończone', es: 'A2 completado', got: false },
  { ic: '📅', en: 'Perfect week', pl: 'Idealny tydzień', es: 'Semana perfecta', got: true },
  { ic: '🌱', en: '7-day streak', pl: '7 dni z rzędu', es: 'Racha de 7 días', got: true },
];

export const accentSwatches = ['#DE5B3B', '#E0902A', '#2F9E7A', '#2F86C9', '#6C5CE0', '#D9527E'];

export function deckFor(lv: Level, extra?: Word[]): Word[] {
  const base = lv === 'A1' ? deck : lv === 'A2' ? deckA2 : [];
  return base.concat(extra || []);
}
export function pronFor(lv: Level): PronItem[] {
  return lv === 'A1' ? pron : lv === 'A2' ? pronA2 : lv === 'B1' ? pronB1 : pronB2;
}
export function buildersFor(lv: Level): BuilderSentence[] {
  return lv === 'A1' ? builderA1 : lv === 'A2' ? builderA2 : lv === 'B1' ? builderB1 : builderB2;
}
export function builderFor(lv: Level, idx = 0): BuilderSentence {
  const list = buildersFor(lv);
  return list[Math.min(idx, list.length - 1)];
}
export function bankFor(lv: Level, idx = 0) {
  return bankFrom(builderFor(lv, idx));
}
export function dictFor(lv: Level): Phrase[] {
  return lv === 'A1' ? dictA1 : lv === 'A2' ? dictA2 : lv === 'B1' ? dictB1 : dictB2;
}
export function phrasebookFor(lv: Level, extra?: PhraseCategory[]): PhraseCategory[] {
  if (extra && extra.length) return extra;
  return lv === 'A2' ? phrasebookA2 : phrasebook;
}

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
  scores: number[];
  tipEn: string;
  tipPl: string;
};
export type SrsItem = {
  es: string;
  en: string;
  pl: string;
  strength: number;
  dueEn: string;
  duePl: string;
  today: boolean;
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
    builderTitle: 'Forma la frase', builderSub: 'Toca los bloques en el orden correcto', build: 'Forma:', check: 'Comprobar', clear: 'Borrar', correct: '¡Perfecto! Correcto.', wrong: 'Casi — prueba a reordenar.', glossary: 'Glosario — cada palabra de la frase', glossaryHint: 'Toca una palabra para oírla',
    pronTitle: 'Análisis de pronunciación', pronSub: 'Dilo en voz alta — analizamos cada sílaba', record: 'Toca para hablar', listening: 'Escuchando…', yourScore: 'Tu puntuación', tryAgain: 'Intentar de nuevo', great: '¡Excelente pronunciación!', goodJob: 'Bien — ¡casi lo tienes!', keepPracticing: 'Sigue practicando', syllableBreakdown: 'Sílaba por sílaba', accuracy: 'Precisión', fluency: 'Fluidez', completeness: 'Integridad', intonation: 'Entonación', weHeard: 'Oímos', targetLabel: 'Objetivo', tipLabel: 'Consejo', practiceWords: 'Palabras de práctica', saveReview: 'Guardar para repasar', checkPron: 'Comprobar mi pronunciación', checkPronSub: 'Toca el micro y dilo en voz alta', checkSentencePron: 'Comprobar pronunciación de la frase', dictNav: 'Dictado', dictTitle: 'Escucha y escribe', dictSub: 'Reproduce la frase y escribe lo que oigas', dictType: 'Escribe lo que oyes', dictPlaceholder: 'Escribe aquí…', dictCheck: 'Comprobar', dictReveal: 'Ver respuesta', dictReplay: 'Reproducir', dictSlow: 'Lento 0.5×', dictNext: 'Siguiente', dictCorrect: '¡Correcto! Perfecto.', dictWrong: 'Casi — compara abajo.', dictAnswer: 'Respuesta', installTitle: 'Instalar Hablo', installBody: 'Añade Hablo a tu escritorio para acceso rápido, lecciones sin conexión y pantalla completa.', installBtn: 'Instalar app', installLater: 'Ahora no', installHelp: 'Para instalar: abre el menú del navegador y elige «Instalar Hablo» o «Añadir a la pantalla de inicio».',
    reviewTitle: 'Repaso inteligente (SRS)', reviewSub: 'La repetición espaciada trae cada palabra justo antes de olvidarla', memory: 'Memoria', due: 'Toca', startReview: 'Empezar sesión de repaso', itemsDue: 'para repasar hoy', statsNav: 'Progreso', statsTitle: 'Tu progreso', statsSub: 'Sigue tu avance semana a semana', wordsLearned: 'Palabras aprendidas', accuracy2: 'Precisión', minutes: 'Minutos estudiados', bestStreak: 'Mejor racha', lessonsDone: 'Lecciones hechas', weeklyXP: 'XP semanal', activity: 'Actividad — últimas 4 semanas', levelProgress: 'Progreso por nivel', achievements: 'Logros', days: 'días',
  },
  en: {
    home: 'Home', levels: 'Levels', vocab: 'Vocabulary', phrases: 'Phrasebook', builder: 'Sentence Builder', pronounce: 'Pronunciation', review: 'Review',
    greet: 'Buenos días, Alex', greetSub: 'You have 3 words due today. Ready for Spanish?',
    continueSub: 'A1 · Basics · Greetings', start: 'Continue',
    streak: 'day streak', dailyGoal: 'Daily goal', league: 'Gold League', xpToday: 'XP today',
    quick: 'Jump back in', dueToday: 'due for review', reviewNow: 'Review now', keepGoing: 'Keep your streak alive',
    flipHint: 'Tap the card to flip', again: 'Again', hard: 'Hard', good: 'Good', easy: 'Easy', example: 'Example', listen: 'Listen', card: 'Card',
    levelsTitle: 'Your learning path', levelsSub: 'The CEFR scale, from your first words to fluency', locked: 'Locked', inProgress: 'In progress', available: 'Available',
    phrasesTitle: 'Phrasebook', phrasesSub: "Real phrases you'll actually use — tap any line to hear it",
    builderTitle: 'Build the sentence', builderSub: 'Tap the blocks in the right order', build: 'Build:', check: 'Check', clear: 'Clear', correct: "¡Perfecto! That's right.", wrong: 'Not quite — try reordering.', glossary: 'Glossary — every word in this sentence', glossaryHint: 'Tap a word to hear it',
    pronTitle: 'Pronunciation check', pronSub: 'Say it out loud — we analyze every syllable', record: 'Tap to speak', listening: 'Listening…', yourScore: 'Your score', tryAgain: 'Try again', great: 'Great pronunciation!', goodJob: 'Good — almost there!', keepPracticing: 'Keep practicing', syllableBreakdown: 'Syllable by syllable', accuracy: 'Accuracy', fluency: 'Fluency', completeness: 'Completeness', intonation: 'Intonation', weHeard: 'We heard', targetLabel: 'Target', tipLabel: 'Coaching tip', practiceWords: 'Practice words', saveReview: 'Save to review', checkPron: 'Check my pronunciation', checkPronSub: 'Tap the mic and say it aloud', checkSentencePron: 'Check sentence pronunciation', dictNav: 'Dictation', dictTitle: 'Listen & type', dictSub: 'Play the phrase and type what you hear', dictType: 'Type what you hear', dictPlaceholder: 'Type in Spanish…', dictCheck: 'Check', dictReveal: 'Show answer', dictReplay: 'Play', dictSlow: 'Slow 0.5×', dictNext: 'Next phrase', dictCorrect: '¡Correcto! Perfect.', dictWrong: 'Not quite — compare below.', dictAnswer: 'Answer', installTitle: 'Install Hablo', installBody: 'Add Hablo to your desktop for one-tap access, offline lessons and a full-screen experience.', installBtn: 'Install app', installLater: 'Not now', installHelp: 'To install: open your browser menu and choose "Install Hablo" or "Add to Home screen".',
    reviewTitle: 'Smart Review (SRS)', reviewSub: "Spaced repetition brings each word back right before you'd forget it", memory: 'Memory', due: 'Due', startReview: 'Start review session', itemsDue: 'items due today', statsNav: 'Progress', statsTitle: 'Your progress', statsSub: 'Track your Spanish journey week by week', wordsLearned: 'Words learned', accuracy2: 'Accuracy', minutes: 'Minutes studied', bestStreak: 'Best streak', lessonsDone: 'Lessons done', weeklyXP: 'Weekly XP', activity: 'Activity — last 4 weeks', levelProgress: 'Level progress', achievements: 'Achievements', days: 'days',
  },
  pl: {
    home: 'Start', levels: 'Poziomy', vocab: 'Słówka', phrases: 'Rozmówki', builder: 'Budowanie zdań', pronounce: 'Wymowa', review: 'Powtórki',
    greet: 'Buenos días, Alex', greetSub: 'Masz dziś 3 słówka do powtórki. Zaczynamy?',
    continueSub: 'A1 · Podstawy · Powitania', start: 'Kontynuuj',
    streak: 'dni z rzędu', dailyGoal: 'Cel dzienny', league: 'Liga Złota', xpToday: 'XP dziś',
    quick: 'Wróć do nauki', dueToday: 'do powtórki', reviewNow: 'Powtórz teraz', keepGoing: 'Utrzymaj serię',
    flipHint: 'Dotknij kartę, aby obrócić', again: 'Jeszcze raz', hard: 'Trudne', good: 'Dobre', easy: 'Łatwe', example: 'Przykład', listen: 'Odsłuchaj', card: 'Karta',
    levelsTitle: 'Twoja ścieżka nauki', levelsSub: 'Skala CEFR — od pierwszych słów do biegłości', locked: 'Zablokowane', inProgress: 'W trakcie', available: 'Dostępne',
    phrasesTitle: 'Rozmówki', phrasesSub: 'Zwroty, których naprawdę użyjesz — dotknij, aby odsłuchać',
    builderTitle: 'Ułóż zdanie', builderSub: 'Dotykaj klocki we właściwej kolejności', build: 'Ułóż:', check: 'Sprawdź', clear: 'Wyczyść', correct: '¡Perfecto! Zgadza się.', wrong: 'Prawie — zmień kolejność.', glossary: 'Słowniczek — każde słowo w tym zdaniu', glossaryHint: 'Dotknij słowo, aby je usłyszeć',
    pronTitle: 'Analiza wymowy', pronSub: 'Powiedz na głos — analizujemy każdą sylabę', record: 'Dotknij, aby mówić', listening: 'Słucham…', yourScore: 'Twój wynik', tryAgain: 'Spróbuj ponownie', great: 'Świetna wymowa!', goodJob: 'Dobrze — już blisko!', keepPracticing: 'Ćwicz dalej', syllableBreakdown: 'Sylaba po sylabie', accuracy: 'Dokładność', fluency: 'Płynność', completeness: 'Kompletność', intonation: 'Intonacja', weHeard: 'Usłyszeliśmy', targetLabel: 'Cel', tipLabel: 'Wskazówka', practiceWords: 'Słowa do ćwiczeń', saveReview: 'Zapisz do powtórek', checkPron: 'Sprawdź swoją wymowę', checkPronSub: 'Dotknij mikrofonu i powiedz na głos', checkSentencePron: 'Sprawdź wymowę zdania', dictNav: 'Dyktando', dictTitle: 'Słuchaj i pisz', dictSub: 'Odtwórz zdanie i zapisz, co słyszysz', dictType: 'Zapisz, co słyszysz', dictPlaceholder: 'Pisz po hiszpańsku…', dictCheck: 'Sprawdź', dictReveal: 'Pokaż odpowiedź', dictReplay: 'Odtwórz', dictSlow: 'Wolno 0.5×', dictNext: 'Następne', dictCorrect: '¡Correcto! Idealnie.', dictWrong: 'Prawie — porównaj poniżej.', dictAnswer: 'Odpowiedź', installTitle: 'Zainstaluj Hablo', installBody: 'Dodaj Hablo na pulpit — szybki dostęp jednym kliknięciem, lekcje offline i tryb pełnoekranowy.', installBtn: 'Zainstaluj aplikację', installLater: 'Nie teraz', installHelp: 'Aby zainstalować: otwórz menu przeglądarki i wybierz „Zainstaluj Hablo" lub „Dodaj do ekranu głównego".',
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

export const builder: BuilderSentence = {
  target: ['Yo', 'quiero', 'un', 'café', 'con', 'leche'], en: 'I want a coffee with milk', pl: 'Chcę kawę z mlekiem',
  glossary: [
    { es: 'Yo', en: 'I', pl: 'ja' },
    { es: 'quiero', en: 'I want', pl: 'chcę' },
    { es: 'un', en: 'a / one', pl: 'jeden' },
    { es: 'café', en: 'coffee', pl: 'kawa' },
    { es: 'con', en: 'with', pl: 'z' },
    { es: 'leche', en: 'milk', pl: 'mleko' },
  ],
};
export const builderA2: BuilderSentence = {
  target: ['Ayer', 'compré', 'pan', 'en', 'el', 'mercado'], en: 'Yesterday I bought bread at the market', pl: 'Wczoraj kupiłem chleb na targu',
  glossary: [
    { es: 'Ayer', en: 'yesterday', pl: 'wczoraj' },
    { es: 'compré', en: 'I bought', pl: 'kupiłem' },
    { es: 'pan', en: 'bread', pl: 'chleb' },
    { es: 'en', en: 'at / in', pl: 'na / w' },
    { es: 'el', en: 'the', pl: 'ten (rodzajnik)' },
    { es: 'mercado', en: 'market', pl: 'targ' },
  ],
};
export const builderB1: BuilderSentence = {
  target: ['Aunque', 'llueva', 'saldré', 'de', 'todas', 'formas'], en: "Even if it rains I'll go out anyway", pl: 'Nawet jeśli będzie padać, i tak wyjdę',
  glossary: [
    { es: 'Aunque', en: 'even though / even if', pl: 'chociaż / nawet jeśli' },
    { es: 'llueva', en: 'it rains (subjunctive)', pl: 'będzie padać' },
    { es: 'saldré', en: 'I will go out', pl: 'wyjdę' },
    { es: 'de', en: 'of', pl: 'z' },
    { es: 'todas', en: 'all', pl: 'wszystkie' },
    { es: 'formas', en: 'ways', pl: 'sposoby' },
  ],
};
export const builderB2: BuilderSentence = {
  target: ['Cabría', 'matizar', 'que', 'no', 'todos', 'están', 'de', 'acuerdo'], en: 'It would be worth noting that not everyone agrees', pl: 'Warto by doprecyzować, że nie wszyscy się zgadzają',
  glossary: [
    { es: 'Cabría', en: 'it would be fitting to', pl: 'warto by' },
    { es: 'matizar', en: 'to qualify / clarify', pl: 'doprecyzować' },
    { es: 'que', en: 'that', pl: 'że' },
    { es: 'no', en: 'not', pl: 'nie' },
    { es: 'todos', en: 'everyone', pl: 'wszyscy' },
    { es: 'están', en: 'are', pl: 'są' },
    { es: 'de', en: 'of', pl: 'z' },
    { es: 'acuerdo', en: 'agreement', pl: 'zgoda' },
  ],
};

function bankFrom(order: number[], sentence: BuilderSentence) {
  return order.map((id) => ({ id, es: sentence.target[id] }));
}
export const bank = bankFrom([2, 4, 0, 5, 1, 3], builder);
export const bankA2 = bankFrom([3, 0, 5, 1, 4, 2], builderA2);
export const bankB1 = bankFrom([3, 5, 0, 4, 1, 2], builderB1);
export const bankB2 = bankFrom([4, 0, 6, 2, 1, 7, 5, 3], builderB2);

export const pron: PronItem[] = [
  { es: 'Buenos días', en: 'Good morning', pl: 'Dzień dobry', syl: ['Bue', 'nos', 'dí', 'as'], scores: [94, 88, 96, 91], tipEn: 'Keep the "d" in "días" soft — almost like the "th" in "this".', tipPl: 'Wymawiaj „d" w „días" miękko — prawie jak „th" w „this".' },
  { es: 'gracias', en: 'thank you', pl: 'dziękuję', syl: ['gra', 'cias'], scores: [90, 83], tipEn: '"ci" is a soft "s" in Latin America ("th" in Spain).', tipPl: '„ci" to miękkie „s" (Ameryka) lub „th" (Hiszpania).' },
  { es: 'por favor', en: 'please', pl: 'proszę', syl: ['por', 'fa', 'vor'], scores: [92, 89, 86], tipEn: 'Tap the "r" once — a light flap, not a full roll.', tipPl: '„r" trąć raz — lekko, bez zwijania.' },
];
export const pronA2: PronItem[] = [
  { es: 'la izquierda', en: 'the left', pl: 'w lewo', syl: ['la', 'iz', 'quier', 'da'], scores: [96, 84, 90, 93], tipEn: '"qu" is a hard "k" — say "kier", never "kwier".', tipPl: '„qu" to twarde „k" — mów „kier", nigdy „kwier".' },
  { es: 'derecha', en: 'right', pl: 'w prawo', syl: ['de', 're', 'cha'], scores: [91, 88, 85], tipEn: '"ch" sounds like the "ch" in "church".', tipPl: '„ch" brzmi jak „ch" w „church".' },
  { es: 'rebajas', en: 'sales', pl: 'wyprzedaże', syl: ['re', 'ba', 'jas'], scores: [89, 90, 82], tipEn: 'The "j" is a throaty "h", like clearing your throat.', tipPl: '„j" to gardłowe „h", jak chrząknięcie.' },
];
export const pronB1: PronItem[] = [
  { es: 'sin embargo', en: 'however', pl: 'jednak', syl: ['sin', 'em', 'bar', 'go'], scores: [88, 85, 79, 90], tipEn: 'Link "sin" and "embargo" smoothly — Spanish doesn\'t pause between words like English does.', tipPl: 'Połącz „sin" i „embargo" płynnie — hiszpański nie robi przerw między słowami jak polski.' },
  { es: 'me arrepiento', en: 'I regret it', pl: 'żałuję tego', syl: ['me', 'a', 'rre', 'pien', 'to'], scores: [82, 91, 76, 85, 88], tipEn: 'The double "rr" is a strong rolled trill — vibrate your tongue tip.', tipPl: 'Podwójne „rr" to mocno zwibrowane „r" — porusz czubkiem języka.' },
  { es: 'a largo plazo', en: 'in the long run', pl: 'na dłuższą metę', syl: ['a', 'lar', 'go', 'pla', 'zo'], scores: [90, 84, 92, 79, 87], tipEn: '"pla" is one crisp syllable — don\'t insert a vowel between "p" and "l".', tipPl: '„pla" to jedna zwarta sylaba — nie wstawiaj samogłoski między „p" i „l".' },
  { es: 'me acostumbré', en: 'I got used to it', pl: 'przyzwyczaiłem się', syl: ['me', 'a', 'cos', 'tum', 'bré'], scores: [86, 83, 80, 88, 77], tipEn: 'Stress falls on the final "bré" — keep it sharp and short.', tipPl: 'Akcent pada na ostatnie „bré" — wymów je krótko i wyraźnie.' },
  { es: 'cabe destacar', en: "it's worth noting", pl: 'warto zaznaczyć', syl: ['ca', 'be', 'des', 'ta', 'car'], scores: [91, 89, 84, 90, 86], tipEn: 'Keep every vowel pure and short — Spanish vowels never glide like English ones.', tipPl: 'Każda samogłoska krótka i czysta — hiszpańskie samogłoski się nie ślizgają jak angielskie.' },
];
export const pronB2: PronItem[] = [
  { es: 'sin lugar a dudas', en: 'without a doubt', pl: 'bez wątpienia', syl: ['sin', 'lu', 'gar', 'a', 'du', 'das'], scores: [87, 90, 83, 95, 81, 88], tipEn: 'Six syllables, one breath — practice it slowly first, then speed up.', tipPl: 'Sześć sylab, jeden oddech — najpierw powoli, potem szybciej.' },
  { es: 'a raíz de eso', en: 'as a result of that', pl: 'w wyniku tego', syl: ['a', 'ra', 'íz', 'de', 'e', 'so'], scores: [92, 80, 86, 90, 84, 89], tipEn: '"raíz" has a written accent — stress lands hard on the "í".', tipPl: '„raíz" ma akcent graficzny — mocny nacisk na „í".' },
  { es: 'cabría matizar', en: 'it would be worth qualifying', pl: 'warto by doprecyzować', syl: ['ca', 'brí', 'a', 'ma', 'ti', 'zar'], scores: [79, 85, 91, 88, 83, 86], tipEn: '"cabría" is conditional — soften the "b" between vowels almost to a "v".', tipPl: '„cabría" to tryb warunkowy — „b" między samogłoskami zmiękcz niemal do „v".' },
  { es: 'no obstante ello', en: 'nevertheless', pl: 'niemniej jednak', syl: ['no', 'obs', 'tan', 'te', 'e', 'llo'], scores: [90, 82, 87, 92, 79, 85], tipEn: '"ll" sounds like the "y" in "yes" in most dialects.', tipPl: '„ll" brzmi jak „j" w „jajko" w większości dialektów.' },
  { es: 'a todas luces', en: 'clearly', pl: 'ewidentnie', syl: ['a', 'to', 'das', 'lu', 'ces'], scores: [93, 88, 85, 90, 81], tipEn: '"ces" ends soft — a light "s", never a hard "z".', tipPl: '„ces" kończy się miękko — lekkie „s", nigdy twarde „z".' },
];

export const dictA1: Phrase[] = [
  { es: 'Hola, ¿cómo estás?', en: 'Hello, how are you?', pl: 'Cześć, jak się masz?' },
  { es: 'Me llamo Ana', en: 'My name is Ana', pl: 'Nazywam się Ana' },
  { es: 'Tengo dos hermanos', en: 'I have two brothers', pl: 'Mam dwóch braci' },
  { es: 'La casa es muy grande', en: 'The house is very big', pl: 'Dom jest bardzo duży' },
];
export const dictA2: Phrase[] = [
  { es: 'Ayer compré pan en el mercado', en: 'Yesterday I bought bread at the market', pl: 'Wczoraj kupiłem chleb na targu' },
  { es: 'Gira a la izquierda en la esquina', en: 'Turn left at the corner', pl: 'Skręć w lewo na rogu' },
  { es: 'Me despierto a las siete', en: 'I wake up at seven', pl: 'Budzę się o siódmej' },
  { es: '¿Puedo pagar con tarjeta?', en: 'Can I pay by card?', pl: 'Czy mogę zapłacić kartą?' },
];
export const dictB1: Phrase[] = [
  { es: 'Aunque llueva, saldré de todas formas', en: "Even if it rains, I'll go out anyway", pl: 'Nawet jeśli będzie padać, i tak wyjdę' },
  { es: 'Me arrepiento de no haber estudiado más', en: 'I regret not having studied more', pl: 'Żałuję, że nie uczyłem się więcej' },
  { es: 'A largo plazo, esto será beneficioso', en: 'In the long run, this will be beneficial', pl: 'Na dłuższą metę to będzie korzystne' },
  { es: 'Cabe destacar que la situación ha cambiado', en: "It's worth noting that the situation has changed", pl: 'Warto zaznaczyć, że sytuacja się zmieniła' },
];
export const dictB2: Phrase[] = [
  { es: 'Sin lugar a dudas, esto marcará un antes y un después', en: 'Without a doubt, this will be a turning point', pl: 'Bez wątpienia to będzie punkt zwrotny' },
  { es: 'Cabría matizar que no todos están de acuerdo', en: 'It would be worth noting that not everyone agrees', pl: 'Warto by doprecyzować, że nie wszyscy się zgadzają' },
  { es: 'No obstante ello, seguimos adelante con el plan', en: "Nevertheless, we're moving forward with the plan", pl: 'Niemniej jednak realizujemy plan dalej' },
];

export const levels: LevelDef[] = [
  { code: 'A1', en: 'Beginner', pl: 'Początkujący', dEn: 'Greetings, numbers, everyday words and the simple present tense.', dPl: 'Powitania, liczby, codzienne słówka i czas teraźniejszy.', status: 'active', progress: 62 },
  { code: 'A2', en: 'Elementary', pl: 'Podstawowy', dEn: 'Past tenses, shopping, directions and describing routines.', dPl: 'Czasy przeszłe, zakupy, wskazówki i opis rutyny.', status: 'available', progress: 8 },
  { code: 'B1', en: 'Intermediate', pl: 'Średnio zaawansowany', dEn: 'Opinions, future plans and handling most travel situations.', dPl: 'Opinie, plany na przyszłość i typowe sytuacje w podróży.', status: 'available', progress: 0 },
  { code: 'B2', en: 'Upper intermediate', pl: 'Ponad średni', dEn: 'Abstract topics, nuanced arguments and fluent conversation.', dPl: 'Tematy abstrakcyjne, niuanse i płynna rozmowa.', status: 'available', progress: 0 },
  { code: 'C1', en: 'Advanced', pl: 'Zaawansowany', dEn: 'Complex texts, idioms and precise, spontaneous expression.', dPl: 'Złożone teksty, idiomy i precyzyjna, swobodna wypowiedź.', status: 'locked', progress: 0 },
  { code: 'C2', en: 'Mastery', pl: 'Biegłość', dEn: 'Near-native command across any subject or register.', dPl: 'Biegłość bliska rodzimej w każdym temacie i rejestrze.', status: 'locked', progress: 0 },
];

export const srsSeed: SrsItem[] = [
  { es: 'gracias', en: 'thank you', pl: 'dziękuję', strength: 82, dueEn: 'in 3 days', duePl: 'za 3 dni', today: false },
  { es: 'comer', en: 'to eat', pl: 'jeść', strength: 45, dueEn: 'Today', duePl: 'Dzisiaj', today: true },
  { es: 'casa', en: 'house', pl: 'dom', strength: 68, dueEn: 'Tomorrow', duePl: 'Jutro', today: false },
  { es: 'amigo', en: 'friend', pl: 'przyjaciel', strength: 31, dueEn: 'Today', duePl: 'Dzisiaj', today: true },
  { es: 'hoy', en: 'today', pl: 'dzisiaj', strength: 91, dueEn: 'in 6 days', duePl: 'za 6 dni', today: false },
  { es: 'agua', en: 'water', pl: 'woda', strength: 54, dueEn: 'Today', duePl: 'Dzisiaj', today: true },
];
export const srsPhrasesSeed: SrsItem[] = [
  { es: '¿Dónde está el baño?', en: 'Where is the bathroom?', pl: 'Gdzie jest toaleta?', strength: 76, dueEn: 'in 2 days', duePl: 'za 2 dni', today: false },
  { es: 'La cuenta, por favor', en: 'The check, please', pl: 'Poproszę rachunek', strength: 38, dueEn: 'Today', duePl: 'Dzisiaj', today: true },
  { es: '¿Cuánto cuesta?', en: 'How much is it?', pl: 'Ile to kosztuje?', strength: 63, dueEn: 'Tomorrow', duePl: 'Jutro', today: false },
  { es: 'Necesito ayuda urgente', en: 'I need urgent help', pl: 'Potrzebuję pilnej pomocy', strength: 29, dueEn: 'Today', duePl: 'Dzisiaj', today: true },
  { es: 'Mucho gusto', en: 'Nice to meet you', pl: 'Miło mi', strength: 88, dueEn: 'in 5 days', duePl: 'za 5 dni', today: false },
];
export const srsPronSeed: SrsItem[] = [
  { es: 'Buenos días', en: 'Good morning', pl: 'Dzień dobry', strength: 80, dueEn: 'in 3 days', duePl: 'za 3 dni', today: false },
  { es: 'gracias', en: 'thank you', pl: 'dziękuję', strength: 42, dueEn: 'Today', duePl: 'Dzisiaj', today: true },
  { es: 'la izquierda', en: 'the left', pl: 'w lewo', strength: 57, dueEn: 'Tomorrow', duePl: 'Jutro', today: false },
  { es: 'sin embargo', en: 'however', pl: 'jednak', strength: 33, dueEn: 'Today', duePl: 'Dzisiaj', today: true },
  { es: 'a todas luces', en: 'clearly', pl: 'ewidentnie', strength: 71, dueEn: 'in 4 days', duePl: 'za 4 dni', today: false },
];
export const srsDictSeed: SrsItem[] = [
  { es: 'Hola, ¿cómo estás?', en: 'Hello, how are you?', pl: 'Cześć, jak się masz?', strength: 69, dueEn: 'in 2 days', duePl: 'za 2 dni', today: false },
  { es: 'Me llamo Ana', en: 'My name is Ana', pl: 'Nazywam się Ana', strength: 35, dueEn: 'Today', duePl: 'Dzisiaj', today: true },
  { es: 'Tengo dos hermanos', en: 'I have two brothers', pl: 'Mam dwóch braci', strength: 48, dueEn: 'Tomorrow', duePl: 'Jutro', today: false },
  { es: 'La casa es muy grande', en: 'The house is very big', pl: 'Dom jest bardzo duży', strength: 27, dueEn: 'Today', duePl: 'Dzisiaj', today: true },
];
export const srsBuilderSeed: SrsItem[] = [
  { es: 'Yo quiero un café con leche', en: 'I want a coffee with milk', pl: 'Chcę kawę z mlekiem', strength: 73, dueEn: 'in 3 days', duePl: 'za 3 dni', today: false },
  { es: 'Ayer compré pan en el mercado', en: 'Yesterday I bought bread at the market', pl: 'Wczoraj kupiłem chleb na targu', strength: 31, dueEn: 'Today', duePl: 'Dzisiaj', today: true },
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
export function builderFor(lv: Level): BuilderSentence {
  return lv === 'A1' ? builder : lv === 'A2' ? builderA2 : lv === 'B1' ? builderB1 : builderB2;
}
export function bankFor(lv: Level) {
  return lv === 'A1' ? bank : lv === 'A2' ? bankA2 : lv === 'B1' ? bankB1 : bankB2;
}
export function dictFor(lv: Level): Phrase[] {
  return lv === 'A1' ? dictA1 : lv === 'A2' ? dictA2 : lv === 'B1' ? dictB1 : dictB2;
}
export function phrasebookFor(lv: Level, extra?: PhraseCategory[]): PhraseCategory[] {
  if (extra && extra.length) return extra;
  return lv === 'A2' ? phrasebookA2 : phrasebook;
}

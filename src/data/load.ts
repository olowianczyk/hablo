import type { Level, Word, PhraseCategory } from './content';

// ponytail: one loader for both callers (App and Stats) so the German merge
// lives in a single place instead of being copy-pasted next to each import().

/** German joined the corpus late, so it ships as a parallel array merged by index. */
export async function loadWords(level: Level): Promise<Word[]> {
  const lv = level.toLowerCase();
  const [m, d] = await Promise.all([
    import(`./words.${lv}.js`) as Promise<any>,
    import(`./words.de.${lv}.js`) as Promise<any>,
  ]);
  const rows: any[] = m[`${level}WORDS`] || [];
  const de: string[] = d[`${level}WORDS_DE`] || [];
  return rows.map((w, i) => ({ es: w[0], en: w[1], pl: w[2], de: de[i], exEs: w[3], exEn: w[4], exPl: w[5] }));
}

export async function loadPhrases(level: Level): Promise<PhraseCategory[]> {
  const lv = level.toLowerCase();
  const [m, d] = await Promise.all([
    import(`./phrases.${lv}.js`) as Promise<any>,
    import(`./phrases.de.${lv}.js`) as Promise<any>,
  ]);
  const cats: any[] = m[`${level}PHRASES`] || [];
  const de: any[] = d[`${level}PHRASES_DE`] || [];
  return cats.map((c, ci) => ({
    titleEn: c.titleEn,
    titlePl: c.titlePl,
    titleDe: de[ci]?.titleDe,
    phrases: (c.phrases || []).map((p: any, i: number) => ({ es: p[0], en: p[1], pl: p[2], de: de[ci]?.phrases[i] })),
  }));
}

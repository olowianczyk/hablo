import { useHablo, targetOf, baseOf } from '../store';
import { strings, type UiLang, type Level } from '../data/content';

export function useUi() {
  const dir = useHablo((s) => s.dir);
  const target = targetOf(dir);
  const base = baseOf(dir);
  const uiLang: UiLang = base === 'pl' ? 'pl' : base === 'es' ? 'es' : base === 'de' ? 'de' : 'en';
  const t = strings[uiLang];
  return { dir, target, base, lang: uiLang, t };
}

export const LEVELS: Level[] = ['A1', 'A2', 'B1', 'B2'];

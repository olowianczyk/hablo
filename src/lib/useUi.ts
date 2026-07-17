import { useHablo, targetOf } from '../store';
import { strings, type UiLang, type Level } from '../data/content';

export function useUi() {
  const dir = useHablo((s) => s.dir);
  const target = targetOf(dir);
  const base = dir.split('>')[1] as 'es' | 'en' | 'pl';
  const uiLang: UiLang = base === 'pl' ? 'pl' : base === 'es' ? 'es' : 'en';
  const t = strings[uiLang];
  return { dir, target, base, lang: uiLang, t };
}

export const LEVELS: Level[] = ['A1', 'A2', 'B1', 'B2'];

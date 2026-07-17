import type { Word, Phrase, SrsItem, UiLang } from '../data/content';

export type Lang = 'es' | 'en' | 'pl';

export function fld(o: Word | Phrase | { es: string; en: string; pl: string } | undefined, code: Lang): string {
  if (!o) return '';
  return code === 'es' ? o.es : code === 'en' ? o.en : o.pl;
}

export function exFld(o: Word | undefined, code: Lang): string {
  if (!o) return '';
  return code === 'es' ? o.exEs || '' : code === 'en' ? o.exEn || '' : o.exPl || '';
}

export function dueLabel(item: SrsItem, lang: UiLang): string {
  return lang === 'pl' ? item.duePl : item.dueEn;
}

export function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[¿?¡!.,;:]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function strengthColor(strength: number): string {
  return strength >= 75 ? 'var(--good)' : strength >= 50 ? 'var(--warn)' : 'var(--accent-strong)';
}

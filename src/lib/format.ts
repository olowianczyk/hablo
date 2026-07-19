import type { Word, Phrase, SrsItem, UiLang } from '../data/content';
import { daysUntil } from './date';

export type Lang = 'es' | 'en' | 'pl';

export function fld(o: Word | Phrase | { es: string; en: string; pl: string } | undefined, code: Lang): string {
  if (!o) return '';
  return code === 'es' ? o.es : code === 'en' ? o.en : o.pl;
}

export function exFld(o: Word | undefined, code: Lang): string {
  if (!o) return '';
  return code === 'es' ? o.exEs || '' : code === 'en' ? o.exEn || '' : o.exPl || '';
}

const TODAY_LABEL = { es: 'Hoy', en: 'Today', pl: 'Dzisiaj' };
const TOMORROW_LABEL = { es: 'Mañana', en: 'Tomorrow', pl: 'Jutro' };

export function dueLabel(item: SrsItem, lang: UiLang): string {
  const n = daysUntil(item.dueAt);
  if (n <= 0) return TODAY_LABEL[lang];
  if (n === 1) return TOMORROW_LABEL[lang];
  return { es: `en ${n} días`, en: `in ${n} days`, pl: `za ${n} dni` }[lang];
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

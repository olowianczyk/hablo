import type { Word, Phrase, SrsItem, UiLang } from '../data/content';
import { daysUntil } from './date';

export type Lang = 'es' | 'en' | 'pl' | 'de';

export function fld(o: Word | Phrase | { es?: string; en: string; pl: string; de?: string } | undefined, code: Lang): string {
  if (!o) return '';
  // ponytail: not every item carries every language, so fall back to English rather than render blank
  if (code === 'de') return o.de || o.en;
  return code === 'es' ? o.es || o.en : code === 'en' ? o.en : o.pl;
}

export function exFld(o: Word | undefined, code: Lang): string {
  if (!o) return '';
  // ponytail: no German example sentences authored yet — show nothing rather than an English sentence labelled as German
  if (code === 'de') return o.exDe || '';
  return code === 'es' ? o.exEs || '' : code === 'en' ? o.exEn || '' : o.exPl || '';
}

const TODAY_LABEL = { es: 'Hoy', en: 'Today', pl: 'Dzisiaj', de: 'Heute' };
const TOMORROW_LABEL = { es: 'Mañana', en: 'Tomorrow', pl: 'Jutro', de: 'Morgen' };

export function dueLabel(item: SrsItem, lang: UiLang): string {
  const n = daysUntil(item.dueAt);
  if (n <= 0) return TODAY_LABEL[lang];
  if (n === 1) return TOMORROW_LABEL[lang];
  return { es: `en ${n} días`, en: `in ${n} days`, pl: `za ${n} dni`, de: `in ${n} Tagen` }[lang];
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

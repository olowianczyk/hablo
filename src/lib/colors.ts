export function mix(a: string, b: string, t: number): string {
  const p = (h: string) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
  const pa = p(a);
  const pb = p(b);
  return '#' + pa.map((v, i) => Math.round(v + (pb[i] - v) * t).toString(16).padStart(2, '0')).join('');
}

const light = { bg: '#F3F1EC', bgb: 'rgba(243,241,236,.82)', surface: '#FFFFFF', panel: '#EFEBE3', psoft: '#F7F5F1', border: '#E9E5DE', border2: '#E0DCD3', ink: '#1C1B19', ink2: '#57544E', muted: '#7A776F', faint: '#9B988F', invert: '#1C1B19', good: '#2E9E6B', goodS: '#1E7A50', goodSoft: '#EAF3EE', warn: '#C98A2E', warnSoft: '#FBF3DE' };
const dark = { bg: '#1A1815', bgb: 'rgba(26,24,21,.82)', surface: '#242019', panel: '#2C2823', psoft: '#211E19', border: '#38332C', border2: '#443E36', ink: '#F2EFE9', ink2: '#C8C3B9', muted: '#A29C93', faint: '#847F76', invert: '#000000', good: '#3FB77F', goodS: '#54C692', goodSoft: '#182A20', warn: '#D9A24A', warnSoft: '#2C2413' };

export function themeVars(isDark: boolean, accent: string): Record<string, string> {
  const TH = isDark ? dark : light;
  const strong = mix(accent, '#000000', 0.18);
  const soft = isDark ? mix(accent, '#1A1815', 0.82) : mix(accent, '#FFFFFF', 0.88);
  const soft2 = isDark ? mix(accent, '#1A1815', 0.72) : mix(accent, '#FFFFFF', 0.8);
  return {
    '--bg': TH.bg, '--bg-blur': TH.bgb, '--surface': TH.surface, '--panel': TH.panel, '--panel-soft': TH.psoft,
    '--border': TH.border, '--border-2': TH.border2, '--ink': TH.ink, '--ink-2': TH.ink2, '--muted': TH.muted,
    '--faint': TH.faint, '--invert-bg': TH.invert, '--accent': accent, '--accent-strong': strong,
    '--accent-soft': soft, '--accent-soft2': soft2, '--good': TH.good, '--good-strong': TH.goodS,
    '--good-soft': TH.goodSoft, '--warn': TH.warn, '--warn-soft': TH.warnSoft,
  };
}

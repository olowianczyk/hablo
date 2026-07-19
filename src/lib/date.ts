export function dateKey(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
export function todayISO(): string {
  return dateKey(new Date());
}
export function addDays(base: string, n: number): string {
  const [y, m, d] = base.split('-').map(Number);
  return dateKey(new Date(y, m - 1, d + n));
}
export function isDueToday(dueAt: string): boolean {
  return dueAt <= todayISO();
}
export function daysUntil(dueAt: string): number {
  const [y1, m1, d1] = todayISO().split('-').map(Number);
  const [y2, m2, d2] = dueAt.split('-').map(Number);
  return Math.round((new Date(y2, m2 - 1, d2).getTime() - new Date(y1, m1 - 1, d1).getTime()) / 86400000);
}

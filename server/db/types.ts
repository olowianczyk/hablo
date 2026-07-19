// ponytail: a query port, not a driver. No pg/postgres.js dependency added
// here — that choice belongs to whoever picks the actual host (Supabase,
// Neon, RDS...). Implement this interface with whichever client you land
// on and every route in ../routes/ works unchanged.
export interface Db {
  query<T = unknown>(sql: string, params?: unknown[]): Promise<T[]>;
}

export class NotFoundError extends Error {}
export class UnauthorizedError extends Error {}

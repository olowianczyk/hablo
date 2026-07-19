# Backend scaffold (not deployed)

Hablo currently runs entirely client-side — `localStorage` via Zustand, no accounts, no server. That's fine for a solo demo but means progress doesn't sync across devices and can't survive clearing browser data.

This directory is **code only** — a schema and a set of route handlers — for what a real backend would look like. Nothing here is wired up, deployed, or provisioned; that needs an explicit decision on hosting (Supabase/Neon/RDS/etc.) and auth provider before it's worth doing.

## What's here

- `db/schema.sql` — Postgres schema. Only per-user mutable state (accounts, SRS scheduling progress, gamification, daily challenges) — vocabulary/phrases/sentences stay static and bundled with the client (`src/data/`), since they're identical for every user.
- `db/types.ts` — a `Db` query port, not a driver. Implement it with whichever Postgres client the eventual host needs (`pg`, `postgres.js`, a Supabase client...); no driver dependency is committed here.
- `routes/srs.ts`, `routes/gamification.ts`, `routes/challenges.ts` — Fetch-standard `(Request) => Response` handlers. That shape runs on Vercel Edge, Cloudflare Workers, Deno, or a plain Node `http` server with a thin adapter — no framework chosen or required.

## Reused, not duplicated

`routes/srs.ts` imports `applySRS`/`xpForGrade` from [`../src/shared/srs.ts`](../src/shared/srs.ts), and `routes/gamification.ts` imports `recordActivity` from [`../src/shared/gamification.ts`](../src/shared/gamification.ts) — the same functions `src/store.ts` uses for the offline/local queue. The interval math and streak rules are defined exactly once; whether a rating happens in the browser or synced to a server, it goes through the same code.

## What's deliberately not here

- **Auth.** Every handler takes a pre-resolved `userId` as if middleware already authenticated the request. Picking an auth provider (and never hand-rolling password storage) is a product decision, not something to scaffold speculatively.
- **A chosen host/driver.** See `db/types.ts` — the `Db` interface exists so this code doesn't lock in a choice nobody's made yet.
- **Wiring the frontend to call any of this.** `src/store.ts` still only talks to `localStorage`. Pointing it at these routes is a separate, larger change (loading states, offline queueing, conflict resolution) that shouldn't happen until there's an actual backend to call.

## Leech handling

`routes/srs.ts` tracks `leech_count` (consecutive "again" ratings) and suspends an item after 8 in a row (`suspended = true`, dropped out of `listDue`) — a card the user keeps failing shouldn't keep grinding them down every session. Not implemented on the client's local-only queue (`src/store.ts`) yet; add it there the same way if the app stays client-only for a while.

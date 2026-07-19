-- Hablo backend schema (Postgres).
-- ponytail: content (words/phrases/builder sentences/pronunciation drills) stays
-- static and bundled with the client (src/data/) — it's identical for every
-- user, no reason to put it in a database. Only per-user mutable state lives
-- here: accounts, SRS scheduling progress, gamification, daily challenges.

create extension if not exists pgcrypto; -- gen_random_uuid()

create table users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  created_at timestamptz not null default now()
);

create table user_settings (
  user_id uuid primary key references users(id) on delete cascade,
  dir text not null default 'es>en',
  dark boolean not null default false,
  accent text not null default '#DE5B3B',
  speak_rate real not null default 1,
  voice_sel jsonb not null default '{}'::jsonb
);

create type srs_kind as enum ('vocab', 'phrasebook', 'pronounce', 'listen', 'builder');

-- One table for all five review types (Vocabulary/Phrasebook/Pronunciation/
-- Dictation/Sentence Builder) instead of five near-identical tables — the
-- kind column is the only thing that differs, everything else is the same
-- shape (see src/shared/srs.ts's SrsProgress).
create table srs_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  kind srs_kind not null,
  item_key text not null,        -- stable id into static content, e.g. the 'es' field
  level text not null,           -- 'A1'..'B2' — content is level-scoped
  strength smallint not null default 50 check (strength between 0 and 100),
  interval_days integer not null default 1,
  due_at date not null default current_date,
  leech_count integer not null default 0,   -- consecutive "again" ratings; see routes/srs.ts
  suspended boolean not null default false, -- leech parked out of the queue
  updated_at timestamptz not null default now(),
  unique (user_id, kind, item_key)
);
-- Powers "give me everything due for user X in kind Y" — the hot path.
create index srs_items_due_idx on srs_items (user_id, kind, due_at) where not suspended;

create table gamification (
  user_id uuid primary key references users(id) on delete cascade,
  xp integer not null default 0,
  xp_boost boolean not null default false,
  streak integer not null default 0,
  last_active_date date,
  daily_done integer not null default 0,
  daily_date date,
  streak_freezes integer not null default 2,
  streak_freeze_active boolean not null default false
);

-- Daily challenges reset per day; a row only exists once a challenge has
-- been assigned/touched for that date, so "not started today" needs no row.
create table challenges (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  challenge_key text not null,   -- matches content.ts challengesSeed ids (c1..c6)
  xp integer not null,
  done boolean not null default false,
  assigned_date date not null default current_date,
  unique (user_id, challenge_key, assigned_date)
);

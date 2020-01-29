CREATE TABLE IF NOT EXISTS "user" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT,
  "email" TEXT
);

CREATE TABLE IF NOT EXISTS "dream_log" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT,
  "count" INTEGER,
  "description" TEXT,
  "user_id" INTEGER,
  "created_at" DATE,
  "category" TEXT,
  "private" BOOLEAN
);

CREATE TABLE IF NOT EXISTS "dream_categories" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT,
  "description" TEXT,
  "count" INTEGER
);

CREATE TABLE IF NOT EXISTS "followers" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INTEGER,
  "follower_id" INTEGER
);


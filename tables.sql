CREATE TABLE IF NOT EXISTS users (
  "id" SERIAL PRIMARY KEY,
  "username" TEXT,
  "name" TEXT,
  "password" TEXT
);

CREATE TABLE IF NOT EXISTS dream_log (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT,
  "count" INTEGER,
  "description" TEXT,
  "user_id" INTEGER REFERENCES users(id),
  "created_at" DATE,
  "category" TEXT,
  "private" BOOLEAN
);

CREATE TABLE IF NOT EXISTS dream_categories (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT,
  "description" TEXT,
  "count" INTEGER
);

CREATE TABLE IF NOT EXISTS followers (
  "id" SERIAL PRIMARY KEY,
  "user_id" INTEGER REFERENCES users(id),
  "follower_id" INTEGER REFERENCES users(id)
);


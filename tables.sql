DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS dream_log;
DROP TABLE IF EXISTS dream_categories;
DROP TABLE IF EXISTS followers;

CREATE TABLE IF NOT EXISTS users (
  "id" SERIAL PRIMARY KEY,
  "username" TEXT,
  "password" TEXT
);

CREATE TABLE IF NOT EXISTS dream_log (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT,
  "description" TEXT,
  "user_id" INTEGER REFERENCES users(id),
  "created_at" DATE,
  "category" TEXT,
  "private" BOOLEAN
);

CREATE TABLE IF NOT EXISTS dream_categories (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT,
  "image" TEXT
);

CREATE TABLE IF NOT EXISTS followers (
  "id" SERIAL PRIMARY KEY,
  "user_id" INTEGER REFERENCES users(id),
  "follower_id" INTEGER REFERENCES users(id)
);


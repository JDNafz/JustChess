
---
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "bio" VARCHAR(600),
    "saved_games" INTEGER ARRAY
);

CREATE TABLE "games" (
    "id" SERIAL PRIMARY KEY,
    "moves" INTEGER,
    "user_id" INT REFERENCES "user"(id)
);

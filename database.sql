
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
    "moves" TEXT ARRAY,
    "user_id" INT REFERENCES "user"(id)
);

INSERT INTO games ("moves","user_id") 
VALUES (ARRAY['e2e4','e7e5'],1)
-- database name is chess-app 
---
-- CREATE TABLE "user" (
--     "id" SERIAL PRIMARY KEY,
--     "username" VARCHAR (80) UNIQUE NOT NULL,
--     "password" VARCHAR (1000) NOT NULL,
--     "bio" VARCHAR(600),
--     "saved_games" integer[]
-- );

-- CREATE TABLE "games" (
--     "id" SERIAL PRIMARY KEY,
--     "moves" TEXT ARRAY,
--     "user_id" INT REFERENCES "user"(id)
-- );

-- INSERT INTO games ("moves","user_id") 
-- VALUES (ARRAY['e2e4','e7e5'],1)


------------------------------------
-- Refactor


CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    username VARCHAR(80) UNIQUE NOT NULL,
    password VARCHAR(1000) NOT NULL,
    bio VARCHAR(600),
    image VARCHAR(1000)
);
CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    moves TEXT[]
);

CREATE TABLE user_games (
    user_id INT REFERENCES "user"(id),
    game_id INT REFERENCES games(id),
    PRIMARY KEY (user_id, game_id)
);
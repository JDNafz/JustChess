-- database name is chess-app 

CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    username VARCHAR(80) UNIQUE NOT NULL,
    password VARCHAR(1000) NOT NULL,
    bio VARCHAR(600),
    image VARCHAR(1000)
);
CREATE TABLE game (
    id SERIAL PRIMARY KEY,
    moves TEXT[]
);

CREATE TABLE user_game (
    user_id INT REFERENCES "user"(id),
    game_id INT REFERENCES game(id),
    PRIMARY KEY (user_id, game_id)
);

CREATE TABLE saved_game (
    user_id INT REFERENCES "user"(id),
    game_id INT REFERENCES game(id),
    PRIMARY KEY (user_id, game_id)
);

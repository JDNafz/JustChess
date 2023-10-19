const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const encryptLib = require("../modules/encryption");
const pool = require("../modules/pool");
const userStrategy = require("../strategies/user.strategy");

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get("/", rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post("/register", (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);

  const queryText = `INSERT INTO "user" (username, password)
    VALUES ($1, $2) RETURNING id`;
  pool
    .query(queryText, [username, password])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log("User registration failed: ", err);
      res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post("/login", userStrategy.authenticate("local"), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post("/logout", (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

router.post("/save_game", (req, res) => {
  const user_id = req.body.user_id;
  const game_id = req.body.game_id;
  // console.log("I FOUND THE user and game IDs:", user_id, game_id);
  query = ` INSERT INTO saved_game (user_id,game_id)
            VALUES ($1,$2)`;
  pool
    .query(query, [user_id, game_id])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log("Error Saving game: ", err);
      res.sendStatus(500);
    });
});

router.get("/saved_game", (req, res) => {
  if (req.isAuthenticated()) {
    // console.log("/current_game GET route");
    // console.log("is authenticated?", req.isAuthenticated());
    // console.log("user id:", req.user.id);
    const id = req.user.id;
    // console.log("I FOUND THE user and game IDs:", user_id, game_id);
    query = ` SELECT game.id, "moves" FROM game
              JOIN saved_game
                ON game.id = saved_game.game_id
              JOIN "user"
                ON "user".id = saved_game.user_id
              WHERE "user".id = $1
              ORDER BY game.id DESC;`;
    pool
      .query(query, [id])
      .then((result) => {
        // console.log(" RES BACK FROM SERVER", result.rows);
        res.send(result.rows);
      })
      .catch((err) => {
        console.log("Error Saving game: ", err);
        res.sendStatus(500);
      });
  }
});

router.get("/recent_games", (req, res) => {
  if (req.isAuthenticated()) {
    // console.log("/current_game GET route");
    // console.log("is authenticated?", req.isAuthenticated());
    // console.log("user id:", req.user.id);
    const id = req.user.id;
    // console.log("I FOUND THE user and game IDs:", user_id, game_id);
    query = ` SELECT game.id, "moves" FROM game
              JOIN user_game
                ON game.id = user_game.game_id
              JOIN "user"
                ON "user".id = user_game.user_id
              WHERE "user".id = $1
              ORDER BY game.id DESC
              LIMIT 20;`;
    pool
      .query(query, [id])
      .then((result) => {
        // console.log(" RES BACK FROM SERVER", result.rows);
        res.send(result.rows);
      })
      .catch((err) => {
        console.log("Error getting recent games: ", err);
        res.sendStatus(500);
      });
  }
});


router.put("/delete_saved_game", (req, res) => {
  if (req.isAuthenticated()) {
    const id = req.user.id;
    const game_id = req.body.id;
    const query = ` UPDATE "user"
                    SET saved_games =array_remove (saved_games, $2)
                    WHERE "id" = $1;`;
    pool
      .query(query, [id, game_id])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log("Error deleting game (put) from saved_games: ", err);
        res.sendStatus(500);
      });
  }
});


router.get("/bio", (req, res) => {
  if (req.isAuthenticated()) {
    const id = req.user.id;
    query = ` SELECT bio FROM "user" WHERE "user".id = $1;`;
    pool
      .query(query, [id])
      .then((result) => {
        // console.log("from db:", result.rows[0].bio);

        res.send(result.rows[0].bio);
      })
      .catch((err) => {
        console.log("Error getting bio: ", err);
        res.sendStatus(500);
      });
  }
});

router.put("/bio/", (req, res) => {
  if (req.isAuthenticated()) {
    const bio = req.body.data
    // console.log("bio",bio)
    // console.log("req.body in user/put/bio is:", req.body);
    const id = req.user.id;
    query = ` UPDATE "user" SET bio  = $2 WHERE "user".id = $1;`;
    pool
      .query(query, [id,bio])
      .then((result) => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log("Error getting bio: ", err);
        res.sendStatus(500);
      });
  }
});





module.exports = router;

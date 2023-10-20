const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");
const { authenticate } = require("passport");
const makeAllMoves = require("../modules/makeAllMoves.js");
// const checkState = require("../modules/checkState.js");
// let newestBoard = startingBoard

router.get("/current_game", (req, res) => {
  if (req.isAuthenticated()) {
    // console.log("/current_game GET route");
    // console.log("is authenticated?", req.isAuthenticated());
    // console.log("user id:", req.user.id);
    const id = req.user.id;

    const query = ` SELECT game.id, "moves" FROM game 
                    JOIN user_game
                      ON game.id = user_game.game_id
                    JOIN "user"
                      ON "user".id = user_game.user_id
                    WHERE "user".id = $1
                    ORDER BY game.id DESC
                    LIMIT 1;`; //TODO: fix with JOIN
    pool
      .query(query, [id])
      .then((result) => {
        const gameLog = result.rows[0];
        const board = makeAllMoves(gameLog.moves);
        res.send({ gameLog, board });
      })
      .catch((error) => {
        console.log(`Error get /current_game`, error);
        res.sendStatus(500); // Good server always responds
      });
  }
});

//create a new game for a user
router.post("/new", async (req, res) => {
  if (req.isAuthenticated()) {
    const id = req.user.id;
    // console.log(`Create a new game for user ${id}`);
    const connection = await pool.connect();
    try {
      await connection.query("BEGIN");
      //create a new game with no moves
      const sqlText = ` INSERT INTO game (moves) VALUES ('{}');`;
      await connection.query(sqlText);
      //take the newly created game_id and the current user_id and add the combo to the join table
      const sqlText2 = `INSERT INTO user_game (user_id, game_id)
                        VALUES ($1, currval(pg_get_serial_sequence('game', 'id')));`
      await connection.query(sqlText2, [id]);

      await connection.query("COMMIT");
      res.sendStatus(200);
    } catch (error) {
      await connection.query("ROLLBACK");
      console.log(`Creating New game Error - Rolling back db changes`, error);
      res.sendStatus(500);
    } finally {
      connection.release();
    }
  }
});

//update the game with the newest move
router.put("/moves", (req, res) => {
  if (req.isAuthenticated()) {
    // const user_id = req.user.id;
    const game_id = req.body.game_id;
    const currentMove = req.body.currentMove;

    // console.log(`in update router, user id: ${user_id}, game_id: ${game_id}, currentMove: ${currentMove}`);

    const updateQuery = ` UPDATE game
                          SET "moves" = array_append( moves, $1)
                          WHERE game.id = $2;`;
    pool
      .query(updateQuery, [currentMove, game_id])
      .then((result) => {
        res.sendStatus(201);
      })
      .catch((error) => {
        console.log(`Error in put router`, error);
        res.sendStatus(500); // Good server always responds
      });
  }
});

//when promoting pawn, step1 is to delete the regular pawn movement notation.
router.put("/moves/promotion", (req, res) => {
  if (req.isAuthenticated()) {
    // const user_id = req.user.id;
    const gameId = req.body.id
    // console.log("data", info);
    const moveToDelete = req.body.moves[req.body.moves.length -1 ]
    // console.log("HERE", moveToDelete)


    const updateQuery = ` UPDATE game
                          SET "moves" = array_remove( moves, $1)
                          WHERE game.id = $2;`;
    pool
      .query(updateQuery, [moveToDelete, gameId])
      .then(() => {
        res.sendStatus(201);
      })
      .catch((error) => {
        console.log(`Error in put router`, error);
        res.sendStatus(500); // Good server always responds
      });
  }
});


module.exports = router;

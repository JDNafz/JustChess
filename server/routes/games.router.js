const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");
const { authenticate } = require("passport");
const makeAllMoves = require('../modules/makeAllMoves.js');
// const checkState = require("../modules/checkState.js");
// let newestBoard = startingBoard

router.get("/current_game", (req, res) => {
  if (req.isAuthenticated()) {
    // console.log("/current_game GET route");
    // console.log("is authenticated?", req.isAuthenticated());
    // console.log("user id:", req.user.id);
    const id = req.user.id;

    const query = ` SELECT "id", "moves" FROM games 
                    WHERE user_id = $1
                    ORDER BY "id" DESC
                    LIMIT 1;`;
    pool
      .query(query, [id])
      .then((result) => {
        const gameLog = result.rows[0]
        // console.log("SMOKE",gameLog)
        const board = makeAllMoves(gameLog.moves);
        // console.log("all calcs done currentBoard:", board);
        res.send({gameLog,board});
      })
      .catch((error) => {
        console.log(`Error games.router/current_game ${query}`, error);
        res.sendStatus(500); // Good server always responds
      });
  }
});

router.post("/new", (req, res) => {
  if (req.isAuthenticated()) {
    // console.log('In game/new router \n is authenticated?', req.isAuthenticated());
    // console.log('user', req.user);
    const id = req.user.id;

    const sqlText = ` INSERT INTO games ("user_id") 
                      VALUES ($1);`;
    // Let sql sanitize your inputs (NO Bobby Drop Tables here!)
    // the $1, $2, etc get substituted with the values from the array below
    pool
      .query(sqlText, [id])
      .then((result) => {
        res.sendStatus(201);
      })
      .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500); // Good server always responds
      });
  }
});

router.put("/moves", (req, res) => {
  if (req.isAuthenticated()) {
    const user_id = req.user.id;
    const game_id = req.body.game_id;
    const currentMove = req.body.currentMove;
    
    // console.log(`in update router, user id: ${user_id}, game_id: ${game_id}, currentMove: ${currentMove}`);
    
    const updateQuery = ` UPDATE games 
                          set "moves" = array_append( moves, $1)
                          WHERE user_id = $2
                          AND "id" = $3;`
    pool
      .query(updateQuery, [currentMove, user_id,game_id])
      .then((result) => {
        res.sendStatus(201);
      })
      .catch((error) => {
        console.log(`Error in put router`, error);
        res.sendStatus(500); // Good server always responds
      });
  }
});

router.delete("/newGame", (req, res) => {
  console.log("in delete router");
});

module.exports = router;

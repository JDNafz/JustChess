const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");
const { authenticate } = require("passport");

// const checkState = require("../modules/checkState.js");
// let newestBoard = startingBoard

router.get("/current_game", (req, res) => {
  if (req.isAuthenticated()) {
    console.log("/current_game GET route");
    console.log("is authenticated?", req.isAuthenticated());
    console.log("user", req.user);

    const query = ` SELECT "id", "moves" FROM games 
                  WHERE user_id = '1'
                  LIMIT 1;`;
    pool
      .query(query,)
      .then((result) => {
        console.log("GOT RESULTS", result.rows[0].moves);
        res.send(result.rows[0].moves);
      })
      .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500); // Good server always responds
      });
  }
});

router.post("/", (req, res) => {
  console.log("in post router");
});

router.put("/", (req, res) => {
  console.log("in update router");
});

router.delete("/newGame", (req, res) => {
  console.log("in delete router");
});

module.exports = router;

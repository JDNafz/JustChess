const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");

const checkState = require("../modules/checkState.js");
// let newestBoard = startingBoard

// GET Route
router.get("/", (req, res) => {
  // res.send(newestBoard); // No database use this

  const sqlText = `SELECT * FROM moves ORDER BY id;`;
  pool
    .query(sqlText)
    .then((result) => {
      // console.log(result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500); // Good server always responds
    });
});

// POST Route
router.post("/", (req, res) => {
  // console.log("in post '/board'");
  const turn = req.body.turn;
  const move = req.body.move;
  const sqlText = `INSERT INTO moves ("turn","move") VALUES($1, $2);`;
  // Let sql sanitize your inputs (NO Bobby Drop Tables here!)
  // the $1, $2, etc get substituted with the values from the array below
  pool
    .query(sqlText, [turn, move])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500); // Good server always responds
    });
});

// DELETE Route
router.delete("/newGame", (req, res) => {
  const sqlText = `Delete from moves;
                      INSERT INTO moves ("turn", "move")
                      VALUES(0, 'New game');`;

  pool
    .query(sqlText)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});
// DELETE Route
router.delete("/Evans", (req, res) => {
  // console.log(`getting Evan's Gambit`);
  const sqlText = `Delete from moves;
                      INSERT INTO moves("turn","move")
                      VALUES(0,null),(1,'e4'),(2,'e5'),(3,'ne2'),(4,'nc6'),(5,'bc4'),(6,'bc5'),(7,'b4'),(8,'bxb4'),(9,'c3'),(10,null );
                      ;`;
  // Let sql sanitize your inputs (NO Bobby Drop Tables here!)
  // the $1, $2, etc get substituted with the values from the array below
  pool
    .query(sqlText)
    .then((result) => {
      // console.log(`reset db`);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500); // Good server always responds
    });
});

module.exports = router;

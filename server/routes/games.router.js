const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");

// const checkState = require("../modules/checkState.js");
// let newestBoard = startingBoard

router.get("/", (req, res) => {
  console.log("in get router")


});

router.post("/", (req, res) => {
  console.log("in post router")
});


router.put("/", (req, res) => {
  console.log("in update router")
});

router.delete("/newGame", (req, res) => {
  console.log("in delete router")
});


module.exports = router;

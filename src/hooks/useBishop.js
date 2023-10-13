
const makeAllMoves = require("../../server/modules/makeAllMoves");
const board = makeAllMoves(["a2e5","e2d2","e1b1"]);

  function getBishopMoves(selectedPiece){
    // console.log("Searching for valid Knight Moves");
    const validMoves = board.map((square) => {
      return square.coordinate;
    });


    console.log("valid moves:", validMoves.length)
    return validMoves;
  };
//   return { getKnightMoves };
// }

const example = {
  id: 36,
  coordinate: "e5",
  x: 4,
  y: 4,
  piece: "wn",
  underAttackFromWhite: false,
  underAttackFromBlack: false,
  isBlack: false,
};

getBishopMoves(example);
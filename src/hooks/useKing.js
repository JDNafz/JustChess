const makeAllMoves = require("../../server/modules/makeAllMoves");
const board = makeAllMoves([
"e1e4"
]);

function getKingMoves(sP) {
  // console.log("Searching for valid Knight Moves");
  const kingColor = sP.piece[0];
  getAllAttacks(board, kingColor);

  console.log("valid moves:", validMoves.length);
  return validMoves;
}
//   return { getKnightMoves };
// }

const example = {
  id: 36,
  coordinate: "e5",
  x: 4,
  y: 4,
  piece: "wk",
  underAttackFromWhite: false,
  underAttackFromBlack: false,
  isBlack: false,
};

getKingMoves(example);

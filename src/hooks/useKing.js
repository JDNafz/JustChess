const makeAllMoves = require("../../server/modules/makeAllMoves");
const board = makeAllMoves([
"e1e4"
]);

function getKingMoves(sP) {
  // console.log("Searching for valid Knight Moves");
  const kingColor = sP.piece[0];
  // getAllAttacks(board, kingColor);

  const king8 = [
    [sP.x - 1, sP.y - 1],
    [sP.x - 1, sP.y    ],
    [sP.x - 1, sP.y + 1],
    [sP.x    , sP.y + 1],
    [sP.x + 1, sP.y + 1],
    [sP.x + 1, sP.y    ],
    [sP.x + 1, sP.y - 1],
    [sP.x    , sP.y - 1]
  ]
  const king8Squares = board.filter((sq)=> {
    for (let coordinates of king8){
      if (coordinates[0] === sq.x && coordinates[1] === sq.y){
        return sq
      }
    }
  })
    


  
  const validMoves = king8Squares
  console.log("valid moves:", validMoves.length);
  return validMoves;
}
//   return { getKnightMoves };
// }




const selectedPiece = {
  id: 36,
  coordinate: "e4",
  x: 4,
  y: 3,
  piece: "wk",
  underAttackFromWhite: false,
  underAttackFromBlack: false,
  isBlack: false,
};

const output = getKingMoves(selectedPiece);
console.log(output)

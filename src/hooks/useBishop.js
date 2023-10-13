const makeAllMoves = require("../../server/modules/makeAllMoves");
const board = makeAllMoves(["a2e5", "e2d2", "e1b1"]);

function getBishopMoves(sP) {
  // console.log("Searching for valid Knight Moves");

  //v1 gives everything (x-,y+) of sP
  const vector1 = [];
  let x = sP.x - 1;
  let y = sP.y + 1;
  while (x >= 0 && y <= 7) {
    board.map((sq) => {
      if (sq.x === x && sq.y === y) {
        vector1.push(sq);
      }
    });
    // console.log("sq.x", sq.x,x,y);
    x--;
    y++;
  }

  //v2 gives everything (x+,y+) of sP
  const vector2 = [];
  x = sP.x + 1;
  y = sP.y + 1;
  while (x <= 7 && y <= 7) {
    board.map((sq) => {
      if (sq.x === x && sq.y === y) {
        vector2.push(sq);
      }
    });
    x++;
    y++;
  }
  // console.log("HERE");
  //v3 gives everything (x+,y-) of sP
  const vector3 = [];
  x = sP.x + 1;
  y = sP.y - 1;
  while (x <= 7 && y >= 0) {
    board.map((sq) => {
      if (sq.x === x && sq.y === y) {
        vector3.push(sq);
      }
    });
    x++;
    y--;
  }

  //v4 gives everything (x-,y-) of sP
  const vector4 = [];
  x = sP.x - 1;
  y = sP.y - 1;
  while (x >= 0 && y >= 0) {
    board.map((sq) => {
      if (sq.x === x && sq.y === y) {
        vector4.push(sq);
      }
    });
    x--;
    y--;
  }

  const pieceColor = sP.piece[0];

  function checkVector(vector) {
    result = [];
    // console.log(vector.length)
    for (let i = 0; i < vector.length; i++) {
      //if sq is empty add to valid moves
      // console.log(vector[i]);
      if (vector[i].piece === null) {
        result.push(vector[i]);
      } else {
        //if piece is a different color add it to valid moves
        if (pieceColor !== vector[i].piece[0]) {
          result.push(vector[i]);
          // console.log("I hit a piece i'll add it")
        }
        break; //a piece has been found, stop looking, rook can't jump over other pieces.
      }
    }
    return result;
  }

  // console.log("v4:",vector4);
  const validMoves = [];
  validMoves.push(...checkVector(vector1));
  validMoves.push(...checkVector(vector2));
  validMoves.push(...checkVector(vector3));
  validMoves.push(...checkVector(vector4));

  //  console.log(validMoves);

  console.log("valid moves:", validMoves);
  return validMoves;
}
//   return { getKnightMoves };
// }

const example = {
  id: 36,
  coordinate: "e5",
  x: 4,
  y: 4,
  piece: "wb",
  underAttackFromWhite: false,
  underAttackFromBlack: false,
  isBlack: false,
};

getBishopMoves(example);

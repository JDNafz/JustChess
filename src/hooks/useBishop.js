import { useSelector } from "react-redux";
import checkVector from "./checkVector"

export function useBishop() {
  const board = useSelector((store) => store.board);


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

    // console.log("v4:",vector4);
    const validMoves = [];
    validMoves.push(...checkVector(vector1));
    validMoves.push(...checkVector(vector2));
    validMoves.push(...checkVector(vector3));
    validMoves.push(...checkVector(vector4));

    //  console.log(validMoves);

    // console.log("valid moves:", validMoves);
    return validMoves;
  }
  return { getBishopMoves };
}

// const example = {
//   id: 36,
//   coordinate: "e5",
//   x: 4,
//   y: 4,
//   piece: "wb",
//   underAttackFromWhite: false,
//   underAttackFromBlack: false,
//   isBlack: false,
// };

// getBishopMoves(example);

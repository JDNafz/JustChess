import { useSelector } from "react-redux";
// no default to name the export and force clarity in other areas of project


//used for writing the code in ES5 with node for testing
// const makeAllMoves = require("../../server/modules/makeAllMoves");

// const board = makeAllMoves(["a2e5","e2d2","e1b1"]);
// console.log(board)

export function useRook() {
  // const board = useSelector((store) => store.board);

  const getRookMoves = (sP) => {
    // console.log("ROOK MOVES");

    //v1 gives everything above(y+) of sP
    const vector1 = board.filter((sq) => {
      return sq.x === sP.x && sq.y > sP.y 
    });
    //v2 gives everything below(y-) of sP
    const vector2 = board.filter((sq) => {
      return sq.x === sP.x && sq.y < sP.y 
    });
    //v3 gives everything left(x-) of sP
    const vector3 = board.filter((sq) => {
      return sq.y === sP.y && sq.x < sP.x 
    });
    //v4 gives everything right(x+) of sP
    const vector4 = board.filter((sq) => {
      return sq.y === sP.y && sq.x > sP.x 
    });
    const validMoves = [];
    const pieceColor = sP.piece[0];

    //for loops check each vector for pieces in the way and if to include the squares in possible moves
    //check y+ 
    for (let i = 0; i < vector1.length; i++){
      //if sq is empty add to valid moves
      if ( vector1[i].piece === null ){
        validMoves.push(vector1[i])
      } else {
        //if piece is a different color add it to valid moves
        if (pieceColor !== vector1[i].piece[0]){
          validMoves.push(vector1[i])
        }
        break;//a piece has been found, stop looking, rook can't jump over other pieces.
      }
    }
    //check for y-
    for (let i = vector2.length-1; i >= 0; i--){
      //if sq is empty add to valid moves
      if ( vector2[i].piece === null ){
        validMoves.push(vector2[i])
      } else {
        //if piece is a different color add it to valid moves
        if (pieceColor !== vector2[i].piece[0]){
          validMoves.push(vector2[i])
          console.log("I hit a piece i'll add it")
        }
        break;//a piece has been found, stop looking, rook can't jump over other pieces.
      }
    }
    //check for x+
    for (let i = 0; i < vector4.length; i++){
      //if sq is empty add to valid moves
      if ( vector4[i].piece === null ){
        validMoves.push(vector4[i])
      } else {
        //if piece is a different color add it to valid moves
        if (pieceColor !== vector4[i].piece[0]){
          validMoves.push(vector4[i])
        }
        break;//a piece has been found, stop looking, rook can't jump over other pieces.
      }
    }
    // check for x-
    for (let i = vector3.length-1; i >= 0; i--){
      //if sq is empty add to valid moves
      if ( vector3[i].piece === null ){
        validMoves.push(vector3[i])
      } else {
        //if piece is a different color add it to valid moves
        if (pieceColor !== vector3[i].piece[0]){
          validMoves.push(vector3[i])
          console.log("I hit a piece i'll add it")
        }
        break;//a piece has been found, stop looking, rook can't jump over other pieces.
      }
    }

    // console.log("valid moves:", validMoves)
    return validMoves;
  };
  return { getRookMoves };
}

const { getRookMoves } = useRook();

const example = {
  id: 36,
  coordinate: "e5",
  x: 4,
  y: 4,
  piece: "wr",
  underAttackFromWhite: false,
  underAttackFromBlack: false,
  isBlack: false,
};
// const v2 = {
//   id: 1,
//   coordinate: "e5",
//   x: 0,
//   y: 0,
//   piece: "wr",
//   underAttackFromWhite: false,
//   underAttackFromBlack: false,
//   isBlack: false,
// };

// getRookMoves(example);
// getRookMoves(v2)

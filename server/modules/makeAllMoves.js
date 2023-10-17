const board = require("./startingBoard");

function makeAllMoves(moves) {
  if (moves !== null) {
    let newBoard = board;
    console.log("moves", moves);
    for (let move of moves) {
      const start = move.slice(0, 2);
      const end = move.slice(2,4);
      // console.log("move char", move[move.length-1])
      console.log("end",end)
      if (move[move.length - 1] === "*") {
        console.log("MAKING SPECIAL MOVE")
        
        const middle = `${end[0] + start[1]}`;
        console.log(start, middle, end)
        tempBoard = makeSimpleMove(start, middle, newBoard);
        // tempBoard.map((sq)=>{
        //   if (sq.coordinate === "f5"){
        //     console.log(sq.coordinate,sq.piece);
        //   }
        // })
        newBoard = makeSimpleMove(middle, end, tempBoard);
      } else {
        newBoard = makeSimpleMove(start, end, newBoard);
      }
    }
    return newBoard;
  }
  return board;
}

//this function returns newBoard after moving the piece that moved.
//start and end parameters should be coordinates, not squares.
//TODO: typescript for this? it's been really buggy getting types right.
function makeSimpleMove(start, end, board) {
  console.log(`makingSimpleMove ${start} to ${end}!`);
  const [boardAfterRemoval, startingPiece] = removeStartingPiece(board, start);
  const newBoard = replaceDestination(boardAfterRemoval, startingPiece, end);
  for (let sq of board){
    if (sq.coordinate === "e5"){
      console.log(sq)
    }
  }

  return newBoard;
} //end simpleMove Function

// map over board, set start to null return [board, piece name]
function removeStartingPiece(board, start) {
  // console.log("THIS IS board:", board);
  let movingPiece;
  const boardAfterRemoval = board.map((sq) => {
    if (sq.coordinate === start) {
      //starting piece has been found call it movingPiece
      movingPiece = sq.piece;
      console.log("FOUND",movingPiece)
      //assign coordinate of movingPiece to null
      return {
        ...sq,
        piece: null,
      };
    }
    return sq;
  });

  return [boardAfterRemoval, movingPiece];
} //end removeStartingPiece

// map over board, replace end coordinate with the piece that is moving.
function replaceDestination(board, startingPiece, end) {
  //assign 'movingPiece' to ending coordinate
  const newBoard = board.map((sq) => {
    if (sq.coordinate === end) {
      //TODO: mark as captured, move off board (even if null? make it easy)
      return {
        ...sq,
        piece: startingPiece,
      };
    }
    return sq;
  });
  // this test was used to check moving from 'a1' to 'b1' the first two items in array.
  // console.log("changes made?", movingPiece ,moveToEnd[0],moveToEnd[1])

  return newBoard;
}

// -----------------------------------------------------------------------

function makeSpecialMove(start, end, board) {
  const middle = `${end[0] + start[1]}`;
  console.log(`making SPECIAL MOVE ${start} to ${middle} to ${end}!`);
  //f5 to g6

  const [boardAfterRemoval, startingPiece] = removeStartingPiece(board, start);
  const newBoard = replaceDestination(boardAfterRemoval, startingPiece, middle);

  // const [boardAfterRemoval2, startingPiece2] = removeStartingPiece(newBoard, middle);
  // const finalBoard = replaceDestination(boardAfterRemoval2, startingPiece2, end);

  return newBoard;
  // return finalBoard
}

// function getXCoordinate(letter) {
//   let startX;
//   if (letter === "a") {
//     startX = 0;
//   } else if (letter === "b") {
//     startX = 1;
//   } else if (letter === "c") {
//     startX = 2;
//   } else if (letter === "d") {
//     startX = 3;
//   } else if (letter === "e") {
//     startX = 4;
//   } else if (letter === "f") {
//     startX = 5;
//   } else if (letter === "g") {
//     startX = 6;
//   } else if (letter === "h") {
//     startX = 7;
//   }
//   return startX;
// }
// const startX = getXCoordinate(start[0]);
// const endX = getXCoordinate(end[0]);
// const endY = Number(end[1] - 1);
// const startY = Number(start[1] - 1);

// let specialX;

// if (startY === 4) {
//   specialX = endX;
//   specialY = endY - 1;
// } else if (startY === 3) {
//   specialX = endX;
//   specialY = endY + 1;
// } else if (startY === 0) {
//   if (endX === 2) {
//     specialX = 0;
//     specialY = 0;
//   } else {
//     specialX = 7;
//     specialY = 0;
//   }
// } else if (startY === 7) {
//   if (endX === 2) {
//     specialX = 0;
//     specialY = 7;
//   } else {
//     specialX = 7;
//     specialY = 7;
//   }
// }

module.exports = makeAllMoves;

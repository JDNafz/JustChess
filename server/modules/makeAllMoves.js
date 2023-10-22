const board = require("./startingBoard");

function makeAllMoves(moves) {
  if (moves !== null) {
    let newBoard = board;
    for (let move of moves) {
      const start = move.slice(0, 2);
      const end = move.slice(2, 4);

      if (move[move.length - 1] === "*") {
        const letterChar = move[move.length - 2];
        //note that selecting a knight results in "wnr" so the "r" is rook and knight
        if (letterChar === "q" || letterChar === "b" || letterChar === "r") {
          const piece = move.slice(4, move.length - 1);

          // console.log("Calced pieceName:", piece, end);
          newBoard = promote(end, piece, start, newBoard);
          
        }
        // console.log("MAKING SPECIAL MOVE", start)
        else if (start === "e1" || start === "e8") {
          // console.log("about to castle")
          newBoard = castle(start, end, newBoard);
        } else {
          // console.log("making En passant")
          newBoard = makeEnPassant(start, end, newBoard);
        }
      } else {
        newBoard = makeSimpleMove(start, end, newBoard);
      }
    }
    
    return newBoard;
  }
  return board;
}

function promote(location, newPiece, start, board) {
  // console.log(`makingSimpleMove ${start} to ${end}!`);

  const newBoard = board.map((sq) => {
    if (sq.coordinate === location) {
      //replace pawn with selected piece
      return {
        ...sq,
        piece: newPiece,
      };
    }
    if (sq.coordinate === start){
      return {
        ...sq,
        piece: null,
      }
    }
    return sq;
  });

  
  return newBoard;
}

function makeEnPassant(start, end, newBoard) {
  const middle = `${end[0] + start[1]}`;
  tempBoard = makeSimpleMove(start, middle, newBoard);
  return makeSimpleMove(middle, end, tempBoard);
}

function castle(start, end, board) {
  // console.log(start,end)
  const tempBoard = makeSimpleMove(start, end, board);

  isWhite = start[1] === "1";
  towardsH = end[0] === "g";
  const [rookCoordinate, rookDestCoordinate] = towardsH
    ? isWhite
      ? ["h1", "f1"]
      : ["h8", "f8"]
    : isWhite
    ? ["a1", "d1"]
    : ["a8", "d8"];
  const newBoard = makeSimpleMove(
    rookCoordinate,
    rookDestCoordinate,
    tempBoard
  );

  return newBoard;
}

//this function returns newBoard after moving the piece that moved.
//start and end parameters should be coordinates, not squares.
//TODO: typescript for this? it's been really buggy getting types right.
function makeSimpleMove(start, end, board) {
  // console.log(`makingSimpleMove ${start} to ${end}!`);
  const [boardAfterRemoval, startingPiece] = removeStartingPiece(board, start);
  const newBoard = replaceDestination(boardAfterRemoval, startingPiece, end);

  return newBoard;
} 

// map over board, set start to null return [board, piece name]
function removeStartingPiece(board, start) {
  // console.log("THIS IS board:", board);
  let movingPiece;
  const boardAfterRemoval = board.map((sq) => {
    if (sq.coordinate === start) {
      //starting piece has been found call it movingPiece
      movingPiece = sq.piece;
      //assign coordinate of movingPiece to null
      return {
        ...sq,
        piece: null,
      };
    }
    return sq;
  });

  return [boardAfterRemoval, movingPiece];
} 

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

  return newBoard;
}

module.exports = makeAllMoves;

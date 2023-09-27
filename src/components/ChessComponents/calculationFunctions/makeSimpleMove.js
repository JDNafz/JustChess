
//this function returns newBoard after moving the pieces.
export default function makeSimpleMove(start, end, store) {
  const board = store.board;
  const turn = store.turn;

  const [boardAfterRemoval, startingPiece] = removeStartingPiece(board, start);
  const newBoard = replaceDestination(boardAfterRemoval, startingPiece, end);

  return newBoard;
} //end simpleMove Function

// map over board, set start to null return [board, piece name]
function removeStartingPiece(board, start) {
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
    } //end if
    return sq;
  }); //end map

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
  // this test was used to check moving from 'a1' to 'b1' the first two items in array.
  // console.log("changes made?", movingPiece ,moveToEnd[0],moveToEnd[1])

  return newBoard;
}

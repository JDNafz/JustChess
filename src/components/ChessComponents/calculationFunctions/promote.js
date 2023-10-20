export default function promote(location, newPiece, board) {
  // console.log(`makingSimpleMove ${start} to ${end}!`);

  const newBoard = board.map((sq) => {
    if (sq.coordinate === location) {
      //replace pawn with selected piece
      return {
        ...sq,
        piece: newPiece,
      };
    }
    return sq;
  });

  return newBoard;
} //end simpleMove Function

export default function promote(location, newPiece, board) {
  // console.log(`makingSimpleMove ${start} to ${end}!`);

  const newBoard = board.map((sq) => {
    if (sq.coordinate === location.coordinate) {
      //assign coordinate of movingPiece to null
      return {
        ...sq,
        piece: newPiece,
      };
    }
    return sq;
  });

  return newBoard;
} //end simpleMove Function

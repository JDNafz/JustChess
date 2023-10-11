import { useSelector } from "react-redux";
// no default to name the export and force clarity in other areas of project

export function usePawn() {
  const board = useSelector((store) => store.board);

  const getPawnMoves = (selectedPiece) => {
    const pieceColor = selectedPiece.piece[0];
    const isStartingRow =
      // white starts in row 2 (indexed at 1)
      (pieceColor === "w" && selectedPiece.y === 1) ||
      //black starts in row 7(indexed at 6)
      (pieceColor === "b" && selectedPiece.y === 6);

    //if piece is white next move to sq to examine is y + 1
    // if black => y - 1
    const nextMoveYOne =
      pieceColor === "w" ? selectedPiece.y + 1 : selectedPiece.y - 1;
    //or + 2 or - 2
    const nextMoveYTwo = isStartingRow
      ? pieceColor === "w"
        ? selectedPiece.y + 2
        : selectedPiece.y - 2
      : null;

    const nextRowSquares = board.filter((square) => {
      const isOnSameX = square.x === selectedPiece.x;
      const isValidOneSquareMove =
        square.x === selectedPiece.x && square.y === nextMoveYOne;
      const isValidTwoSquareMove =
        nextMoveYTwo && isOnSameX && square.y === nextMoveYTwo;
      const squareIsNotOccupied = !square.piece;
      return (
        (isValidOneSquareMove || isValidTwoSquareMove) && squareIsNotOccupied
      );
    });

    return nextRowSquares;
  };

  return { getPawnMoves };
}

// coordinate: "d2";
// id: 12;
// isBlack: false;
// piece: "wp";
// underAttackFromBlack: false;
// underAttackFromWhite: false;
// x: 3;
// y: 1;

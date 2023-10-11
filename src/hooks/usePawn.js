import { useSelector } from "react-redux";
// no default to name the export and force clarity in other areas of project

export function usePawn() {
  const board = useSelector((store) => store.board);

  const getPawnMoves = (selectedPiece) => {
    const pieceColor = selectedPiece.piece[0];
    const isStartingRow =
      (pieceColor === "w" && selectedPiece.y === 1) ||
      (pieceColor === "b" && selectedPiece.y === 6);
    // console.log(isStartingRow);
    const nextMoveYOne =
      pieceColor === "w" ? selectedPiece.y + 1 : selectedPiece.y - 1;
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
import { useSelector, useDispatch } from "react-redux";
// no default to name the export and force clarity in other areas of project

export function useValidPawnMoves() {
  const board = useSelector((store) => store.board);

  const getValidPawnMoves = (selectedPawn) => {
    const pieceColor = selectedPawn.piece[0];
    const isStartingRow =
      (pieceColor === "w" && selectedPawn.y === 1) ||
      (pieceColor === "b" && selectedPawn.y === 6);
    // console.log(isStartingRow);
    const nextMoveYOne =
      pieceColor === "w" ? selectedPawn.y + 1 : selectedPawn.y - 1;
    const nextMoveYTwo = isStartingRow
      ? pieceColor === "w"
        ? selectedPawn.y + 2
        : selectedPawn.y - 2
      : null;

    const nextRowSquares = board.filter((square) => {
      const isOnSameX = square.x === selectedPawn.x;
      const isValidOneSquareMove =
        square.x === selectedPawn.x && square.y === nextMoveYOne;
      const isValidTwoSquareMove =
        nextMoveYTwo && isOnSameX && square.y === nextMoveYTwo;
      const squareIsNotOccupied = !square.piece;
      return (
        (isValidOneSquareMove || isValidTwoSquareMove) && squareIsNotOccupied
      );
    });

    return nextRowSquares;
  };

  return { getValidPawnMoves };
}

// coordinate: "d2";
// id: 12;
// isBlack: false;
// piece: "wp";
// underAttackFromBlack: false;
// underAttackFromWhite: false;
// x: 3;
// y: 1;

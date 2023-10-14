import { useSelector } from "react-redux";
// no default to name the export and force clarity in other areas of project

export function usePawn() {
  const board = useSelector((store) => store.board);

  const getPawnMoves = (sP) => {
    const pieceColor = sP.piece[0];
    const isWhite = pieceColor === "w";
    const isStartingRow =
      // white starts in row 2 (indexed at 1)
      (pieceColor === "w" && sP.y === 1) ||
      //black starts in row 7(indexed at 6)
      (pieceColor === "b" && sP.y === 6);

    //if piece is white next move to sq to examine is y + 1
    // if black => y - 1
    const nextMoveYOne = pieceColor === "w" ? sP.y + 1 : sP.y - 1;
    //or + 2 or - 2
    const nextMoveYTwo = isStartingRow
      ? pieceColor === "w"
        ? sP.y + 2
        : sP.y - 2
      : null;

    const basicMoves = board.filter((sq) => {
      const isOnSameX = sq.x === sP.x;
      const squareIsNotOccupied = !sq.piece;
      const isValidOneSquareMove =
        sq.x === sP.x && sq.y === nextMoveYOne && squareIsNotOccupied;
      const isValidTwoSquareMove =
        nextMoveYTwo &&
        isOnSameX &&
        sq.y === nextMoveYTwo &&
        squareIsNotOccupied;
      if (isValidOneSquareMove) {
        console.log("MV1", isValidOneSquareMove);
        return isValidOneSquareMove || isValidTwoSquareMove;
      }
      return isValidOneSquareMove;
    });

    //check for attacking
    const whiteAttacks = board.filter((sq) => {
      if (
        (sP.x - 1 === sq.x &&
          sP.y + 1 === sq.y &&
          sq.piece !== null &&
          sP.piece[0] !== sq.piece[0]) ||
        (sP.x + 1 === sq.x &&
          sP.y + 1 === sq.y &&
          sq.piece !== null &&
          sP.piece[0] !== sq.piece[0])
      ) {
        return sq;
      }
    });
    const blackAttacks = board.filter((sq) => {
      if (
        (sP.x - 1 === sq.x &&
          sP.y - 1 === sq.y &&
          sq.piece !== null &&
          sP.piece[0] !== sq.piece[0]) ||
        (sP.x + 1 === sq.x &&
          sP.y - 1 === sq.y &&
          sq.piece !== null &&
          sP.piece[0] !== sq.piece[0])
      ) {
        return sq;
      }
    });

    const attacks = isWhite ? whiteAttacks : blackAttacks;
    const validMoves = [...basicMoves, ...attacks];

    // console.log("POSSIBLE ATTACKS", possibleAttacks);

    // console.log("NEXT", validMoves);
    return validMoves;
  };

  return { getPawnMoves };
}

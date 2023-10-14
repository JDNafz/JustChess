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

    const basicMoves = board.filter((sq, idx, board) => {
      const isOnSameX = sq.x === sP.x;
      const isValidOneSquareMove = sq.x === sP.x && sq.y === nextMoveYOne;
      const isValidTwoSquareMove =
        nextMoveYTwo && isOnSameX && sq.y === nextMoveYTwo;
      const squareIsNotOccupied = !sq.piece;
      return (
        (isValidOneSquareMove && squareIsNotOccupied) ||
        (isValidTwoSquareMove && squareIsNotOccupied)
      );
    });
    // console.log("SMOKEY", basicMoves);

    //bug where basicMoves was returning hopping over a piece to go to the second row.
    //This fixes that. TODO: Refactoring pawn movement calc would be great later
    const fixedMoves = basicMoves.filter((sq, idx, basicMoves) => {
      let difference;
      if (basicMoves.length === 1) {
        difference = sP.y - basicMoves[0].y;
        if (difference < 0) {
          difference = difference * -1;
        }
        if (difference === 1) {
          return true;
        }
      } else {
        return true;
      }
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
    const validMoves = [...fixedMoves, ...attacks];

    // console.log("POSSIBLE ATTACKS", possibleAttacks);

    // console.log("NEXT", validMoves);
    return validMoves;
  };

  return { getPawnMoves };
}

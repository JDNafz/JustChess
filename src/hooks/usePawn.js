import { useSelector } from "react-redux";
// no default to name the export and force clarity in other areas of project

export function usePawn() {
  const board = useSelector((store) => store.board);

  const getPawnMoves = (sP) => {
    const sPColor = sP.piece[0];
    const isStartingRow =
      // white starts in row 2 (indexed at 1)
      (sPColor === "w" && sP.y === 1) ||
      //black starts in row 7(indexed at 6)
      (sPColor === "b" && sP.y === 6);

    //if piece is white next move to sq to examine is y + 1
    // if black => y - 1
    const pawnMoves = board.filter((sq) => {
      const y = sPColor === "w" ? sP.y + 1 : sP.y - 1;
      const y2 = sPColor === "w" ? sP.y + 2 : sP.y - 2;
      const firstSquare = sq.x === sP.x && sq.y === y;
      const secondSquare = sq.x === sP.x && sq.y === y2;
      return firstSquare || secondSquare;
    });
    if (pawnMoves[0].piece !== null) {
      // return validMoves;
      // }
    }
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

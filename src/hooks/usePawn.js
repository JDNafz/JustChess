import { useSelector } from "react-redux";
import checkVector from "./checkVector";

export function usePawn() {
  const board = useSelector((store) => store.board);

  //sP for selectedPiece
  const getPawnMoves = (sP) => {
    const sPIsWhite = sP.piece[0] === "w" ? true : false
    const isStartingRow = sPIsWhite ? sP.y === 1: sP.y ===6;

    if (isStartingRow){

      const vector = [];
      x = sP.x - 1;
    y = sP.y - 1;
    while (x >= 0 && y >= 0) {
      board.map((sq) => {
        if (sq.x === x && sq.y === y) {
          vector4.push(sq);
        }
      });
      x--;
      y--;
    }
  }
  };
  return { getPawnMoves };
}

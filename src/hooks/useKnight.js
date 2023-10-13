import { useSelector } from "react-redux";

export function useKnight() {
  const board = useSelector((store) => store.board);

  const getKnightMoves = (sP) => {
    // console.log("Searching for valid Knight Moves");
    const k8 = [
      [sP.x - 2, sP.y - 1],
      [sP.x - 2, sP.y + 1],
      [sP.x - 1, sP.y + 2],
      [sP.x + 1, sP.y + 2],
      [sP.x + 2, sP.y + 1],
      [sP.x + 2, sP.y - 1],
      [sP.x + 1, sP.y - 2],
      [sP.x - 1, sP.y - 2],
    ];
    const allEightMoves = board.filter((sq) => {
      for (let pair of k8) {
        if (pair[0] === sq.x && pair[1] === sq.y) {
          return sq;
        }
      }
    });
    // Don't capture same color:
    const validMoves = allEightMoves.filter((sq) => {
      if (sq.piece === null) {
        return sq;
      } else if (sq.piece[0] !== sP.piece[0]) {
        return sq;
      }
    });

    // console.log("valid moves:", validMoves);
    return validMoves;
  };
  return { getKnightMoves };
}

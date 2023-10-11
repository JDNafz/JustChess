import { useKnight } from "./useKnight";
import { usePawn } from "./usePawn";
import { useRook } from "./useRook";

//this function runs when a square is clicked in square.jsx(handleClick)
export function useLegalMoves() {
  const { getPawnMoves } = usePawn();
  const { getRookMoves } = useRook();
  const { getKnightMoves } = useKnight();

  const getLegalMoves = (square) => {
    const piece = square.piece.slice(1);
    console.log("PIECE:", piece);
    const pieceMoves = {
      p: getPawnMoves(square),
      r: getRookMoves(square),
      n: getKnightMoves(square),
      b: getBishopMoves(square),
      q: getQueenMoves(square),
      k: getKingMoves(square),
    };

    return pieceMoves[piece];
  };
  return { getLegalMoves };
}

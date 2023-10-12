import { useKnight } from "./useKnight";
import { usePawn } from "./usePawn";
import { useRook } from "./useRook";

//this function runs when a square is clicked in square.jsx(handleClick)
export function useLegalMoves() {
  const { getPawnMoves } = usePawn();
  const { getRookMoves } = useRook();
  // const { getKnightMoves } = useKnight();

  const getLegalMoves = (square) => {
    // const pieceMoves = {
    //   "p": getPawnMoves(square),
    //   "r": getRookMoves(square),
    //   "n": getPawnMoves(square),
    //   "b": getPawnMoves(square),
    //   "q": getPawnMoves(square),
    //   "k": getPawnMoves(square),
    // };


    const piece = square.piece.slice(1,2);
    console.log("PIECE:", piece);
    

    if (piece === "p"){
      return getPawnMoves(square)
    } else if( piece === 'r'){
      return getRookMoves(square)
    } 
    return getPawnMoves(square)
    

    // return pieceMoves[piece];
  };
  return { getLegalMoves };
}

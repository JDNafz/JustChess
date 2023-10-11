import { useValidPawnMoves } from "./useValidPawnMoves";



//this function runs when a square is clicked in square.jsx(handleClick)
export function useLegalMoves() {
  const { getValidPawnMoves } = useValidPawnMoves();



  const getLegalMoves = (square) => {
    console.log(`\n\n\n\n\n\n\n\n\n\n\n HELLO, BITCH \n\n\n\n\n\n\n\n\n\n\n`)
    const piece = square.piece.slice(1);
    console.log("PIECE:", piece)
    const pieceMoves = {
      p : getValidPawnMoves(square),
      rook : "ROOK",
    }
    
    return pieceMoves[piece]
  }
  return { getLegalMoves }
}


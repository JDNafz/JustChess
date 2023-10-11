import { useSelector } from "react-redux";
// no default to name the export and force clarity in other areas of project

export function useValidRookMoves() {
  const board = useSelector((store) => store.board);

  const getRookMoves = (selectedPawn) => {
    console.log("Searching for valid ROOK MOVES")
    board.map((square)=>{
      return square.coordinate
    })
    return squares;
  }
  return { getRookMoves };
}

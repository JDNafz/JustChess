import { useSelector } from "react-redux";
// no default to name the export and force clarity in other areas of project

export function useRook() {
  const board = useSelector((store) => store.board);

  const getRookMoves = (selectedPiece) => {
    console.log("Searching for valid ROOK MOVES");
    const squares = board.map((square) => {
      return square.coordinate;
    });
    return squares;
  };
  return { getRookMoves };
}

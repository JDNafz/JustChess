import { useSelector } from "react-redux";
// no default to name the export and force clarity in other areas of project

export function useKnight() {
  const board = useSelector((store) => store.board);

  const getKnightMoves = (selectedPiece) => {
    console.log("Searching for valid Knight Moves");
    const squares = board.map((square) => {
      return square.coordinate;
    });
    return squares;
  };
  return { getKnightMoves };
}

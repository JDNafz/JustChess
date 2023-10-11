import { useSelector } from "react-redux";
// no default to name the export and force clarity in other areas of project

export function useValidRookMoves() {
  const board = useSelector((store) => store.board);

  const getRookMoves = (selectedPawn) => {
    console.log("Searching for valid ROOK MOVES")
  
  
  }
  return { getRookMoves };
}

// coordinate: "d2";
// id: 12;
// isBlack: false;
// piece: "wp";
// underAttackFromBlack: false;
// underAttackFromWhite: false;
// x: 3;
// y: 1;

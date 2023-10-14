// import { useSelector } from "react-redux";
import { useRook } from "./useRook";
import { useBishop } from "./useBishop";

export function useQueen(){
  const { getRookMoves } = useRook();
  const { getBishopMoves } = useBishop();

  function getQueenMoves(sP){
    return [...getRookMoves(sP),...getBishopMoves(sP)]
  };

  return { getQueenMoves };
}


// import getPiece from "../../modules/getPiece";
import Image from "../Image/Image";
import Coordinate from "../Coordinate/Coordinate";

import "./Square.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLegalMoves } from "../../../hooks/getLegalMoves";


export default function Square({ id, board, updateBoard }) {
  const dispatch = useDispatch();
  const getLegalMoves = getLegalMoves(); //is this a custom hook?
  const selectedPiece = useSelector((store) => store.selectedPiece);
  const whiteTurn = useSelector((store) => store.whiteTurn);

  const square = board[id];
  
  
  const firstClick = () => {
    if (legalMoves.contains(square.piece)){
      dispatch({type: "MOVE_PIECE",payload: square})
      dispatch({ type: "LEGAL_MOVES", payload: getLegalMoves(selectedPiece)});
      
      return
    }
    dispatch({ type: "SELECT_PIECE", payload: square });
  }; //end handle click


  const secondClick = () => {

  }
  return (
    <>
      {square.coordinate === selectedPiece.coordinate ? (
        <div
          className={`square ${square.isBlack ? "black" : "white"} selected`}
          onClick={firstClick}
        >
          <Coordinate coordinate={square.coordinate} />
          <Image key={`img${square.id}`} piece={square.piece} />
        </div>
      ) : (
        <div
          className={`square ${square.isBlack ? "black" : "white"} `}
          onClick={firstClick}
        >
          <Coordinate coordinate={square.coordinate} />
          <Image key={`img${square.id}`} piece={square.piece} />
        </div>
      )}
    </>
  );
}

// square info:

// coordinate: "d4"
// id: 27
// isBlack: false
// piece: null
// underAttackFromBlack: false
// underAttackFromWhite: false
// x: 3
// y: 3

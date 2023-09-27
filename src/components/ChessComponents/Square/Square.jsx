// import getPiece from "../../modules/getPiece";
import Image from "../Image/Image";
import Coordinate from "../Coordinate/Coordinate";

import "./Square.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getLegalMoves } from "../../../redux/sagas/getLegalMoves";



export default function Square({ id, getLegalMoves}) {
  const dispatch = useDispatch();
  const legalMoves = useSelector((store) => store.legalMoves)
  const selectedPiece = useSelector((store) => store.selectedPiece);
  const board = useSelector((store) => store.board);
  // const turn = useSelector((store) => store.turn);
  const square = board[id];
  
  
  const firstClick = () => {
    // console.log(legalMoves, "SMOKE")
    if (legalMoves.includes(square.coordinate)){
      
      dispatch({type: "MOVE_PIECE",payload: square})
      
      return
    }
    dispatch({ type: "SELECT_PIECE", payload: square });
    
    //with the selected piece, go check which moves are legal
    const moves = getLegalMoves(selectedPiece,board)
    dispatch({ type: "LEGAL_MOVES", payload: moves});
  }; //end handle click

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

// -----------------------------------------------


// import getPiece from "../../modules/getPiece";
import Image from "../Image/Image";
import Coordinate from "../Coordinate/Coordinate";

import "./Square.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import makeSimpleMove from "../calculationFunctions/makeSimpleMove";
// import { getLegalMoves } from "../../../redux/sagas/getLegalMoves";

export default function Square({ id, getLegalMoves }) {
  const dispatch = useDispatch();
  const legalMoves = useSelector((store) => store.legalMoves);
  const selectedPiece = useSelector((store) => store.selectedPiece);
  const board = useSelector((store) => store.board);
  const turn = useSelector((store) => store.turn);
  const square = board[id];

  const handleClick = () => {
    console.log("clicked:", square.piece);
    dispatch({ type: "SELECT_PIECE", payload: square });
    const inputSquare = square;

    //if square is already selected, deselect
    if (inputSquare.coordinate === selectedPiece.coordinate) {
      dispatch({ type: "DESELECT_PIECE", payload: square });
    } 
    else if (inputSquare.piece) { //check if a piece was selected if piece is null this returns false.
      if (turn % 2 === 0) { //check if it's white's turn
        if (inputSquare.piece[0] === "w") { 
          dispatch({ type: "SELECT_PIECE", payload: square });; // if white was already selected, change focus to new piece
        } 
        else {
          // makeSimpleMove()? 
        }

      } //end if white's turn
      else if (inputSquare.piece[0] === "b") {
        return inputSquare;
      } //end piece selection check
  } //end SELECT_PIECE





    //with the selected piece, go check which moves are legal
    // const moves = getLegalMoves(selectedPiece, board);
    // dispatch({ type: "LEGAL_MOVES", payload: moves });
  }; //end handle click

  return (
    <>
      {square.coordinate === selectedPiece.coordinate ? (
        <div
          className={`square ${square.isBlack ? "black" : "white"} selected`}
          onClick={handleClick}
        >
          <Coordinate coordinate={square.coordinate} />
          <Image key={`img${square.id}`} piece={square.piece} />
        </div>
      ) : (
        <div
          className={`square ${square.isBlack ? "black" : "white"} `}
          onClick={handleClick}
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

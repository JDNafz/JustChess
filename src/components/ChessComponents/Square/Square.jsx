// import getPiece from "../../modules/getPiece";
import Image from "../Image/Image";
import Coordinate from "../Coordinate/Coordinate";

import "./Square.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import makeSimpleMove from "../calculationFunctions/makeSimpleMove";
import { useValidPawnMoves } from "../../../hooks/useValidPawnMoves";
// import { getLegalMoves } from "../../../redux/sagas/getLegalMoves";

export default function Square({ id }) {
  const { getValidPawnMoves } = useValidPawnMoves();
  const dispatch = useDispatch();
  const legalMoves = useSelector((store) => store.legalMoves);
  const selectedPiece = useSelector((store) => store.selectedPiece);
  const board = useSelector((store) => store.board);
  const gameLog = useSelector((store) => store.gameLog);
  const square = board[id];

  const handleClick = () => {
    const legalMoveMatched = legalMoves.filter(
      (move) => square.coordinate === move.coordinate
    );
    if (legalMoveMatched.length === 1) {
      const start = selectedPiece.coordinate;
      const end = square.coordinate;
      dispatch({
        type: "MAKE_MOVE",
        payload: {
          newBoard: makeSimpleMove(start, end, board),
          move: start + end,
          gameLog: gameLog
        },
      });
      dispatch({ type: "DESELECT_PIECE" });
      return;
    }
    dispatch({ type: "SELECT_PIECE", payload: square });
    dispatch({ type: "SET_LEGAL_MOVES", payload: getValidPawnMoves(square) });
  }; 

  let squareClass = `square ${square.isBlack ? "black" : "white"}`;
  if (square.coordinate === selectedPiece.coordinate) {
    squareClass += ' selected';
  }

  return (
    <>
      <div
        className={squareClass}
        onClick={handleClick}
      >
        <Coordinate coordinate={square.coordinate} />
        <Image key={`img${square.id}`} piece={square.piece} />
      </div>
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

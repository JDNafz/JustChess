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
  // const turn = useSelector((store) => store.turn);
  const square = board[id];

  const handleClick = () => {
    //useState may be better

    console.log("clicked:", square.piece);
    dispatch({ type: "SELECT_PIECE", payload: square });
    dispatch({ type: "SET_LEGAL_MOVES", payload: getValidPawnMoves(square) });

    //test getMoves
    // const validMoves = getValidPawnMoves(square)
    // console.log(validMoves)
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

      {/* {square.coordinate === legalMoves.coordinate ? (
        <div
          className={`square ${square.isBlack ? "black" : "white"} legalMove`}
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
      )} */}

      {/* {(() => {
        switch (square.coordinate) {
          case `${legalMoves.coordinate}`:
            console.log("SELECTED", legalMoves.coordinate);

            return (
              <div
                className={`square ${
                  square.isBlack ? "black" : "white"
                } legalMove`}
                onClick={handleClick}
              >
                <Coordinate coordinate={square.coordinate} />
                <Image key={`img${square.id}`} piece={square.piece} />
              </div>
            );
          case `${selectedPiece.coordinate}`:
            console.log("SELECTED", selectedPiece.coordinate);
            return (
              <div
                className={`square ${
                  square.isBlack ? "black" : "white"
                } selected`}
                onClick={handleClick}
              >
                <Coordinate coordinate={square.coordinate} />
                <Image key={`img${square.id}`} piece={square.piece} />
              </div>
            );
          default:
            return (
              <div
                className={`square ${square.isBlack ? "black" : "white"} `}
                onClick={handleClick}
              >
                <Coordinate coordinate={square.coordinate} />
                <Image key={`img${square.id}`} piece={square.piece} />
              </div>
            );
        }
      })()} */}
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

import { useDispatch, useSelector } from "react-redux";
import Image from "../Image/Image";
import promote from "../calculationFunctions/promote";
import "./PromotePawn.css";

import { useEffect } from "react";
import { useState } from "react";
import makeSimpleMove from "../calculationFunctions/makeSimpleMove";

export default function PromotePawn() {
  const dispatch = useDispatch();
  const promotion = useSelector((store) => store.promotion);
  const board = useSelector((store) => store.board);
  const gameLog = useSelector((store) => store.gameLog)

  const moveNumber = gameLog.moves.length
  useEffect(() => {
    const pawnArrayOfOne = board.filter((sq) => {
      if (sq.piece !== null) {
        if (
          (sq.piece[1] === "p" && sq.y === 0) ||
          (sq.piece[1] === "p" && sq.y === 7)
        ) {
          return sq;
        }
      }
    });
    if (pawnArrayOfOne.length === 1) {
      dispatch({ type: "SET_PROMOTION_TRUE" });
    }
  }, [board]);

  const selectPromotion = (piece) => {
    // console.log("clicked selector", piece)
    const lastMoveCoordinate = gameLog.moves[gameLog.moves.length -1].slice(2)
    const newBoard = promote(lastMoveCoordinate, piece, board);
    const move = gameLog.moves[moveNumber-1] + piece + "*"
    dispatch({ type: "PROMOTION", payload: {newBoard, move, gameLog} }) //TODO
    //special move replace pawn square with selected piece

    //makeSpecialMove()
  };
  return (
    <>
      {promotion && (
        <div className="newPieceContainer">
          <div
            className="selectwq selectPiece"
            onClick={() => selectPromotion("wq")}
          >
            <Image piece={"wq"} />
          </div>
          <div className="secondaryOptions">
            <div
              className="selectwr selectPiece"
              onClick={() => selectPromotion("wr")}
            >
              <Image piece={"wr"} />
            </div>
            <div className="selectPiece" onClick={() => selectPromotion("wb")}>
              <Image piece={"wb"} />
            </div>
            <div className="selectPiece" onClick={() => selectPromotion("wnr")}>
              <Image piece={"wnr"} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

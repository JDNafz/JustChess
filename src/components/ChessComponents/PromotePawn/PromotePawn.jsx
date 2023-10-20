import { useDispatch, useSelector } from "react-redux";
import Image from "../Image/Image";

import "./PromotePawn.css";

import { useEffect } from "react";
import { useState } from "react";

export default function PromotePawn() {
  const dispatch = useDispatch();
  const promotion = useSelector((store) => store.promotion);
  const board = useSelector((store) => store.board);

  useEffect(() => {
    const pawnArrayOfOne = board.filter((sq) => {
      if (sq.piece !== null) {
        if (
          (sq.piece[1] === "p" && sq.y === 0) ||
          (sq.piece[1] === "p" && sq.y === 7)
        ) {
          // console.log("PROMOTION", sq)
          return sq;
        }
      }
    });
    if (pawnArrayOfOne.length === 1) {
      dispatch({ type: "SET_PROMOTION_TRUE" });
    }
  }, [board]);

  const selectPromotion = (piece) => {
    // replace last move with "e8Q"
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

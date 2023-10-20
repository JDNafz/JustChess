import { useDispatch, useSelector } from "react-redux";
import Image from "../Image/Image";
import promote from "../calculationFunctions/promote";
import "./PromotePawn.css";

import { useEffect } from "react";
import { useState } from "react";
import makeSimpleMove from "../calculationFunctions/makeSimpleMove";

export default function PromotePawn() {
  const dispatch = useDispatch();
  const whitePromotion = useSelector((store) => store.whitePromotion);
  const blackPromotion = useSelector((store) => store.blackPromotion);

  const board = useSelector((store) => store.board);
  const gameLog = useSelector((store) => store.gameLog);
  const moveNumber = gameLog.moves.length;

  useEffect(() => {
    const blackPromotion = board.filter((sq) => {
      if (sq.piece !== null) {
        if (sq.piece[1] === "p" && sq.y === 0) {
          return sq;
        }
      }
    });
    const whitePromotion = board.filter((sq) => {
      if (sq.piece !== null) {
        if (sq.piece[1] === "p" && sq.y === 7) {
          return sq;
        }
      }
    });
    if (whitePromotion.length === 1) {
      dispatch({ type: "SET_WHITE_PROMOTION_TRUE" });
    }
    if (blackPromotion.length === 1) {
      dispatch({ type: "SET_BLACK_PROMOTION_TRUE" });
    }
  }, [board]);

  const selectPromotion = (piece) => {
    // console.log("clicked selector", piece)
    const lastMoveCoordinate = gameLog.moves[gameLog.moves.length - 1].slice(2);
    const newBoard = promote(lastMoveCoordinate, piece, board);
    const move = gameLog.moves[moveNumber - 1] + piece + "*";
    dispatch({ type: "PROMOTION", payload: { newBoard, move, gameLog } }); //TODO
    //special move replace pawn square with selected piece

    //makeSpecialMove()
  };

  //double ternary to see if anything should be displayed
  const promotionJSX = whitePromotion
    ? getPromotionJSX("w")
    : blackPromotion
    ? getPromotionJSX("b")
    : null;

  function getPromotionJSX(color) {
    const containerCSS = `newPieceContainer NPC${color}`
    return (
      <div className={containerCSS}>
        <div
          className="selectwq selectPiece"
          onClick={() => selectPromotion(`${color}q`)}
        >
          <Image piece={`${color}q`} />
        </div>
        <div className="secondaryOptions">
          <div
            className="selectwr selectPiece"
            onClick={() => selectPromotion(`${color}r`)}
          >
            <Image piece={`${color}r`} />
          </div>
          <div
            className="selectPiece"
            onClick={() => selectPromotion(`${color}b`)}
          >
            <Image piece={`${color}b`} />
          </div>
          <div
            className="selectPiece"
            onClick={() => selectPromotion(`${color}nr`)}
          >
            <Image piece={`${color}nr`} />
          </div>
        </div>
      </div>
    );
  }

  
  return (
    <>
      {/* {whitePromotion && (
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
      )} */}
      {promotionJSX}
    </>
  );
}

import { useDispatch, useSelector } from "react-redux";
import Image from "../Image/Image";

import './PromotePawn.css';

import { useEffect } from "react";
import { useState } from "react";

export default function PromotePawn() {
  const dispatch = useDispatch();
  const promotion = useSelector((store) => store.promotion)
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
      dispatch({type: "SET_PROMOTION_TRUE"})
    }
  }, [board]);

  return (
    <>
      {promotion && (
        <div className="selectNewPiece">
          
          <Image piece={"wq"} />
          <Image piece={"wr"} />
          <Image piece={"wb"} />
          <Image piece={"wnr"} />
       

        </div>
      )}
    </>
  );
}


console.log("REQ.BODY", req.body);
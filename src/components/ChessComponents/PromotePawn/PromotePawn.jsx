import { useDispatch, useSelector } from "react-redux";
import Image from "../Image/Image";

import './PromotePawn.css';

import { useEffect } from "react";
import { useState } from "react";

export default function PromotePawn() {
  const [promotion, setPromotion] = useState(false);
  const board = useSelector((store) => store.board);

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
      setPromotion(true);
    }
  }, [board]);

  // dispatch({ type: "SET_WINNER", payload: 'b'})
  const winner = useSelector((store) => store.winner);

  // const inputsText = showInputs ? "Hide Inputs" : "Show Inputs";
  const winnerText = winner.color === "w" ? "White wins!!!" : "Black wins!!!";

  return (
    <>
      {promotion && (
        <div className="selectNewPiece">
          <div>Queen</div>
          <div>Rook</div>
          <div>Bishop</div>
          <Image piece={"q"} />
          <div>Knight</div>
        </div>
      )}
    </>
  );
}

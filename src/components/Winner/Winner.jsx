import { useDispatch, useSelector } from "react-redux";

import "./Winner.css";
import { useEffect } from "react";

export default function Menu() {
  const dispatch = useDispatch();
  const board = useSelector((store) => store.board);
 
  useEffect(() => {
  const kings = board.filter((sq) => {
    if (sq.piece !== null) {
      if (sq.piece[1] === "k") {
        return sq;
      }
    }
  });
  if (kings.length === 1) {
    dispatch({
      type: "SET_WINNER",
      payload: { bool: true, color: kings[0].piece[0] },
    });
  }
  }, [board]);

  // dispatch({ type: "SET_WINNER", payload: 'b'})
  const winner = useSelector((store) => store.winner);

  // const inputsText = showInputs ? "Hide Inputs" : "Show Inputs";
  const winnerText = winner.color === "w" ? "White wins!!!" : "Black wins!!!";

  return <>{winner.bool && <div className="winner">{winnerText}</div>}</>;
}
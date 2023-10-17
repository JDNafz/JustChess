import { useDispatch, useSelector } from "react-redux";

import "./Winner.css";

export default function Menu() {
  // const dispatch = useDispatch();
  const winner = useSelector((store) => store.winner);

  // const inputsText = showInputs ? "Hide Inputs" : "Show Inputs";
  const winnerText = winner.color === "w" ? "White wins!!!": "Black wins!!!";

  return <>{winner.bool && <div className="winner">{winnerText}</div>}</>;
}

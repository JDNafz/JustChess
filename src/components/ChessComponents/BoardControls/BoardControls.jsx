import React from "react";
import "./BoardControls.css";
import { useDispatch, useSelector } from "react-redux";

export default function BoardControls() {
  const dispatch = useDispatch();
  const showLegalMoves = useSelector((store) => store.showLegalMoves);

  let eyeOpenClass = "boardControl showLegalMoves";
  if (showLegalMoves) {
    eyeOpenClass += " showLegalMovesTrue";
  }

  return (
    <div className="boardControls">
      <img
        src="/numberedList.png"
        className="boardControl"
        onClick={() => dispatch({ type: "TOGGLE_SHOW_MOVE_LIST" })}
      />
      <img
        src="/flip-13.png"
        className="boardControl"
        onClick={() => dispatch({ type: "TOGGLE_PERSPECTIVE" })}
      />
      <img
        src="/eye-open.png"
        className={eyeOpenClass}
        onClick={() => dispatch({ type: "TOGGLE_SHOW_LEGAL_MOVES" })}
      />
    </div>
  );
}

import React from "react";
import "./BoardControls.css";
import { useDispatch, useSelector } from "react-redux";

export default function BoardControls() {
  const dispatch = useDispatch();
  const showLegalMoves = useSelector((store) => store.showLegalMoves);
  const gameMode = useSelector((store) => store.gameMode);


  const gameModeIcon = gameMode === 0 ? "/star.png" :  "/balance.png"

  let eyeOpenClass = "boardControl showLegalMoves";
  if (showLegalMoves) {
    eyeOpenClass += " showLegalMovesTrue";
  }

  return (
    <div className="boardControls">
      {/* Sparkle icons created by Freepik - Flaticon
        https://www.flaticon.com/free-icons/sparkle 
      Law icon created by Kiranshastry - Flaticon 
        https://www.flaticon.com/free-icons/law */}
      <img
        src="/numberedList.png"
        className="boardControl"
        title="Show Move List"
        onClick={() => dispatch({ type: "TOGGLE_SHOW_MOVE_LIST" })}
      />
      <img
        src={gameModeIcon}
        className="boardControl"
        title="Free Play/Legal Play"
        onClick={() => dispatch({ type: "TOGGLE_GAME_MODE" })}
      />
      <img
        src="/eye-open.png"
        className={eyeOpenClass}
        title="Show Legal Moves on the Board"
        onClick={() => dispatch({ type: "TOGGLE_SHOW_LEGAL_MOVES" })}
      />
      <img
        src="/flip-13.png"
        className="boardControl"
        title="Flip Board"
        onClick={() => dispatch({ type: "TOGGLE_PERSPECTIVE" })}
      />
    </div>
  );
}

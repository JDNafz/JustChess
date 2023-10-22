import React from "react";
import "./BoardControls.css";

export default function BoardControls() {
  return (
    <div className="boardControls">
      <img
        src="/numberedList.png"
        className="boardControl showLegalMoves"
        onClick={() => dispatch({ type: "TOGGLE_SHOW_LEGAL_MOVES" })}
      />
      <img
        src="/flip-13.png"
        className="boardControl flipButton"
        onClick={() => dispatch({ type: "TOGGLE_PERSPECTIVE" })}
      />
      <img
        src="/eye-open.png"
        className="boardControl showLegalMoves"
        onClick={() => dispatch({ type: "TOGGLE_SHOW_LEGAL_MOVES" })}
      />
    </div>
  );
}

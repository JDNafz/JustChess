import React from "react";
import "./BoardControls.css";

export default function BoardControls() {
  return (
    <div className="boardControls">
      <img
        src="/flip-13.png"
        className="flipButton"
        onClick={() => dispatch({ type: "TOGGLE_PERSPECTIVE" })}
      />
      <img />
    </div>
  );
}

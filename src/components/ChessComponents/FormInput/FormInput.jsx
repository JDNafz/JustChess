import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import makeSimpleMove from "../calculationFunctions/makeSimpleMove";
// import useReduxStore from "../../../hooks/useReduxStore";

export default function FormInput() {
  const dispatch = useDispatch();

  const [start, setStart] = useState(""); //used to take in text inputs
  const [end, setEnd] = useState(""); //used to take in text inputs

  const board = useSelector((store) => store.board);

  const makeMove = (event) => {
    event.preventDefault();

    dispatch({
      type: "MAKE_MOVE",
      payload: {
        newBoard: makeSimpleMove(start, end, board),
        move: start + end,
      },
    });
  };



  return (
    <div id="forms">
      <form onSubmit={makeMove}>
        <label id="moveFrom">Move From:</label>
        <input id="pieceOne" onChange={(e) => setStart(e.target.value)} />
        <label id="moveTo">Move to:</label>
        <input id="pieceTwo" onChange={(e) => setEnd(e.target.value)} />
        <button id="makeMove">
          Make Move
        </button>
      </form>
      {/* <button id="EvansGambit" onClick={loadEvans}>Load Evan's Gambit</button> TODO: */}
    </div>
  );
} //end FormInput

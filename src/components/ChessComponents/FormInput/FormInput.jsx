import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import makeSimpleMove from "../calculationFunctions/makeSimpleMove";
// import useReduxStore from "../../../hooks/useReduxStore";

export default function FormInput({ getBoard }) {
  const dispatch = useDispatch();

  const [start, setStart] = useState(""); //used to take in text inputs
  const [end, setEnd] = useState(""); //used to take in text inputs

  const board = useSelector((store) => store.board);
  const turn = useSelector((store) => store.turn);

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


  //TODO: move newGame into a Saga
  const newGame = () => {
    dispatch({ type: "NEW_GAME" });
    // console.log("SMOKE",start, end);
    getBoard();

    axios({
      method: "DELETE",
      url: "/board/newGame",
    })
      .then((response) => {
        // console.log("Game has been reset");
      })
      .catch(function (error) {
        console.log("DELETE Error /people error", error);
      });
  };

  return (
    <div id="forms">
      <form onSubmit={makeMove}>
        <label id="moveFrom">Move From:</label>
        <input id="pieceOne" onChange={(e) => setStart(e.target.value)} />
        <label id="moveTo">Move to:</label>
        <input id="pieceTwo" onChange={(e) => setEnd(e.target.value)} />
        <button id="makeMove" type="submit">
          Make Move
        </button>
      </form>
      <button id="newGame" onClick={newGame}>
        New Game
      </button>
      {/* <button id="EvansGambit" onClick={loadEvans}>Load Evan's Gambit</button> TODO: */}
    </div>
  );
} //end FormInput

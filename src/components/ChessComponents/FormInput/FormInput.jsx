import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import makeSimpleMove from "../calculationFunctions/makeSimpleMove";
import useReduxStore from "../../../hooks/useReduxStore";

export default function FormInput({ getBoard }) {
  const dispatch = useDispatch();

  const [start, setStart] = useState(""); //used to take in text inputs
  const [end, setEnd] = useState(""); //used to take in text inputs

  const board = useSelector((store) => store.board);
  const turn = useSelector((store) => store.turn);

  const makeMove = (event) => {
    event.preventDefault();

    const newBoard = makeSimpleMove(start, end, board)
    dispatch({ type: "MAKE_MOVE", payload: {newBoard: newBoard, move: start + end}})
    //update redux
    //dispatch updatedBoard
    // dispatch({ type: "SET_BOARD", payload: newBoard });
    //dispatch increment 'turn' reducer
    // dispatch({ type: "TURN_STEP" });
    // console.log("SMOKE",start, end);
    const move = start + end

    // POST move
    axios({
      method: "POST",
      url: "/board",
      data: {
        turn: turn,
        move: move
      },
    })
      .then((response) => {
        // console.log("POST makeMove success", response);
      })
      .catch(function (error) {
        console.log("POST makeMove error", error);
      });
  };

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

  const loadEvans = () => {
    axios({
      method: "DELETE",
      url: "/board/Evans",
    })
      .then((response) => {
        console.log("Evan's Gambit Loaded");
        getBoard();
      })
      .catch(function (error) {
        console.log("Error getting Evan's Gambit: ", error);
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

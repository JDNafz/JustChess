import axios from "axios";
import { useState } from "react";


export default function FormInput({getBoard, turn}){
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");


  const makeMove = (event) => {
    event.preventDefault();
    //POST move
    const moveString = start + end
    
    axios({
      method: 'POST',
      url: '/board',
      data: {
        turn: turn,
        move: moveString
      }
    })
      .then((response) => {
        // console.log("POST /people response", response);
        getBoard();
      })
      .catch(function (error) {
        console.log("POST /people error", error);
      })
  }

  const newGame = () => {
    axios({
      method: 'DELETE',
      url: '/board/newGame'
      }
    )
      .then((response) => {
        // console.log("Game has been reset");
        getBoard();
      })
      .catch(function (error) {
        console.log("DELETE Error /people error", error);
      })
  }

  const loadEvans = () => {
    axios({
      method: 'DELETE',
      url: '/board/Evans'
      }
    )
      .then((response) => {
        console.log("Evan's Gambit Loaded");
        getBoard();
      })
      .catch(function (error) {
        console.log("Error getting Evan's Gambit: ", error);
      })
  }

  return(
    <div id="forms">
      <form onSubmit={makeMove}>
        <label id="moveFrom">Move From:</label>
        <input id="pieceOne" onChange={e => setStart(e.target.value)}  />
        <label id="moveTo">Move to:</label>
        <input id="pieceTwo" onChange={e => setEnd(e.target.value)}  />
        <button id="makeMove" type="submit">Make Move</button>
      </form>
      <button id="newGame" onClick={newGame}>New Game</button>
      {/* <button id="EvansGambit" onClick={loadEvans}>Load Evan's Gambit</button> TODO: */}
    </div>
  )
}//end FormInput
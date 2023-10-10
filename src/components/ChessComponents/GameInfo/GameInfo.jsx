import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './GameInfoTheUnCursed.css'

export default function GameInfo() {
  // const dispatch = useDispatch();
  const turn = useSelector((store) => store.turn);
  const dbLog = useSelector((store) => store.dbLog);
  const gameLog = useSelector((store) => store.gameLog);

  //TODO: convert to table instead of list
  // const moveList = gameLog

// const output = gameLog.moves.map();


  return (
    <div id="gameInfo">
      <table>
        <thead>
          <tr>
            <th>Turn</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>66</td>
            <td>e2e4</td>
            <td>e7e5</td>
          </tr>
        </tbody>
      </table>

      <ul>
        {/* <li>Turn {Math.floor(turn/2)}</li> */}

        {gameLog.moves.map((move, index) => {
          // console.log("index:", index);
          return <li key={`moveList${index}`}>{move} </li>;
        })}
      </ul>
    </div>
  );
}

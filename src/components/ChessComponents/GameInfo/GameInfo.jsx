import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function GameInfo() {
  // const dispatch = useDispatch();
  const turn = useSelector((store) => store.turn);
  const dbLog = useSelector((store) => store.dbLog);
  const currentGameMoves = useSelector((store) => store.currentGameMoves)

//TODO: convert to table instead of list
  return (
    <div>
      <ul>
        <li>Turn {Math.floor(turn/2)}</li>

        {currentGameMoves.map((move, index) => {
          // console.log("index:", index);
          return (
            <li key={`moveList${index}`}>{move} </li>
          )})}
      </ul>
    </div>
  );
}

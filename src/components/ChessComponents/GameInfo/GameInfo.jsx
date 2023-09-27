import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function GameInfo({getBoard}) {
  const turn = useSelector((store) => store.turn);
  const dbLog = useSelector((store) => store.dbLog);
  

//TODO: convert to table
  return (
    <div>
      <button onClick={getBoard}>Refresh</button>
      <ul>
        <li>Turn {Math.floor(turn/2)}</li>
        {dbLog.map((row) => {
          return (
            <li key={`dbEntry${row.id}`}>{row.move} </li>
          )})}
        
      </ul>
    </div>
  );
}

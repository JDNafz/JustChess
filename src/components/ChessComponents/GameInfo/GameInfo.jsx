import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./gameInfo.css";

export default function GameInfo() {
  // const dispatch = useDispatch();
  const turn = useSelector((store) => store.turn);
  const dbLog = useSelector((store) => store.dbLog);
  const gameLog = useSelector((store) => store.gameLog);

  //TODO: convert to table instead of list
  const moves = gameLog.moves;
  const tableContent = moves.map((move, idx) => {
    if (idx === moves.length - 1 && moves.length % 2 === 1) {
      return (
        <tr>
          <td>{idx/2 + 1}</td>
          <td>{move}</td>
          <td>  </td>
        </tr>
      );
    } else {
      if (idx % 2 === 0) {
        return (
          <tr key={`move${idx}`}>
            <td>{idx/2 + 1}</td>
            <td>{move}</td>
            <td>{moves[idx + 1]}</td>
          </tr>
        );
      }
    }
  })



  return (
    <div id="gameInfo">
      <table>
        <thead>
          <tr>
            <th>Turn</th>
            <th> </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
        {tableContent}
        </tbody>
      </table>

      <ul>
{/* 
        {gameLog.moves.map((move, index) => {
          // console.log("index:", index);
          return <li key={`moveList${index}`}>{move} </li>;
        })} */}
      </ul>
    </div>
  );
}

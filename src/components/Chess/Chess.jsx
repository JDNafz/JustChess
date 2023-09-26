import { useState, useEffect } from "react";
import Board from "../ChessComponents/Board/Board";
import Header from "../ChessComponents/Header/Header";
import axios from "axios";
import FormInput from "../ChessComponents/FormInput/FormInput";
import "./Chess.css";
import { useSelector } from "react-redux";

export default function Chess() {
  const selectedPiece = useSelector((store) => store.selectedPiece);

  const [board, setBoard] = useState([]);

  const [turn, setTurn] = useState(1);

  const getBoard = () => {
    // console.log('turn:', turn);
    axios
      .get("/board")
      .then((response) => {
        setBoard(response.data.currentBoard);
        setTurn(response.data.currentTurn);
      })
      .catch((error) => {
        console.log("GET /creatures error", error);
      });
  };

  useEffect(() => {
    getBoard();
  }, [selectedPiece]);

  return (
    <div id="background">
      <Header />
      <div id="boardAndInput">
        <FormInput
          turn={turn}
          getBoard={getBoard}
        />
        <Board board={board} />
      </div>

      <div className="selectedPieceText">Selected Piece: {selectedPiece.piece}</div>
    </div>
  );
} //end Board

//TODO LIST

//import startingState into js file on server
//return it as "GET GAME"

//start moving pieces on node server without DB
//client just syncs after piece load to sync "STATE"

//move calc comes from client before getting to server

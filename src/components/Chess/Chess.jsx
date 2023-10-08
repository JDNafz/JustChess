import { useState, useEffect, useDebugValue } from "react";
import Board from "../ChessComponents/Board/Board";
import axios from "axios";
import FormInput from "../ChessComponents/FormInput/FormInput";
import "./Chess.css";
import { useDispatch, useSelector } from "react-redux";
import GameInfo from "../ChessComponents/GameInfo/GameInfo";
import Footer from "../Footer/Footer";

export default function Chess() {
  const selectedPiece = useSelector((store) => store.selectedPiece);
  const dispatch = useDispatch();
  const dbLog = useSelector((store) => store.dbLog);
  const board = useSelector((store) => store.board);

  useEffect(() => {
    getBoard();
  }, [board]);

  //TODO: rename getBoard and /board into getDBLog
  const getBoard = () => {
    axios
      .get("/board")
      .then((res) => {
        // console.log("getBoard Function in Chess.jsx", res.data);
        dispatch({ type: "SET_DB_LOG", payload: res.data });
      })
      .catch((error) => {
        console.log("GET /creatures error", error);
      });
  };

  return (
    <div id="background">
      <div id="playArea">
        <Board />
      </div>

      <div id="gameInfo">
        <FormInput getBoard={getBoard} />
        <GameInfo dbLog={dbLog} getBoard={getBoard} />
      </div>

      {/* <div className="selectedPieceText">
        Selected Piece: {selectedPiece.piece}
      </div> */}
      <Footer />
    </div>
  );
} //end Board

//TODO LIST

//start moving pieces in react without DB
//client just syncs after piece load to sync "STATE"

//move calc comes from client before getting to server

//base mode TODO:
// clear inputs, refocus on move From: highlight selected on input.

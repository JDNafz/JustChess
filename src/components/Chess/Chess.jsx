import { useState, useEffect, useDebugValue } from "react";
import Board from "../ChessComponents/Board/Board";
import Header from "../ChessComponents/Header/Header";
import axios from "axios";
import FormInput from "../ChessComponents/FormInput/FormInput";
import "./Chess.css";
import { useDispatch, useSelector } from "react-redux";

export default function Chess() {
  const dispatch = useDispatch();
  
  const selectedPiece = useSelector((store) => store.selectedPiece);
  const board = useSelector((store) => store.board);
  const turn = useSelector((store) => store.turn);

  const getBoard = () => {
    // console.log('turn:', turn);
    axios
      .get("/board")
      .then((response) => {
        dispatch({type: "SET_BOARD", payload: response.data.currentBoard})
        dispatch({type: "SET_TURN", payload: response.data.currentTurn})
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
        <FormInput getBoard={getBoard} />
        <Board />
      </div>

      <div className="selectedPieceText">Selected Piece: {selectedPiece.piece}</div>
    </div>
  );
} //end Board

//TODO LIST

//start moving pieces on node server without DB
//client just syncs after piece load to sync "STATE"

//move calc comes from client before getting to server

//base mode TODO:
// clear inputs, refocus on move From: highlight selected on input.
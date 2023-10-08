import { useState, useEffect, useDebugValue } from "react";
import Board from "../ChessComponents/Board/Board";
import axios from "axios";
import FormInput from "../ChessComponents/FormInput/FormInput";
import "./Chess.css";
import { useDispatch, useSelector } from "react-redux";
import GameInfo from "../ChessComponents/GameInfo/GameInfo";
import Footer from "../Footer/Footer";

export default function Chess() {
  // const dispatch = useDispatch();

  // const board = useSelector((store) => store.board);

  // useEffect(() => {
  // }, [board]);

  return (
    <div id="background">
      <div id="playArea">
        <Board />
      </div>

      <div id="gameInfo">
        <FormInput />
        <GameInfo />
      </div>
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

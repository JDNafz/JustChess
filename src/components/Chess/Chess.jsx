import { useState, useEffect, useDebugValue } from "react";
import Board from "../ChessComponents/Board/Board";
import "./Chess.css";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";

export default function Chess() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch({ type: "FETCH_CURRENT_GAME" });
  }, []);

 

  return (
    <div className="background bg-red-500">
      <h1 className="text-center">HELLO</h1>
      <div id="playArea">
        <Board />
      </div>

      <Menu />
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

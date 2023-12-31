import { useState, useEffect, useDebugValue } from "react";
import Board from "../Board/Board";
import "./PlayArea.css";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../Page/Footer";
import Menu from "../../Menu/Menu";
import Winner from "../Winner/Winner";
import PromotePawn from "../PromotePawn/PromotePawn";
import BoardControls from "../BoardControls/BoardControls";
import GameInfo from "../GameInfo/GameInfo";

export default function Chess() {
  const showMoveList = useSelector((store) => store.showMoveList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_CURRENT_GAME" });
  }, []);

  return (
    <div id="background">
      <div className="plusTable">
        <div id="playArea">
          <Board />
          <BoardControls />
          <Winner />
          <PromotePawn />
        </div>
      </div>
        {showMoveList && <GameInfo />}
      <Menu />
    </div>
  );
}

//TODO LIST

//start moving pieces in react without DB
//client just syncs after piece load to sync "STATE"

//move calc comes from client before getting to server

//base mode TODO:
// clear inputs, refocus on move From: highlight selected on input.

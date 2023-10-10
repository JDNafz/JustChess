import { useState, useEffect, useDebugValue } from "react";
import Board from "../ChessComponents/Board/Board";
import axios from "axios";
import FormInput from "../ChessComponents/FormInput/FormInput";
import "./Chess.css";
import { useDispatch, useSelector } from "react-redux";
import GameInfo from "../ChessComponents/GameInfo/GameInfo";
import Footer from "../Footer/Footer";

export default function Chess() {
  const dispatch = useDispatch();
  const [showInputs, setShowInputs] = useState(false);
  const [showGameInfo, setShowGameInfo] = useState(false);
  const gameMode = useSelector((store)=> store.gameMode);

  useEffect(() => {
    dispatch({ type: "FETCH_CURRENT_GAME" });
  }, []);

  const toggleInputs = () => {
    setShowInputs((prev) => !prev);
  };
  const toggleGameInfo = () => {
    setShowGameInfo((prev) => !prev);
  };
  const inputsText = showInputs ? "Hide Inputs" : "Show Inputs";
  const gameInfoText = showGameInfo ? "Hide Move List" : "Show Move List";

  const newGame = () => {
    dispatch({ type: "NEW_GAME" });
  };
  const legalPlay = gameMode === 1? "greenButton": "";
  const freePlay = gameMode === 0? "greenButton": "";

  return (
    <div id="background">
      <div id="playArea">
        <Board />
      </div>
      
      {showInputs && <FormInput />}
      {showGameInfo && <GameInfo />}

      <div className="menuButtons">
        <button onClick={toggleInputs}>{inputsText}</button>
        <button onClick={toggleGameInfo}>{gameInfoText}</button>
        <button onClick={newGame}>New Game</button>
        <button className={freePlay} onClick={() => dispatch({ type: "SET_GAME_MODE", payload: 0})}>Free Play</button>
        <button className={legalPlay} onClick={() => dispatch({ type: "SET_GAME_MODE", payload: 1})}>Legal Play</button>
      
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

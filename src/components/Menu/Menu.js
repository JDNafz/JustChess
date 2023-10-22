import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GameInfo from "../ChessComponents/GameInfo/GameInfo";
import FormInput from "../ChessComponents/FormInput/FormInput";
import "./Menu.css";

export default function Menu() {
  const dispatch = useDispatch();
  // const [showInputs, setShowInputs] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  
  const showLegalMoves = useSelector((store) => store.showLegalMoves);
  const gameMode = useSelector((store) => store.gameMode);
  const user = useSelector((store) => store.user);
  const gameLog = useSelector((store) => store.gameLog);
  
  
  
  const [showGameInfo, setShowGameInfo] = useState(false);
  const toggleGameInfo = () => {
    setShowGameInfo((prev) => !prev);
  };

  // const inputsText = showInputs ? "Hide Inputs" : "Show Inputs";
  const gameInfoText = showGameInfo ? "Hide Move List" : "Show Move List";
  const showLegalMovesText = showLegalMoves
    ? "Show Legal Moves"
    : "Hide Legal Moves";
  const newGame = () => {
    dispatch({ type: "NEW_GAME" });
  };
  const saveGame = () => {
    dispatch({
      type: "SAVE_CURRENT_GAME",
      payload: { user_id: user.id, game_id: gameLog.id },
    });
  };

  const legalPlay = gameMode === 1 ? "greenButton" : "";
  const freePlay = gameMode === 0 ? "greenButton" : "";
  return (
    <>
      {showGameInfo && <GameInfo />}

      <div className="menuList">
        <button className="btn newGameBtn" onClick={newGame}>New Game</button>
        <button className="btn" onClick={saveGame}>Save Game</button>
        <div className="lineBreak"></div>

        <button onClick={toggleGameInfo}>{gameInfoText}</button>
        <button
          className={freePlay}
          onClick={() => dispatch({ type: "SET_GAME_MODE", payload: 0 })}
        >
          Free Play
        </button>
        <button
          className={legalPlay}
          onClick={() => dispatch({ type: "SET_GAME_MODE", payload: 1 })}
        >
          Legal Play
        </button>
      </div>
    </>
  );
}

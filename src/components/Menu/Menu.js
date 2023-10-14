import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GameInfo from "../ChessComponents/GameInfo/GameInfo";
import FormInput from "../ChessComponents/FormInput/FormInput";
import "./Menu.css";

export default function Menu() {
  const dispatch = useDispatch();
  // const [showInputs, setShowInputs] = useState(false);
  const [showGameInfo, setShowGameInfo] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const showLegalMoves = useSelector((store) => store.showLegalMoves)
  const gameMode = useSelector((store) => store.gameMode);
  const user = useSelector((store) => store.user);
  const gameLog = useSelector((store) => store.gameLog);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };
  // const toggleInputs = () => {
  //   setShowInputs((prev) => !prev);
  // };
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
      {/* {showInputs && <FormInput />} */}
      {showGameInfo && <GameInfo />}
      {showMenu && (
        <div className="menuList">
          <button onClick={() => dispatch({ type: "TOGGLE_PERSPECTIVE" })}> Flip Board </button>

          <button onClick={() => dispatch({ type: "TOGGLE_SHOW_LEGAL_MOVES" })}> {showLegalMovesText} </button>

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
      )}
      <div className="hamburgerMenu">
        <button onClick={toggleMenu}> Menu </button>
        <button onClick={newGame}>New Game</button>
        <button onClick={saveGame}>Save Game</button>
      </div>
    </>
  );
}

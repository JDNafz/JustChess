import { useDispatch, useSelector } from "react-redux";
import GameInfo from "../ChessComponents/GameInfo/GameInfo";
import "./Menu.css";

export default function Menu() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gameLog = useSelector((store) => store.gameLog);
  const showMoveList = useSelector((store) => store.showMoveList);

  const newGame = () => {
    dispatch({ type: "NEW_GAME" });
  };
  const saveGame = () => {
    dispatch({
      type: "SAVE_CURRENT_GAME",
      payload: { user_id: user.id, game_id: gameLog.id },
    });
  };
  return (
    <>
      {/* This is toggled in the BoardControls.jsx */}
      {showMoveList && <GameInfo />}

      <div className="menuList">
        <button className="btn newGameBtn" onClick={newGame}>
          New Game
        </button>
        <button className="btn" onClick={saveGame}>
          Save Game
        </button>
      </div>
    </>
  );
}

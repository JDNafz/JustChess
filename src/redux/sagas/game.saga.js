import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// worker Saga: will be fired on "REGISTER" actions
function* newGame(action) {
  try {
    yield put({ type: "NEW_BOARD" });
    yield put({ type: "RESET_TURN" });
    yield put({ type: "RESET_HIGHLIGHT_LAST"});
    yield axios.post(`/games/new`);
    yield put({ type: "FETCH_CURRENT_GAME" });
  } catch (error) {
    console.log("Error making move", error);
  }
}

function* fetchCurrentGame(action) {
  try {
    //get {gameLog,board}
    const currentGame = yield axios.get(`/games/current_game`);
    // console.log("GOT CURRENT MOVES BACK", currentMoves.data)
    yield put({ type: "SET_GAME_LOG", payload: currentGame.data.gameLog });
    yield put({ type: "SET_BOARD", payload: currentGame.data.board})
    yield put({ type: "FETCH_SAVED_GAMES" });
  } catch {
    console.log("Error getting current Game");
  }
}

export default function* gameSaga() {
  yield takeLatest("NEW_GAME", newGame);
  yield takeLatest("FETCH_CURRENT_GAME", fetchCurrentGame);
}

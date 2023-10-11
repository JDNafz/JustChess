import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* makeMove(action) {
  const newBoard = action.payload.newBoard;
  const move = action.payload.move;
  const game_id = action.payload.gameLog.id;
  // console.log("GAME ID: ", game_id)
  const moveData = {
    currentMove: move,
    game_id: game_id
  }
try {
  yield put({ type: "SET_BOARD", payload: newBoard});
  yield put({ type: "TURN_STEP"});
  yield axios.put(`/games/moves`, moveData);
  yield put({ type: "FETCH_CURRENT_GAME" })
  yield put({ type: "DESELECT_PIECE" });
} catch (error) {
  console.log("Error making move", error)
}
}

export default function* movesSagas() {
  yield takeLatest('MAKE_MOVE', makeMove);
}




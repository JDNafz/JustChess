import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* newGame(action) {

try {
  yield put({ type: "NEW_BOARD", });
  yield put({ type: "TURN_STEP"});
  yield axios.UPDATE(`/games/moves/${gameId}`);
  yield put({ type: "ADD_TO_CURRENT_GAME_MOVES", payload: move})
} catch (error) {
  console.log("Error making move", error)
}
}

export default function* newGameSaga() {
  yield takeLatest('NEW_GAME', newGame);
}

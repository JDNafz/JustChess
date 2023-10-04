import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* makeMove(action) {
  const newBoard = action.payload.newBoard;
  const move = action.payload.move;
try {
  yield put({ type: "SET_BOARD", newBoard});
  yield put({ type: "TURN_STEP"});
  //TODO: Axios call?
  yield put({ type: "ADD_TO_CURRENT_GAME_MOVES"})
} catch {
  console.log("Error making move", error)
}
}

function* movesSagas() {
  yield takeLatest('MAKE_MOVE', registerUser);
}

export default movesSagas;


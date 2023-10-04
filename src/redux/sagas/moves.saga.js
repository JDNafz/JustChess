import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* makeMove(action) {
try {
  yield
} catch {

}
}

function* movesSagas() {
  yield takeLatest('MAKE_MOVE', registerUser);
}

export default movesSagas;


        // type: "MAKE_MOVE",
        // payload: {
        //   newBoard: makeSimpleMove(start, end, board),
        //   move: start + end,
    
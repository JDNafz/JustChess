import { put, takeLatest } from 'redux-saga/effects';


function* selectPiece(action) {
  const validMoves = action.payload.validMoves
  console.log("SMOKE", validMoves);
  try {
    yield put({ type: "SET_LEGAL_MOVES", payload: validMoves})


  } catch (error) {
    console.log('Error with user logout:', error);
  }
}

function* selectPieceSaga() {
  yield takeLatest('SELECT_PIECE', selectPiece);
}

export default selectPieceSaga;

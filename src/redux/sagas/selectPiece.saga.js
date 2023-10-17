import { put, takeLatest } from 'redux-saga/effects';


function* selectPiece(action) {
  const validMoves = action.payload.validMoves
  try {
    yield put({ type: "SET_LEGAL_MOVES", payload: validMoves})
    yield put({ type: "SET_SPECIAL_MOVES", payload: action.payload.specialMoves})


  } catch (error) {
    console.log('Error with user logout:', error);
  }
}


function* deselectPiece(action) {
  try {
    yield put({ type: "RESET_LEGAL_MOVES"})


  } catch (error) {
    console.log('Error with deselecting highlight logout:', error);
  }
}

function* selectPieceSaga() {
  yield takeLatest('SELECT_PIECE', selectPiece);
  yield takeLatest('DESELECT_PIECE', deselectPiece);
}

export default selectPieceSaga;

import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchMoves(action) {
  try {
    const response = yield axios.get('/games/moves');
    yield put({ type: 'SET_MOVE_DATA', payload: response.data});
  } catch (error) {
    console.log('Error fetchMoves Saga:', error);
  }
}

function* newGame(action) {
  try {
    yield axios.post('/newGame');
    yield put({ type: 'FETCH_MOVES'});
  } catch (error) {
    console.log('Error newGame Saga:', error);
  }
}

function* boardSaga() {
  yield takeLatest('POST_MOVE_DATA', postMoveData);
  yield takeLatest('FETCH_MOVES', fetchMoves);
  yield takeLatest('NEW_GAME', newGame)
}

export default boardSaga;
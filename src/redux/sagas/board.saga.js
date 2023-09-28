import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* postMoveData(action) {
  try {
    yield axios.post('/board', action.payload);
    yield put({ type: 'FETCH_MOVE_DATA' });
  } catch (error) {
    console.log('Error posting moveData:', error);
  }
}



function* fetchMoveData(action) {
  try {
    const response = yield axios.get('/board');
    yield put({ type: 'SET_MOVE_DATA', payload: response.data});
  } catch (error) {
    console.log('Error posting moveData:', error);
  }
}

function* boardSaga() {
  yield takeLatest('POST_MOVE_DATA', postMoveData);
  yield takeLatest('FETCH_MOVE_DATA', fetchMoveData);
}

export default boardSaga;
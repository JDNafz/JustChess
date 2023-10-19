import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* saveBio(action) {
  try {
    yield axios.put(`/api/user/bio`,  {data: action.payload});
    yield put({ type: "FETCH_BIO" });
  } catch {
    console.log("Error updating Bio");
  }
}

function* fetchBio() {
  try {
    const currentBio = yield axios.get(`/api/user/bio`);
    yield put({ type: "SET_BIO", payload: currentBio.data });
  } catch {
    console.log("Error getting Bio");
  }
}




export default function* profileSaga() {
  yield takeLatest('PUT_BIO', saveBio);
  yield takeLatest('FETCH_BIO', fetchBio);
}

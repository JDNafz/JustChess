

import { put, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* saveGame(action) {
  const user_id = action.payload.user_id;
  const game_id = action.payload.game_id;
  // console.log(`\n\n\n user_id: ${user_id}, game_id:${game_id} \n\n\n in Save game Saga`)
  try {
    yield axios.post('/api/user/save_game',{user_id,game_id});
    yield put({ type: 'FETCH_SAVED_GAMES'});
  } catch (error) {
    console.log('Error saving game Saga:', error);
  }
}

function* fetchSavedGames(){
  try{
    const saved = yield axios.get('/api/user/saved_game');
    // console.log("Got back saved List from the server", returned.data);
    yield put({ type: "SET_SAVED_GAMES", payload: saved.data })
    const recent = yield axios.get('/api/user/recent_games');
    yield put({ type: "SET_RECENT_GAMES", payload: recent.data })
  } catch (error) {
    console.log('Error Fetching Saved games (in saga)');
  }
}

function* deleteSavedGame(action){
  try {
    yield axios.put('/api/user/delete_saved_game', action.payload);
  } catch (error) {
    console.log("Error deleting game in Saga:", error);
  }
}



export default function* saveGameSaga() {
  yield takeLatest('SAVE_CURRENT_GAME', saveGame);
  yield takeLatest('FETCH_SAVED_GAMES', fetchSavedGames);
  yield takeLatest('DELETE_SAVED_GAME', deleteSavedGame);
}









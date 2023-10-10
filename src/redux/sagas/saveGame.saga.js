

import { put, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* saveGame(action) {
  const user_id = action.payload.user_id;
  const game_id = action.payload.game_id;
  // console.log(`\n\n\n user_id: ${user_id}, game_id:${game_id} \n\n\n in Save game Saga`)
  try {
    yield axios.put('/api/user/save_game',{user_id,game_id});
    yield put({ type: 'FETCH_SAVED_GAMES'});
  } catch (error) {
    console.log('Error saving game Saga:', error);
  }
}

function* fetchSavedGames(){
  try{
    const returned = yield axios.get('/api/user/saved_games');
    console.log("Got back saved List from the server", returned.data);
    put({ type: "SET_SAVED_GAMES", payload: returned.data })
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









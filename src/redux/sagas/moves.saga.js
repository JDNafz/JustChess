import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* makeMove(action) {

  const newBoard = action.payload.newBoard;
  const move = action.payload.move;
  const game_id = action.payload.gameLog.id;
  // console.log("GAME ID: ", game_id)
  const moveData = {
    currentMove: move,
    game_id: game_id,
  };
  try {
    //takes current board status from backend to make sure it's synced
    yield put({ type: "SET_BOARD", payload: newBoard });
    yield put({ type: "RESET_LEGAL_MOVES" });
    yield put({ type: "DESELECT_PIECE" });
    yield put({ type: "HIGHLIGHT_LAST", payload: move });
    
    //send the move to be made to the backend
    yield axios.put(`/games/moves`, moveData);
    yield put({ type: "FETCH_CURRENT_GAME" });
  } catch (error) {
    console.log("Error making move", error);
  }
}

function* promotion(action) {
  //this saga fires when a pawn advances to the last row ("MAKE_MOVE"), then 
  const {newBoard, move, gameLog } = action.payload;

  try {
    yield axios.put(`/games/moves/promotion`, gameLog);
    yield put({ type: "MAKE_MOVE", payload: {newBoard, move, gameLog}});
    yield put({ type: "SET_PROMOTION_FALSE"});
  } catch (error) {
    console.log("Error during promotion", error);
  }
}

export default function* movesSagas() {
  yield takeLatest("MAKE_MOVE", makeMove);
  yield takeLatest("PROMOTION", promotion);
}

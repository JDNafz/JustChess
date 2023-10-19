import { combineReducers } from "redux";
import errors from "./errors.reducer";
import user from "./user.reducer";
import { board } from "./board.reducer";
// import { turn } from "./turn.reducer";
import { legalMoves } from "./legalMoves.reducer";
import { gameLog } from "./gameLog.reducer";
import { selectedPiece } from "./selectedPiece.reducer";
import { gameMode } from "./gameMode.reducer";
import { savedGameList } from "./savedGameList.reducer";
import { recentGamesList } from "./recentGameList.reducer";
import { highlightLast } from "./highlightLast.reducer";
import { showLegalMoves } from "./showLegalMoves.reducer";
import { isWhiteTurn } from "./isWhiteTurn.reducer";
import { perspective } from "./perspective.reducer";
import { specialMoves } from "./specialMoves.reducer";
import { winner } from "./winner.reducer";
import { bio } from "./bio.reducer";
// combine all imported reducers
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  selectedPiece, // First time clicking a piece selects it
  legalMoves,
  board,
  // turn,
  gameLog,
  gameMode,
  savedGameList,
  recentGamesList,
  highlightLast,
  showLegalMoves,
  isWhiteTurn,
  perspective,
  specialMoves,
  winner,
  bio,
});

export default rootReducer;

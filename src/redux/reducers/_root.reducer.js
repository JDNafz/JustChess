import { combineReducers } from "redux";
import errors from "./errors.reducer";
import user from "./user.reducer";
import { board } from "./board.reducer";
import { turn } from './turn.reducer';


const dbLog = (state = [], action) => {
  if (action.type === "SET_DB_LOG") {
    return action.payload;
  }
  if (action.type === "NEW_GAME") {
    // console.log("turn state",state);
    return [];
  }
  return state;
};

const currentGameMoves = (state = [], action) => {
  if (action.type === "ADD_TO_CURRENT_GAME_MOVES"){
    return [...state, action.payload]
  }

  return state;
}



// later move these into individual files and import them here:
const initSelectedPiece = {
  coordinate: "",
  id: null,
  isBlack: null,
  piece: null,
  underAttackFromBlack: null,
  underAttackFromWhite: null,
  x: -1,
  y: -1,
};
const selectedPiece = (state = initSelectedPiece, action) => {
  if (action.type === "SELECT_PIECE") {
    return action.payload;
  }
  if (action.type === "DESELECT_PIECE") {
    return initSelectedPiece;
  }
  // case "MOVE_PIECE":
  // return state;

  if (action.type === "TURN_STEP") {
    // console.log("turn state",state);
    return initSelectedPiece;
  }
  return state;
};

const legalMoves = (state = [-1, -1], action) => {
  switch (action.type) {
    case "SET_LEGAL_MOVES":
      return action.payload;
  }
  return state;
};

// combine all imported reducers
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  selectedPiece, // First time clicking a piece selects it
  legalMoves,
  board,
  turn,
  dbLog,
  currentGameMoves, //same thing as dbLog
});

export default rootReducer;

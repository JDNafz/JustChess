import { combineReducers } from "redux";
import errors from "./errors.reducer";
import user from "./user.reducer";

const board = (state = [], action) => {
  if (action.type === "SET_BOARD"){
    return action.payload;
  }
  return state;
}
const turn = (state = 0, action) => {
  if (action.type === "SET_TURN"){
    return action.payload;
  }
  return state;
}







// later move these into individual files and import them here:
const initSP = {
  coordinate: "",
  id: null,
  isBlack: null,
  piece: null,
  underAttackFromBlack: null,
  underAttackFromWhite: null,
  x: -1,
  y: -1,
};
const selectedPiece = (state = initSP, action) => {
  const inputSquare = action.payload;

  switch (action.type) {
    case "SELECT_PIECE":
      if (inputSquare.coordinate === state.coordinate) {
        console.log("resetting SP state");
        return initSP;
      } else if (turn % 2 === 1) {
        // console.log("W TRUE");
        if (inputSquare.piece) {
          //check if a piece was selected
          if (inputSquare.piece[0] === "w") {
            return inputSquare;
          } //end if w piece selected
        } //end piece selection check
      } //end if white's turn
      return state;
    case "MOVE_PIECE":
      
    
      return state;
    default:
      return state;
  }
};


const legalMoves = (state = [-1,-1], action) => {
  switch(action.type) {
    case "LEGAL_MOVES":
      return action.payload;
  }
  return state
}








// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  selectedPiece, // First time clicking a piece selects it
  legalMoves,
  board,
  turn,

});

export default rootReducer;

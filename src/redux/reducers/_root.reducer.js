import { combineReducers } from "redux";
import errors from "./errors.reducer";
import user from "./user.reducer";

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
      } else if (whiteTurn) {
        console.log("W TRUE");
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

const whiteTurn = (state = true, action) => { //boolean or 'w' 'b'
  switch (action.type) {
    case "TOGGLE_TURN":
      return !state;
  }
  //why does if statements break reducers?
  // if (action.type ="TOGGLE_TURN"){
  //   return !state
  // }
  return state;
};

const legalMoves = (state = [], action) => {
  return action.payload;
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
  whiteTurn, //boolean true, white goes first.
});

export default rootReducer;

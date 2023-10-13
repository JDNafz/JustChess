export const legalMoves = (state = [], action) => {
  if (action.type === "SET_LEGAL_MOVES") {
    return action.payload;
  }
  if (action.type === "RESET_LEGAL_MOVES"){
    return []
  }
  return state;
};

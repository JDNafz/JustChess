export const legalMoves = (state = [-1, -1], action) => {
  if (action.type === "SET_LEGAL_MOVES") {
    console.log(action,"WATER")
    return action.payload;
  }
  return state;
};

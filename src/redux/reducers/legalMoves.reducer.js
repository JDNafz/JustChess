export const legalMoves = (state = [-1, -1], action) => {
  if (action.type === "SET_LEGAL_MOVES") {
    return action.payload;
  }
  return state;
};

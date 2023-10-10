export const legalMoves = (state = [-1, -1], action) => {
  switch (action.type) {
    case "SET_LEGAL_MOVES":
      return action.payload;
  }
  return state;
};
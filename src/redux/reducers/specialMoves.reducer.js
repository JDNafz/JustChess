

export const specialMoves = (state = [], action) => {
  if (action.type === "SET_SPECIAL_MOVES") {
    return action.payload;
  }
  if (action.type === "RESET_LEGAL_MOVES"){
    return []
  }
  return state;
};

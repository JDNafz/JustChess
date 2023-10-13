
export const showLegalMoves = (state = true, action) => {
  if (action.type === "TOGGLE_SHOW_LEGAL_MOVES") {
    // console.log("in set board reducer");
    return state = !state;
  }
  return state;
};

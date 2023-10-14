export const isWhiteTurn = (state = true, action) => {
  if (action.type === "TOGGLE_TURN"){
    state = !state;
  }
  if (action.type === "RESET_TURN"){
    return state = true;
  }
  return state;
}


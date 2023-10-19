export const isWhiteTurn = (state = true, action) => {
  if (action.type === "SET_TURN"){
    state = action.payload;
  }
  if (action.type === "RESET_TURN"){
    return state = true;
  }
  return state;
}
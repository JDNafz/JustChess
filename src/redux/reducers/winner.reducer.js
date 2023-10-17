const init = {bool: false, color: 'Nobody'}
export const winner = (state = init, action) => {
  if (action.type === "SET_WINNER") {
    // console.log("in set board reducer");
    return state = action.payload;
  }
  if (action.type === "RESET_WINNER") {
    // console.log("in set board reducer");
    return state = init;
  }
  return state;
};

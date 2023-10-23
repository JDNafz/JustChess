export const showMoveList = (state = false, action) => {
  if (action.type === "TOGGLE_SHOW_MOVE_LIST") {
    return state = !state;
  }
  return state;
};

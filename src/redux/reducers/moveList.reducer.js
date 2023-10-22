export const showMoveList = (state = true, action) => {
  if (action.type === "TOGGLE_SHOW_MOVE_LIST") {
    return state = !state;
  }
  return state;
};

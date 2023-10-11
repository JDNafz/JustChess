export const gameMode = (state = 1, action) => {
  if (action.type === "SET_GAME_MODE") {
    return action.payload;
  }
  return state;
};

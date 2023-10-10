export const gameMode = (state = 0, action) => {
  if (action.type === "SET_GAME_MODE") {
    // console.log(action,"WATER")
    return action.payload;
  }
  return state;
};

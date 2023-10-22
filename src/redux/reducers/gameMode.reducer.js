export const gameMode = (state = 1, action) => {
  if (action.type === "SET_GAME_MODE") {
    return action.payload;
  }
  if (action.type === "TOGGLE_GAME_MODE"){
    if (state === 1){
      return 0;
    } else {
      return 1;
    }
  }
  return state;
};

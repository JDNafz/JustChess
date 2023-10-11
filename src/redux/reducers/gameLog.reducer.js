export const gameLog = (state = {id: 0, moves: []}, action) => {
  if (action.type === "SET_GAME_LOG") {
    if (action.payload.moves == null){
      // console.log("IT WAS NULL");
      return {id: action.payload.id, moves: []};
    }
    return action.payload;
  }
  if (action.type === "NEW_GAME") {
    // console.log("turn state",state);
    return {id: 0, moves: []};
  }
  return state;
};
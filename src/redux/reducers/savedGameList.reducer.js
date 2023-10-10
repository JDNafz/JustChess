export const savedGameList = ( state = [], action) => {
  if (action.type === 'SET_SAVED_GAMES') {
    // console.log("\n\n\n\n\n\nAction.payload", action.payload)
    return action.payload
  }
  return state;
};
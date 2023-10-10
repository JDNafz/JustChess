export const savedGameList = ( state = [], action) => {
  if (action.payload === 'SET_SAVED_GAMES') {
    return action.payload
  }
  return state;
};
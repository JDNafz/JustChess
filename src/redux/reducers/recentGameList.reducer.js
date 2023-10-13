export const recentGamesList = ( state = [], action) => {
  if (action.type === 'SET_RECENT_GAMES') {
    return action.payload
  }
  return state;
};
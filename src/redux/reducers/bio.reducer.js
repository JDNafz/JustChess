export const bio = (state = "", action) => {
  if (action.type === "SET_BIO") {
    return action.payload;
  }
  return state;
};

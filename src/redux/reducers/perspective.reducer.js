
export const perspective = (state = true, action) => {
  if (action.type === "TOGGLE_PERSPECTIVE"){
    state = !state;
  }
  return state;
}
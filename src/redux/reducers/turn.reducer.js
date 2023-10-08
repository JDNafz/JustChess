export const turn = (state = 1, action) => {
  if (action.type === "TURN_STEP") {
    // console.log("turn state",state);
    return (state = state + 1);
  }
  if (action.type === "RESET_TURN") {
    // console.log("turn state",state);
    return 1;
  }
  return state;
};
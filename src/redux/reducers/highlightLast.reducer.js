export const highlightLast = (state = [], action) => {
  if (action.type === "HIGHLIGHT_LAST") {
    //TODO: highlight for special Moves
    const start = action.payload.slice(0,2);
    const end = action.payload.slice(2);
    return [start, end]
    }
  if (action.type === "RESET_HIGHLIGHT_LAST"){
    return []
  }
  return state;
};
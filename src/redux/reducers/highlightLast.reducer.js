export const highlightLast = (state = [], action) => {
  if (action.type === "HIGHLIGHT_LAST") {
    const start = action.payload.slice(0,2);
    const end = action.payload.slice(2);
    return [start, end]
    }
  return state;
};
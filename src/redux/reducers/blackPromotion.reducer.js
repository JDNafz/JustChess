export const blackPromotion = (state = false, action) => {
  if (action.type === "SET_BLACK_PROMOTION_TRUE") {
    return true;
  }
  if (action.type === "SET_PROMOTION_FALSE") {
    return false;
  }
  return state;
};

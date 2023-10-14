const initSelectedPiece = {
  coordinate: "",
  id: null,
  isBlack: null,
  piece: null,
  underAttackFromBlack: null,
  underAttackFromWhite: null,
  x: -1,
  y: -1,
};
export const selectedPiece = (state = initSelectedPiece, action) => {
  if (action.type === "SELECT_PIECE") {
    return action.payload.square;
  }
  if (action.type === "DESELECT_PIECE") {
    return initSelectedPiece;
  }
  return state;
};
import { defaultBoard } from "../../components/ChessComponents/calculationFunctions/defaultBoard.js";

export const board = (state = defaultBoard, action) => {
  if (action.type === "SET_BOARD") {
    console.log("in set board reducer");
    return action.payload;
  }
  if (action.type === "NEW_GAME") {
    // console.log("turn state",state);
    return defaultBoard;
  }
  return state;
};

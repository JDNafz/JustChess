// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Square from "../Square/Square";

// This component creates the 8x8 grid of pieces mapping through the board Array that contains all piece info.
export default function Board() {
  const board = useSelector((store) => store.board);
  const perspective = useSelector((store) => store.perspective);

  //standard map of board
  const whiteView = board.map((obj) => (
    <Square key={`sq${obj.id}`} id={obj.id} />
  ));
  //slice() creates a copy of whiteView as to avoid mutating the whiteView const
  const blackView = whiteView.slice().reverse();

  return <div id="board">{perspective ? whiteView : blackView}</div>;
}

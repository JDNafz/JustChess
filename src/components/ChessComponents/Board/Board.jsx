// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Square from "../Square/Square";

// This component creates the 8x8 grid of pieces mapping through the board Array that contains all piece info.
export default function Board() {
  const board = useSelector((store) => store.board);
  const flipThePerspective = useSelector((store) => store.perspective);
  const isWhiteTurn = useSelector((store) => store.isWhiteTurn);

  //standard map of board
  const whiteView = board.map((obj) => (
    <Square key={`sq${obj.id}`} id={obj.id} />
  ));
  //slice() creates a copy of whiteView as to avoid mutating the whiteView const
  const blackView = whiteView.slice().reverse();

  // this conditional will alternate the view based on whose turn it is.
  // if the flip board icon is clicked it will show the opposite view.
  const view =
    isWhiteTurn && !flipThePerspective ? whiteView : 
    isWhiteTurn && flipThePerspective ? blackView  : 
    flipThePerspective ? whiteView : blackView; // !isWhiteTurn is implied as this is the else

  return <div id="board">{view}</div>;
}

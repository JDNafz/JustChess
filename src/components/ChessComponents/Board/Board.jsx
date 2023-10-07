// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Square from "../Square/Square";

// This component creates the 8x8 grid of pieces mapping through the board Array that contains all piece info.
export default function Board() {
  const board = useSelector((store) => store.board);

  return (
    <div id="boardMargin">
      {board.map((obj) => {
        return <Square key={`sq${obj.id}`} id={obj.id} />;
      })}
    </div>
  ); //end return
} //end Board function

//Technically gif

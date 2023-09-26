// import getPiece from "../../modules/getPiece";
import Image from "../Image/Image";
import Coordinate from "../Coordinate/Coordinate";

import "./Square.css";
import { useState } from "react";

export default function Square({ id, board, updateBoard }) {
  const square = board[id];
  const [selectedPiece, setSelectedPiece] = useState("");
  // const dispatch = useDispatch();

  const greenShadow = "drop-shadow(-1px 3px 2px  rgb(29, 204, 87))";
  const handleClick = () => {
    console.log(square.coordinate, square.id);
    // dispatch({type: "SELECT_PIECE", payload: square.coordinate})
    setSelectedPiece(square.coordinate)
  };

  return (
    <>
      {square.coordinate === selectedPiece ? (
        <div
          className={`square ${square.isBlack ? "black" : "white"} selected`}
          onClick={handleClick}
        >
          <Coordinate coordinate={square.coordinate} />
          <Image key={`img${square.id}`} piece={square.piece} />
        </div>
      ) : (
        <div
          className={`square ${square.isBlack ? "black" : "white"} `}
          onClick={handleClick}
        >
          <Coordinate coordinate={square.coordinate} />
          <Image key={`img${square.id}`} piece={square.piece} />
        </div>
      )}
    </>
  );
}

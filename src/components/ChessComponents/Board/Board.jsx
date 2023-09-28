// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Square from "../Square/Square";
import { useValidPawnMoves } from "../../../hooks/useValidPawnMoves";

export default function Board() {
  const board = useSelector((store) => store.board);
  const {getValidPawnMoves} = useValidPawnMoves();
  // const turn = useSelector((store) => store.turn);

  
  
  
  
  
  //this function runs when a square is clicked in square.jsx(handleClick)
  function getLegalMoves(square, board) {
    // dispatch({type: "LEGAL_MOVES", payload: [3,4]})
    let legalMovesOutput = [-1, -1];
    // const piece = square.piece.slice(1);

    console.log("sliced piece", square.piece);
    switch (square.piece) {
      case "wp":
        return pawnMoves(square, board);
    }

    return [-1, -1];
  }
  
  function pawnMoves(square, board) {
    let legalMovesOutput;
    if (square.piece === "wp") {
      if (square.coordinate[1] === "2") {
      } // starting position
      for (let currSq = square.id; currSq <= 63; currSq + 8) {
        if (board.currSq.piece === null) {
          console.log(
            "piece found, able to move to: ",
            board.oneForwardID.coordinate
          );
          legalMovesOutput.push(board.oneForwardID.coordinate);
        } //end if empty space
      } // end for loop
    } //end 'wp'
    console.log("pawnMoves generated:", legalMovesOutput);
    return legalMovesOutput;

    // ifEmpty(1) fn

    //add one forward
    //ifEmpty(2)
    //add another forward
    //if diagonals are black
    //TODO RESUME
  }
  // square info:

  // coordinate: "d4"
  // id: 27
  // isBlack: false
  // piece: null
  // underAttackFromBlack: false
  // underAttackFromWhite: false
  // x: 3
  // y: 3

  return (
    <div id="boardMargin">
      {board.map((obj) => {
        return (
          <Square
            key={`sq${obj.id}`}
            id={obj.id}
            getLegalMoves={getLegalMoves}
          />
        );
      })}
    </div>
  ); //end return
} //end Board function

//Technically gif

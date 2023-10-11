// import getPiece from "../../modules/getPiece";
import { useDispatch, useSelector } from "react-redux";
import { useLegalMoves } from "../../../hooks/useLegalMoves"
import Image from "../Image/Image";
import Coordinate from "../Coordinate/Coordinate";
import makeSimpleMove from "../calculationFunctions/makeSimpleMove";
import "./Square.css";


export default function Square({ id }) {
  const { getLegalMoves } = useLegalMoves();

  const dispatch = useDispatch();
  const legalMoves = useSelector((store) => store.legalMoves);
  const selectedPiece = useSelector((store) => store.selectedPiece);
  const board = useSelector((store) => store.board);
  const gameLog = useSelector((store) => store.gameLog);
  const gameMode = useSelector((store) => store.gameMode);
  const square = board[id];

  const legalPlayClick = () => {
    const noSelectedPiece = selectedPiece.coordinate === "";
    const clickedAPiece = square.piece !== null;

    if (noSelectedPiece) {
      if (clickedAPiece) {
        dispatch({
          type: "SELECT_PIECE",
          payload: {
            square: square,
            validMoves: getLegalMoves(square),
          },
        });
      } 
    } else {
      if (square !== selectedPiece) {
        const foundLegalMove = legalMoves.filter(
          (move) => square.coordinate === move.coordinate
        );
        // tryToMakeMove(foundLegalMove, selectedPiece,square)
        if (foundLegalMove.length === 1) {
          const start = selectedPiece.coordinate;
          const end = square.coordinate;
          dispatch({
            type: "MAKE_MOVE",
            payload: {
              newBoard: makeSimpleMove(start, end, board),
              move: start + end,
              gameLog: gameLog,
            },
          });
        } else {
          dispatch({
            type: "SELECT_PIECE",
            payload: {
              square: square,
              validMoves: getLegalMoves(square),
            },
          });
        }
      } else {
        dispatch({ type: "DESELECT_PIECE" });
      }
    }
  };

  const freePlayClick = () => {
    const noSelectedPiece = selectedPiece.coordinate === "";
    const clickedAPiece = square.piece !== null;
    // console.log("Free play MODE");
    if (noSelectedPiece){
      if (clickedAPiece) {
        dispatch({ type:"SELECT_PIECE", payload: {square: square}})
      }
    } else {
      const start = selectedPiece.coordinate;
          const end = square.coordinate;
          dispatch({
            type: "MAKE_MOVE",
            payload: {
              newBoard: makeSimpleMove(start, end, board),
              move: start + end,
              gameLog: gameLog,
            },
          });
    }
  };

  let squareClass = `square ${square.isBlack ? "black" : "white"}`;
  if (square.coordinate === selectedPiece.coordinate) {
    squareClass += " selected";
  }
  const handleClick = gameMode === 0 ? freePlayClick : legalPlayClick;
  return (
    <>
      <div className={squareClass} onClick={handleClick}>
        <Coordinate coordinate={square.coordinate} />
        <Image key={`img${square.id}`} piece={square.piece} />
      </div>
    </>
  );
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

// -----------------------------------------------

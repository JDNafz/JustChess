// import getPiece from "../../modules/getPiece";
import { useDispatch, useSelector } from "react-redux";
import { useLegalMoves } from "../../../hooks/useLegalMoves";
import Image from "../Image/Image";
import Coordinate from "../Coordinate/Coordinate";
import makeSimpleMove from "../calculationFunctions/makeSimpleMove";
import makeSpecialMove from "../calculationFunctions/makeSpecialMove";

import "./Square.css";

export default function Square({ id }) {
  const dispatch = useDispatch();
  const { getLegalMoves } = useLegalMoves();

  const board = useSelector((store) => store.board);
  const gameLog = useSelector((store) => store.gameLog);
  const gameMode = useSelector((store) => store.gameMode);
  const isWhiteTurn = useSelector((store) => store.isWhiteTurn);
  const legalMoves = useSelector((store) => store.legalMoves);
  const selectedPiece = useSelector((store) => store.selectedPiece);
  const highlightLast = useSelector((store) => store.highlightLast);
  const showLegalMoves = useSelector((store) => store.showLegalMoves);
  const specialMoves = useSelector((store) => store.specialMoves);
  const square = board[id];

  const noSelectedPiece = selectedPiece.coordinate === "";
  const clickedAPiece = square.piece !== null;
  const isAPawn = clickedAPiece && square.piece.slice(1, 2) === "p"
  const isAKing = clickedAPiece && square.piece.slice(1, 2) === "k";

  const legalPlayClick = () => {
    //if no piece is selected select a piece (if it's not null)
    if (noSelectedPiece) {
      if (clickedAPiece) {
        const isWhite = square.piece[0] === "w";
        //check who's turn it is, only select on the proper turn
        if ((isWhiteTurn && isWhite) || (!isWhiteTurn && !isWhite)) {
          // if (true)
          let legalMoves = [];
          let specialMoves = [];
          if (
            square.piece.slice(1, 2) === "p" ||
            square.piece.slice(1, 2) === "k"
          ) {
            [legalMoves, specialMoves] = getLegalMoves(square);
          } else {
            legalMoves = getLegalMoves(square);
          }
          dispatch({
            type: "SELECT_PIECE",
            payload: {
              square: square,
              validMoves: legalMoves,
              specialMoves: specialMoves,
            },
          });
        }
      }
    } else {
      if (square !== selectedPiece) {
        //check if the current square is a legal move or special move
        const foundLegalMove = legalMoves.filter(
          (move) => square.coordinate === move.coordinate
        );
        const foundSpecialMove = specialMoves.filter(
          (move) => square.coordinate === move.coordinate
        );
        //if it's a special move
        if (foundSpecialMove.length === 1) {
          const start = selectedPiece.coordinate;
          const end = square.coordinate;
          if (square.piece === "wk") {
            dispatch({ type: "SET_WINNER", payload: "b" });
          } else if (square.piece === "bk") {
            dispatch({ type: "SET_WINNER", payload: "w" });
          }
          dispatch({
            type: "MAKE_MOVE",
            payload: {
              newBoard: makeSpecialMove(selectedPiece, square, board),
              move: start + end + "*",
              gameLog: gameLog,
            },
          });
          // if the square is a normal (legal) move
        } else if (foundLegalMove.length === 1) {
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
          // if the second sq clicked is null skip this, and just deselect
        } else if (square.piece !== null) {
          let legalMoves = [];
          let specialMoves = [];
          if (isAPawn || isAKing) {
            [legalMoves, specialMoves] = getLegalMoves(square);
          } else {
            legalMoves = getLegalMoves(square);
          }
          dispatch({
            type: "SELECT_PIECE",
            payload: {
              square: square,
              validMoves: legalMoves,
              specialMoves: specialMoves,
            },
          });
        }
      }
      //the second click did not make a move
      dispatch({ type: "DESELECT_PIECE" });

      //if you clicked a piece of the same color
      if (clickedAPiece){
        if (square.piece[0] === selectedPiece.piece[0]){
          selectPiece(square);
        }
      }
    }
  };

  function selectPiece(square){
    let legalMoves = [];
    let specialMoves = [];
    if (isAPawn || isAKing) {
      [legalMoves, specialMoves] = getLegalMoves(square);
    } else {
      legalMoves = getLegalMoves(square);
    }
    dispatch({
      type: "SELECT_PIECE",
      payload: {
        square: square,
        validMoves: legalMoves,
        specialMoves: specialMoves,
      },
    });
  }

  const freePlayClick = () => {
    const noSelectedPiece = selectedPiece.coordinate === "";
    const clickedAPiece = square.piece !== null;
    // console.log("Free play MODE");
    if (noSelectedPiece) {
      if (clickedAPiece) {
        dispatch({ type: "SELECT_PIECE", payload: { square: square } });
      }
    } else {
      const start = selectedPiece.coordinate;
      const end = square.coordinate;
      console.log(square);
      if (square.piece === "wk") {
        dispatch({ type: "SET_WINNER", payload: { bool: true, color: "b" } });
      } else if (square.piece === "bk") {
        dispatch({ type: "SET_WINNER", payload: { bool: true, color: "w" } });
      }
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

  //create classes for styling squares
  //basic black or white
  let squareClass = `square ${square.isBlack ? "black" : "white"}`;
  //highlight selected piece
  if (square.coordinate === selectedPiece.coordinate) {
    squareClass += " selected";
  }
  //highlight legal moves
  if (showLegalMoves) {
    for (let sq of legalMoves) {
      if (square.coordinate === sq.coordinate) {
        squareClass += " legalMove";
      }
    }
    for (let sq of specialMoves) {
      if (square.coordinate === sq.coordinate) {
        squareClass += " legalMove";
      }
    }
  }
  //highlight last move
  if (
    square.coordinate === highlightLast[0] ||
    square.coordinate === highlightLast[1]
  ) {
    squareClass += " highlightLast";
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

import { useSelector } from "react-redux";
// no default to name the export and force clarity in other areas of project

export function usePawn() {
  const board = useSelector((store) => store.board);
  const gameLog = useSelector((store) => store.gameLog);
  const moves = gameLog.moves;

  const getPawnMoves = (sP) => {
    const pieceColor = sP.piece[0];
    const isWhite = pieceColor === "w";
    const isStartingRow =
      // white starts in row 2 (indexed at 1)
      (pieceColor === "w" && sP.y === 1) ||
      //black starts in row 7(indexed at 6)
      (pieceColor === "b" && sP.y === 6);

    //if piece is white next move to sq to examine is y + 1
    // if black => y - 1
    const nextMoveYOne = pieceColor === "w" ? sP.y + 1 : sP.y - 1;
    //or + 2 or - 2
    const nextMoveYTwo = isStartingRow
      ? pieceColor === "w"
        ? sP.y + 2
        : sP.y - 2
      : null;

    const basicMoves = board.filter((sq, idx, board) => {
      const isOnSameX = sq.x === sP.x;
      const isValidOneSquareMove = sq.x === sP.x && sq.y === nextMoveYOne;
      const isValidTwoSquareMove =
        nextMoveYTwo && isOnSameX && sq.y === nextMoveYTwo;
      const squareIsNotOccupied = !sq.piece;
      return (
        (isValidOneSquareMove && squareIsNotOccupied) ||
        (isValidTwoSquareMove && squareIsNotOccupied)
      );
    });

    //bug where basicMoves was returning hopping over a piece to go to the second row.
    //This fixes that. TODO: Refactoring pawn movement calc would be great later
    const fixedMoves = basicMoves.filter((sq, idx, basicMoves) => {
      let difference;
      if (basicMoves.length === 1) {
        difference = sP.y - basicMoves[0].y;
        if (difference < 0) {
          difference = difference * -1;
        }
        if (difference === 1) {
          return true;
        }
      } else {
        return true;
      }
    });

    //check for attacking
    const whiteAttacks = board.filter((sq) => {
      if (
        (sP.x - 1 === sq.x &&
          sP.y + 1 === sq.y &&
          sq.piece !== null &&
          sP.piece[0] !== sq.piece[0]) ||
        (sP.x + 1 === sq.x &&
          sP.y + 1 === sq.y &&
          sq.piece !== null &&
          sP.piece[0] !== sq.piece[0])
      ) {
        return sq;
      }
    });
    const blackAttacks = board.filter((sq) => {
      if (
        (sP.x - 1 === sq.x &&
          sP.y - 1 === sq.y &&
          sq.piece !== null &&
          sP.piece[0] !== sq.piece[0]) ||
        (sP.x + 1 === sq.x &&
          sP.y - 1 === sq.y &&
          sq.piece !== null &&
          sP.piece[0] !== sq.piece[0])
      ) {
        return sq;
      }
    });

    //en passant
    let enPassantAttack;
    if (moves.length > 1) {
      checkEnPassant(sP, moves, board);
    }
    function checkEnPassant(sP, moves, board) {
      const lastMove = moves[moves.length - 1];
      const rowOfStart = lastMove.slice(1, 2);
      const rowOfFinish = lastMove.slice(3);
      const coordinateOfEnd = lastMove.slice(2);

      const lastSq = board.filter((sq) => sq.coordinate === coordinateOfEnd)[0];
      const lastPiece = lastSq.piece[1];
      const movedTwoSquares =
        (Number(rowOfStart) + Number(rowOfFinish)) % 2 === 0;

      if (lastPiece === "p" && movedTwoSquares) {
        const yCoordinateToAttack = rowOfStart === "2" ? 2 : 5;
        if (
          //make sure pawn can only make the en passant attack if white is in row 5 and black is in row 4 (zero indexed)
          (sP.y === 4 && sP.piece[0] === "w") ||
          (sP.y === 3 && sP.piece[0] === "b")
        ) {
          // check if last moved was in a column to the right
          if (lastSq.x + 1 === sP.x) {
            enPassantAttack = board.filter((sq) => {
              return sq.x === lastSq.x && sq.y === yCoordinateToAttack;
            });
            // check if last moved was in a column to the left
          } else if (lastSq.x - 1 === sP.x) {
            enPassantAttack = board.filter((sq) => {
              return sq.x === lastSq.x && sq.y === yCoordinateToAttack;
            });
          }
        }
      }
      // console.log("EnPassantAttack", enPassantAttack);
    }

    const attacks = isWhite ? whiteAttacks : blackAttacks;
    const validMoves = [...fixedMoves, ...attacks];

    //pass enPassant in as an array to maintain data shape( need for castling special moves)
    return [validMoves, enPassantAttack];
  };

  return { getPawnMoves };
}

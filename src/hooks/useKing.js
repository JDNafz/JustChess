import { useSelector } from "react-redux";

export function useKing() {
  const board = useSelector((store) => store.board);
  const gameLogFULL = useSelector((store) => store.gameLog);
  const gameLog = gameLogFULL.moves;

  function getKingMoves(sP) {
    const king8Squares = getKingBasics(sP, board);
    const notSameColor = checkForSame(king8Squares, sP.piece[0]);

    const castleMoves = getCastleMoves(sP, board, gameLog);

    const validMoves = notSameColor;
    return [validMoves, castleMoves];
  }
  return { getKingMoves };
}

function getKingBasics(sP, board) {
  const king8 = [
    [sP.x - 1, sP.y - 1],
    [sP.x - 1, sP.y],
    [sP.x - 1, sP.y + 1],
    [sP.x, sP.y + 1],
    [sP.x + 1, sP.y + 1],
    [sP.x + 1, sP.y],
    [sP.x + 1, sP.y - 1],
    [sP.x, sP.y - 1],
  ];
  const king8Squares = board.filter((sq) => {
    for (let coordinates of king8) {
      if (coordinates[0] === sq.x && coordinates[1] === sq.y) {
        return sq;
      }
    }
  });
  return king8Squares;
}
function getCastleMoves(sP, board, gameLog) {
  const whiteKingOrigin = "e1";
  const whiteARook = "a1";
  const whiteHRook = "h1";
  const blackKingOrigin = "e8";
  const blackARook = "a8";
  const blackHRook = "h8";

  let castleCoordinates = [];
  if (sP.coordinate === whiteKingOrigin) {
    if (!pieceHasMoved(whiteKingOrigin, gameLog)) {
      if (!pieceHasMoved(whiteARook, gameLog)) {
        if (spaceBetweenIsEmpty(whiteARook, board)) {
          castleCoordinates.push("c1");
        }
      }
      if (!pieceHasMoved(whiteHRook, gameLog)) {
        if (spaceBetweenIsEmpty(whiteHRook, board)) {
          castleCoordinates.push("g1");
        }
      }
    }
  } else {
    if (!pieceHasMoved(blackKingOrigin, gameLog)) {
      if (!pieceHasMoved(blackARook, gameLog)) {
        if (spaceBetweenIsEmpty(blackARook, board)) {
          castleCoordinates.push("c8");
        }
      }
      // console.log("1")
      if (!pieceHasMoved(blackHRook, gameLog)) {
        // console.log("2")
        if (spaceBetweenIsEmpty(blackHRook, board)) {
          console.log("3")
          castleCoordinates.push("g8");
        }
      }
    }
  }
  console.log("castleCoordiantes:", castleCoordinates)
  const castleMoves = board.filter((sq) => {
    for (let coordinate of castleCoordinates) {
      if (sq.coordinate === coordinate) {
        return sq;
      }
    }
  });

  return castleMoves;
}
function pieceHasMoved(piece, gameLog) {
  for (let move of gameLog) {
    if (move.includes(piece)) {
      return true;
    }
  }
  return false;
}
function spaceBetweenIsEmpty(rook, board) {
  if (rook === "a1") {
    const occupiedList = board.filter((sq) => {
      if (
        sq.coordinate === "b1" ||
        sq.coordinate === "c1" ||
        sq.coordinate === "d1"
      ) {
        if (sq.piece !== null) {
          return sq;
        }
      }
    });
    if (occupiedList.length < 1) {
      return true;
    }
    return false;
  }
  if (rook === "h1") {
    const occupiedList = board.filter((sq) => {
      if (sq.coordinate === "f1" || sq.coordinate === "g1") {
        if (sq.piece !== null) {
          return sq;
        }
      }
    });
    if (occupiedList.length < 1) {
      return true;
    }
    return false;
  }
  if (rook === "a8") {
    const occupiedList = board.filter((sq) => {
      if (
        sq.coordinate === "b8" ||
        sq.coordinate === "c8" ||
        sq.coordinate === "d8"
      ) {
        if (sq.piece !== null) {
          return sq;
        }
      }
    });
    if (occupiedList.length < 1) {
      return true;
    }
    return false;
  }
  if (rook === "h8") {
    const occupiedList = board.filter((sq) => {
      if (sq.coordinate === "f8" || sq.coordinate === "g8") {
        if (sq.piece !== null) {
          return sq;
        }
      }
    });
    if (occupiedList.length < 1) {
      return true;
    }
    return false;
  }
}
function checkForSame(list, pieceColor) {
  let result = [];
  for (let i = 0; i < list.length; i++) {
    //if sq is empty add to valid moves
    if (list[i].piece === null) {
      result.push(list[i]);
    } else {
      //if piece is a different color add it to valid moves
      if (pieceColor !== list[i].piece[0]) {
        result.push(list[i]);
        // console.log("I hit a piece i'll add it")
      }
    }
  }
  return result;
}

//code for checking if king is under attack( TODO )
// function getAllAttacks(board, kingColor) {
//   const oppositePieces = board.filter((sq) => {
//     if (sq.piece !== null) {
//       if (kingColor !== sq.piece[0]) {
//         return sq;
//       }
//     }
//   });

//   const attacked = [];
//   for (let sq of oppositePieces) {
//     attacked.push(getLegalMoves(sq));
//   }

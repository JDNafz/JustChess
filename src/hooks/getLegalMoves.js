


//this function runs when a square is clicked in square.jsx(handleClick)
function* getLegalMoves(square) {

  return [3,4]
  let legalMovesOutput = [];
  const piece = square.piece.slice(1);

  console.log("sliced piece", piece);
  switch (piece) {
    case "wp":
      return pawnMoves(piece,square);
  }

  return legalMovesOutput;
}

function pawnMoves(piece,square) {
  if (piece === "wp") {
    // ifEmpty(1) fn
    square.coordinate
      //add one forward
      //ifEmpty(2)
        //add another forward
    //if diagonals are black 
    //TODO RESUME
  } else {
    //bp
  }
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

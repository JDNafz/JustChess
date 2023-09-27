const startingBoard = require('../modules/startingBoard.js');
// const emptyBoard = require('../modules/emptyBoard.js')


// for each move in the database, recalculate history of moves
function checkState(data){
  let currentBoard = startingBoard;
  let currentTurn;

  //for each move in DB
  for (let row of data){
    const move = row.move
    const turn = row.turn

    currentTurn = turn;
    console.log(`CheckState.js: (Move: ${move} Turn: ${turn})`); 
    if (turn === 0 ){  // if turn is 0 give back starting board
      currentBoard = startingBoard 
    } else{
      currentBoard = simpleMove(currentBoard,move);
      // chessNotationReader(currentBoard,move)
    }//end else
  }//end for loop
  currentTurn = currentTurn + Number(1)
  return {currentBoard, currentTurn}
}//end checkState




function simpleMove(currentBoard,move){
  //Identify the two pieces square coordiantes
  const start = move.slice(0,2);
  const end = move.slice(2);
  // console.log("SLICE'N",start,end);

  //map over board and assign start piece to 'movingPiece' and that square's location to null.
  let movingPiece;
  const removeStart = currentBoard.map(sq => {
    if (sq.coordinate === start) {
      // console.log("found start piece:",sq.piece);
      movingPiece = sq.piece; //assign pice moving to put into next map
      return ({
        ...sq,
        piece: null,
      })
    }
    return sq
  })

  //assign 'movingPiece' to ending coordinate
  const moveToEnd= removeStart.map(sq => {
    if (sq.coordinate === end) {
      return ({
        ...sq,
        piece: movingPiece,
      })
    }
    return sq
  })
  // this test was used to check moving from 'a1' to 'b1' the first two items in array.
  // console.log("changes made?", movingPiece ,moveToEnd[0],moveToEnd[1]) 

  return moveToEnd
}//end SimpleMove

module.exports = checkState;
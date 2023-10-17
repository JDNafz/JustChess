export default function checkVector(vector,pieceColor) {
  let result = [];
  // console.log(vector.length)
  for (let i = 0; i < vector.length; i++) {
    //if sq is empty add to valid moves
    // console.log(vector[i]);
    if (vector[i].piece === null) {
      result.push(vector[i]);
    } else {
      //if piece is a different color add it to valid moves
      if (pieceColor !== vector[i].piece[0]) {
        result.push(vector[i]);
        // console.log("I hit a piece i'll add it")
      }
      break; //a piece has been found, stop looking, rook can't jump over other pieces.
    }
  }
  return result;
}
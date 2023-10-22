// Import Statements:
import Bk from "./PiecesJSX/bk"
import Bq from "./PiecesJSX/bq"
import Bb from "./PiecesJSX/bb"
import Br from "./PiecesJSX/br"
// import Bnr from "./PiecesJSX/bnr"
import Bnl from "./PiecesJSX/bnl"
import Bp from "./PiecesJSX/bp"

import Wk from "./PiecesJSX/wk"
import Wq from "./PiecesJSX/wq"
import Wb from "./PiecesJSX/wb"
// import Wnr from "./PiecesJSX/wnr"
import Wnl from "./PiecesJSX/wnl"
import Wr from "./PiecesJSX/wr"
import Wp from "./PiecesJSX/wp"

export default function Image({coordinate}){

// var char;
let piece;
if (coordinate[1] === '7'){
  return(
  <>
    <Bp/>
  </>)
  }
if (coordinate[1] === '2'){
  // console.log('Wp')
  return <Wp/>
  
}

//switch statement to check all the non-pawns
switch(coordinate) {
  case 'e8':
    // char= 'bk';;
    piece= <Bk/>;
    break;
  case 'd8':
    // char= 'bq';
    piece= <Bq/>;
    break;
  case 'c8':
    // char= 'bb';
    piece= <Bb/>;
    break;
  case 'f8':
    // char= 'bb';
    piece= <Bb/>;
    break;
  case 'b8':
    // char= 'bnr';
    piece= <Bnl/>;
    break;
  case 'g8':
    // char= 'bnl';
    piece= <Bnl/>;
    break;
  case 'a8':
    // char= 'br';
    piece= <Br/>;
    break;
  case 'h8':
    // char= 'br';
    piece= <Br/>;
    break;
  case 'e1':
    // char= 'wk';
    piece= <Wk/>;
    break;
  case 'd1':
    // char= 'wq';
    piece= <Wq/>;
    break;
  case 'c1':
    // char= 'wb';
    piece= <Wb/>;
    break;
  case 'f1':
    // char= 'wb';
    piece= <Wb/>;
    break;
  case 'g1':
    // char= 'wnr';
    piece= <Wnl/>;
    break;
  case 'b1':
    // char= 'wnl';
    piece= <Wnl/>;
    break;
  case 'a1':
    // char= 'wr';
    piece= <Wr/>;
    break;
  case 'h1':
    // char= 'wr';
    piece= <Wr/>;
    break;
  default:
    // char = null;
    piece = null;
  }

  return(
    <>
      <div className="pieceImage">
        {piece}
      </div>
    </>
  )
}
//helper function in same location to import all at once



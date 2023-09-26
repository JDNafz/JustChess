// Import Statements:
import Bk from "./PiecesJSX/bk"
import Bq from "./PiecesJSX/bq"
import Bb from "./PiecesJSX/bb"
import Br from "./PiecesJSX/br"
import Bnr from "./PiecesJSX/bnr"
import Bnl from "./PiecesJSX/bnl"
import Bp from "./PiecesJSX/bp"

import Wk from "./PiecesJSX/wk"
import Wq from "./PiecesJSX/wq"
import Wb from "./PiecesJSX/wb"
import Wnr from "./PiecesJSX/wnr"
import Wnl from "./PiecesJSX/wnl"
import Wr from "./PiecesJSX/wr"
import Wp from "./PiecesJSX/wp"

export default function Image({piece}){
  // console.log(piece);
let imageComponent;
//switch statement to check all the non-pawns
switch(piece) {
  case 'bp':
    imageComponent= <Bp />;
    break;
  case 'bk':
    imageComponent= <Bk/>;
    break;
  case 'bq':
    imageComponent= <Bq/>;
    break;
  case 'bb':
    imageComponent= <Bb/>;
    break;
  case 'bnl':
    imageComponent= <Bnl/>;
    break;
  case 'bnr':
    imageComponent= <Bnr/>;
    break;
  case 'br':
    imageComponent= <Br/>;
    break;
  case 'wp':
    imageComponent= <Wp/>;
    break;
  case 'wk':
    imageComponent= <Wk/>;
    break;
  case 'wq':
    imageComponent= <Wq/>;
    break;
  case 'wb':
    imageComponent= <Wb/>;
    break;
  case 'wnl':
    imageComponent= <Wnl/>;
    break;
  case 'wnr':
    imageComponent= <Wnr/>;
    break;
  case 'wr':
    imageComponent= <Wr />;
    break;
  default:
    imageComponent = null;
  } //end switch

  return(
    <>
      <div className="pieceImage">
        {imageComponent}
      </div>
    </>
  )
}
//helper function in same location to import all at once



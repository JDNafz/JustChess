// import { useSelector } from "react-redux";
// no default to name the export and force clarity in other areas of project

// export
// function useKnight() {
// const board = useSelector((store) => store.board);

const makeAllMoves = require("../../server/modules/makeAllMoves");
const board = makeAllMoves(["a2e5", "e2d2", "e1b1"]);

function getKnightMoves(sP) {
  console.log("Searching for valid Knight Moves");
  const k8 = [
    [sP.x - 2, sP.y - 1],
    [sP.x - 2, sP.y + 1],
    [sP.x - 1, sP.y + 2],
    [sP.x + 1, sP.y + 2],
    [sP.x + 2, sP.y + 1],
    [sP.x + 2, sP.y - 1],
    [sP.x + 1, sP.y - 2],
    [sP.x - 1, sP.y - 2],
  ];
  const validMoves = board.filter((sq) => {
    for (pair of k8) {
      if (pair[0] === sq.x && pair[1] === sq.y) {
        return sq;
      }
    }
  });

  console.log("valid moves:", validMoves);
  return validMoves;
}
//   return { getKnightMoves };
// }

const example = {
  id: 36,
  coordinate: "e5",
  x: 4,
  y: 4,
  piece: "wn",
  underAttackFromWhite: false,
  underAttackFromBlack: false,
  isBlack: false,
};

getKnightMoves(example);

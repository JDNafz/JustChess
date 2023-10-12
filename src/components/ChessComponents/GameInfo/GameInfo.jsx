import { useSelector } from 'react-redux';
import './GameInfoTheUnCursed.css'

export default function GameInfo() {
  const gameLog = useSelector((store) => store.gameLog);

  //TODO: convert to table instead of list
  const moves = gameLog.moves;
  const tableContent = moves.map((move, idx) => {
    if (idx === moves.length - 1 && moves.length % 2 === 1) {
      return (
        <tr key={`move${idx}`}>
          <td>{idx/2 + 1}</td>
          <td>{move}</td>
          <td>  </td>
        </tr>
      );
    } else {
      if (idx % 2 === 0) {
        return (
          <tr key={`move${idx}`}>
            <td>{idx/2 + 1}</td>
            <td>{move}</td>
            <td>{moves[idx + 1]}</td>
          </tr>
        );
      }
    }
  })



  return (
    <div id="gameInfo">
      <p>Currently only working when logged in*</p>
      <table>
        <thead>
          <tr>
            <th>Turn</th>
            <th> </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
        {tableContent}
        </tbody>
      </table>
    </div>
  );
}

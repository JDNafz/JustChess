import { useState, useEffect } from 'react';
import Board from '../ChessComponents/Board/Board';
import Header from "../ChessComponents/Header/Header";
import axios from 'axios';
import FormInput from '../ChessComponents/FormInput/FormInput';
import './Chess.css'

export default function Chess() {
    const [board, setBoard] = useState([]);
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [turn, setTurn] = useState(1);

    const getBoard = () => {
      // console.log('turn:', turn);
      axios.get('/board')
      .then(
        (response) => {
          // {currentBoard, currentTurn}
          // console.log("got new board");
          // setBoard(response.data);
          setBoard(response.data.currentBoard);
          setTurn(response.data.currentTurn);
        }).catch((error) => {
          console.log('GET /creatures error', error);
        });
      }


    useEffect(() => {
        getBoard();

    },[]);


    // console.log(board);
    return(
      <div id="background">
        <Header />
        <div id="boardAndInput">

        <FormInput 
          setStart={setStart} start={start} 
          setEnd={setEnd} end={end} 
          turn={turn} getBoard={getBoard} 
          />
        <Board board={board} />
        </div>
        
        {/* <div>Below the Board</div> */}
      </div>
    );



}//end Board





//TODO LIST

//import startingState into js file on server
    //return it as "GET GAME"

//start moving pieces on node server without DB
//client just syncs after piece load to sync "STATE"

//move calc comes from client before getting to server 
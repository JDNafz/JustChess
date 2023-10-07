import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './WelcomePage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

export default function WelcomePage() {
  const history = useHistory();

  return (
    <div className="container">

      <div className="grid">
        <div className="grid-col grid-col_6">
      <h1 id="welcome">Welcome <br/> to JustChess</h1>
          <p>
          JustChess (JC by JD) is exactly what it sounds like, it’s just chess. 
          A simple two player board game brought to the web to play online, move
          pieces around the board and capture other pieces until you can capture 
          the enemy king.
          </p>

          <p>
          Chess is a game hundreds of years old. People play chess to be mentally 
          stimulated, it’s fun to create plans, and adapt to your opponent. Chess 
          brings people together to talk theory, game plans, compete and generally 
          connect with others. Planning chess online allows players to forego the 
          need for a physical board and play remotely from anywhere in the world. 
          JustChess lets you play online with a computer or your friends and keeps 
          the game simple and peaceful, without adding too much noise to the experience.
          </p>

        </div>
        <div className="grid-col grid-col_4 loginDiv">
          <RegisterForm />

          <center>
            <button className="btn btn_sizeSm" onClick={ () => history.push('/register')}>
              Sign Up!
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}


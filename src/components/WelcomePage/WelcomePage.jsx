import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./WelcomePage.css";

// import RegisterForm from '../RegisterForm/RegisterForm';
import LoginForm from "../Auth/LoginForm/LoginForm";
import { useSelector } from "react-redux";

export default function WelcomePage() {
  const history = useHistory();
  const user = useSelector((store) => store.user);

  return (
    <div className="container WelcomePage">
      <h1 className="welcome">
        Welcome <br /> to JC by JD
      </h1>
      <div className="welcomeContent">
        {!user.id && (
          <div className="loginArea">
            <LoginForm />
            <div>
              <button className="btn" onClick={() => history.push("/register")}>
                Sign Up!
              </button>
            </div>
            <div className="loginNote">
              * * * Note * * * <br /> Login is needed for the app to run
              smoothly, feel free to use "user" "user" for username and
              password. Or create an account for your own experience.{" "}
            </div>
          </div>
        )}
        <div className="paragraphs">
          <p className="welcomeParagraph">
            JustChess (by JD) is exactly what it sounds like, it’s just chess. A
            simple two player board game brought to the web to play online, move
            pieces around the board and capture other pieces until you can
            capture the enemy king.
          </p>
          <p className="welcomeParagraph">
            Chess is a game hundreds of years old. People play chess to be
            mentally stimulated, it’s fun to create plans, and adapt to your
            opponent. Chess brings people together to talk theory, game plans,
            compete and generally connect with others. Planning chess online
            allows players to forego the need for a physical board and play
            remotely from anywhere in the world. JustChess lets you play online
            with a computer or your friends and keeps the game simple and
            peaceful, without adding too much noise to the experience.
          </p>
        </div>
      </div>
    </div>
  );
}

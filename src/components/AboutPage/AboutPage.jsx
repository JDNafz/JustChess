import React from "react";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="container">
      <div className="aboutDiv">
        <h1> Hi, my name is JD</h1>
        <p className="aboutText">
          JC by JD was created using PostgreSQL, Express, React, and Node (the
          PERN stack), as well as using Heroku for hosting the server and neon.tech for the database. Check it out on{" "}
          <a href="https://github.com/JDNafz/JustChess">Github</a>. Before
          getting into web development I started my career with a certification
          in Python Algorithms from AlgoExpert, and fell in love with solving
          complex problems using efficient and elegant code. This project is
          definitely super efficient nor elegant, but I'd love to take another
          pass at it after I get everything working 😅. To see my other projects
          checkout my <a href="https://www.jdnafziger.com">portfolio</a>.
        </p>
        <p className="aboutText">
          Besides coding, I have a passion for dance, especially West Coast
          Swing. I dance regularly in the Twin Cities and travel competing at
          national and international events. I also love taking care of my
          bonsai trees, may they remain small forever 💖
        </p>
        <p className="aboutText">
          Note to regular chess players: <br/>
          Check, checkmate, and stalemate are still in development, currently kill the king to win.
        </p>
        {/* <div className="socials">
          <span> WHATS UP</span>
          <a href="https://www.linkedin.com/in/jdnafziger/">
            <img src="public/linkedin.jpeg" /> HELLO
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default AboutPage;

import { useState } from "react";
import "../styles/Score.css";

export default function Score() {
  const [bestScore, setBestScore] = useState(0);
  let score = 0;
  return (
    <>
      <div className="title-container">
        <h1>Pokemon Memory Card Game</h1>
        <h2>
          Score: {score}
          <br />
          Best Score: {bestScore}
        </h2>
      </div>
    </>
  );
}

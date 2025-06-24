import { useState } from "react";
import "./App.css";

function App() {
  const [bestScore, setBestScore] = useState(0);
  let score = 0;
  return (
    <>
    <div className="title-container">
      <h1>Pokemon Memory Card Game</h1>
      <h2>Score: {score}<br/>Best Score: {bestScore}</h2>
    </div>
      <div className="container">
        <div className="card">
          <img src="658.png" />
          <div>Pokemon</div>
        </div>
        <div className="card">
          <img src="658.png" />
          <div>Pokemon</div>
        </div>
        <div className="card">
          <img src="658.png" />
          <div>Pokemon</div>
        </div>
        <div className="card">
          <img src="658.png" />
          <div>Pokemon</div>
        </div>
        <div className="card">
          <img src="658.png" />
          <div>Pokemon</div>
        </div>
        <div className="card">
          <img src="658.png" />
          <div>Pokemon</div>
        </div>
        <div className="card">
          <img src="658.png" />
          <div>Pokemon</div>
        </div>
        <div className="card">
          <img src="658.png" />
          <div>Pokemon</div>
        </div>
        <div className="card">
          <img src="658.png" />
          <div>Pokemon</div>
        </div>
        <div className="card">
          <img src="658.png" />
          <div>Pokemon</div>
        </div>
      </div>
    </>
  );
}

export default App;

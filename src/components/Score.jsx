import { useState } from "react";
import "../styles/Score.css";
import Cards from "./Cards";

export default function Score() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  function calculateScore(pokemonId, arrayOfSelectedPokemon) {
    if (!arrayOfSelectedPokemon.includes(pokemonId)) {
      const currScore = score + 1;
      setScore(currScore);
      if (currScore > bestScore) setBestScore(currScore);
      if (currScore === 10) {
        setSelectedPokemon([]);
        setScore(0);
        alert("You win!");
        return;
      }
      const newArr = [...selectedPokemon];
      newArr.push(pokemonId);
      setSelectedPokemon(newArr);
    } else {
      setSelectedPokemon([]);
      setScore(0);
      alert("You lose! You already chose that Pokemon :(");
    }
  }

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
      <Cards
        calculateScore={calculateScore}
        selectedPokemon={selectedPokemon}
      />
    </>
  );
}

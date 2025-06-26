import { useState } from "react";
import "../styles/Score.css";
import Cards from "./Cards";
import Modal from "./Modal";

export default function Score() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState("");

  function openModal(text) {
    setModalText(text);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function calculateScore(pokemonId, arrayOfSelectedPokemon) {
    if (!arrayOfSelectedPokemon.includes(pokemonId)) {
      const currScore = score + 1;
      setScore(currScore);
      if (currScore > bestScore) setBestScore(currScore);
      if (currScore === 10) {
        setSelectedPokemon([]);
        setScore(0);
        openModal("You win!");
        return;
      }
      const newArr = [...selectedPokemon];
      newArr.push(pokemonId);
      setSelectedPokemon(newArr);
    } else {
      setSelectedPokemon([]);
      setScore(0);
      openModal("You lose! You already chose that Pokemon :(");
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
      <Modal isOpen={isModalOpen} closeModal={closeModal} text={modalText} />
    </>
  );
}

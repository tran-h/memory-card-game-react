import { useEffect, useState } from "react";
import "../styles/Cards.css";

//Top 10 most popular Pokemon in 2021 according to https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_of_the_Year
let urls = [
  "https://pokeapi.co/api/v2/pokemon/dedenne",
  "https://pokeapi.co/api/v2/pokemon/cinccino",
  "https://pokeapi.co/api/v2/pokemon/sableye",
  "https://pokeapi.co/api/v2/pokemon/snivy",
  "https://pokeapi.co/api/v2/pokemon/magnemite",
  "https://pokeapi.co/api/v2/pokemon/swadloon",
  "https://pokeapi.co/api/v2/pokemon/pikachu",
  "https://pokeapi.co/api/v2/pokemon/buzzwole",
  "https://pokeapi.co/api/v2/pokemon/oshawott",
  "https://pokeapi.co/api/v2/pokemon/flygon",
];

export default function Cards({ calculateScore, selectedPokemon }) {
  const [pokemonList, setPokemonList] = useState([]);

  //shuffles an array using the Fisher-Yates shuffling algorithm
  function shuffleArray(arrayToShuffle) {
    const shuffledArray = [...arrayToShuffle];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }

  useEffect(() => {
    urls = shuffleArray(urls);
    const fetchAll = async () => {
      try {
        const responses = await Promise.all(urls.map((url) => fetch(url)));

        const jsonData = await Promise.all(
          responses.map((res) => {
            if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
            return res.json();
          })
        );
        setPokemonList(jsonData);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchAll();
  }, []);

  return (
    <div className="container">
      {pokemonList.map((pokemon) => (
        <div
          key={pokemon.id}
          className="card"
          onClick={() => {
            setPokemonList(shuffleArray(pokemonList));
            calculateScore(pokemon.id, selectedPokemon);
          }}
        >
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            alt={pokemon.name}
          />
          <div>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </div>
        </div>
      ))}
    </div>
  );
}

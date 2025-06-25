import { useEffect, useState } from "react";
import "../styles/Cards.css";

//Top 10 most popular Pokemon in 2021 according to https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_of_the_Year
const urls = [
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

export default function Cards() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
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
        <div key={pokemon.id} className="card">
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

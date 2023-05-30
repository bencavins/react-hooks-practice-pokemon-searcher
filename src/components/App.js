import React from "react";
import PokemonPage from "./PokemonPage";

import { useState, useEffect } from "react";

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(resp => resp.json())
    .then(pkmnData => setPokemon(pkmnData))
  }, [])

  return (
    <div className="App">
      <PokemonPage pokemonArray={pokemon} />
    </div>
  );
}

export default App;

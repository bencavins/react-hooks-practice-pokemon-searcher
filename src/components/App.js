import React from "react";
import PokemonPage from "./PokemonPage";

import { useEffect, useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(resp => resp.json())
    .then(data => setPokemon(data))
  }, [])

  return (
    <div className="App">
      <PokemonPage 
        pokemon={pokemon}
        setPokemon={setPokemon} />
    </div>
  );
}

export default App;

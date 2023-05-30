import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemonArray, search }) {

  const filteredPokemon = pokemonArray.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(
      search.toLowerCase()
    )
  })

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {filteredPokemon.map(pokemon => {
        return <PokemonCard key={pokemon.id} {...pokemon} />
      })}
    </Card.Group>
  );
}

export default PokemonCollection;

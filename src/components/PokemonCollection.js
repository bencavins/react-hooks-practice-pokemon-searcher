import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pkList, searchQuery}) {
  const filteredList = pkList.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(
      searchQuery.toLowerCase()
    )
  })

  return (
    <Card.Group itemsPerRow={6}>
      {filteredList.map(pokemon => {
        return <PokemonCard
                  name={pokemon.name}
                  hp={pokemon.hp}
                  sprites={pokemon.sprites} />
      })}
    </Card.Group>
  );
}

export default PokemonCollection;

import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) {
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokemon.map(pk => {
        // return <PokemonCard name={pk.name} hp={pk.hp} sprites={pk.sprites} />
        return <PokemonCard key={pk.id} {...pk} />
      })}
    </Card.Group>
  );
}

export default PokemonCollection;

import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pks }) {

  return (
    <Card.Group itemsPerRow={6}>
      {pks.map(pk => {
        return <PokemonCard key={pk.id} {...pk} />
      })}
    </Card.Group>
  );
}

export default PokemonCollection;

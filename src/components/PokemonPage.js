import React, { useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({ pokemon, setPokemon }) {
  const [search, setSearch] = useState("")

  const filteredPokemon = pokemon.filter(pk => {
    return pk.name.toLowerCase().includes(
      search.toLowerCase()
    )
  })

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm setPokemon={setPokemon} />
      <br />
      <Search setSearch={setSearch} />
      <br />
      <PokemonCollection pokemon={filteredPokemon} />
    </Container>
  );
}

export default PokemonPage;

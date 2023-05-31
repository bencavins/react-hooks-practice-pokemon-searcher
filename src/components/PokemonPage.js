import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
import { useState } from "react";

function PokemonPage({ pokemonArray, setPokemon }) {
  const [search, setSearch] = useState("")

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm setPokemon={setPokemon} />
      <br />
      <Search setSearch={setSearch} />
      <br />
      <PokemonCollection pokemonArray={pokemonArray} search={search} />
    </Container>
  );
}

export default PokemonPage;

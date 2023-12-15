import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(resp => resp.json())
    .then(jsonData => setPokemon(jsonData))
  }, [])

  const filteredPokemon = pokemon.filter(pk => {
    return pk.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemon={pokemon} setPokemon={setPokemon} />
      <br />
      <Search setSearch={setSearch} />
      <br />
      <PokemonCollection pokemon={filteredPokemon} />
    </Container>
  );
}

export default PokemonPage;

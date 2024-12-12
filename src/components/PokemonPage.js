import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pks, setPks] = useState([])
  const [searchString, setSearchString] = useState("")

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(resp => resp.json())
    .then(jsonData => setPks(jsonData))
  }, [])

  const filteredPks = pks.filter(pk => {
    if (pk.name.toLowerCase().includes(searchString)) {
      return pk
    }
  })

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm setPks={setPks} />
      <br />
      <Search setSearchString={setSearchString} />
      <br />
      <PokemonCollection pks={filteredPks} />
    </Container>
  );
}

export default PokemonPage;

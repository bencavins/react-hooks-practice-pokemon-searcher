import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pks, setPks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(resp => resp.json())
    .then(jsonData => setPks(jsonData))
  }, [])

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search />
      <br />
      <PokemonCollection pks={pks} />
    </Container>
  );
}

export default PokemonPage;

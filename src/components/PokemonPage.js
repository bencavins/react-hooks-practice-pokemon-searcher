import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pkList, setPkList] = useState([])
  const [searchQuery, setSearchQuery] = useState("")


  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then(resp => resp.json())
      .then(data => setPkList(data))
  }, [])

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm
        setPkList={setPkList} />
      <br />
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery} />
      <br />
      <PokemonCollection
        pkList={pkList}
        setPkList={setPkList}
        searchQuery={searchQuery} />
    </Container>
  );
}

export default PokemonPage;

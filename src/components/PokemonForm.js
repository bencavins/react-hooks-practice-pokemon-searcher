import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ pokemon, setPokemon }) {
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(event) => {
          event.preventDefault()

          const newPk = {
            "name": event.target.name.value,
            "hp": event.target.hp.value,
            "sprites": { 
              "front": event.target.frontUrl.value,
              "back": event.target.backUrl.value
            }
          }

          fetch("http://localhost:3001/pokemon", {
            method: 'POST',
            body: JSON.stringify(newPk),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(resp => resp.json())
          // .then(jsonData => setPokemon([...pokemon, jsonData]))
          .then(jsonData => setPokemon(prevPkmn => [...prevPkmn, jsonData]))

          // you can call setPokemon here instead (optimistic render)
          // setPokemon()
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;

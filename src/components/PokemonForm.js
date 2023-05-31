import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ setPokemon }) {
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(event) => {
          const newPkmn = {
            'name': event.target.name.value,
            'hp': event.target.hp.value,
            'sprites': {
              'front': event.target.frontUrl.value,
              'back': event.target.backUrl.value
            }
          }
          
          fetch("http://localhost:3001/pokemon", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPkmn)
          })
          .then(resp => resp.json())
          .then(newData => setPokemon(prev => [newData, ...prev]))
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

import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({setPkList}) {
  function handleSubmit(event) {
    event.preventDefault()

    // Build to pkmon using form data
    const newPokemon = {
      name: event.target.name.value, // event.target[0].value
      hp: event.target.hp.value,  // event.target[1].value
      sprites: {
        front: event.target.frontUrl.value, // event.target[2].value
        back: event.target.backUrl.value // event.target[3].value
      }
    }
    
    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(newPokemon)
    })
      .catch(error => console.log(error))
    
    setPkList(prev => [newPokemon, ...prev])
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
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

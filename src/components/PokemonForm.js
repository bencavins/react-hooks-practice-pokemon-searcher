import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ setPokemon }) {
  const [formData, setFormData] = useState({
    'name': "",
    'hp': "",
    'sprites': {
      'front': "",
      'back': ""
    }
  })

  function handleChange(event) {
    if (event.target.name === 'frontUrl') {
      setFormData(prev => {
        return {
          ...prev, 
          'sprites': {
            'front': event.target.value,
            'back': prev.sprites.back
          }
        }
      })
    } else if (event.target.name === 'backUrl') {
      setFormData(prev => {
        return {
          ...prev, 
          'sprites': {
            'front': prev.sprites.front,
            'back': event.target.value
          }
        }
      })
    } else {
      setFormData(prev => {
        return {
          ...prev, 
          [event.target.name]: event.target.value
        }
      })
    }
  }

  function handleSubmit(event) {
    event.preventDefault()

    // POST to the backend
    fetch("http://localhost:3001/pokemon", {
      'method': 'POST',
      'headers': {
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify(formData)
    })
    .then(resp => resp.json())
    .then(data => {
      // add to the front end
      setPokemon(prev => [...prev, data])
    })
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleChange} value={formData.name} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleChange} value={formData.hp} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleChange}
            value={formData.sprites.front}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleChange}
            value={formData.sprites.back}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;

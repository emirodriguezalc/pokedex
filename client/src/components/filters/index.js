import React, { useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

const Filters = ({ setFilterResults }) => {
  const [input, setInput] = useState(null)

  const handleChange = (e) => {
    setInput({ value: e.target.value });
  }

  const types = ['Normal', 'Fire', 'Water', 'Grass', 'Flying', 'Fighting', 'Poison', 'Electric', 'Ground', 'Rock', 'Psychic', 'Ice', 'Bug', 'Ghost', 'Steel', 'Dragon', 'Dark', 'Fairy']

  const handleSubmit = (name, filter, e) => {
    e.preventDefault()
    fetch(`/api/filters?${filter}=${name}`)
      .then(res => res.json())
      .then(json => setFilterResults(json));
  }

  return (
    <section className="filters">
      <DropdownButton id="dropdown-basic-button" title="Type">
        {types.map(type => <Dropdown.Item onClick={(e) => handleSubmit(type.toLowerCase(), 'type', e)}>{type}</Dropdown.Item>)}
      </DropdownButton>
      <form className="search-form" onSubmit={(e) => handleSubmit(input.value.toLowerCase(), 'ability', e)}>
        <input className="search-input" type="text" placeholder="Write an ability name" onChange={(e) => handleChange(e)}></input>
      </form>
    </section>
  )
}

export default Filters;

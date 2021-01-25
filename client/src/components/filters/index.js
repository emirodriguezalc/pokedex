import React, { useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import './Filters.css';

const Filters = ({ updateFilterResults, setLoading }) => {
  const [input, setInput] = useState("")

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const types = ['Normal', 'Fire', 'Water', 'Grass', 'Flying', 'Fighting', 'Poison', 'Electric', 'Ground', 'Rock', 'Psychic', 'Ice', 'Bug', 'Ghost', 'Steel', 'Dragon', 'Dark', 'Fairy']

  const handleSubmit = (name, filter, e) => {
    e.preventDefault()
    setLoading(true);
    setInput("");
    fetch(`/api/filters?${filter}=${name}`)
      .then(res => res.json())
      .then(json => updateFilterResults(json))
      .then(() => setLoading(false))
      .catch(function() {
        updateFilterResults(undefined)
    });
  }

  return (
    <section className="filters">
      <form className="search-form" onSubmit={(e) => handleSubmit(input.toLowerCase(), 'ability', e)}>
        <input className="search-input" type="text" placeholder="Write an ability name" value={input} onChange={(e) => handleChange(e)}></input>
      </form>
      <DropdownButton className="filters-dropdown" id="dropdown-basic-button" title="Pokemon type" variant="danger">
        {types.map(type => <Dropdown.Item onClick={(e) => handleSubmit(type.toLowerCase(), 'type', e)}>{type}</Dropdown.Item>)}
      </DropdownButton>
    </section>
  )
}

export default Filters;

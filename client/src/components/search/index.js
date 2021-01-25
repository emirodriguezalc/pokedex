import React, { useState } from 'react';
import './Search.css';

const Search = ({ updateSearchResults }) => {
  const [input, setInput] = useState(null)

  const handleChange = (e) => {
    setInput({ value: e.target.value.toLowerCase() });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = input.value;
    fetch(`api/pokemon/${text}`)
      .then(res => res.json())
      .then(data => updateSearchResults(data))
  }
  return (
    <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
      <input className="search-input" type="text" placeholder="Search for a pokemon" onChange={(e) => handleChange(e)}></input>
    </form>
  )
}

export default Search;

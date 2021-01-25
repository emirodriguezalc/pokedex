import React, { useState } from 'react';
import './Search.css';

const Search = ({ updateSearchResults, setLoading }) => {
  const [input, setInput] = useState("")

  const handleChange = (e) => {
    setInput(e.target.value.toLowerCase());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    setInput("");
    const text = input;
    fetch(`api/pokemon/${text}`)
      .then(res => res.json())
      .then(data => updateSearchResults(data))
      .then(() => setLoading(false));
  }
  return (
    <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
      <input value={input} className="search-input" type="text" placeholder="Search for a pokemon" onChange={(e) => handleChange(e)}></input>
    </form>
  )
}

export default Search;

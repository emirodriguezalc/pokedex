import React, { useState } from 'react';
import './Filters.css';

const Filters = ({ setSearchResults }) => {
 const [input, setInput] = useState(null)

 const handleChange = (e) => {
  setInput({ value: e.target.value });
 }

 const handleSubmit = (e) => {
  e.preventDefault();
  const text = input.value;
  fetch(`api/pokemon/${text}`)
   .then(res => res.json())
   .then(data => setSearchResults(data))
 }
 return (
  <form className="filters-form" onSubmit={(e) => handleSubmit(e)}>
   <input className="filters-input" type="text" placeholder="Search for a pokemon" onChange={(e) => handleChange(e)}></input>
  </form>
 )
}

export default Filters;
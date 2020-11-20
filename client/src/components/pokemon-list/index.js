import React, { useState } from 'react';
import './List.css';

const List = ({ filterResults }) => {
  return (
    <ul className="pokemon-list-wrapper">
      {
        filterResults.map(pokemon => {
          <li className="pokemon-list-item">{pokemon.name}, {pokemon.front_default} </li>
        })
      }
    </ul>
  )
}

export default List;

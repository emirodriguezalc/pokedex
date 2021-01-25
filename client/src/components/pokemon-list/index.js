import React, { useState } from 'react';
import ListDetail from '../list-detail'
import './List.css'

const List = ({ filterResults, searchResults, updateSearchResults }) => {
  const handleClick = (e, name) => {
    e.preventDefault()
    fetch(`api/pokemon/${name}`)
      .then(res => res.json())
      .then(data => updateSearchResults(data))
  }
  return (
    <>
      { filterResults && <ul className="pokemon-list-wrapper">
        {
          filterResults.map(pokemon => {
            return (
              <li className="pokemon-list-item">
                <h3 className="pokemon-list-item-name">{pokemon.pokemon.name}</h3> 
                <button className="pokemon-list-item-button" onClick={(e) => handleClick(e, pokemon.pokemon.name)}>More about {pokemon.pokemon.name}</button>
              </li>
            )

          })
        }
      </ul>
      }
      {
        searchResults && <ListDetail searchResults={searchResults}/>
      }
    </>
  )
}

export default List;

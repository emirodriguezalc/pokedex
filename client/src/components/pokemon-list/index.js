import React, { useState } from 'react';
import './List.css';

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
                {pokemon.pokemon.name}
                <button onClick={(e) => handleClick(e, pokemon.pokemon.name)}>See Details about {pokemon.pokemon.name}</button>
              </li>
            )

          })
        }
      </ul>
      }
      {
        searchResults && <section className="pokemon-detail">
          <h1>{searchResults.name}</h1>
          <h2>{searchResults.height}</h2>
          <h2>{searchResults.weight}</h2>
          <img src={searchResults.front_default} alt={searchResults.name} />{searchResults.front_shiny && <img src={searchResults.front_shiny} alt={'shiny'} />}
        </section>
      }
    </>
  )
}

export default List;

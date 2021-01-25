import React from 'react'
import './List-detail.css';

const ListDetail = ({ searchResults }) => {
    return (
        <section className="pokemon-detail">
            <h1 className="pokemon-detail-title">{searchResults.name} #{searchResults.id}</h1>
            <h2 className="pokemon-detail-info">Height: {searchResults.height}</h2>
            <h2 className="pokemon-detail-info">Weight: {searchResults.weight}</h2>
            <h2 className="pokemon-detail-abilities">Abilities</h2>
            <ul className="pokemon-detail-list">
                {searchResults.abilities && searchResults.abilities.map(ability => {
                    return(
                    <li className="pokemon-detail-list-item">
                        <h3>{ability.ability.name}</h3>
                    </li>)
                })}
            </ul>
            {searchResults.front_default && <img src={searchResults.front_default} alt={searchResults.name} />}
            {searchResults.front_shiny && <img src={searchResults.front_shiny} alt={'shiny'} />}
        </section>
    )
}

export default ListDetail;
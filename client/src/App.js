import './App.css';
import Search from './components/search';
import List from './components/pokemon-list';
import Filters from './components/filters';
import React, { useState } from 'react';

function App() {
  const [searchResults, setSearchResults] = useState(null);
  const [filterResults, setFilterResults] = useState(null);

  const updateSearchResults = (data) => {
    setSearchResults(data);
    setFilterResults(null);
  };

  const updateFilterResults = (data) => {
    setSearchResults(null);
    setFilterResults(data);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1 className="header-title">Gay Pokedex</h1>
      </header>
      <section className="app-filters">
        <Search updateSearchResults={updateSearchResults} />
        <Filters updateFilterResults={updateFilterResults} />
      </section>
      <section className="app-results">
        {(filterResults || searchResults) && <List filterResults={filterResults} searchResults={searchResults} updateSearchResults={updateSearchResults} />}
      </section>
    </div>
  );
}

export default App;

import './App.css';
import Search from './components/search';
import List from './components/pokemon-list';
import Filters from './components/filters';
import React, { useState } from 'react';

function App() {
  const [searchResults, setSearchResults] = useState(null);
  const [filterResults, setFilterResults] = useState(null);

  console.log(filterResults, searchResults);
  return (
    <div className="App">
      <header className="app-header">
        <h1 className="header-title">Gay Pokedex</h1>
      </header>
      <section className="app-filters">
        <Search setSearchResults={setSearchResults} />
        <Filters setFilterResults={setFilterResults} />
        {filterResults && <List filterResults={filterResults} />}
      </section>
    </div>
  );
}

export default App;

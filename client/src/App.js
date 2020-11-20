import './App.css';
import Search from './components/search';
import List from './components/pokemon-list';
import React, { useState } from 'react';

function App() {
  const [searchResults, setSearchResults] = useState(null);
  const [filterResults, setFilterResults] = useState(null);
  return (
    <div className="App">
      <header className="app-header">
        <h1 className="header-title">Gay Pokedex</h1>
      </header>
      <section className="app-filters">
        <Search setSearchResults={setSearchResults} />
        {filterResults && <List filterResults={filterResults} />}
      </section>
    </div>
  );
}

export default App;

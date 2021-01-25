import './App.css';
import Search from './components/search';
import List from './components/pokemon-list';
import Filters from './components/filters';
import React, { useState } from 'react';
import Footer from './components/footer';
import PokeSpinner from './components/pokespinner';

function App() {
  const [searchResults, setSearchResults] = useState(null);
  const [filterResults, setFilterResults] = useState(null);
  const [loading, setLoading] = useState(false);

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
      <section className="app-content">
      <header className="app-header">
        <h1 className="header-title">Gay Pokedex</h1>
      </header>
      <section className="app-filters">
        <Search updateSearchResults={updateSearchResults} setLoading={setLoading} />
        <Filters updateFilterResults={updateFilterResults} setLoading={setLoading} />
      </section>
      <section className="app-results">
      {
      loading &&
      <PokeSpinner />
      }
      {(filterResults || searchResults) && <List filterResults={filterResults} searchResults={searchResults} updateSearchResults={updateSearchResults} />}
      </section>
      </section>
      <section className="app-footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;

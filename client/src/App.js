import './App.css';
import Filters from './components/filters';
import React, { useState } from 'react';

function App() {
  const [searchResults, setSearchResults] = useState(null);
  return (
    <div className="App">
      <header className="app-header">
        <h1 className="header-title">Gay Pokedex</h1>
      </header>
      <section className="app-filters">
        <Filters setSearchResults={setSearchResults} />
      </section>
    </div>
  );
}

export default App;

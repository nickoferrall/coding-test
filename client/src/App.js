import React, { useState, useEffect } from 'react';
import SearchList from './components/SearchList';
import Filter from './components/Filter';

function App() {
  const [search, setSearch] = useState('');

  const handleChange = letter => {
    console.log('We;re in', letter.target.value);
    setSearch(letter.target.value);
  };

  console.log('Search..', search);

  return (
    <div>
      <h3>Our Store</h3>
      <Filter handleChange={handleChange} setSearch={setSearch} />
      <SearchList />
    </div>
  );
}

export default App;

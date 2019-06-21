import React, { useState, useEffect } from 'react';
import SearchList from './components/SearchList';
import Filter from './components/Filter';

function App() {
  return (
    <div>
      <h3>Our Store</h3>
      <Filter />
      <SearchList />
    </div>
  );
}

export default App;

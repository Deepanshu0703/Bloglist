import React, { useState } from 'react';

const SearchBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Search:</label>
      <input type="text" id="search" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;

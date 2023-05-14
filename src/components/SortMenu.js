import React, { useState } from 'react';

const SortMenu = ({ handleSort }) => {
  const [sortType, setSortType] = useState('');

  const handleSortChange = e => {
    setSortType(e.target.value);
    handleSort(e.target.value);
  };

  return (
    <div>
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" value={sortType} onChange={handleSortChange}>
        <option value="">Select</option>
        <option value="title">Title</option>
        <option value="date">Date</option>
      </select>
    </div>
  );
};

export default SortMenu;

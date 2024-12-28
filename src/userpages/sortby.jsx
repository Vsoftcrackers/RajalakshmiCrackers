
import React, { useState } from 'react';
import './sortby.css';

const SortBy = ({ onSort }) => {
  const [sortCriteria, setSortCriteria] = useState('');

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortCriteria(value);
    onSort(value); 
  };

  return (
      
    <div className="sort-container d-flex justify-content-center align-items-center" style={{ marginLeft: 30 }}>
     <select onChange={handleSortChange} value={sortCriteria}>
        <option value="">Sort By : </option>
        <option value="relevance">Sort by Relevance</option>
        <option value="low to high">Sort by Low to High</option>
        <option value="high to low">Sort by High to Low</option>
      </select>
    </div>

  );
};

export default SortBy;

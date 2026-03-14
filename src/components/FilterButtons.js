// src/components/FilterButtons.js
import React from 'react';

function FilterButtons({ currentFilter, setFilter }) {
  return (
    <div className="filter-buttons">
      <button 
        className={currentFilter === 'all' ? 'active' : ''}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button 
        className={currentFilter === 'active' ? 'active' : ''}
        onClick={() => setFilter('active')}
      >
        Active
      </button>
      <button 
        className={currentFilter === 'completed' ? 'active' : ''}
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
    </div>
  );
}

export default FilterButtons;
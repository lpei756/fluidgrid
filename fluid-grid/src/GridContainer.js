// src/GridContainer.js
import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import './GridContainer.css';

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1
};

const GridContainer = () => {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  // 根据当前过滤器计算显示的项目类
  const itemsToShow = items.filter(item => filter === 'all' || item.color === filter);

  return (
    <section className="grid-container">
      <ul className="toggle">
        <li>
          <input type="radio" name="item_type" id="green" className="green" onClick={() => handleFilterChange('green')} />
          <label htmlFor="green">Green</label>
        </li>
        <li>
          <input type="radio" name="item_type" id="red" className="red" onClick={() => handleFilterChange('red')} />
          <label htmlFor="red">Red</label>
        </li>
        <li>
          <input type="radio" name="item_type" id="all" className="all" onClick={() => handleFilterChange('all')} />
          <label htmlFor="all">All</label>
        </li>
      </ul>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="grid"
        columnClassName="my-masonry-grid_column">
        {itemsToShow.map((item, index) => (
          <a href="#" key={index}>
            <div className={`item ${item.color}`}>
              <p className="title">{item.title}</p>
            </div>
          </a>
        ))}
      </Masonry>
    </section>
  );
};

export default GridContainer;

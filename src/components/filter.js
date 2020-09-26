/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { PropTypes } from 'prop-types';

const CategoryFilter = (props) => {
  const categories = [
    'Breakfast',
    'Dessert',
    'Miscellaneous',
    'Pasta',
    'Side',
    'Starter',
    'Vegetarian',
  ];
  const { changeFilter } = props;
  const handleFilterChange = (ev) => changeFilter(ev.target.value);
  return (
    <div className="filter">
      <nav className="container">
        <a className="Coco" href="#">
          Recipi
        </a>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-danger dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Categories
          </button>
          <div className="dropdown-menu dropdown-menu-right">
            {categories.map((c) => (
              <button
                className="dropdown-item"
                onClick={handleFilterChange}
                type="button"
                value={c}
                key={c}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;

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
    'Vegan',
    'Vegetarian',
  ];
  const { changeFilter } = props;
  const handleFilterChange = (ev) => changeFilter(ev.target.value);
  return (
    <div className="filter">
      <select onChange={handleFilterChange}>
        {categories.map((c) => (
          <option value={c} key={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;

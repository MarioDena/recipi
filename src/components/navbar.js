/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from 'react';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();
  const handleFilterChange = (ev) => {
    changeFilter(ev.target.title);
    history.push('/');
  };
  return (
    <nav className="white darken-2">
      <ul id="dropdown1" className="dropdown-content">
        {categories.map((c) => (
          <li>
            <a
              href="javascript:void(0)"
              className="grey-text text-darken-4"
              onClick={handleFilterChange}
              title={c}
              key={c}
            >
              {c}
            </a>
          </li>
        ))}
      </ul>
      <ul className="sidenav" id="mobile-demo">
        <li>
          <div>
            <h5 className="center-align grey-text text-darken-4">Categories</h5>
          </div>
        </li>
        {categories.map((c) => (
          <li>
            <a
              href="javascript:void(0)"
              className="grey-text text-darken-4"
              onClick={handleFilterChange}
              title={c}
              key={c}
            >
              {c}
            </a>
          </li>
        ))}
      </ul>
      <div className="container">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo grey-text text-darken-4">
            Recipi
          </a>
          <a
            href="javascript:void(0)"
            data-target="mobile-demo"
            className="sidenav-trigger grey-text text-darken-4"
          >
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a
                className="dropdown-trigger grey-text text-darken-4"
                href="#!"
                data-target="dropdown1"
              >
                Categories
                <i className="material-icons right">arrow_drop_down</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;

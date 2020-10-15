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
    <div className="navbar-fixed">
      <nav className="black">
        <ul id="dropdown1" className="dropdown-content black">
          {categories.map((c) => (
            <li key={c}>
              <a href="/" onClick={handleFilterChange} title={c}>
                {c}
              </a>
            </li>
          ))}
        </ul>
        <ul className="sidenav" id="mobile-demo">
          <li key="TitleS">
            <div>
              <h5 className="center-align grey-text text-darken-4">
                Categories
              </h5>
            </div>
          </li>
          {categories.map((c) => (
            <li key={c}>
              <a
                href="/"
                className="grey-text text-darken-4"
                onClick={handleFilterChange}
                title={c}
              >
                {c}
              </a>
            </li>
          ))}
        </ul>
        <div className="container">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              Recipi
            </a>
            <a href="/" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a
                  className="dropdown-trigger"
                  href="#"
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
    </div>
  );
};

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;

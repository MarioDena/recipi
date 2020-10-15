import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterMeals } from '../actions/index';
import CategoryFilter from '../components/navbar';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

const mapDispatchToProps = (dispatch) => {
  return {
    changeCategory: (filter) => dispatch(filterMeals(filter)),
  };
};

const mapStateToProps = (state) => {
  return {
    category: state.filter,
  };
};

const App = (props) => {
  const { changeCategory } = props;
  const switchFilter = (filter) => {
    changeCategory(filter);
  };
  return (
    <BrowserRouter>
      <CategoryFilter changeFilter={switchFilter} />
    </BrowserRouter>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

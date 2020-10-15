import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { filterMeals } from '../actions/index';
import CategoryFilter from '../components/navbar';
import MealList from '../components/mealList';
import Meal from '../components/meal';
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
    meal: state.meal,
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
      <Route exact path="/" component={MealList} />
      <Route path="/meal/:mealID" component={Meal} />
    </BrowserRouter>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

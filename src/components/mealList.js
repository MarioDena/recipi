import React, { useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setMeals, setMeal } from '../actions/index';
import Mealpreview from './mealpreview';

const mapDispatchToProps = (dispatch) => {
  return {
    setMealsHandler: (meal) => dispatch(setMeals(meal)),
    setMealHandler: (meal) => dispatch(setMeal(meal)),
  };
};

const mapStateToProps = (state) => {
  return {
    meals: state.mealList,
    category: state.filter,
  };
};

const MealList = (props) => {
  const { meals, category, setMealsHandler, setMealHandler } = props;

  const getMealsAsync = (cat) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
      .then((res) => {
        setMealsHandler(res.data);
      });
  };

  useEffect(() => {
    getMealsAsync(category);
  }, [category]);

  return (
    <div>
      {meals ? (
        <div className="container white-text">
          <div className="row">
            <div className="catContent center-align valign">{category}</div>
            {meals.meals.map((meal) => (
              <Mealpreview
                meal={meal}
                key={meal.idMeal}
                image={meal.strMealThumb}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="container white-text">Loading...</div>
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MealList);

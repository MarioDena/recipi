import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setMeals, setMeal, clearMeal } from '../actions/index';
import Mealpreview from './mealpreview';

const mapDispatchToProps = (dispatch) => {
  return {
    setMealsHandler: (meal) => dispatch(setMeals(meal)),
    setMealHandler: (meal) => dispatch(setMeal(meal)),
    clearMealSelect: () => dispatch(clearMeal()),
  };
};

const mapStateToProps = (state) => {
  return {
    meals: state.mealList,
    category: state.filter,
  };
};

const MealList = (props) => {
  const {
    meals,
    category,
    setMealsHandler,
    setMealHandler,
    clearMealSelect,
  } = props;

  const getMealsAsync = (cat) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
      .then((res) => {
        setMealsHandler(res.data);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    clearMealSelect();
    getMealsAsync(category);
  }, [category]);

  return (
    <div>
      {meals ? (
        <div className="container white-text">
          <div className="row">
            <div className="catContent center-align">{category}</div>
            {meals.meals.map((meal) => (
              <Mealpreview
                meal={meal}
                key={meal.idMeal}
                selectMeal={setMealHandler}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="container">Loading...</div>
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MealList);

import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setMeals } from '../actions/index';
import Mealpreview from '../components/mealPreview';

const mapDispatchToProps = (dispatch) => {
  return {
    getMeals: (meal) => dispatch(setMeals(meal)),
  };
};

const mapStateToProps = (state) => {
  return {
    loading: state.mealListState.loading,
    meals: state.mealListState.meals,
    selectedMeal: state.meal,
    category: state.filter,
  };
};

const MealList = (props) => {
  const { loading, meals, getMeals, selectedMeal, category } = props;
  const getMealsAsync = (cat) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
      .then((res) => {
        getMeals(res.data);
      });
  };
  return (
    <div>
      <div>Navbar</div>
      {loading ? (
        <div>
          {selectedMeal === null ? (
            <div>Loading...{getMealsAsync(category)}</div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      ) : (
        <div>
          {selectedMeal === null ? (
            <div className="container">
              <div className="card-group">
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
            <div>Loading...</div>
          )}
        </div>
      )}
    </div>
  );
};

MealList.propTypes = {
  loading: PropTypes.bool.isRequired,
  meals: PropTypes.object,
  selectedMeal: PropTypes.object,
  category: PropTypes.string.isRequired,
};

MealList.defaultProps = {
  meals: {},
  selectedMeal: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(MealList);

import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  setMeals,
  filterMeals,
  reloadMeals,
  setMeal,
  unSetMeal,
} from '../actions/index';
import Mealpreview from '../components/mealPreview';
import CategoryFilter from '../components/filter';
import Meal from '../components/meal';
import loadingGif from '../assets/91.gif';

const mapDispatchToProps = (dispatch) => {
  return {
    getMeals: (meal) => dispatch(setMeals(meal)),
    changeCategory: (filter) => dispatch(filterMeals(filter)),
    updateMeals: () => dispatch(reloadMeals()),
    updateMeal: (meal) => dispatch(setMeal(meal)),
    deselectMeal: () => dispatch(unSetMeal()),
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
  const {
    loading,
    meals,
    getMeals,
    selectedMeal,
    category,
    changeCategory,
    updateMeals,
    updateMeal,
    deselectMeal,
  } = props;
  const getMealsAsync = (cat) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
      .then((res) => {
        window.scrollTo(0, 0);
        getMeals(res.data);
      });
  };
  const getMealAsync = (meal) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`)
      .then((res) => {
        window.scrollTo(0, 0);
        updateMeal(res.data.meals[0]);
      });
  };
  const switchFilter = (filter) => {
    changeCategory(filter);
    deselectMeal();
    updateMeals();
  };
  const lookupMeal = (id) => {
    getMealAsync(id);
  };

  const switchToCat = () => {
    deselectMeal();
  };

  return (
    <div>
      <div className="navbar navbar-expand-lg navbar-light bg-light sticky-nav">
        <CategoryFilter changeFilter={switchFilter} />
      </div>
      {loading ? (
        <div className="container">
          {selectedMeal === null ? (
            <div className="container ">
              <div className="container centered catTitle">
                <div className="catContent">{category}</div>
              </div>
              <div className="container centered">
                <div className="loaderContainer align-middle">
                  <div>
                    <img className="loading" src={loadingGif} alt="..." />
                    {getMealsAsync(category)}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="container ">
              <div className="container centered catTitle">
                <div className="catContent">{selectedMeal.strMeal}</div>
              </div>
              <div className="container centered">
                <div className="loaderContainer align-middle">
                  <div>
                    <img className="loading" src={loadingGif} alt="..." />
                    {switchToCat()}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          {selectedMeal === null ? (
            <div className="container ">
              <div className="container centered catTitle">
                <div className="catContent">{category}</div>
              </div>
              <div className="container centered">
                <div className="card-group">
                  {meals.meals.map((meal) => (
                    <Mealpreview
                      meal={meal}
                      key={meal.idMeal}
                      image={meal.strMealThumb}
                      selectMeal={lookupMeal}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="container ">
              <div className="container centered catTitle">
                <div className="catContent">{selectedMeal.strMeal}</div>
              </div>
              <div className="container centered">
                <div className="FullMealcontainer align-middle">
                  <Meal meal={selectedMeal} goBack={updateMeals} />
                </div>
              </div>
            </div>
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

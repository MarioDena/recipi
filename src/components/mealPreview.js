/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const Mealpreview = (props) => {
  const { meal, selectMeal } = props;
  const handleSelectMeal = () => {
    selectMeal(meal.idMeal);
  };

  return (
    <div key={meal.idMeal} className="meal">
      <div className="card">
        <img
          src={meal.strMealThumb}
          onClick={handleSelectMeal}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title font-weight-bold mb-2">{meal.strMeal}</h5>
          <button
            type="button"
            onClick={handleSelectMeal}
            className="btn btn-danger cook-btn"
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

Mealpreview.propTypes = {
  meal: PropTypes.object.isRequired,
  selectMeal: PropTypes.func.isRequired,
};

export default Mealpreview;

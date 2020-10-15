import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const Mealpreview = (props) => {
  const { meal, selectMeal } = props;
  const history = useHistory();
  const handleSelectMeal = () => {
    selectMeal(meal.idMeal);
    history.push(`/meal/${meal.idMeal}`);
  };
  const handleKeyDown = (key) => {
    if (key.key === 'Enter') {
      selectMeal(meal.idMeal);
      history.push(`/meal/${meal.idMeal}`);
    }
  };
  const shortenString = (origin, length) => {
    const short = origin.substr(0, length);
    if (/^\S/.test(origin.substr(length)))
      return `${short.replace(/\s+\S*$/, '')}...`;
    return short;
  };
  return (
    <div
      tabIndex="0"
      onClick={handleSelectMeal}
      role="button link"
      key={meal.idMeal}
      onKeyDown={handleKeyDown}
      className="col s12 m6 l4 mealcard"
    >
      <div className="imageGal">
        <img src={meal.strMealThumb} className="card-img-top" alt="..." />
        <div className="overlay">{shortenString(meal.strMeal, 30)}</div>
      </div>
    </div>
  );
};

Mealpreview.propTypes = {
  meal: PropTypes.object.isRequired,
  selectMeal: PropTypes.func.isRequired,
};

export default Mealpreview;

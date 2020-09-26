import React from 'react';
import PropTypes from 'prop-types';

const Meal = (props) => {
  const { meal, goBack } = props;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <img className="img-fluid" src={meal.strMealThumb} alt="..." />
        </div>
        <div className="col-md-5">
          <h3 className="my-3">Ingredients</h3>
          <ul>
            {meal.strIngredient1 ? (
              <li>
                {meal.strIngredient1}: {meal.strMeasure1}.
              </li>
            ) : (
              <div />
            )}
            {meal.strIngredient2 ? (
              <li>
                {meal.strIngredient2}: {meal.strMeasure2}.
              </li>
            ) : (
              <div />
            )}
            {meal.strIngredient3 ? (
              <li>
                {meal.strIngredient3}: {meal.strMeasure3}.
              </li>
            ) : (
              <div />
            )}
            {meal.strIngredient4 ? (
              <li>
                {meal.strIngredient4}: {meal.strMeasure4}.
              </li>
            ) : (
              <div />
            )}
            {meal.strIngredient5 ? (
              <li>
                {meal.strIngredient5}: {meal.strMeasure5}.
              </li>
            ) : (
              <div />
            )}
            {meal.strIngredient6 ? (
              <li>
                {meal.strIngredient6}: {meal.strMeasure6}.
              </li>
            ) : (
              <div />
            )}
            {meal.strIngredient7 ? (
              <li>
                {meal.strIngredient7}: {meal.strMeasure7}.
              </li>
            ) : (
              <div />
            )}
            {meal.strIngredient8 ? (
              <li>
                {meal.strIngredient8}: {meal.strMeasure8}.
              </li>
            ) : (
              <div />
            )}
            {meal.strIngredient9 ? (
              <li>
                {meal.strIngredient9}: {meal.strMeasure9}.
              </li>
            ) : (
              <div />
            )}
            {meal.strIngredient10 ? (
              <li>
                {meal.strIngredient10}: {meal.strMeasure10}.
              </li>
            ) : (
              <div />
            )}
            {meal.strIngredient11 ? (
              <li>
                {meal.strIngredient12}: {meal.strMeasure12}.
              </li>
            ) : (
              <div />
            )}
            {meal.strIngredient13 ? (
              <li>
                {meal.strIngredient13}: {meal.strMeasure13}.
              </li>
            ) : (
              <div />
            )}
            {meal.strIngredient14 ? (
              <li>
                {meal.strIngredient14}: {meal.strMeasure14}.
              </li>
            ) : (
              <div />
            )}
            {meal.strIngredient15 ? (
              <li>
                {meal.strIngredient15}: {meal.strMeasure15}.
              </li>
            ) : (
              <div />
            )}
            {meal.strIngredient16 ? (
              <li>
                {meal.strIngredient16}: {meal.strMeasure16}.
              </li>
            ) : (
              <div />
            )}
            {meal.strIngredient17 ? (
              <li>
                {meal.strIngredient17}: {meal.strMeasure17}.
              </li>
            ) : (
              <div />
            )}
            {meal.strIngredient18 ? (
              <li>
                {meal.strIngredient18}: {meal.strMeasure18}.
              </li>
            ) : (
              <div />
            )}
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 instructions">
          <h4 className="instruction2">Preparation</h4>{' '}
          <p className="instructions3">
            {meal.strInstructions
              .replaceAll('.  ', '.\n')
              .split('\n')
              .map((i) => {
                return <div key={i}>{i}</div>;
              })}
          </p>
          <button
            type="button"
            className="btn btn-danger float-right goback"
            onClick={goBack}
          >
            Back to the Menu!
          </button>
        </div>
      </div>
    </div>
  );
};

Meal.propTypes = {
  meal: PropTypes.object.isRequired,
  goBack: PropTypes.func.isRequired,
};

export default Meal;

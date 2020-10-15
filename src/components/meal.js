import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectMeal } from '../actions/index';

const mapDispatchToProps = (dispatch) => {
  return {
    selectCurrentMeal: (meal) => dispatch(selectMeal(meal)),
  };
};

const mapStateToProps = (state) => {
  return {
    meal: state.selectedMeal,
  };
};

const Meal = (props) => {
  const { meal, selectCurrentMeal } = props;
  const { mealID } = useParams();
  const getMealAsync = (mealid) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
      .then((res) => {
        selectCurrentMeal(res.data.meals[0]);
      });
  };

  useEffect(() => {
    getMealAsync(mealID);
  }, []);

  return (
    <div>
      {meal ? (
        <div className="container">
          <div className="row catContent white-text center-align valign">
            <div>{meal.strMeal}</div>
          </div>
          <div className="row valign-wrapper hide-on-small-only">
            <div className="col s12 m6 white-text">
              <div>
                <h4 className="my-3 center-align">Ingredients</h4>
                <ul className="center-align">
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
            <div className="col s12 m6">
              <img className="img-fluid" src={meal.strMealThumb} alt="..." />
            </div>
          </div>

          <div className="row hide-on-med-and-up">
            <div className="col s12 m6 white-text">
              <div>
                <h4 className="my-3 center-align">Ingredients</h4>
                <ul className="center-align">
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
            <div className="col s12 m6">
              <img className="img-fluid" src={meal.strMealThumb} alt="..." />
            </div>
          </div>
          <div className="row white-text center-align">
            <h4 className="instruction2">Preparation</h4>{' '}
            <div className="">
              <p className="instructions3 center-align">
                {meal.strInstructions
                  .replaceAll('.     ', '.\n')
                  .split('\n')
                  .map((i) => {
                    return (
                      <div className="forceCenter left-align" key={i}>
                        {i}
                      </div>
                    );
                  })}
              </p>
              <Link to="/" className="waves-effect waves-light btn findbtn">Back to the Menu</Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">Loading...</div>
      )}
    </div>
  );
};

Meal.defaultProps = {
  selectedMeal: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Meal);

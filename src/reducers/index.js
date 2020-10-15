import { combineReducers } from 'redux';
import filterReducer from './filter';
import mealReducer from './meal';
import mealListReducer from './mealList';
import selectedMealReducer from './selectedMeal';

const rootReducer = combineReducers({
  meal: mealReducer,
  filter: filterReducer,
  mealList: mealListReducer,
  selectedMeal: selectedMealReducer,
});

export default rootReducer;

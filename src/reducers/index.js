import { combineReducers } from 'redux';
import filterReducer from './filter';
import mealReducer from './meal';
import mealListReducer from './mealList';

const rootReducer = combineReducers({
  meal: mealReducer,
  filter: filterReducer,
  mealList: mealListReducer,
});

export default rootReducer;

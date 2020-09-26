export const setMeals = (mealsList) => ({
  type: 'GET_MEALS',
  meals: mealsList,
});
export const reloadMeals = () => ({ type: 'RELOAD_MEALS' });
export const filterMeals = (filter) => ({ type: 'CHANGE_FILTER', filter });
export const setMeal = (meal) => ({ type: 'SELECT_MEAL', meal });
export const unSetMeal = () => ({ type: 'DESELECT_MEAL' });

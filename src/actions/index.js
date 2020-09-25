export const setMeals = (mealsList) => ({
  type: 'GET_MEALS',
  meals: mealsList,
});
export const filterMeals = (filter) => ({ type: 'CHANGE_FILTER', filter });

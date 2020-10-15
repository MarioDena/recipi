export const filterMeals = (filter) => ({ type: 'CHANGE_FILTER', filter });
export const setMeals = (meals) => ({ type: 'SET_MEALS', meals });
export const setMeal = (meal) => ({ type: 'SELECT_MEAL', meal });
export const clearMeal = () => ({ type: 'DESELECT_MEAL' });
export const selectMeal = (meal) => ({ type: 'SET_MEAL', meal });

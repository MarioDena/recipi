const mealListReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_MEALS':
      return action.meals;
    case 'EMPTY_MEALS':
      return null;
    default:
      return state;
  }
};

export default mealListReducer;

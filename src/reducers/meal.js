const mealReducer = (state = null, action) => {
  switch (action.type) {
    case 'SELECT_MEAL':
      return action.meals;
    case 'DESELECT_MEAL':
      return null;
    default:
      return state;
  }
};

export default mealReducer;

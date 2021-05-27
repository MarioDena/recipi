const mealReducer = (state = null, action) => {
  switch (action.type) {
    case 'SELECT_MEAL':
      return action.meal;
    default:
      return state;
  }
};

export default mealReducer;

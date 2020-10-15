const selectedMealReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_MEAL':
      return action.meal;
    case 'DESELECT_MEAL':
      return null;
    default:
      return state;
  }
};

export default selectedMealReducer;

const initialState = {
  loading: true,
  meals: null,
};

const mealListReducer = (state = initialState, action) => {
  let newState = state;
  if (action.type === 'GET_MEALS') {
    newState = {
      loading: false,
      meals: action.meals,
    };
    return newState;
  }
  if (action.type === 'RELOAD_MEALS') {
    newState = {
      loading: true,
      meals: newState.meals,
    };
    return newState;
  }
  if (action.type === 'RELOAD_PAGE') {
    newState = {
      loading: true,
      meals: newState.meals,
    };
    return newState;
  }
  return newState;
};

export default mealListReducer;

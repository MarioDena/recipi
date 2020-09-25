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
  return newState;
};

export default mealListReducer;

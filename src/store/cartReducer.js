const INITIAL = 'INITIAL';

export const fetchInitial = (data) => ({
  type: INITIAL,
  data,
});

export const cartReducer = (state, action) => {
  switch (action.type) {
    case INITIAL:
      return [...action.data];
    default:
      return state;
  }
};

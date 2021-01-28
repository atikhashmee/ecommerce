const INITIAL = 'INITIAL';

export const fetchInitial = (data) => ({
  type: INITIAL,
  data,
});

export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case INITIAL:
      return [...action.data];
    default:
      return state;
  }
};

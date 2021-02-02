const INITIAL = 'INITIAL';
const ADD = 'ADD';

export const fetchInitial = (data) => ({
  type: INITIAL,
  data,
});

export const cartReducer = (state, action) => {
  switch (action.type) {
    case INITIAL:
      return [...action.data];
    case ADD:
      let product = action.data;
      if (state.indexOf(product) === -1) {
        return [...state, product];
      }
      if (state.length > 0) {
        state.forEach((element) => {
          if (element.id === product.id) {
            product.quantity++;
          }
        });
      }
      return state;
    default:
      return state;
  }
};

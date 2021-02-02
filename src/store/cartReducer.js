const INITIAL = 'INITIAL';
const ADD = 'ADD';
const TOGGLESIGNLE = "TOGGLESINGLE";
const TOGGLEALL = "TOGGLEALL";
const DELETECARTITEMS = "DELETEITEMS";

export const fetchInitial = (data) => ({
  type: INITIAL,
  data,
});

export const toggleSingle = (product_id) => ({
  type: TOGGLESIGNLE,
  data: product_id,
})

export const toggleAll = () => ({
  type: TOGGLEALL,
});
export const deleteItems = () =>({
  type: DELETECARTITEMS
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
    case TOGGLESIGNLE:
      let product_id = action.data;
      if (state.length > 0) {
        state.forEach((element) => {
          if (element.productId === product_id) {
            element.isChecked = !element.isChecked;
          }
        });
      }
      return state;
    case TOGGLEALL:
      if (state.length > 0) {
        state.forEach((element) => {
          element.isChecked = !element.isChecked;
        });
      }
      return state;
    case DELETECARTITEMS:
      if (state.length > 0) {
        state.forEach((element) => {
          if (element.isChecked) {
            state.splice(state.indexOf(element), 1);
          }
        });
      }
      return state;
    default:
      return state;
  }
};

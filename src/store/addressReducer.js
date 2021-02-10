const INITIAL = 'INITIAL';
const ADD = 'ADD';
const RESET = 'RESET';
const UPDATE = 'UPDATE';
const TOGGLESIGNLE = 'TOGGLESINGLE';
const TOGGLEALL = 'TOGGLEALL';
const DELETECARTITEMS = 'DELETEITEMS';

export const fetchInitial = (data) => ({
  type: INITIAL,
  data,
});

export const add = (data) => ({
  type: ADD,
  data,
});

export const resetArr = () => ({
  type: RESET,
});

export const updateData = (data) => ({
  type: UPDATE,
  data,
});

export const addressReducer = (state, action) => {
  switch (action.type) {
    case INITIAL:
      return [...action.data];
    case ADD:
      return [...state, action.data];
    case UPDATE:
      let updatedData = action.data;
      return state.map((element) => {
        if (element.id === updatedData.id) {
          element = updatedData;
        }
        return element;
      });
    case RESET:
      return [];
    default:
      return state;
  }
};

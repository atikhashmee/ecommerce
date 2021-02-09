const INITIAL = 'INITIAL';
const ADD = 'ADD';
const RESET = 'RESET';
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

export const addressReducer = (state, action) => {
  switch (action.type) {
    case INITIAL:
      return [...action.data];
    case ADD:
      return [...state, action.data];
    case RESET:
      return [];
    default:
      return state;
  }
};

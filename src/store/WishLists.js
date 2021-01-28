import {baseUrl} from '../env.json';
import {store_wish_lists, get_wish_lists, delete_wish_lists} from '../api.json';

export const wishState = {
  wishlists: [],
};

export const wishListsReducer = (state, action) => {
  var formdata = new FormData();
  let {user, product_id, auth_token} = action.payload;
  if ('user_id' in user) {
    formdata.append('user_id', user.user_id);
  }
  formdata.append('product_id', product_id);
  var myHeaders = new Headers();
  myHeaders.append('Authorization', 'Bearer ' + auth_token);
  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow',
  };
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      fetch(baseUrl + store_wish_lists, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.status) {
            //this.getWishLists();
            //refresh the lists
          }
          console.log(this, 'access this obj');
        })
        .catch((error) => console.log('error', error));
      break;
    case 'GET_WISHLISTS':
      fetch(baseUrl + get_wish_lists, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.status) {
            state.wishlists = result.data;
          }
        })
        .catch((error) => console.log('error', error));
      break;
    case 'DELETE_ITEM':
      fetch(baseUrl + delete_wish_lists, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.status) {
            state.wishlists = result.data;
          }
        })
        .catch((error) => console.log('error', error));
      break;
    case 'testing':
      console.log('hello world');
      break;
    default:
      return state;
  }
  return state;
};

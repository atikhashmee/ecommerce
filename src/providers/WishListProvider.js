import React from 'react';
import {WishListsContextTwo as Context} from '../utils/WishListsContextTwo';
import {wishlistReducer, fetchInitial} from '../store/wishListsUpdated';
import {baseUrl} from '../env.json';
import {get_wish_lists, delete_wish_lists, store_wish_lists} from '../api.json';
import {AppContext} from '../utils/GlobalContext';

export default function WishListProvider(props) {
  const [wishlists, wishlistDispatch] = React.useReducer(wishlistReducer, []);
  const {auth, isLoggedin} = React.useContext(AppContext);
  React.useEffect(() => {
    getAllWishLists();
  }, []);

  const getAllWishLists = () => {
    if (isLoggedin()) {
      var formdata = new FormData();
      formdata.append('user_id', auth.user.user_id);
      var myHeaders = new Headers();
      myHeaders.append('Authorization', 'Bearer ' + auth.auth_token);
      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      };
      fetch(baseUrl + get_wish_lists, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.status) {
            console.log(result.data, 'api response');
            wishlistDispatch(fetchInitial(result.data));
          }
        })
        .catch((error) => console.log('error', error));
    }
  };

  const deleteWishItem = (product_id) => {
    if (isLoggedin()) {
      var formdata = new FormData();
      formdata.append('user_id', auth.user.user_id);
      formdata.append('product_id', product_id);
      var myHeaders = new Headers();
      myHeaders.append('Authorization', 'Bearer ' + auth.auth_token);
      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      };
      fetch(baseUrl + delete_wish_lists, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.status) {
            getAllWishLists();
          }
        })
        .catch((error) => console.log('error', error));
    }
  };

  const AddToWishLists = (product_id) => {
    if (isLoggedin()) {
      var formdata = new FormData();
      formdata.append('user_id', auth.user.user_id);
      formdata.append('product_id', product_id);
      var myHeaders = new Headers();
      myHeaders.append('Authorization', 'Bearer ' + auth.auth_token);
      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      };
      fetch(baseUrl + store_wish_lists, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.status) {
            getAllWishLists();
          }
        })
        .catch((error) => console.log('error', error));
    }
  };

  return (
    <Context.Provider
      value={{wishlists, wishlistDispatch, deleteWishItem, AddToWishLists}}>
      {props.children}
    </Context.Provider>
  );
}

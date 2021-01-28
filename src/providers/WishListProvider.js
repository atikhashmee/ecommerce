import React from 'react';
import {WishListsContextTwo as Context} from '../utils/WishListsContextTwo';
import {wishlistReducer, fetchInitial} from '../store/wishListsUpdated';
import {baseUrl} from '../env.json';
import {get_wish_lists} from '../api.json';

export default function WishListProvider(props) {
  const [wishlists, wishlistDispatch] = React.useReducer(wishlistReducer, []);
  React.useEffect(() => {
    var formdata = new FormData();
    formdata.append('user_id', 3);
    var myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      'Bearer 10|5ayWgI5sJh8aXaezFuJOvi1VMG01qkJ8gziKFIgQ',
    );
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
  }, []);
  return (
    <Context.Provider value={{wishlists, wishlistDispatch}}>
      {props.children}
    </Context.Provider>
  );
}

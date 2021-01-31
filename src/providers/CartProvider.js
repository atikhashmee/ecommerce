import React from 'react';
import {cartReducer, fetchInitial} from '../store/cartReducer';
import {baseUrl} from '../env.json';
import {get_wish_lists, delete_wish_lists, store_wish_lists} from '../api.json';
import {CartContext} from '../utils/CartContext';
import {AppContext} from '../utils/GlobalContext';

export default function CartProvider(props) {
  const [items, setItems] = React.useState([]);
  const [cartItems, cartDispatch] = React.useReducer(cartReducer, items);
  const {auth, isLoggedin} = React.useContext(AppContext);

  const addToCart = (product) => {
    if (isLoggedin()) {
      console.log(product.variants, 'add to product wokring');
    }
  };

  return (
    <CartContext.Provider value={{cartItems, cartDispatch, addToCart}}>
      {props.children}
    </CartContext.Provider>
  );
}

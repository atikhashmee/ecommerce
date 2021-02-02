import React from 'react';
import {cartReducer, fetchInitial} from '../store/cartReducer';
import {baseUrl} from '../env.json';
import {get_wish_lists, delete_wish_lists, store_wish_lists} from '../api.json';
import {CartContext} from '../utils/CartContext';
import {AppContext} from '../utils/GlobalContext';
import {UtilityContext} from './AppUtilityProvder';

export default function CartProvider(props) {
  const [items, setItems] = React.useState([]);
  const [cartItems, cartDispatch] = React.useReducer(cartReducer, items);
  const {auth, isLoggedin} = React.useContext(AppContext);
  const {setHalfModalVisible} = React.useContext(UtilityContext);
  const [currentCartItem, setCurrentCartItem] = React.useState(null);

  const addToCart = (product) => {
    if (isLoggedin()) {
      setHalfModalVisible(true);
      setCurrentCartItem(product);
      //console.log(product.variants, 'add to product wokring');
    }
  };

  React.useEffect(()=>{
    //console.log(cartItems, 'items updated');
  }, [cartItems]);

  const addedToCart = (product) => {
    cartDispatch({type: 'ADD', data: product});
    //console.log(cartItems, 'itemss cart');
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartDispatch,
        addToCart,
        currentCartItem,
        setCurrentCartItem,
        addedToCart,
      }}>
      {props.children}
    </CartContext.Provider>
  );
}

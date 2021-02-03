import React from 'react';
import {cartReducer, fetchInitial} from '../store/cartReducer';
import {baseUrl} from '../env.json';
import {get_wish_lists, delete_wish_lists, store_wish_lists} from '../api.json';
import {CartContext} from '../utils/CartContext';
import {AppContext} from '../utils/GlobalContext';
import {UtilityContext} from './AppUtilityProvder';
import {toggleSingle, toggleAll} from '../store/cartReducer';

export default function CartProvider(props) {
  const [items, setItems] = React.useState([]);
  const [cartItems, cartDispatch] = React.useReducer(cartReducer, items);
  const {auth, isLoggedin} = React.useContext(AppContext);
  const {setHalfModalVisible} = React.useContext(UtilityContext);
  const [currentCartItem, setCurrentCartItem] = React.useState(null);
  const [selectedItem, setSelectedItem] = React.useState({
    productId: null,
    productName: '',
    quantity: 0,
    variantColor: '',
    variantSize: '',
    productPrice: 0,
    originalPrice: 0,
    isChecked: true,
    productFeatureImageUrl: null,
    isVariant: true,
  });

  const addToCart = (product) => {
    let cartItem = {
      productId: product.id,
      productName: product.name,
      quantity: 1,
      productPrice: product.price || 0,
      originalPrice: product.price || 0,
      isChecked: true,
      productFeatureImageUrl: product.feature_image_url,
      isVariant: product.variants.length > 0,
    };
    setSelectedItem(cartItem);
    console.log('no va', cartItem);
    if (cartItem.isVariant) {
      setHalfModalVisible(true);
      setCurrentCartItem(product);
    } else {
      cartDispatch({type: 'ADD', data: cartItem});
    }
    //if (isLoggedin()) {

    //}
  };

  React.useEffect(() => {
    //console.log(cartItems, 'items updated');
  }, [cartItems]);

  const addedToCart = (product) => {
    //console.log('added to cart', product);
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
        toggleSingle,
        toggleAll,
      }}>
      {props.children}
    </CartContext.Provider>
  );
}

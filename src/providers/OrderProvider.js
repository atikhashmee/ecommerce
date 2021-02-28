import React from 'react';
import {View} from 'react-native';
import {OrderContext as Context} from '../utils/OrderContext';
import {OrderReducer, fetchInitial} from '../store/OrderReducer';
import {AppContext} from '../utils/GlobalContext';
import {baseUrl} from '../env.json';
import {user_orders} from '../api.json';

export default function OrderProvider(props) {
  const [items, setItems] = React.useState([]);
  const [orders, orderDispatch] = React.useReducer(OrderReducer, items);
  const {auth, isLoggedin, setIsAuthModalOpen} = React.useContext(AppContext);
  const getUsersOrders = (obj = null) => {
    console.log(obj, 'ddd');
    if (isLoggedin()) {
      var myHeaders = new Headers();
      myHeaders.append('Authorization', 'Bearer ' + auth.auth_token);
      let query = 'all';
      if (obj) {
        query = obj;
      }
      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };

      fetch(baseUrl + user_orders + '?status=' + query, requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw response;
          }
          return response.json();
        })
        .then((result) => {
          if (result.status) {
            orderDispatch(fetchInitial(result.data));
          } else {
            if ('status_code' in result) {
              setIsAuthModalOpen(true);
            }
          }
          console.log('fetchedddd', orders.length);
        })
        .catch((error) => console.log('get wish lists', error));
    } else {
      //setIsAuthModalOpen(true);
    }
  };
  return (
    <Context.Provider value={{orders, orderDispatch, getUsersOrders}}>
      {props.children}
    </Context.Provider>
  );
}

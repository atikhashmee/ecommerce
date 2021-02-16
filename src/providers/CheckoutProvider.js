import React from 'react';
import {cartReducer, fetchInitial} from '../store/cartReducer';
import {baseUrl, store_id} from '../env.json';
import {country_data, place_orders, get_users_addresses} from '../api.json';
import {CheckoutContext} from '../utils/CheckoutContext';
import {AppContext} from '../utils/GlobalContext';
import {UtilityContext} from './AppUtilityProvder';
import {toggleSingle, toggleAll} from '../store/cartReducer';

export default function CheckoutProvider(props) {
  const [countries, setCountries] = React.useState([]);
  const [states, setStates] = React.useState([]);
  const [disctricts, setDistricts] = React.useState([]);
  const [userShippingAddress, setUserShippingAddress] = React.useState(null);
  const [userBillingAddress, setUserBillingAddress] = React.useState(null);
  const {auth, isLoggedin} = React.useContext(AppContext);
  const fetchCountryData = () => {
    fetch(baseUrl + country_data + '?store_id=' + store_id)
      .then((res) => res.json())
      .then((res) => {
        setCountries(res.countries);
        setStates(res.states);
        setDistricts(res.districts);
      }).catch(err=>{
        console.log('fetchCountryData', err);
      })
  };

  const userAddresses = () => {
    let forD = new FormData();
    forD.append('user_id', '3');
    fetch(baseUrl + get_users_addresses, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer 1|Qyy5ich8ulQTbGtZploXgNlqOVKd0CCIfKCIyhWa',
      },
      body: forD,
      redirect: 'follow',
    })
      .then((res) => res.json())
      .then((res) => {
        setUserShippingAddress(res.shipping);
        setUserBillingAddress(res.billing);
      }).catch(err=>{
        console.log('userAddresses ', err);
      })
  };

  const placeOrders = (dataObj) => {
    if (isLoggedin()) {
      var myHeaders = new Headers();
      let formD = new FormData;
      myHeaders.append('Authorization', 'Bearer ' + auth.auth_token);
      formD.append('shippingAddress', JSON.stringify(dataObj.shippingAddress));
      formD.append('billingAddress', JSON.stringify(dataObj.billingAddress));
      formD.append('paymentType', JSON.stringify(dataObj.paymentType));
      formD.append('grandTotal', dataObj.grandTotal);
      formD.append('items', JSON.stringify(dataObj.items));
      formD.append('user_id', dataObj.user_id);
      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formD,
        redirect: 'follow',
      };
      fetch(baseUrl + place_orders, requestOptions)
        .then((res) => {
          console.log('err log', res);
          if (!res.ok) {
            return res.text().then((text) => {
              console.log(text, 'loogggg');
              throw new Error(text);
            });
          }
          return res.json();
        })
        .then((res) => {
          console.log(res, 'api response');
        })
        .catch((err) => {
          console.log('checkout error', err);
        });
    }
  };

  React.useEffect(() => {
    fetchCountryData();
    userAddresses();
  }, []);

  return (
    <CheckoutContext.Provider
      value={{
        countries,
        states,
        disctricts,
        userShippingAddress,
        userBillingAddress,
        placeOrders,
      }}>
      {props.children}
    </CheckoutContext.Provider>
  );
}

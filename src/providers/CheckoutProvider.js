import React from 'react';
import {cartReducer, fetchInitial} from '../store/cartReducer';
import {baseUrl, store_id} from '../env.json';
import {country_data, get_users_addresses} from '../api.json';
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

  const fetchCountryData = () => {
    fetch(baseUrl + country_data + '?store_id=' + store_id)
      .then((res) => res.json())
      .then((res) => {
        setCountries(res.countries);
        setStates(res.states);
        setDistricts(res.districts);
      });
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
      });
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
      }}>
      {props.children}
    </CheckoutContext.Provider>
  );
}

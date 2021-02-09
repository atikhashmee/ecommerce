import React from 'react';
import {AddressContext} from '../utils/CheckoutContext';
import {
  addressReducer,
  fetchInitial,
  resetArr,
  add,
} from '../store/addressReducer';
import {
  get_address,
  store_address,
  update_address,
  delete_address,
} from '../api.json';
import {baseUrl} from '../env.json';
import {AppContext} from '../utils/GlobalContext';

export default function AddressProvider(props) {
  const [addresses, adrsDispacth] = React.useReducer(addressReducer, []);
  const {auth, isLoggedin} = React.useContext(AppContext);
  React.useEffect(() => {
    getAddress('shipping');
  }, []);

  const getAddress = (adrs_type) => {
    if (auth.user !== null) {
      var formdata = new FormData();
      formdata.append('user_id', auth.user.user_id);
      formdata.append('address_type', adrs_type);
      var myHeaders = new Headers();
      myHeaders.append('Authorization', 'Bearer ' + auth.auth_token);
      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      };
      fetch(baseUrl + get_address, requestOptions)
        .then((res) => res.json())
        .then((res) => {
          adrsDispacth(fetchInitial(res.data));
        });
    }
  };

  const addAddressBook = (data) => {
    if (auth.user !== null) {
      var formdata = new FormData();
      formdata.append('user_id', auth.user.user_id);
      formdata.append('address_type', data.address_type);
      formdata.append('country_id', data.country.id || 19);
      formdata.append('city', data.city.id || 1);
      formdata.append('state_id', data.district.id || 1);
      formdata.append('phone', data.phoneNumber);
      formdata.append('zip_code', data.zipCode);
      formdata.append('address_line_1', data.address);
      formdata.append('address_line_2', data.address1);
      formdata.append('name', data.name);
      var myHeaders = new Headers();
      myHeaders.append('Authorization', 'Bearer ' + auth.auth_token);
      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      };
      console.log('nentere');
      fetch(baseUrl + store_address, requestOptions)
        .then((res) => res.json())
        .then((res) => {
          console.log(res, 'res check');
          adrsDispacth(add(res.data));
        })
        .catch((err) => {
          console.log(err, 'err check');
        });
    }
    console.log(data, 'address book');
  };

  return (
    <AddressContext.Provider
      value={{
        addresses,
        resetArr,
        addAddressBook,
        adrsDispacth,
        getAddress,
        fetchInitial,
      }}>
      {props.children}
    </AddressContext.Provider>
  );
}

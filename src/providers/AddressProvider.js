import React from 'react';
import {AddressContext} from '../utils/CheckoutContext';
import {
  addressReducer,
  fetchInitial,
  resetArr,
  add,
  updateData,
} from '../store/addressReducer';
import {
  get_address,
  store_address,
  update_address,
  delete_address,
  get_address_lists,
} from '../api.json';
import {baseUrl} from '../env.json';
import {AppContext} from '../utils/GlobalContext';

export default function AddressProvider(props) {
  const [addresses, adrsDispacth] = React.useReducer(addressReducer, []);
  const {auth, isLoggedin} = React.useContext(AppContext);
  const [addressListsNew, setAddressListsNew] = React.useState([]);
  React.useEffect(() => {
    getAddress('shipping');
  }, []);



  const getAddressListsNew = () => {
    if (auth.user !== null) {
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
      fetch(baseUrl + get_address_lists, requestOptions)
        .then((res) => res.json())
        .then((res) => {
          setAddressListsNew(res.data);
        }).catch(err=>{
          console.log('getAdres lists', err);
        })
    }
  };

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
        }).catch(err=>{
          console.log('getAdres', err);
        })
    }
  };

  const addAddressBook = (data, callback) => {
    let finalUrl = null;
    var formdata = new FormData();
    if (data.formType === 'edit') {
      finalUrl = baseUrl + update_address + '/' + data.address_id;
      formdata.append('_method', 'PUT');
    } else if (data.formType === 'save') {
      finalUrl = baseUrl + store_address;
    }
    if (finalUrl === null) return;

    if (auth.user !== null) {
      formdata.append('user_id', auth.user.user_id);
      formdata.append('address_type', data.address_type);
      formdata.append('country_id', data.country_id);
      formdata.append('city', data.state_id);
      formdata.append('state_id', data.district_id);
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
      fetch(finalUrl, requestOptions)
        .then((res) => res.json())
        .then((res) => {
          if (data.formType === 'save') {
            adrsDispacth(add(res.data));
          } else if (data.formType === 'edit') {
            adrsDispacth(updateData(res.data));
          }
          callback(res);
        })
        .catch((err) => {
          console.log(err, 'err check');
        });
    }
  };

  return (
    <AddressContext.Provider
      value={{
        addresses,
        addressListsNew,
        resetArr,
        addAddressBook,
        adrsDispacth,
        getAddress,
        fetchInitial,
        getAddressListsNew,
      }}>
      {props.children}
    </AddressContext.Provider>
  );
}

import React, {useEffect} from 'react';
import {View} from 'react-native';

import {AppContext} from '../utils/GlobalContext';
import HomeTabs from '../Tabs/HomeTabs';
import {WishListsContext} from './../utils/WishListsContext';
import {WishListsContextOne} from '../utils/WishListsContextOne';
import {baseUrl} from '../env.json';
import {store_wish_lists, get_wish_lists} from '../api.json';

function Home() {
  let {auth, setInit, isLoggedin, setIsAuthModalOpen} = React.useContext(
    AppContext,
  );

  const [wishlist, setWishLists] = React.useState([]);

  useEffect(() => {
    setInit();
  }, []);
  let WishListsContextObj = React.useMemo(() => {
    return {
      async addToWishLists(product_id) {
        console.log(this, 'another this access');
        console.log(isLoggedin(), 'dd', auth);
        if (!isLoggedin()) {
          setIsAuthModalOpen(true);
          return;
        }
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
        await fetch(baseUrl + store_wish_lists, requestOptions)
          .then((response) => response.json())
          .then((result) => {
            if (result.status) {
              //this.getWishLists();
              //refresh the lists
            }
            console.log(this, 'access this obj');
          })
          .catch((error) => console.log('error', error));
      },
      wishlistData: wishlist,
      async getWishLists() {
        if (!isLoggedin()) {
          setIsAuthModalOpen(true);
          return;
        }
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
        await fetch(baseUrl + get_wish_lists, requestOptions)
          .then((response) => response.json())
          .then((result) => {
            if (result.status) {
              setWishLists(result.data);
            }
          })
          .catch((error) => console.log('error', error));
      },
    };
  }, [wishlist]);
  return (
    <WishListsContext.Provider value={WishListsContextObj}>
      <View style={{flex: 1}}>
        <HomeTabs />
      </View>
    </WishListsContext.Provider>
  );
}
export default Home;

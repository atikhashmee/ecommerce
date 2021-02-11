import React, {useState, useEffect} from 'react';
import {AppContext} from '../utils/GlobalContext';
import AppStyle from '../assets/style';
import {LocalStorage} from '../utils/LocalStorage';
import {baseUrl} from '../env.json';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent';
import Dashboard from './Dashboard';
import WishListProvider from '../providers/WishListProvider';
import CheckoutProvider from '../providers/CheckoutProvider';
import CartProvider from '../providers/CartProvider';
import AppUtilityProvder from '../providers/AppUtilityProvder';
import AddressProvider from '../providers/AddressProvider';

const defaultArr = {
  store_id: 1,
  api_token: '2y12QoRuPscrVSVZcPCREXSO9gcY8u0FQXP8EBmfMWnltjsoqyWhaNMO',
};
const Drawer = createDrawerNavigator();

const DrawerHolder = () => {
  let [products, setProducts] = useState([]);
  let [storeInfo, setStoreInfo] = useState(null);
  let [loadData, setLoadData] = useState(null);
  let [categories, setCategories] = useState([]);
  let [cartProducts, setCartProducts] = useState([]);
  let [sliders, setSliders] = useState([]);
  const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);
  let [homePageData, setHomePageData] = useState({
    products_lists: products,
    featured_category: [],
  });
  let [auth, setAuth] = useState({
    user: null,
    isLoggedin: false,
    auth_token: null,
  });

  useEffect(() => {
    if (loadData !== null) {
      setStoreInfo(loadData.data.store_details);
      let filteredCategory = loadData.data.section_details.filter(
        (item) => item.key !== 'slider_images' && item.elements.length !== 0,
      );
      setProducts(
        filteredCategory.map((item) => {
          if (item.key === 'feature_categories_visibility') {
            item.frontEndTag = 'category';
          } else {
            item.frontEndTag = 'product';
          }
          return item;
        }),
      );

      let sliders_items = [];
      let featuredCategories = [];
      loadData.data.section_details.forEach((item) => {
        if (item.key === 'slider_images') {
          sliders_items = item.elements;
        }
        if (item.key === 'feature_categories_visibility') {
          featuredCategories = item.elements;
        }
      });
      setSliders(sliders_items);
      setHomePageData({...homePageData, featured_category: featuredCategories});
    }
  }, [loadData]);

  useEffect(() => {
    if (categories.length > 0) {
      categories.forEach((ct) => {
        if (ct.items.length > 0) {
          ct.items.unshift({
            id: ct.id + '_',
            category_name: 'See All products',
            isOpened: false,
            items: [],
          });
          ct.items.forEach((subs) => {
            subs.isOpened = false;
          });
        }
      });
    }
  }, [categories]);

  useEffect(() => {
    LocalStorage.get('cart_items').then((res) => {
      setCartProducts(JSON.parse(res));
    });
  }, [cartProducts]);

  useEffect(() => {
    LocalStorage.get('auth').then((res) => {
      setAuth(JSON.parse(res));
    });
  }, [auth]);

  const appContextVal = React.useMemo(() => {
    return {
      setInit: async () => {
        let formD = new FormData();
        let requestOptions = {
          method: 'POST',
          body: formD,
          redirect: 'follow',
        };
        //formD.append('api_token', defaultArr.api_token);
        if (auth !== null && auth.user !== null) {
          var myHeaders = new Headers();
          myHeaders.append('Authorization', 'Bearer ' + auth.auth_token);
          requestOptions.headers = myHeaders;
        }

        formD.append('store_id', defaultArr.store_id);
        await fetch(baseUrl + 'home-content', requestOptions)
          .then((res) => {
            if (!res.ok) {
              throw res;
            }
            return res.json();
          })
          .then((res) => {
            setLoadData(res);
          })
          .catch((err) => {
            console.log(err);
          });
      },
      loadCategories: async () => {
        let formD = new FormData();
        formD.append('api_token', defaultArr.api_token);
        formD.append('store_id', defaultArr.store_id);
        await fetch(baseUrl + 'get-all-categories', {
          method: 'POST',
          body: formD,
        })
          .then((res) => {
            if (!res.ok) {
              throw res;
            }
            return res.json();
          })
          .then((res) => {
            setCategories(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      },
      loadProducts: async (category_id) => {
        let formD = new FormData();
        formD.append('api_token', defaultArr.api_token);
        formD.append('store_id', defaultArr.store_id);
        formD.append('category_id', category_id);
        return await fetch(baseUrl + 'get-category-products', {
          method: 'POST',
          body: formD,
        });
      },
      cartProducts,
      products,
      storeInfo,
      sliders,
      categories,
      auth,
      homePageData,
      isAuthModalOpen,
      setIsAuthModalOpen,
      categoryToggleItem(category_id, subCategory_id) {
        let modifyCate = [...categories];
        modifyCate.forEach((category) => {
          if (category.id === category_id) {
            if (category.items.length > 0) {
              category.items.forEach((subs) => {
                if (subs.id === subCategory_id) {
                  subs.isOpened = !subs.isOpened;
                }
              });
            }
          }
        });
        setCategories([...modifyCate]);
      },
      addToCart() {
        alert('added');
        // let productItems = [...cartProducts];
        // let is_there = false;
        // if (cartProducts.length > 0) {
        //   cartProducts.forEach((item) => {
        //     if (item.id === product.id) {
        //       is_there = true;
        //     }
        //   });
        // }

        // if (!is_there) {
        //   productItems.push(product);
        //   setCartProducts((cartProducts) => [...cartProducts, product]);
        // }
        // LocalStorage.put('cart_items', JSON.stringify(productItems)).then(
        //   (res) => {
        //     console.log(res, 'saved');
        //   },
        // );
      },
      removeFromCart(product) {
        let productItems = [...cartProducts];
        let is_there = false;
        if (cartProducts.length > 0) {
          cartProducts.forEach((item) => {
            if (item.id === product.id) {
              is_there = true;
            }
          });
        }

        if (is_there) {
          productItems.splice(productItems.indexOf(product), 1);
          setCartProducts([...productItems]);
        }
        console.log(productItems, productItems.length, 'lllll');
        LocalStorage.put('cart_items', JSON.stringify(productItems)).then(
          (res) => {
            console.log(res, 'saved');
          },
        );
      },
      modifyAuth: async (user, isLoggedin, auth_token) => {
        let auth_obj = {...auth};
        auth_obj.user = user;
        auth_obj.isLoggedin = isLoggedin;
        auth_obj.auth_token = auth_token;
        return await LocalStorage.put('auth', JSON.stringify(auth_obj)).then(
          () => {
            console.log(auth_obj, 'login auth obj');
            setAuth(auth_obj);
          },
        );
      },
      logout: async () => {
        let auth_obj = {...auth};
        auth_obj.user = null;
        auth_obj.isLoggedin = false;
        auth_obj.auth_token = null;
        return await LocalStorage.put('auth', JSON.stringify(auth_obj)).then(
          () => {
            console.log(auth_obj, 'logout auth obj');
            setAuth(auth_obj);
          },
        );
      },
      isLoggedin() {
        if (auth !== null) {
          if (auth.user !== null && auth.auth_token !== null) {
            return true;
          }
        }
        return false;
      },
    };
  }, [auth, isAuthModalOpen, loadData, storeInfo, categories, cartProducts]);
  return (
    <AppUtilityProvder>
      <AppContext.Provider value={appContextVal}>
        <CartProvider>
          <WishListProvider>
            <AddressProvider>
              <CheckoutProvider>
                <Drawer.Navigator
                  drawerType={'front'}
                  drawerStyle={{
                    width: 280,
                  }}
                  drawerContent={(props) => <CustomDrawerContent {...props} />}
                  drawerContentOptions={{
                    activeTintColor: '#535b6c',
                    itemStyle: AppStyle.drawerItem,
                    labelStyle: {fontSize: 17, fontWeight: 'bold'},
                  }}>
                  <Drawer.Screen
                    name="dashboard"
                    component={Dashboard}
                    options={{
                      title: 'Home',
                      // drawerIcon: () => (
                      //   <IonIcon name="md-home" size={30} color= '#ccc' />
                      // ),
                      style: {
                        borderWidth: 1,
                        borderColor: '#535b6c',
                      },
                    }}
                  />
                </Drawer.Navigator>
              </CheckoutProvider>
            </AddressProvider>
          </WishListProvider>
        </CartProvider>
      </AppContext.Provider>
    </AppUtilityProvder>
  );
};

export default DrawerHolder;

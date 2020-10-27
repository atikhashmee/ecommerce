import React, {PureComponent, useState, useEffect} from 'react';
import {AppContext} from '../utils/GlobalContext';
import {Button} from 'react-native';
import AppStyle from '../assets/style';
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent';
import Dashboard from './Dashboard';

const baseUrl = 'http://mpoints.xyz/api/';
const defaultArr = {
  store_id: 1,
  api_token: '2y12QoRuPscrVSVZcPCREXSO9gcY8u0FQXP8EBmfMWnltjsoqyWhaNMO',
};
const defaultheaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};
const Drawer = createDrawerNavigator();

const DrawerHolder = () => {
  let [products, setProducts] = useState([]);
  let [storeInfo, setStoreInfo] = useState(null);
  let [loadData, setLoadData] = useState(null);
  let [categories, setCategories] = useState([]);
  useEffect(() => {
    if (loadData !== null) {
      setStoreInfo(loadData.data.store_details);
      setProducts(
        loadData.data.section_details.map((item) => {
          if (item.key === 'feature_categories_visibility') {
            item.frontEndTag = 'category';
          } else {
            item.frontEndTag = 'product';
          }
          return item;
        }),
      );
    }
  }, [loadData]);

  useEffect(() => {
    if (categories.length > 0) {
      categories.forEach((ct) => {
        if (ct.items.length > 0) {
          ct.items.unshift({
            id: ct.id+'_',
            category_name: 'See All products',
            isOpened : false,
            items: [],
          });
          ct.items.forEach((subs) => {
            subs.isOpened = false;
          });
        }
      });
    }
  }, [categories]);
  const appContextVal = React.useMemo(() => {
    return {
      setInit: async () => {
        let formD = new FormData();
        formD.append('api_token', defaultArr.api_token);
        formD.append('store_id', defaultArr.store_id);
        await fetch(baseUrl + 'home-content', {
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
      products,
      storeInfo,
      categories,
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
    };
  }, [loadData, storeInfo, categories]);
  return (
    <AppContext.Provider value={appContextVal}>
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
    </AppContext.Provider>
  );
};

export default DrawerHolder;

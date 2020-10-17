import React, { PureComponent, useState, useEffect } from 'react';
import {AppContext} from '../utils/GlobalContext';
import { Button } from 'react-native';
import  AppStyle  from '../assets/style';
import { createDrawerNavigator, DrawerItem,  DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent'
import Dashboard from './Dashboard';

const baseUrl = 'http://mpoints.xyz/api/';
const defaultArr = {
  store_id: 1,
  api_token: '2y12QoRuPscrVSVZcPCREXSO9gcY8u0FQXP8EBmfMWnltjsoqyWhaNMO',
}
const defaultheaders = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};
const Drawer = createDrawerNavigator();

const DrawerHolder = () => {
    let [products, setProducts] = useState([]);
    let [storeInfo, setStoreInfo] = useState(null);
    let [loadData, setLoadData] = useState(null);
    let [categories, setCategories] = useState([
      {
        id: 1,
        name: 'category 1',
        subs: [
          {
            id: 1,
            name: 'C item 1',
            isOpened: false,
            items: [
              {
                id: 1, 
                name: 'item--1'
              },
              {
                id: 2, 
                name: 'item--2'
              },
              {
                id: 3, 
                name: 'item--3'
              },
            ]
          }
        ]
      },
      {
        id: 2,
        name: 'category 2',
        subs: [
          {
            id: 1,
            name: 'C item 2',
            isOpened: false,
            items: [
              {
                id: 1, 
                name: 'item--1'
              },
              {
                id: 2, 
                name: 'item--2'
              },
              {
                id: 3, 
                name: 'item--3'
              },
            ]
          }
        ]
      },
      {
        id: 3,
        name: 'category 3',
        subs: [
          {
            id: 1,
            name: 'C item 3',
            isOpened: false,
            items: []
          }
        ]
      }
    ]);
    useEffect(()=>{
      if (loadData!==null) {
        setStoreInfo(loadData.data.store_details);
        setProducts(loadData.data.section_details.map(item=>{
            if (item.key === 'feature_categories_visibility') {
                item.frontEndTag = 'category';
            }
            else
            {
              item.frontEndTag = 'product';
            }
            return item;
        }));
      }
    }, [loadData]);
    const appContextVal = React.useMemo(() => {
      return {
        setInit: async()=>{
          let formD = new FormData;
          formD.append('api_token', defaultArr.api_token);
          formD.append('store_id', defaultArr.store_id);
          await fetch(baseUrl + 'home-content', {
            method: 'POST',
            body: formD,
          })
          .then(res=>{
            if (!res.ok) {
              throw res;
            }
           return res.json()
          })
          .then(res=>{
            setLoadData(res);
          })
          .catch(err=>{
            console.log(err);
          });
        },
        products,
        storeInfo,
        categories,
        categoryToggleItem (category_id, subCategory_id)
        {
          let modifyCate = [...categories];
          modifyCate.forEach(category => {
            if (category.id === category_id) {
                if (category.subs.length>0) {
                  category.subs.forEach(subs => {
                    if (subs.id === subCategory_id) {
                        subs.isOpened = !subs.isOpened;
                    }
                  })
                }
            }
          });
          setCategories([...modifyCate]);
        }
      };
    }, [loadData, storeInfo, categories]);
    return (
      <AppContext.Provider value={appContextVal}>
          <Drawer.Navigator
            drawerType={'front'}
            drawerStyle={{
              width: 280,
            }}
            drawerContent={props => (
              <CustomDrawerContent {...props} />
            )}
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
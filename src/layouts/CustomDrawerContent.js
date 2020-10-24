import React, {PureComponent, useState, useEffect} from 'react';
import {AppContext} from '../utils/GlobalContext';
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Button, View, Text, Dimensions} from 'react-native';
import AppStyle from '../assets/style';

function CustomDrawerContent(props) {
  let {storeInfo} = React.useContext(AppContext);
  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <View
        style={{
          flex: 0.9,
          flexGrow: 18,
        }}>
        <DrawerContentScrollView
          {...props}
          style={{
            borderColor: 'rgba(182,180,180,0.82)',
            height: '100%',
            borderWidth: 1,
            padding: 8,
          }}>
          <View
            style={{
              flex: 1,
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>
              {' '}
              {storeInfo !== null && storeInfo.name}{' '}
            </Text>
          </View>
          <View
            style={{
              paddingVertical: 5,
              borderBottomColor: '#d4d4d4',
              borderBottomWidth: 1,
            }}
          />

          <DrawerItemList {...props} activeBackgroundColor="transparent" />
          <DrawerItem
            label="Sign In"
            labelStyle={{
              fontSize: 17,
              fontWeight: 'bold',
            }}
            //icon={() => <Icon name="user-outline" size={30} color="#000" />}
            style={AppStyle.drawerItem}
            onPress={() => {
              alert('sign In');
            }}
          />
          {/* <IonIcon name="md-home" size={30} color= '#ccc' /> */}
          <DrawerItem
            label="Wishlist"
            labelStyle={{
              fontSize: 17,
              fontWeight: 'bold',
            }}
            //icon={() => <IonIcon name="heart-outline" size={30} color="#000" />}
            style={AppStyle.drawerItem}
            onPress={() => {
              alert('wishlist');
            }}
          />
          <DrawerItem
            label="Contact Us"
            labelStyle={{
              fontSize: 17,
              fontWeight: 'bold',
            }}
            // icon={() => <IonIcon name="call-outline" size={30} color="#000" />}
            style={AppStyle.drawerItem}
            onPress={() => {
              alert('Contact US');
            }}
          />
        </DrawerContentScrollView>
      </View>
      {/* <View
          style={{
            flex: 0.03,
            flexGrow: 1,
            alignSelf: 'center',
            paddingTop: 10,
          }}>
        </View> */}
    </View>
  );
}
export default CustomDrawerContent;

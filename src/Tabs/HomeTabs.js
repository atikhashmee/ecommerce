import React from 'react';
import {Text, View, Modal, StyleSheet, Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import HomePage from '../tabComponents/HomePage';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Account from '../tabComponents/Account';
import CartView from '../tabComponents/CartView';
import WishLists from '../tabComponents/WishLists';

const initialLayout = {width: Dimensions.get('window').width};
export default function HomeTabs({navigation}) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'home', title: 'Home', icon: 'home-outline', color: '#020202'},
    {
      key: 'wishlist',
      title: 'WishLists',
      icon: 'heart-outline',
      color: '#020202',
    },
    {key: 'cart', title: 'Cart', icon: 'md-cart-outline', color: '#020202'},
    {
      key: 'Account',
      title: 'Account',
      icon: 'person-outline',
      color: '#020202',
    },
  ]);

  const renderScene = SceneMap({
    home: HomePage,
    cart: CartView,
    wishlist: WishLists,
    Account: Account,
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      tabBarPosition="bottom"
    />
  );
}

let renderIcon = ({route}) => (
  <Ionicons name={route.icon} size={24} color={route.color} />
);
const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#f8f8f8'}}
    labelStyle={{
      color: '#000',
      fontSize: 16,
      textTransform: 'capitalize',
      fontFamily: 'Oswald-Regular',
    }}
    bounces={true}
    style={{backgroundColor: '#eee'}}
    contentContainerStyle={{backgroundColor: '#fff'}}
    activeColor={{backgroundColor: '#fff', color: '#000'}}
    renderIcon={renderIcon}
  />
);
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

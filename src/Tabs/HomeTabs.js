import React from 'react';
import {Text, View, Modal, StyleSheet, Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import HomePage from '../tabComponents/HomePage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Account from '../tabComponents/Account';
import CartView from '../tabComponents/CartView';
import WishLists from '../tabComponents/WishLists';
import FooterTabs from '../layouts/FooterTabs';
import {
  Container,
  TabHeading,
  Icon,
  Header,
  Content,
  Tab,
  Tabs,
  Badge,
  FooterTab,
  Footer,
  Button,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {Pressable} from 'react-native';

const initialLayout = {width: Dimensions.get('window').width};

function Tab1() {
  return (
    <View>
      <Text>Tab 1</Text>
    </View>
  );
}
function Tab2() {
  return (
    <View>
      <Text>Tab 2</Text>
    </View>
  );
}
function Tab3() {
  return (
    <View>
      <Text>Tab 3</Text>
    </View>
  );
}
function Tab4() {
  return (
    <View>
      <Text>Tab 4</Text>
    </View>
  );
}
export default function HomeTabs() {
  const navigation = useNavigation();
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
    <Container>
      <Content> 
        <HomePage />
      </Content>
      <FooterTabs />
    </Container>
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
  }
});
// <TabView
//   renderTabBar={renderTabBar}
//   navigationState={{index, routes}}
//   renderScene={renderScene}
//   onIndexChange={setIndex}
//   initialLayout={initialLayout}
//   tabBarPosition="bottom"
// />

{
  /* <Container>
<Tabs style={{backgroundColor: '#fff'}} tabBarPosition={'bottom'}>
  <Tab
    heading={
      <TabHeading style={styles.tabHeading}>
        <Icon
          name="home-outline"
          style={styles.iconStyle}
          type="Ionicons"
        />
        <Text style={styles.tabTextStyle}>Home</Text>
      </TabHeading>
    }>
    <HomePage />
  </Tab>
  <Tab
    heading={
      <TabHeading style={styles.tabHeading}>
        <View>
          <Badge style={styles.badgeStyle} default>
            <Text style={styles.badgeTextStyle}>2</Text>
          </Badge>
          <Icon name="heart" style={styles.iconStyle} type="Feather" />
        </View>
        <Text style={styles.tabTextStyle}>WishList</Text>
      </TabHeading>
    }>
    <WishLists />
  </Tab>
  <Tab
    heading={
      <TabHeading style={styles.tabHeading}>
        <View>
          <Badge style={styles.badgeStyle} default>
            <Text style={styles.badgeTextStyle}>2</Text>
          </Badge>
          <Icon
            name="cart-outline"
            style={styles.iconStyle}
            type="Ionicons"
          />
        </View>
        <Text style={styles.tabTextStyle}>Cart</Text>
      </TabHeading>
    }>
    <CartView />
  </Tab>
  <Tab
    heading={
      <TabHeading style={styles.tabHeading}>
        <Icon name="user" style={styles.iconStyle} type="Feather" />
        <Text style={styles.tabTextStyle}>Account</Text>
      </TabHeading>
    }>
    <Account />
  </Tab>
</Tabs>
</Container> */
}

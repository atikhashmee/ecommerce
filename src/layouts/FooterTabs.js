import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
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
export default function FooterTabs() {
  const navigation = useNavigation();
  return (
    <Footer>
      <FooterTab>
        <Button
          active
          style={styles.tabHeading}
          onPress={() => {
            navigation.navigate('home');
          }}>
          <Icon name="home-outline" style={styles.iconStyle} type="Ionicons" />
          <Text style={styles.tabTextStyle}>Home</Text>
        </Button>
        <Button
          style={styles.tabHeading}
          onPress={() => {
            navigation.navigate('wishLists');
          }}>
          <View>
            <Badge style={styles.badgeStyle} default>
              <Text style={styles.badgeTextStyle}>2</Text>
            </Badge>
            <Icon name="heart" style={styles.iconStyle} type="Feather" />
          </View>
          <Text style={styles.tabTextStyle}>WishList</Text>
        </Button>
        <Button style={styles.tabHeading} onPress={() => {
            navigation.navigate('cart_view');
          }}>
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
        </Button>
        <Button style={styles.tabHeading}>
          <Icon name="user" style={styles.iconStyle} type="Feather" />
          <Text style={styles.tabTextStyle}>Account</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
}

const styles = StyleSheet.create({
  tabHeading: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 15,
  },
  iconStyle: {
    color: '#000',
  },
  badgeStyle: {
    position: 'absolute',
    top: -10,
    right: -5,
    zIndex: 10,
  },
  badgeTextStyle: {
    color: '#fff',
    fontSize: 13,
    borderRadius: 25,
  },
  tabTextStyle: {
    fontWeight: '600',
    fontSize: 17,
  },
});

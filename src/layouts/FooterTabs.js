import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon, Badge, FooterTab, Footer, Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import AuthModal from '../auth/AuthModal';
import {AppContext} from '../utils/GlobalContext';
import {WishListsContext} from '../utils/WishListsContext';

export default function FooterTabs() {
  const navigation = useNavigation();
  const {getWishLists} = React.useContext(WishListsContext);
  const {isLoggedin, isAuthModalOpen, setIsAuthModalOpen} = React.useContext(AppContext);
  function checkAuthenticate() {
    if (isLoggedin()) {
      navigation.navigate('account');
    } else {
      setIsAuthModalOpen(true);
    }
  }
  return (
    <Footer>
      <FooterTab style={{backgroundColor: '#fff'}}>
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
        <Button
          style={[styles.tabHeading, styles.middleIconContainer]}
          onPress={() => {
            navigation.navigate('cart_view');
          }}>
          <View style={styles.middleIcon}>
            <Icon
              name="cart-outline"
              style={{color: '#fff', fontSize: 30}}
              type="Ionicons"
            />
          </View>
        </Button>
        <Button
          style={styles.tabHeading}
          onPress={() => {
            navigation.navigate('cart_view');
          }}>
          <View>
            <Badge style={styles.badgeStyle} default>
              <Text style={styles.badgeTextStyle}>102</Text>
            </Badge>
            <Icon
              name="cart-outline"
              style={styles.iconStyle}
              type="Ionicons"
            />
          </View>
          <Text style={styles.tabTextStyle}>Cart</Text>
        </Button>
        <Button
          style={styles.tabHeading}
          onPress={() => {
            checkAuthenticate();
          }}>
          <Icon name="user" style={styles.iconStyle} type="Feather" />
          <Text style={styles.tabTextStyle}>Account</Text>
        </Button>
      </FooterTab>
      {isAuthModalOpen && (
        <AuthModal
          modalVisible={isAuthModalOpen}
          setModalVisible={setIsAuthModalOpen}
        />
      )}
    </Footer>
  );
}

const styles = StyleSheet.create({
  tabHeading: {
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  iconStyle: {
    color: '#000',
    fontSize: 17,
  },
  badgeStyle: {
    position: 'absolute',
    top: -5,
    right: 0,
    height: 20,
    zIndex: 10,
  },
  badgeTextStyle: {
    color: '#fff',
    fontSize: 10,
    borderRadius: 25,
  },
  tabTextStyle: {
    fontWeight: '600',
    fontSize: 15,
    fontFamily: 'UniNeue-Light',
  },
  middleIconContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    zIndex: 300,
  },
  middleIcon: {
    position: 'absolute',
    backgroundColor: '#000',
    zIndex: 300,
    elevation: 5,
    padding: 0,
    height: 65,
    width: 65,
    top: -20,
    right: -2,
    borderRadius: 50,
    textAlign: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
  },
});

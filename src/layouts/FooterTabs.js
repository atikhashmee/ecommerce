import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon, Badge, FooterTab, Footer, Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import AuthModal from '../auth/AuthModal';
import {AppContext} from '../utils/GlobalContext';
export default function FooterTabs() {
  const navigation = useNavigation();
  const [] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const {auth} = React.useContext(AppContext);
  function checkAuthenticate() {
    if (auth !== null) {
      if (auth.user !== null && auth.auth_token !== null) {
        navigation.navigate('account');
      } else {
        setIsModalOpen(true);
      }
    } else {
      setIsModalOpen(true);
    }
  }
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
      {isModalOpen && (
        <AuthModal
          modalVisible={isModalOpen}
          setModalVisible={setIsModalOpen}
        />
      )}
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
  },
});

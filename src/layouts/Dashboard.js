import React, {PureComponent, useState, useEffect} from 'react';
import {Button, TouchableOpacity, View, Dimensions, Text, StyleSheet} from 'react-native';
import {TopSearchBar} from '../components/TopSearchBar';
import {createStackNavigator} from '@react-navigation/stack';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import ProductDetail from '../screens/ProductDetail';
import Checkout from '../screens/Checkout';
import AllCategory from '../screens/AllCategory';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Products from '../screens/Products';
import AccountPage from '../screens/AccountPage';

const Authenticate = createStackNavigator();
const screenWidth = Math.round(Dimensions.get('window').width);
const {width, height} = Dimensions.get('window');

function Cases() {
  return (
    <View>
      <Text>Hello Cases</Text>
    </View>
  );
}

function CreateCases() {
  return (
    <View>
      <Text>Hello CreateCases</Text>
    </View>
  );
}

function AnotherScreen(props) {
  console.log(props.route, 'props');
  return (
    <View>
      <Text>Hello world another screen</Text>
    </View>
  );
}



function Dashboard(props) {
  return (
    <>
      <Authenticate.Navigator>
        <Authenticate.Screen
          name="home"
          component={Home}
          options={{
            title: 'Dashboard',
            headerTitle: (props) => <TopSearchBar {...props} />,
            headerStyle: {
              backgroundColor: '#fff', //when I make it transparent it look even more worse,
              borderWidth: 0,
              borderColor: 'none',
              shadowColor: 'none',
              borderEndColor: 'none',
              borderBottomWidth: 0,
              elevation: 0, ///god this code saved my live
            },
            headerTitleStyle: {
              fontFamily: 'Montserrat-Light',
              position: 'absolute',
              left: screenWidth / 5,
              top: -15,
              color: '#000',
            },
            headerLeft: () => (
              <TouchableOpacity
                style={{marginLeft: 15}}
                onPress={() => props.navigation.toggleDrawer()}>
                <View
                  style={{
                    backgroundColor: '#080808',
                    width: wp('6%'),
                    height: 2,
                    borderRadius: 20,
                  }}
                />
                <View
                  style={{
                    backgroundColor: '#080808',
                    width: wp('6%'),
                    height: 2,
                    marginTop: 5,
                    borderRadius: 20,
                  }}
                />
                <View
                  style={{
                    backgroundColor: '#080808',
                    width: wp('6%'),
                    height: 2,
                    marginTop: 5,
                    borderRadius: 20,
                  }}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <IonIcon
                name="chatbox-ellipses-outline"
                size={30}
                color="#000"
                style={{marginRight: 10}}
              />
            ),
          }}
        />
        <Authenticate.Screen
          name="allcategory"
          component={AllCategory}
          options={{
            title: 'Categories',
            headerTintColor: '#000',
            headerStyle: {
              backgroundColor: '#fff',
              elevation: 1,
            },
            headerTitleStyle: {
              fontFamily: 'Montserrat-Light',
              fontWeight: 'bold',
              position: 'absolute',
              left: screenWidth / 4,
              top: -15,
              color: '#000',
            },
            headerBackImage: () => {
              return <IonIcon name="ios-arrow-back" color="#000" size={30} />;
            },
          }}
        />
        <Authenticate.Screen
          name="products"
          component={Products}
          options={{
            title: 'Products',
            headerShown: false,
            headerTintColor: '#000',
            headerStyle: {
              backgroundColor: '#fff',
              elevation: 1,
            },
            headerTitleStyle: {
              fontFamily: 'Montserrat-Light',
              fontWeight: 'bold',
              position: 'absolute',
              left: screenWidth / 4,
              top: -15,
              color: '#000',
            },
            headerBackImage: () => {
              return <IonIcon name="ios-arrow-back" color="#000" size={30} />;
            },
          }}
        />
        <Authenticate.Screen
          name="account"
          component={AccountPage}
          options={{
            title: 'Account',
            headerShown: true,
            headerTintColor: '#000',
            headerStyle: {
              backgroundColor: '#fff',
              elevation: 1,
            },
            headerTitleStyle: {
              fontFamily: 'Montserrat-Light',
              fontWeight: 'bold',
              position: 'absolute',
              left: screenWidth / 4,
              top: -15,
              color: '#000',
            },
            headerBackImage: () => {
              return <IonIcon name="ios-arrow-back" color="#000" size={30} />;
            },
          }}
        />
        <Authenticate.Screen
          name="product_detail"
          component={ProductDetail}
          options={{
            title: 'Detail',
            headerShown: false,
            headerTintColor: '#000',
            headerStyle: {
              backgroundColor: '#fff',
              elevation: 1,
            },
            headerTitleStyle: {
              fontFamily: 'Montserrat-Light',
              fontWeight: 'bold',
              position: 'absolute',
              left: screenWidth / 4,
              top: -15,
              color: '#000',
            },
            headerBackImage: () => {
              return <IonIcon name="ios-arrow-back" color="#000" size={30} />;
            },
          }}
        />
        <Authenticate.Screen
          name="checkout"
          component={Checkout}
          options={{
            title: 'Detail',
            headerShown: false,
            headerTintColor: '#000',
            headerStyle: {
              backgroundColor: '#fff',
              elevation: 1,
            },
            headerTitleStyle: {
              fontFamily: 'Montserrat-Light',
              fontWeight: 'bold',
              position: 'absolute',
              left: screenWidth / 4,
              top: -15,
              color: '#000',
            },
            headerBackImage: () => {
              return <IonIcon name="ios-arrow-back" color="#000" size={30} />;
            },
          }}
        />
        <Authenticate.Screen
          name="Cases"
          component={Cases}
          options={{
            title: 'Cases',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#5270E8',
              elevation: 0,
            },
            headerTitleStyle: {
              fontFamily: 'Montserrat-Light',
              fontWeight: 'bold',
              position: 'absolute',
              left: screenWidth / 4,
              top: -15,
              color: '#f8f8f8',
            },
            headerBackImage: () => {
              return <IonIcon name="ios-arrow-back" color="#fff" size={30} />;
            },
          }}
        />
        <Authenticate.Screen
          name="create_case"
          component={CreateCases}
          options={{
            title: 'New Case',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#5270E8',
              elevation: 0,
            },
            headerTitleStyle: {
              fontFamily: 'Montserrat-Light',
              fontWeight: 'bold',
              position: 'absolute',
              left: screenWidth / 5,
              top: -15,
              color: '#f8f8f8',
            },
            headerBackImage: () => {
              return <IonIcon name="ios-arrow-back" color="#fff" size={30} />;
            },
          }}
        />
        <Authenticate.Screen
          name="anotther_screen"
          component={AnotherScreen}
          options={{
            title: 'another screen',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#5270E8',
              elevation: 0,
            },
            headerTitleStyle: {
              fontFamily: 'Montserrat-Light',
              fontWeight: 'bold',
              position: 'absolute',
              left: screenWidth / 5,
              top: -15,
              color: '#f8f8f8',
            },
            headerBackImage: () => {
              return <IonIcon name="ios-arrow-back" color="#fff" size={30} />;
            },
          }}
        />
      </Authenticate.Navigator>
    </>
  );
}
export default Dashboard;

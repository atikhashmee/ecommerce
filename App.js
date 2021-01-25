import React, {useEffect} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import DrawerHolder from './src/layouts/DrawerHolder';

const NotAuthenticate = createStackNavigator();

const App: () => React$Node = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <NavigationContainer>
        <NotAuthenticate.Navigator>
          <NotAuthenticate.Screen
            name="drawer"
            component={DrawerHolder}
            options={{
              headerShown: false,
              headerMode: 'screen',
            }}
          />
        </NotAuthenticate.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;

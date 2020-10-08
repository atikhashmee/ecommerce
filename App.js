import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  StatusBar,
  TouchableHighlight,
  Dimensions,
  ScrollView,
} from 'react-native';
import { createDrawerNavigator, DrawerItem,  DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';
import  AppStyle  from './src/assets/style';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import SplashScreen from 'react-native-splash-screen'
import {Slider} from './src/dashboard/Slider';
import {TopSearchBar} from './src/components/TopSearchBar';
import Categories from './src/dashboard/Categories';
import ExpressView from './src/dashboard/ExpressView';
import {AppContext} from './src/utils/GlobalContext';

const screenWidth = Math.round(Dimensions.get('window').width);
const Drawer = createDrawerNavigator();
const NotAuthenticate = createStackNavigator();
const Authenticate = createStackNavigator();
const { width, height } = Dimensions.get('window');
const baseUrl = 'http://mpoints.xyz/api/';
const defaultArr = {
  store_id: 1,
  api_token: '2y12QoRuPscrVSVZcPCREXSO9gcY8u0FQXP8EBmfMWnltjsoqyWhaNMO',
}
const defaultheaders = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

function Home(){
  let {products} = React.useContext(AppContext);
 useEffect( ()=>{
      console.log(products, 'aaaaaa');
 }, [])
  return  <ScrollView>
      <View style={{ height: '100%', flex: 1, paddingLeft: 10, paddingRight:10, backgroundColor: '#fff' }}>
          {/* slider */}
          {/* <View style={{ height: 130, borderRadius: 10 }}>
            <Slider />
          </View> */}
        {/* category tag */}
          {/* <View style={{ width: width, height: 40, marginTop: 10, marginBottom: 50 }}>
            <Categories />
          </View> */}
          {/* express view */}
          {/* <View style={{ height: 250, backgroundColor: '#fff' }}> 
            <ExpressView  />
          </View> */}
          {/* category products */}
          {products.length>0 && products.map(item=><View key={item.id} style={{  height: 450, backgroundColor: '#fff' }}>
              <View style={{ flex: 1, flexBasis: '10%' }}>
                  <Text style={{ fontSize: 29 }}> { item.name } </Text>
              </View>
              <View style={{ flexBasis: '90%' }}>
                <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
                    <View style={{ flexBasis: '50%' }}>
                        <View style={{ width: '95%', height: 150, backgroundColor: 'lightblue'}}>
                          <Image
                            style={AppStyle.image}
                            source={{uri: 'https://www.gstatic.com/webp/gallery3/5.png'}}
                          />
                          
                        </View>
                        <Text style={{ color: '#000', fontSize: 16 }}>Product Name</Text>
                        <Text>$234</Text>
                    </View>
                    <View style={{ flexBasis: '50%' }}>
                        <View style={{ width: '95%', height: 150, backgroundColor: 'lightblue'}}>
                          <Image
                              style={AppStyle.image}
                              source={{uri: 'https://www.gstatic.com/webp/gallery3/2.png'}}
                            />
                        </View>
                        <Text style={{ color: '#000', fontSize: 16 }}>Product Name</Text>
                        <Text>$234</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
                    <View style={{ flexBasis: '50%' }}>
                        <View style={{ width: '95%', height: 150, backgroundColor: 'lightblue'}}>
                          <Image
                            style={AppStyle.image}
                            source={{uri: 'https://www.gstatic.com/webp/gallery3/2.png'}}
                          />
                        </View>
                        <Text style={{ color: '#000', fontSize: 16 }}>Product Name</Text>
                        <Text>$234</Text>
                    </View>
                    <View style={{ flexBasis: '50%' }}>
                        <View style={{ width: '95%', height: 150, backgroundColor: 'lightblue'}}>
                        <Image
                            style={AppStyle.image}
                            source={{uri: 'https://www.gstatic.com/webp/gallery3/2.png'}}
                          />
                        </View>
                        <Text style={{ color: '#000', fontSize: 16 }}>Product Name</Text>
                        <Text>$234</Text>
                    </View>
                </View>
              </View>
          </View>)}
    </View>
  </ScrollView>
}

function Cases(){
  return <View>
    <Text>Hello Cases</Text>
  </View>
}

function CreateCases(){
  return <View>
    <Text>Hello CreateCases</Text>
  </View>
}

function  Dashboard(props) {
  return (
    <>
      <Authenticate.Navigator>
        <Authenticate.Screen
          name="home"
          component={Home}
          options={{
            title: 'Dashboard',
            headerTitle: props => <TopSearchBar {...props} />,
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
                style={{marginLeft: 10}}
                onPress={() => props.navigation.toggleDrawer()}>
                <View
                  style={{
                    backgroundColor: '#000',
                    width: 30,
                    height: 3,
                    borderRadius: 20
                  }}
                />
                <View
                  style={{
                    backgroundColor: '#000',
                    width: 30,
                    height: 3,
                    marginTop: 5,
                    borderRadius: 20
                  }}
                />
                <View
                  style={{
                    backgroundColor: '#000',
                    width: 30,
                    height: 3,
                    marginTop: 5,
                    borderRadius: 20
                  }}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <Icon
                name="comments"
                size={30}
                color="#000"
                style={{marginRight: 10}}
              />
            ),
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
      </Authenticate.Navigator>
    </>
  );
};

function CustomDrawerContent(props) {
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
            <View style={{ 
              flex: 1,      
              height: 60,
              alignItems: 'center',
              justifyContent: 'center', }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Evaly</Text> 
            </View>
          <View
            style={{
              paddingVertical: 5,
              borderBottomColor: '#d4d4d4',
              borderBottomWidth: 1,
            }}>
           
          </View>

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

const DrawerHolder = () => {
  let [products, setProducts] = useState([]);
  useEffect(()=>{
      let formD = new FormData;
      formD.append('api_token', defaultArr.api_token);
      formD.append('store_id', defaultArr.store_id);
      fetch(baseUrl + 'home-content', {
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
        setProducts(res.data.section_details);
      })
      .catch(err=>{
        console.log(err);
      });
  },  []);
  const appContextVal = React.useMemo(() => {
    return {
      products,
    };
  }, []);
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

const App: () => React$Node = () => {
  useEffect(()=>{
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

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useEffect } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  StatusBar,
  TouchableHighlight,
  Dimensions,
  Pressable,
  ScrollView,
} from 'react-native';
import { createDrawerNavigator, DrawerItem,  DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';
import  AppStyle  from './src/assets/style';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper'
import SplashScreen from 'react-native-splash-screen'

const screenWidth = Math.round(Dimensions.get('window').width);
const Drawer = createDrawerNavigator();
const NotAuthenticate = createStackNavigator();
const Authenticate = createStackNavigator();
const { width, height } = Dimensions.get('window');
function Home(){
  return  <ScrollView>
      <View style={{ height: '100%', flex: 1, paddingLeft: 10, paddingRight:10, backgroundColor: '#fff' }}>
      {/* slider */}
      <View style={{ height: 130, borderRadius: 10 }}>
        <Swiper style={AppStyle.wrapper} 
            dot={
              <View
                style={{
                  backgroundColor: 'rgba(255,255,255,.3)',
                  width: 13,
                  height: 13,
                  borderRadius: 7,
                  marginLeft: 7,
                  marginRight: 7
                }}
              />
            }
            paginationStyle={{
              bottom: 10
            }}
            loop={true}
            >
          <View style={AppStyle.slide}>
              <View style={{...AppStyle.slide, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{ color: '#000', fontSize: 29 }}>New Platform | design</Text>
              </View>
            </View>
            <View style={AppStyle.slide}>
            <Image
                style={AppStyle.image}
                source={{uri: 'https://image.shutterstock.com/image-photo/beautiful-autumn-scene-hintersee-lake-260nw-747646759.jpg'}}
                resizeMode="cover"
              />
            </View>
            <View style={{...AppStyle.slide, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{ color: '#000', fontSize: 29 }}>Hello Evaly App design</Text>
            </View>
        </Swiper>
      </View>
    {/* category tag */}
      <View style={{ width: width, height: 40, marginTop: 10, marginBottom: 50 }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexBasis: '18%' }}>
            <View style={{ 
              backgroundColor: '#eee',
              padding: 10, 
              borderRadius: 50, 
              width: '80%',
              textAlign: 'center' }}>
                <Icon 
                  name="list"
                  size={20}
                  style={{ textAlign: 'center' }}
                  color="violet"
                />
            </View>
            <Text>News Feed</Text>
          </View>
          <View style={{ flexBasis: '18%' }}>
            <View style={{  
              backgroundColor: '#eee', 
              padding: 10, 
              width: '80%',
              borderRadius: 50,
                }}>
            <Icon 
                  name="gift"
                  size={20}
                  style={{ textAlign: 'center' }}
                  color="lightblue"
                />
            </View>
            <Text>Gift Card</Text>
          </View>
          <View style={{ flexBasis: '18%' }}>
            <View style={{  
              backgroundColor: '#eee', 
              padding: 10, 
              width: '80%',
              borderRadius: 50,
              }}>
            <Icon 
                  name="tag"
                  size={20}
                  style={{ textAlign: 'center' }}
                  color="blue"
                />
            </View>
            <Text>Campaigns</Text>
          </View>
            
          <View style={{ flexBasis: '18%' }}>
            <View style={{  
              backgroundColor: '#eee', 
              padding: 10, 
              width: '80%',
              borderRadius: 50,

              }}>
            <Icon 
                  name="trademark"
                  size={20}
                  style={{ textAlign: 'center' }}
                  color="green"
                />
            </View>
            <Text>Categories</Text>
          </View>
          <View style={{ flexBasis: '18%' }}>
            <View style={{  
              backgroundColor: '#eee', 
              padding: 10, 
              width: '80%',
              borderRadius: 50,
              }}>
            <Icon 
                  name="exchange"
                  size={20}
                  style={{ textAlign: 'center' }}
                  color="red"
                />
            </View>
            <Text>Orders</Text>
          </View>
        </View>
      </View>
      {/* express view */}
      <View style={{ height: 250, backgroundColor: '#fff' }}> 
        <View style={{ flex: 1, flexBasis: '10%', flexDirection: 'row', justifyContent: 'space-between' }}>
          <View><Text>Evaly Express</Text></View>
          <View><Text>Show All</Text></View>
        </View>
        <View style={{ flexBasis: '90%' }}>
          <View style={{ flex: 1, flexDirection: 'row', flexBasis: '50%', justifyContent: 'space-between' }}>
              <View style={{ flexBasis: '22%', textAlign: 'center', marginRight:3}}>
                <View style={{ width: 80, height: 80, backgroundColor: 'lightgreen' }}></View>
                <Text style={{textAlignVertical: "center",textAlign: "center",}}>Shorong</Text>
              </View>
              <View style={{ flexBasis: '22%', textAlign: 'center', marginRight:3}}>
                <View style={{ width: 80, height: 80, backgroundColor: 'lightgreen' }}></View>
                <Text style={{textAlignVertical: "center",textAlign: "center",}}>Angelic</Text>
              </View>
              <View style={{ flexBasis: '22%', textAlign: 'center', marginRight:3}}>
                <View style={{ width: 80, height: 80, backgroundColor: 'lightgreen' }}></View>
                <Text style={{textAlignVertical: "center",textAlign: "center",}}>SUHA</Text>
              </View>
              <View style={{ flexBasis: '22%', textAlign: 'center', marginRight:3}}>
                <View style={{ width: 80, height: 80, backgroundColor: 'lightgreen' }}></View>
                <Text style={{textAlignVertical: "center",textAlign: "center",}}>Daily Bazar</Text>
              </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', flexBasis: '50%', justifyContent: 'space-between' }}>
                  <View style={{ flexBasis: '22%', textAlign: 'center', marginRight:3}}>
                    <View style={{ width: 80, height: 80, backgroundColor: 'royalblue' }}></View>
                    <Text style={{textAlignVertical: "center",textAlign: "center",}}>Khass Food</Text>
                  </View>
                  <View style={{ flexBasis: '22%', textAlign: 'center', marginRight:3}}>
                    <View style={{ width: 80, height: 80, backgroundColor: 'royalblue' }}></View>
                    <Text style={{textAlignVertical: "center",textAlign: "center",}}>Khaleq</Text>
                  </View>
                  <View style={{ flexBasis: '22%', textAlign: 'center', marginRight:3}}>
                    <View style={{ width: 80, height: 80, backgroundColor: 'royalblue' }}></View>
                    <Text style={{textAlignVertical: "center",textAlign: "center",}}>Unimart</Text>
                  </View>
                  <View style={{ flexBasis: '22%', textAlign: 'center', marginRight:3}}>
                    <View style={{ width: 80, height: 80, backgroundColor: 'royalblue' }}></View>
                    <Text style={{textAlignVertical: "center",textAlign: "center",}}>Bengal Meat</Text>
                  </View>
              </View>
        </View>
      </View>
      {/* category products */}
      <View style={{  height: 450, backgroundColor: '#fff' }}>
          <View style={{ flex: 1, flexBasis: '10%' }}>
              <Text style={{ fontSize: 29 }}>Recent Products</Text>
          </View>
          <View style={{ flexBasis: '90%' }}>
            <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
                <View style={{ flexBasis: '50%' }}>
                    <View style={{ width: '95%', height: 150, backgroundColor: 'lightblue'}}></View>
                    <Text style={{ color: '#000', fontSize: 16 }}>Product Name</Text>
                    <Text>$234</Text>
                </View>
                <View style={{ flexBasis: '50%' }}>
                    <View style={{ width: '95%', height: 150, backgroundColor: 'lightblue'}}></View>
                    <Text style={{ color: '#000', fontSize: 16 }}>Product Name</Text>
                    <Text>$234</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
                <View style={{ flexBasis: '50%' }}>
                    <View style={{ width: '95%', height: 150, backgroundColor: 'lightblue'}}></View>
                    <Text style={{ color: '#000', fontSize: 16 }}>Product Name</Text>
                    <Text>$234</Text>
                </View>
                <View style={{ flexBasis: '50%' }}>
                    <View style={{ width: '95%', height: 150, backgroundColor: 'lightblue'}}></View>
                    <Text style={{ color: '#000', fontSize: 16 }}>Product Name</Text>
                    <Text>$234</Text>
                </View>
            </View>
          </View>
      </View>
      <View style={{  height: 500, backgroundColor: '#fff' }}>
          <View style={{ flex: 1, flexBasis: '10%' }}>
              <Text style={{ fontSize: 29 }}>Feature Products</Text>
          </View>
          <View style={{ flexBasis: '90%' }}>
            <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
                <View style={{ flexBasis: '50%' }}>
                    <View style={{ width: '95%', height: 150, backgroundColor: '#d4d4d4'}}></View>
                    <Text style={{ color: '#000', fontSize: 16 }}>Product Name</Text>
                    <Text>$234</Text>
                </View>
                <View style={{ flexBasis: '50%' }}>
                    <View style={{ width: '95%', height: 150, backgroundColor: '#d4d4d4'}}></View>
                    <Text style={{ color: '#000', fontSize: 16 }}>Product Name</Text>
                    <Text>$234</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
                <View style={{ flexBasis: '50%' }}>
                    <View style={{ width: '95%', height: 150, backgroundColor: '#d4d4d4'}}></View>
                    <Text style={{ color: '#000', fontSize: 16 }}>Product Name</Text>
                    <Text>$234</Text>
                </View>
                <View style={{ flexBasis: '50%' }}>
                    <View style={{ width: '95%', height: 150, backgroundColor: '#d4d4d4'}}></View>
                    <Text style={{ color: '#000', fontSize: 16 }}>Product Name</Text>
                    <Text>$234</Text>
                </View>
            </View>
          </View>
      </View>
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
function LogoTitle()
{
  return (
    <>
       <Pressable
        onPress={() => {
          alert('hello world');
        }}
        style={{ 
          flex: 1, 
          borderRadius: 20, 
          flexDirection: 'row', 
          backgroundColor: '#eee',
          padding: 10
        }}
        >
           <Icon
                name="search"
                size={20}
                color="#000"
                style={{marginLeft: 5}}
              />
          <Text style={{ marginLeft: 10 }}>What would you like to buy?</Text>
      </Pressable>
    </>
  );
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
            headerTitle: props => <LogoTitle {...props} />,
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
  return (
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

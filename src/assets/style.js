import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Button,
    Text,
    StatusBar,
    Dimensions,
  } from 'react-native';

  import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';
  const { width, height } = Dimensions.get('window');
  const AppStyle = StyleSheet.create({
    flexCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    drawerItem: {
        marginHorizontal: 0,
        fontWeight: 'bold',
        fontSize: 25,
      },
      viewBox: {
        paddingHorizontal: 20,
        justifyContent: 'center',
        width: width,
        padding: 10,
        alignItems: 'center',
        height: 150
    },
    slider: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    dotContainer: {
      backgroundColor: 'transparent'
    },

    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    slide: {
        flex: 1,
        backgroundColor: 'transparent',
        borderRadius: 10
      },
      container: {
        flex: 1
      },
    
      imgBackground: {
        width,
        height,
        backgroundColor: 'transparent',
        position: 'absolute'
      },
    
      image: {
        width,
        height,
        borderRadius: 10
      }
  });
export default AppStyle;
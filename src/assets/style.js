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

  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

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
        width: '100%',
        height: '100%',
        borderRadius: 10,
        resizeMode: 'cover'
      },
      // product category
      productCategory: {
        fontSize: 22, 
        fontWeight: '400',
        fontFamily: 'Oswald-Regular',
      },
      // product style
      productBox: {
        flexBasis: '48%',
        backgroundColor:"#fff",
        paddingRight: 5,
        paddingLeft: 5,
        paddingTop: 5,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
      },
      prductContainer: {
        width: '95%', 
        height: 150, 
        backgroundColor: 'lightblue',
        overflow: 'hidden',
        borderRadius: 10
      },
      prductTitle: {
        color: '#000', 
        fontSize: 17, 
        fontWeight: '400',
        fontFamily: 'Oswald-Regular',
      },
      //category box style
      categoryEachBox: {
        flexBasis: '15%',
        marginRight: 10
      },
      categoryCard: {
        textAlign: 'center', 
        alignItems: 'center', 
        padding: 0
      },
      categoryIconHolder: {
        backgroundColor: '#eee',
        padding: 20,
        textAlign: 'center'
      },
      //add to cart button
      cartButton: {
        flexBasis: '50%', 
        borderColor: '#eee',
        borderTopWidth: 1,
        padding: 10,
        alignItems: 'center',
      },
  });
export default AppStyle;
import React, {PureComponent} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {
  Provider as PaperProvider,
  Button,
  Title,
  FAB,
} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import {Icon, Content, Container} from 'native-base';
import {user_login} from '../../api.json';
import {useNavigation} from '@react-navigation/native';
import {AppContext} from '../../utils/GlobalContext';
import Alert from '../Alert';
import {baseUrl, store_id as my_store_id} from '../../env.json';
import {Dimensions} from 'react-native';

export default function Login(props) {
  const [loading, setloading] = React.useState(false);
  const [secureTxtEntry, setSecureTxtEntry] = React.useState(true);
  const [loginData, setLoginData] = React.useState({
    phone_number: '',
    email: '',
    password: '',
  });

  const {auth, modifyAuth} = React.useContext(AppContext);
  const navigation = useNavigation();
  const [validation, setValidation] = React.useState({
    messageBags: [],
    email: false,
    phone_number: false,
    password: false,
    fails: function () {
      if (!this.email) return true;
      if (!this.phone_number) return true;
      if (!this.password) return true;
      return false;
    },
  });

  function handleForm(objProperty, value) {
    setLoginData({...loginData, [objProperty]: value});
  }
  function loginAction() {
    setloading(true);
    let validationObj = {...validation};
    // if (loginData.email.trim() === '') {
    //   validationObj.messageBags.push('Email is required');
    //   validationObj.email = true;
    // } else {
    //   validationObj.email = false;
    // }

    if (loginData.phone_number.trim() === '') {
      validationObj.messageBags.push('Phone Number is required');
      validationObj.phone_number = true;
    } else {
      validationObj.phone_number = false;
    }

    if (loginData.password.trim() === '') {
      validationObj.messageBags.push('Password is required');
      validationObj.password = true;
    } else {
      validationObj.password = false;
    }

    setValidation(validationObj);
    if (validation.fails()) {
      //alert('validation errors');
    }

    let formD = new FormData();
    formD.append('phone_number', loginData.phone_number);
    // formD.append('email', loginData.email);
    formD.append('password', loginData.password);
    formD.append('store_id', my_store_id);
    fetch(baseUrl + user_login, {
      method: 'POST',
      body: formD,
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((res) => {
        setloading(false);
        if (res.status) {
          modifyAuth(res.data, true, res.token).then((item) => {
            navigation.navigate('home');
            props.updateModalVisibility(false);
          });
        }
      })
      .catch((err) => {
        console.log(err, 'error');
      });
  }
  return (
    <View style={styles.container}>
      {loading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size={40} color="#fff" />
        </View>
      )}

      {/* logo section */}
      <View style={styles.logo_section}>
        {/* <Title>Idea House Shop</Title> */}
        <Animatable.Image
          source={{
            uri:
              'https://cdn.iconscout.com/icon/free/png-256/google-148-189807.png',
          }}
          style={{
            height: '100%',
            width: '70%',
          }}
          animation="fadeInDownBig"
        />
      </View>
      <Text style={[styles.iconColor, {textAlign: 'center', fontSize: 18}]}>
        Login
      </Text>
      <View style={styles.formContainer}>
        <View style={styles.authFormGroup}>
          <View style={styles.appenedIcon}>
            <Feather name="user" style={styles.iconColor} size={20} />
          </View>
          <TextInput
            mode={'flat'}
            placeholder="Email"
            placeholderTextColor="#81368f"
            value={loginData.phone_number}
            style={styles.textInputStyle}
            onChangeText={(text) => handleForm('phone_number', text)}
          />
          {validation.phone_number && (
            <Icon name="information-circle" style={styles.errorIcon} />
          )}
        </View>
        <View style={[styles.authFormGroup, {marginTop: 10}]}>
          <View style={styles.appenedIcon}>
            <Feather name="lock" style={styles.iconColor} size={20} />
          </View>
          <TextInput
            mode={'flat'}
            secureTextEntry={secureTxtEntry}
            placeholder="Password"
            placeholderTextColor="#81368f"
            value={loginData.password}
            style={styles.textInputStyle}
            onChangeText={(text) => handleForm('password', text)}
          />
          <TouchableOpacity
            style={[
              styles.appenedIcon,
              styles.iconColor,
              {right: 20, left: null},
            ]}
            onPress={() => {
              setSecureTxtEntry(!secureTxtEntry);
            }}>
            {secureTxtEntry ? (
              <Feather name="eye-off" style={styles.iconColor} size={20} />
            ) : (
              <Feather name="eye" style={styles.iconColor} size={20} />
            )}
          </TouchableOpacity>
          {validation.password && (
            <Icon name="information-circle" style={styles.errorIcon} />
          )}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Pressable>
            <Text style={[styles.iconColor, {fontSize: 15}]}>
              Forgot your Password?
            </Text>
          </Pressable>
          <FAB
            style={styles.authRoundButton}
            small
            icon="arrow-right"
            onPress={() => {
              loginAction();
            }}
          />
        </View>
      </View>
      {/* sign in with */}
      <View style={styles.footerSection}>
        <View>
          <Text style={[styles.iconColor, {fontSize: 16, marginBottom: 5}]}>
            Login with
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Pressable
            style={styles.socialIconHolder}
            onPress={() => {
              alert('heel owolr');
            }}>
            <Icon name="facebook" style={styles.socialIcon} type="Feather" />
          </Pressable>
          <Pressable
            style={styles.socialIconHolder}
            onPress={() => {
              alert('heel owolr');
            }}>
            <Icon name="twitter" style={styles.socialIcon} type="Feather" />
          </Pressable>
          <Pressable
            style={styles.socialIconHolder}
            onPress={() => {
              alert('heel owolr');
            }}>
            <Icon name="mail" style={styles.socialIcon} type="Feather" />
          </Pressable>
          <Pressable
            style={styles.socialIconHolder}
            onPress={() => {
              alert('heel owolr');
            }}>
            <Icon name="linkedin" style={styles.socialIcon} type="Feather" />
          </Pressable>
        </View>
      </View>
      {/* sign up section */}
      <View style={styles.footerSection}>
        <View style={{flexDirection: 'row'}}>
          <Title>Don't have account?</Title>
          <Pressable
            onPress={() => {
              props.swithLoginSignUp('signup');
            }}>
            <Text
              style={[
                styles.iconColor,
                {fontSize: 18, marginLeft: 3, marginTop: 5},
              ]}>
              Sign Up
            </Text>
          </Pressable>
        </View>
      </View>
      {validation.messageBags.length > 0 &&
        validation.messageBags.map((item, index) => {
          return <Alert key={index} msg={item} displayValue={index * 40} />;
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignContent: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    position: 'relative',
  },
  loaderContainer: {
    position: 'absolute',
    top: Dimensions.get('screen').height / 3.5,
    left: Dimensions.get('screen').width / 2.5,
    backgroundColor: '#a9a9a9',
    zIndex: 500,
  },
  formContainer: {
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  footerSection: {
    textAlign: 'center',
    alignItems: 'center',
  },
  logo_section: {
    flexBasis: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputStyle: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 50,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    color: '#81368f',
  },
  authFormGroup: {
    flexDirection: 'row',
    position: 'relative',
    borderBottomWidth: 1,
    borderBottomColor: '#81368f',
    marginBottom: 35,
  },
  appenedIcon: {
    position: 'absolute',
    top: 0,
    left: 10,
    zIndex: 2,
  },
  iconColor: {
    color: '#81368f',
  },
  authRoundButton: {
    position: 'relative',
    right: 0,
    bottom: 0,
    backgroundColor: '#81368f',
  },
  socialIconHolder: {
    padding: 10,
    borderRadius: 25,
    backgroundColor: '#81368f',
    marginRight: 4,
  },
  socialIcon: {
    color: '#fff',
    fontSize: 15,
  },
  errorIcon: {
    color: 'red',
  },
});

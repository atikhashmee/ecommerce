import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import {Icon} from 'native-base';
import {
  Checkbox,
  Title,
  FAB,
} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import {baseUrl, store_id as my_store_id} from '../../env.json';
import {user_register} from '../../api.json';
import {AppContext} from '../../utils/GlobalContext';
import {useNavigation} from '@react-navigation/native';
import Alert from '../../components/Alert';

export default function SignUp(props) {
  const [secureTxtEntry, setSecureTxtEntry] = React.useState(true);
  const [checked, setChecked] = React.useState(false);
  const {modifyAuth} = React.useContext(AppContext);
  const navigation = useNavigation();

  const [formData, setFormData] = React.useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    password: '',
    agreement: false,
  });

  const [validation, setValidationRules] = React.useState({
    messageBags: [],
    first_name: false,
    email: false,
    phone_number: false,
    password: false,
    fails: function () {
      if (!this.first_name) return true;
      if (!this.email) return true;
      if (!this.phone_number) return true;
      if (!this.password) return true;
      return false;
    },
  });

  function handleForm(objProperty, value) {
    setFormData({...formData, [objProperty]: value});
  }

  function submitForm() {
    let validationObj = {...validation};
    if (formData.first_name.trim() === '') {
      validationObj.messageBags.push('First Name is required');
      validationObj.first_name = true;
    } else {
      validationObj.first_name = false;
    }

    if (formData.email.trim() === '') {
      validationObj.messageBags.push('Email is required');
      validationObj.email = true;
    } else {
      validationObj.email = false;
    }

    if (formData.phone_number.trim() === '') {
      validationObj.messageBags.push('Phone Number is required');
      validationObj.phone_number = true;
    } else {
      validationObj.phone_number = false;
    }

    if (formData.password.trim() === '') {
      validationObj.messageBags.push('Password is required');
      validationObj.password = true;
    } else {
      validationObj.password = false;
    }

    setValidationRules(validationObj);
    if (validation.fails()) {
      //alert('validation errors');
    }
    let formD = new FormData();
    formD.append('phone_number', formData.phone_number);
    formD.append('first_name', formData.first_name);
    formD.append('last_name', formData.last_name);
    formD.append('email', formData.email);
    formD.append('password', formData.password);
    formD.append('store_id', my_store_id);
    fetch(baseUrl + user_register, {
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
        if (res.status) {
          modifyAuth(res.data, true, res.token);
          navigation.navigate('home');
          props.updateModalVisibility(false);
        }
      })
      .catch((err) => {
        console.log(err, 'error');
      });

    //console.log(validationObj, validation, 'loog');
  }

  return (
    <View style={styles.container}>
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
            width: '50%',
          }}
          animation="fadeInDownBig"
        />
      </View>
      {/* <Text style={[styles.iconColor, {textAlign: 'center', fontSize: 18}]}>
          Sign Up
        </Text> */}
      <View style={styles.formContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexBasis: '48%'}}>
            <View style={[styles.authFormGroup, {marginTop: 10}]}>
              <View style={styles.appenedIcon}>
                <Feather name="user" style={styles.iconColor} size={20} />
              </View>
              <TextInput
                placeholder="First Name"
                placeholderTextColor="#81368f"
                style={styles.textInputStyle}
                value={formData.first_name}
                onChangeText={(text) => handleForm('first_name', text)}
              />
              {validation.first_name && (
                <Icon name="information-circle" style={styles.errorIcon} />
              )}
            </View>
          </View>
          <View style={{flexBasis: '48%'}}>
            <View style={[styles.authFormGroup, {marginTop: 10}]}>
              <View style={styles.appenedIcon}>
                <Feather name="user" style={styles.iconColor} size={20} />
              </View>
              <TextInput
                style={styles.textInputStyle}
                placeholderTextColor="#81368f"
                value={formData.last_name}
                onChangeText={(text) => handleForm('last_name', text)}
                placeholder={'Last Name'}
              />
            </View>
          </View>
        </View>
        <View style={[styles.authFormGroup, {marginTop: 10}]}>
          <View style={styles.appenedIcon}>
            <Feather name="phone" style={styles.iconColor} size={20} />
          </View>
          <TextInput
            style={styles.textInputStyle}
            placeholderTextColor="#81368f"
            value={formData.phone_number}
            onChangeText={(text) => handleForm('phone_number', text)}
            placeholder={'Mobile Number'}
          />
          {validation.phone_number && (
            <Icon name="information-circle" style={styles.errorIcon} />
          )}
        </View>
        <View style={[styles.authFormGroup, {marginTop: 10}]}>
          <View style={styles.appenedIcon}>
            <Feather name="mail" style={styles.iconColor} size={20} />
          </View>
          <TextInput
            style={styles.textInputStyle}
            placeholderTextColor="#81368f"
            value={formData.email}
            onChangeText={(text) => handleForm('email', text)}
            placeholder={'Email'}
          />
          {validation.email && (
            <Icon name="information-circle" style={styles.errorIcon} />
          )}
        </View>
        <View style={[styles.authFormGroup, {marginTop: 10}]}>
          <View style={styles.appenedIcon}>
            <Feather name="lock" style={styles.iconColor} size={20} />
          </View>
          <TextInput
            style={styles.textInputStyle}
            placeholderTextColor="#81368f"
            secureTextEntry={secureTxtEntry}
            value={formData.password}
            onChangeText={(text) => handleForm('password', text)}
            placeholder={'Password'}
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
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text>I agree to the Privacy Policy and Terms & Conditions </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <FAB
            style={styles.authRoundButton}
            small
            label="SIGN UP"
            onPress={() => {
              submitForm();
            }}
          />
        </View>
      </View>
      <View style={styles.footerSection}>
        <View>
          <Text style={[styles.iconColor, {fontSize: 16, marginBottom: 5}]}>
            Sign Up with
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
      <View style={styles.footerSection}>
        <View style={{flexDirection: 'row'}}>
          <Title>Already Have an account?</Title>
          <Pressable
            onPress={() => {
              props.swithLoginSignUp('login');
            }}>
            <Text
              style={[
                styles.iconColor,
                {fontSize: 18, marginLeft: 3, marginTop: 5},
              ]}>
              Login
            </Text>
          </Pressable>
        </View>
      </View>
      {validation.messageBags.length > 0 && validation.messageBags.map((item, index)=>{
        return (
          <Alert msg={item} displayValue={index*40} />
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  formContainer: {
    backgroundColor: '#fff',
  },
  footerSection: {
    textAlign: 'center',
    alignItems: 'center',
  },
  logo_section: {
    flexBasis: '14%',
    alignItems: 'center',
  },
  iconColor: {
    color: '#81368f',
  },
  authFormGroup: {
    flexDirection: 'row',
    position: 'relative',
    borderBottomWidth: 1,
    borderBottomColor: '#81368f',
    marginBottom: 15,
  },
  appenedIcon: {
    position: 'absolute',
    top: 0,
    left: 10,
    zIndex: 2,
  },
  textInputStyle: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 50,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    color: '#81368f',
  },
  authRoundButton: {
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
  erroFormGroup: {
    borderBottomColor: 'red',
  },
});

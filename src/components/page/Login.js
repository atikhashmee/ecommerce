import React, {PureComponent} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
  TouchableOpacity,
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

export default function Login(props) {
  const [text, setText] = React.useState('');
  const [secureTxtEntry, setSecureTxtEntry] = React.useState(true);
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
            width: '70%',
          }}
          animation="fadeInDownBig"
        />
      </View>
      <Text style={[styles.iconColor, {textAlign: 'center', fontSize: 18}]}>Login</Text>
      <View style={styles.formContainer}>
        <View style={styles.authFormGroup}>
          <View style={styles.appenedIcon}>
            <Feather name="user" style={styles.iconColor} size={20} />
          </View>
          <TextInput
            mode={'flat'}
            placeholder="Email"
            placeholderTextColor={styles.iconColor}
            value={text}
            style={styles.textInputStyle}
            onChangeText={(text) => setText(text)}
          />
        </View>
        <View style={[styles.authFormGroup, {marginTop: 10}]}>
          <View style={styles.appenedIcon}>
            <Feather name="lock" style={styles.iconColor} size={20} />
          </View>
          <TextInput
            mode={'flat'}
            secureTextEntry={secureTxtEntry}
            placeholder="Password"
            placeholderTextColor={styles.iconColor}
            value={text}
            style={styles.textInputStyle}
            onChangeText={(text) => setText(text)}
          />
          <TouchableOpacity
            style={[
              styles.appenedIcon,
              styles.iconColor,
              {right: 20, left: null},
            ]}
            onPress={setSecureTxtEntry}>
            {secureTxtEntry ? (
              <Feather name="eye-off" style={styles.iconColor} size={20} />
            ) : (
              <Feather name="eye" style={styles.iconColor} size={20} />
            )}
          </TouchableOpacity>
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
              alert('hllworld');
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
});

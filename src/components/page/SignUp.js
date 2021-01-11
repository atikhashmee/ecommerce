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
import {Container, Icon, Content} from 'native-base';
import {
  Provider as PaperProvider,
  Checkbox,
  Title,
  FAB,
} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

export default function SignUp(props) {
  const [text, setText] = React.useState('');
  const [secureTxtEntry, setSecureTxtEntry] = React.useState(true);
  const [checked, setChecked] = React.useState(false);
  return (
    <Container>
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
        <Text style={[styles.iconColor, {textAlign: 'center', fontSize: 18}]}>
          Sign Up
        </Text>
        <View style={styles.formContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexBasis: '48%'}}>
              <View style={[styles.authFormGroup, {marginTop: 10}]}>
                <View style={styles.appenedIcon}>
                  <Feather name="user" style={styles.iconColor} size={20} />
                </View>
                <TextInput
                  placeholder="First Name"
                  placeholderTextColor={styles.iconColor}
                  style={styles.textInputStyle}
                  value={text}
                  onChangeText={(text) => setText(text)}
                />
              </View>
            </View>
            <View style={{flexBasis: '48%'}}>
              <View style={[styles.authFormGroup, {marginTop: 10}]}>
                <View style={styles.appenedIcon}>
                  <Feather name="user" style={styles.iconColor} size={20} />
                </View>
                <TextInput
                  style={styles.textInputStyle}
                  placeholderTextColor={styles.iconColor}
                  value={text}
                  onChangeText={(text) => setText(text)}
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
              placeholderTextColor={styles.iconColor}
              value={text}
              onChangeText={(text) => setText(text)}
              placeholder={'Mobile Number'}
            />
          </View>
          <View style={[styles.authFormGroup, {marginTop: 10}]}>
            <View style={styles.appenedIcon}>
              <Feather name="mail" style={styles.iconColor} size={20} />
            </View>
            <TextInput
              style={styles.textInputStyle}
              placeholderTextColor={styles.iconColor}
              value={text}
              onChangeText={(text) => setText(text)}
              placeholder={'Email'}
            />
          </View>
          <View style={[styles.authFormGroup, {marginTop: 10}]}>
            <View style={styles.appenedIcon}>
              <Feather name="lock" style={styles.iconColor} size={20} />
            </View>
            <TextInput
              style={styles.textInputStyle}
              placeholderTextColor={styles.iconColor}
              secureTextEntry={secureTxtEntry}
              value={text}
              onChangeText={(text) => setText(text)}
              placeholder={'Password'}
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
        {/* sign up section */}
        <View style={styles.footerSection}>
          <View style={{flexDirection: 'row'}}>
            <Title>Don't have account?</Title>
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
      </View>
    </Container>
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
    flexGrow: 1,
    justifyContent: 'center',
  },
  footerSection: {
    textAlign: 'center',
    alignItems: 'center',
  },
  logo_section: {
    flexBasis: '10%',
    alignItems: 'center',
    justifyContent: 'center',
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

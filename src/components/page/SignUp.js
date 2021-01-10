import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {Container, Content} from 'native-base';
import {
  TextInput,
  Provider as PaperProvider,
  Button,
  Title,
  Checkbox,
} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';

export default function SignUp() {
  const [text, setText] = React.useState('');
  const [secureTxtEntry, setSecureTxtEntry] = React.useState(true);
  const [checked, setChecked] = React.useState(false);
  return (
    <Container>
      <View style={styles.container}>
        {/* logo section */}
        <View style={styles.logo_section}>
          <Title>Idea House Shop</Title>
        </View>
        <View style={styles.formContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexBasis: '48%'}}>
              <TextInput
                mode={'outlined'}
                label="First Name"
                value={text}
                onChangeText={(text) => setText(text)}
                placeholder={'First Name'}
              />
            </View>
            <View style={{flexBasis: '48%'}}>
              <TextInput
                mode={'outlined'}
                label="Last Name"
                value={text}
                onChangeText={(text) => setText(text)}
                placeholder={'Last Name'}
              />
            </View>
          </View>
          <TextInput
            mode={'outlined'}
            label="Mobile Number"
            value={text}
            onChangeText={(text) => setText(text)}
            placeholder={'Mobile Number'}
          />
          <TextInput
            mode={'outlined'}
            label="Email"
            value={text}
            onChangeText={(text) => setText(text)}
            placeholder={'Email'}
          />
          <View style={{position: 'relative', marginTop: 10}}>
            <TextInput
              mode={'outlined'}
              secureTextEntry={secureTxtEntry}
              label="Password"
              value={text}
              onChangeText={(text) => setText(text)}
              placeholder={'Password'}
            />
            <TouchableOpacity
              style={{position: 'absolute', top: 20, right: 10}}
              onPress={setSecureTxtEntry}>
              {secureTxtEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Title>I agree to the Privacy Policy and Terms & Conditions </Title>
          </View>
          <Button
            icon="lock"
            style={{padding: 10, backgroundColor: 'black'}}
            mode="contained"
            onPress={() => console.log('Pressed')}>
            Sign Up
          </Button>
        </View>
        {/* sign up section */}
        <View style={styles.footerSection}>
          <Title>
            Already have an account?
            <Pressable
              onPress={() => {
                alert('hello world');
              }}>
              <Text style={{color: '#a85032', fontSize: 18}}>Sign In</Text>
            </Pressable>
          </Title>
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
    flexBasis: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

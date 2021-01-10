import React, {PureComponent} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {
  TextInput,
  Provider as PaperProvider,
  Button,
  Title,
} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';

export default function Login(props) {
  const [text, setText] = React.useState('');
  const [secureTxtEntry, setSecureTxtEntry] = React.useState(true);
  return (
    <View style={styles.container}>
      {/* logo section */}
      <View style={styles.logo_section}>
        <Title>Idea House Shop</Title>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          mode={'outlined'}
          label="Email"
          value={text}
          onChangeText={(text) => setText(text)}
          placeholder={'Email or Mobile Number'}
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
        <Title style={{textAlign: 'right'}}>Forgot your Password?</Title>
        <Button
          icon="lock"
          style={{padding: 10, backgroundColor: 'black'}}
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Login
        </Button>
      </View>
      {/* sign up section */}
      <View style={styles.footerSection}>
        <Title>
          Don't have account?{' '}
          <Pressable
            onPress={() => {
              props.swithLoginSignUp('signup');
            }}>
            <Text style={{color: '#a85032', fontSize: 18}}>Sign Up</Text>
          </Pressable>
        </Title>
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

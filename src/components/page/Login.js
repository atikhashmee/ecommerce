import React, { PureComponent } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { TextInput, Provider as PaperProvider, Button, Title  } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';

export default function Login (props) {
    const [text, setText] = React.useState('');
    const [secureTxtEntry, setSecureTxtEntry] = React.useState(true);
    return (
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <TextInput  
                    mode={'outlined'} 
                    label="Email" 
                    value={text} 
                    onChangeText={text => setText(text)} 
                    placeholder={'Email or Mobile Number'}
                    />
                    <View style={{ position: 'relative' }}>
                    <TextInput  
                    mode={'outlined'}
                    secureTextEntry={secureTxtEntry}  
                    label="Password" 
                    value={text} 
                    onChangeText={text => setText(text)} 
                    placeholder={'Password'}
                    />
                    <TouchableOpacity style={{ position: 'absolute', top: 20, right: 10 }} onPress={setSecureTxtEntry}>
                        {secureTxtEntry ?
                        <Feather name="eye-off" color="grey" size={20} />
                        :
                        <Feather name="eye" color="grey" size={20} />
                        }
                        </TouchableOpacity>
                    </View>
                    <Title style={{ textAlign:'right' }}>Forgot your Password?</Title>
                    <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                        Press me
                    </Button>
                </View>
                
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 4,
        width: '100%',
        borderColor: 'red', 
        borderWidth: 1,
    },
    formContainer: { 
        flexBasis:'50%', 
        borderColor: 'red', 
        borderWidth: 1,
        paddingHorizontal: 20,
    }
});
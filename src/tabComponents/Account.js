import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Modal,
  Text,
  Dimensions,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import Login from '../components/page/Login';
import AccountPage from '../screens/AccountPage';
import FooterTabs from '../layouts/FooterTabs';
import {
  Container,
  Button,
  Header,
  Left,
  Title,
  Body,
  Right,
  Icon,
  Content,
} from 'native-base';
import {AppContext} from '../utils/GlobalContext';

export default function Account() {
  const navigation = useNavigation();
  let {logout} = React.useContext(AppContext);
  // React.useEffect(() => {
  //   navigation.navigate('account');
  // }, []);
  return (
    <Container>
      <Header style={{backgroundColor: '#fff', color: '#000'}}>
        <Left>
          <Button
            onPress={() => {
              navigation.navigate('home');
            }}
            transparent>
            <Icon name="arrow-back" style={{color: '#000'}} />
          </Button>
        </Left>
        <Body>
          <Title style={{color: '#000'}}>Account</Title>
        </Body>
        <Right>
          <Button
            transparent
            onPress={() => {
              logout().then(it=>{
                navigation.navigate('home');
              })
            }}>
            <Icon name="log-out" style={{color: '#000'}} type="Feather" />
          </Button>
        </Right>
      </Header>
      <Content>
        <AccountPage />
      </Content>
      <FooterTabs />
    </Container>
  );
}

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
    paddingHorizontal: 20,
  },
  header: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  closeButton: {
    alignSelf: 'flex-start',
  },
  content: {
    width: Dimensions.get('window').width,
    flex: 2,
  },
  footer: {
    color: '#000',
  },
});

function PageLogin() {
  const [modalVisible, setModalVisible] = React.useState(false);
  React.useEffect(() => {
    setModalVisible(false);
  }, []);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={styles.modalView}>
        <View style={styles.header}>
          <TouchableHighlight
            style={{...styles.closeButton}}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Feather name="x" color="#000" size={30} />
          </TouchableHighlight>
        </View>
        <View style={styles.content}>
          <Login />
        </View>
        <View style={styles.footer}></View>
      </View>
    </Modal>
  );
}

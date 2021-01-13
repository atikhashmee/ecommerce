import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
  Pressable,
} from 'react-native';
import {Icon} from 'native-base';
import Login from '../components/page/Login';
import SignUp from '../components/page/SignUp';

export default function AuthModal({modalVisible, setModalVisible}) {
  const [isLogin, setIsLogin] = React.useState(true);
  const [isSignUp, setSignUp] = React.useState(false);
  function swithLoginSignUp(pageTag) {
    console.log(pageTag, pageTag == 'login', 'pressed');
    if (pageTag == 'login') {
      setSignUp(false);
      setIsLogin(true);
    } else {
      setIsLogin(false);
      setSignUp(true);
    }
  }
  function updateModalVisibility(value) {
    setModalVisible(value);
  }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        alert('Modal has been closed.');
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            <Pressable
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Icon name="x" type="Feather" />
            </Pressable>
          </View>
          <View style={styles.modalContent}>
            {isLogin && (
              <Login
                swithLoginSignUp={swithLoginSignUp}
                updateModalVisibility={updateModalVisibility}
              />
            )}
            {isSignUp && (
              <SignUp
                swithLoginSignUp={swithLoginSignUp}
                updateModalVisibility={updateModalVisibility}
              />
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flex: 1,
  },
  modalHeader: {
    flexBasis: '10%',
    minHeight: '10%',
  },
  modalContent: {
    flexBasis: '90%',
    minHeight: '90%',
    flexWrap: 'wrap',
  },
});

import React from 'react';
import {
  Modal,
  Dimensions,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {Icon} from 'native-base';
import {Pressable} from 'react-native';
import {UtilityContext} from '../providers/AppUtilityProvder';

export default function HalfModal(props) {
  const [] = React.useState(true);
  const {halfModalVisible, setHalfModalVisible} = React.useContext(UtilityContext);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={halfModalVisible}
      onRequestClose={() => {
        // setHalfModalVisible(false);
      }}>
      <TouchableOpacity
        activeOpacity={1}
        onPressOut={() => {
        //   setHalfModalVisible(false);
        }}
        style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalFlexContainer}>
            {props.headerVisible && (
              <View style={styles.modalHeader}>
                <Pressable
                  onPress={() => {
                    setHalfModalVisible(!halfModalVisible);
                  }}></Pressable>
                <Icon name="close-outline" type="Ionicons" />
              </View>
            )}
            <View
              style={
                props.headerVisible
                  ? styles.modalContent
                  : styles.modalContentWithoutHeader
              }>
              {props.children}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height - 200,
    bottom: -10,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalFlexContainer: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  modalHeader: {
    flexBasis: '10%',
    alignItems: 'flex-end',
    paddingRight: 10,
    paddingTop: 5,
  },
  modalContent: {
    flexBasis: '90%',
  },
  modalContentWithoutHeader: {
    flexBasis: '100%',
  },
});

import React, { useState } from 'react';
import {View, Text, StyleSheet, Modal, Pressable} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Button from './Button';

export default function FilterSideBar({modalVisible, setmodalVisible}) {
    return (
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setmodalVisible(false);
        }}
      >
            <Pressable activeOpacity={1} 
              style={{  position: 'absolute', 
              height: hp('100%'), 
              backgroundColor: '#0404046b',
              left: 0, top: 0, 
              width: wp('30%') }}
              onPress={() => {setmodalVisible(false)}}>
            </Pressable>
            <View style={styles.sidebarContainer}>
                <View style={styles.content}>
                    <View style={styles.filterTop}>
                      <ScrollView>
                          <Text>I am sidebar</Text>
                      </ScrollView>
                    </View>
                    <View style={styles.filterBottom}>
                      <Button style={{...styles.buttonStyle, ...styles.leftButton}}><Text style={{ color: '#fff'}}>RESET</Text></Button>
                      <Button style={{...styles.buttonStyle, ...styles.RightButton}}> <Text style={{ color: '#fff'}}>DONE</Text> </Button>
                    </View>
                </View>
          </View>
      </Modal>);
}

const styles = StyleSheet.create({
    sidebarContainer: {
        width: wp('70%'),
        height: hp('100%'),
        backgroundColor: '#fff',
        borderColor: '#f8f8f8',
        position: 'absolute',
        right: 0,
        top: 0,
    }, 
    content: {
      flex: 1,
    },
    filterTop: {
      flexBasis: '90%',
      height: hp('90%'),
      padding: 10,
    },
    filterBottom: {
      flexBasis: '10%',
      flexDirection: 'row',
      alignItems: 'flex-end'
    }, 
    buttonStyle: {
      flexBasis: '50%',
    },
    leftButton: {
      backgroundColor: 'green',
    },
    RightButton: {
      backgroundColor: 'blue',
    },
});
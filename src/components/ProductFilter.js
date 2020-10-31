import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import DropDown from '../components/DropDown';

export default function ProductFilter({style}) {
  return (
    <View style={{...style, ...styles.filterBarContainer}}>
      <View style={{flexGrow: 1}}>
            <DropDown />
      </View>
      <View style={styles.leftItems}>
        <IonIcon name="ios-funnel-outline" color="#000" size={20} />
      </View>
      <View style={styles.leftItems}>
        <IonIcon name="ios-grid-outline" color="#000" size={20} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  filterBarContainer: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftItems: {
    borderLeftColor: '#d4d4d4',
    borderLeftWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

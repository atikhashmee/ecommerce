import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import DropDown from '../components/DropDown';
import FilterSideBar from './FilterSideBar';

export default function ProductFilter({style}) {
  
  let [modalVisible, setmodalVisible] = useState(false);
  return (<>
    <View style={{...style, ...styles.filterBarContainer}}>
      <View style={{flexGrow: 1}}>
            <DropDown />
      </View>
      <View style={styles.leftItems}>
        <Pressable onPress={()=> {setmodalVisible(true)}}>
            <IonIcon name="ios-funnel-outline" color="#000" size={20} />
        </Pressable>
      </View>
      <View style={styles.leftItems}>
        <IonIcon name="ios-grid-outline" color="#000" size={20} />
      </View>
    </View>
    <FilterSideBar modalVisible={modalVisible} setmodalVisible={setmodalVisible} />
  </>);
}

const styles = StyleSheet.create({
  filterBarContainer: {
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

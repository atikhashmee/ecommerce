import React  from 'react';
import {View, StyleSheet} from 'react-native';
import Login  from '../components/page/Login'

export default function Account() {
    return (<>
        <Login />
        <View style={[styles.scene, {backgroundColor: 'blue'}]} />
    </>);
}

const styles = StyleSheet.create({
    scene: {
      flex: 1,
    },
  });
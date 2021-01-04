import React  from 'react';
import {View, StyleSheet} from 'react-native';
import Login  from '../components/page/Login'

export default function Account() {
    return (<>
        <Login />
    </>);
}

const styles = StyleSheet.create({
    scene: {
      flex: 1,
    },
  });
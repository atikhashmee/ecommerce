import React from 'react';
import {View, StyleSheet} from 'react-native';

function TriangleUp({style}) {
  return <View style={[styles.triangle, style]} />;
}

export default function StarFive() {
  return (
    <View style={styles.starfive}>
      <TriangleUp style={styles.starfiveTop} />
      <View style={styles.starfiveBefore} />
      <View style={styles.starfiveAfter} />
    </View>
  );
}

const styles = StyleSheet.create({
  starfive: {
    width: 150,
    height: 150,
  },
  starfiveTop: {
    position: 'absolute',
    top: -45,
    left: 37,
  },
  starfiveBefore: {
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 0,
    top: 0,
    borderStyle: 'solid',
    borderRightWidth: 100,
    borderRightColor: 'transparent',
    borderBottomWidth: 70,
    borderBottomColor: 'red',
    borderLeftWidth: 100,
    borderLeftColor: 'transparent',
    transform: [{rotate: '35deg'}],
  },
  starfiveAfter: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: -25,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderRightWidth: 100,
    borderRightColor: 'transparent',
    borderBottomWidth: 70,
    borderBottomColor: 'red',
    borderLeftWidth: 100,
    borderLeftColor: 'transparent',
    transform: [{rotate: '-35deg'}],
  },

  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'red',
  },
});

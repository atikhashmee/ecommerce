import React from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';
export default (props) => {
  return (
    <TouchableHighlight
      style={{...props.style, ...button.holder}}
      onPress={props.handleClick}>
      <Text style={button.buttonText}>{props.children}</Text>
    </TouchableHighlight>
  );
};

const button = StyleSheet.create({
  holder: {
    textAlign: 'center',
    paddingVertical: 10,
    color: '#fafafa',
    width: '100%',
    height: '100%',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});

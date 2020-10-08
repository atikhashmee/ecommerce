import React from 'react';
import { Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export function TopSearchBar() {
  return (
    <>
      <Pressable
        onPress={() => {
          alert('hello world');
        }}
        style={{
          flex: 1,
          borderRadius: 20,
          flexDirection: 'row',
          backgroundColor: '#eee',
          padding: 10
        }}
      >
        <Icon
          name="search"
          size={20}
          color="#000"
          style={{ marginLeft: 5 }} />
        <Text style={{ marginLeft: 10 }}>What would you like to buy?</Text>
      </Pressable>
    </>
  );
}

import React from 'react';
import { Text, Pressable } from 'react-native';
import { color } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export function TopSearchBar() {
  return (
    <>
      <Pressable
        onPress={() => {
          alert('searching.......');
        }}
        style={{
          flex: 1,
          borderRadius: 20,
          flexDirection: 'row',
          backgroundColor: '#f8f8f8',
          padding: 10
        }}
      >
        <Icon
          name="search"
          size={20}
          color="#222222"
          style={{ marginLeft: 5 }} />
        <Text style={{ color: '#222222', marginLeft: 2 }}>What would you like to buy?</Text>
      </Pressable>
    </>
  );
}

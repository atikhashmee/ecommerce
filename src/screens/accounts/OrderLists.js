import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Modal,
  Text,
  Dimensions,
  Pressable,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import {
  Provider as PaperProvider,
  Avatar,
  Badge,
  Button,
  Card,
  List,
  Title,
  Paragraph,
} from 'react-native-paper';

export default function OrderLists() {
  return (
    <PaperProvider>
      <SafeAreaView>
        <ScrollView style={{height: 'auto', padding: 10}}>
          <Text>Hello world</Text>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}

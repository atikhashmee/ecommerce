import React from 'react';
import {Text, View, Modal, StyleSheet, Dimensions} from 'react-native';
import HomePage from '../tabComponents/HomePage';
import FooterTabs from '../layouts/FooterTabs';
import {
  Container,
  Content,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
export default function HomeTabs() {
  const navigation = useNavigation();
  return (
    <Container>
      <Content> 
        <HomePage />
      </Content>
      <FooterTabs />
    </Container>
  );
}


const styles = StyleSheet.create({
  scene: {
    flex: 1,
  }
});

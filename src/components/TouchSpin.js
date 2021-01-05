import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Modal,
} from 'react-native';
import AppStyle from '../assets/style';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {Rating, AirbnbRating} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  Content,
  Header,
  Button,
  Left,
  Body,
  Right,
  Icon,
  Title,
  Grid,
  Col,
  Row,
  Tabs,
  Tab,
  Badge,
  TabHeading,
  Footer,
  FooterTab,
} from 'native-base';

export default function TouchSpin() {
  return (
    <View style={styles.spinContainer}>
      <Pressable style={styles.item} onPress={() => {}}>
        <Text style={{color: '#000'}}>-</Text>
      </Pressable>
      <Text style={{...styles.item, alignSelf: 'center', paddingVertical: 4}}>
        20
      </Text>
      <Pressable style={styles.item} onPress={() => {}}>
        <Text style={{color: '#000'}}>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  spinContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
  },
  item: {
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});

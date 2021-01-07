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
import Feather from 'react-native-vector-icons/Feather';
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

export default function TouchSpin({updateCount, initialCount}) {
  const [counter, setCounter] = React.useState(initialCount??1);
  React.useEffect(()=> {
    updateCount(counter);
  }, [counter]);
  function increament() {
    setCounter(counter + 1);
  }
  function decremeant() {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  }
  return (
    <View style={styles.spinContainer}>
      <Pressable
        style={styles.item}
        onPress={() => {
          decremeant();
        }}>
        <Feather name="minus" color="#000" size={18} />
      </Pressable>
      <Text style={{marginHorizontal: 10, fontSize: 18}}>{counter}</Text>
      <Pressable
        style={styles.item}
        onPress={() => {
          increament();
        }}>
        <Feather name="plus" color="#000" size={18} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  spinContainer: {
    width: '50%',
    padding: 2,
    flexDirection: 'row',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#d3d3d3',
    borderRadius: 300,
    padding: 3,
  },
});

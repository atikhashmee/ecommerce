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
import {Col, Container, Content, Row} from 'native-base';

function ListItem() {
  return (
    <Row style={listItemStyle.rowContainer}>
      <Col style={[listItemStyle.colGeneral]}>
        <View style={listItemStyle.columnView}>
          <View>
            <Text>EVL1254875666</Text>
          </View>
          <View>
            <Text>$1720</Text>
          </View>
        </View>
      </Col>
      <Col style={[listItemStyle.colGeneral, listItemStyle.colRightSide]}>
        <View style={listItemStyle.columnView}>
          <View style={{flexDirection: 'row'}}>
            <Pressable
              onPress={() => {}}
              style={[
                listItemStyle.badgeContainer,
                listItemStyle.statusBackground,
              ]}>
              <Text style={listItemStyle.statusColor}>Pending</Text>
            </Pressable>
            <Pressable
              onPress={() => {}}
              style={[
                listItemStyle.badgeContainer,
                listItemStyle.paymentBackground,
              ]}>
              <Text style={listItemStyle.statusColor}>Unpaid</Text>
            </Pressable>
          </View>
          <View>
            <Text>3 Feb, 07:39 PM</Text>
          </View>
        </View>
      </Col>
    </Row>
  );
}

export default function OrderLists() {
  return (
    <Container style={{backgroundColor: '#f5f5f5'}}>
      <ScrollView horizontal={true}>
        <View style={statusBarStyle.itemContainer}>
          <Text>All</Text>
        </View>
        <View style={statusBarStyle.itemContainer}>
          <Text>Pending</Text>
        </View>
        <View style={statusBarStyle.itemContainer}>
          <Text>Confirmed</Text>
        </View>
        <View style={statusBarStyle.itemContainer}>
          <Text>Processing</Text>
        </View>
        <View style={statusBarStyle.itemContainer}>
          <Text>Picked</Text>
        </View>
        <View style={statusBarStyle.itemContainer}>
          <Text>SHIPPED</Text>
        </View>
        <View style={statusBarStyle.itemContainer}>
          <Text>Delivered</Text>
        </View>
        <View style={statusBarStyle.itemContainer}>
          <Text>Canceled</Text>
        </View>
      </ScrollView>
      <Content>
        {Array(10)
          .fill(0)
          .map((item, indexKey) => {
            return <ListItem key={indexKey} />;
          })}
      </Content>
    </Container>
  );
}

const listItemStyle = StyleSheet.create({
  rowContainer: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginVertical: 10,
    minHeight: 70,
    height: 70,
    backgroundColor: '#fff',
  },
  colGeneral: {
    height: '100%',
  },
  colRightSide: {
    alignItems: 'flex-end',
  },
  statusColor: {
    color: '#fff',
  },
  columnView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  badgeContainer: {
    padding: 5,
    alignItems: 'center',
  },
  statusBackground: {
    backgroundColor: 'red',
  },
  paymentBackground: {
    backgroundColor: '#8c8c0a',
  },
});

const statusBarStyle = StyleSheet.create({
  scrollviewContainer: {
    flexDirection: 'row'
  },  
  itemContainer: {
    width: 100,
    padding: 10,
    backgroundColor: '#fff',
  },
});

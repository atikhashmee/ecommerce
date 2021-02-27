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
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const categorySelect = (str) => {
    setSelectedCategory(str);
  };
  return (
    <Container style={{backgroundColor: '#f5f5f5'}}>
      <View
        style={{
          flexBasis: '10%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Pressable
            onPress={() => {
              categorySelect('all');
            }}
            style={[
              statusBarStyle.itemContainer,
              selectedCategory === 'all' ? statusBarStyle.selectedStatus : {},
            ]}>
            <Text>All</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              categorySelect('pending');
            }}
            style={[
              statusBarStyle.itemContainer,
              selectedCategory === 'pending'
                ? statusBarStyle.selectedStatus
                : {},
            ]}>
            <Text>Pending</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              categorySelect('confirmed');
            }}
            style={[
              statusBarStyle.itemContainer,
              selectedCategory === 'confirmed'
                ? statusBarStyle.selectedStatus
                : {},
            ]}>
            <Text>Confirmed</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              categorySelect('processing');
            }}
            style={[
              statusBarStyle.itemContainer,
              selectedCategory === 'processing'
                ? statusBarStyle.selectedStatus
                : {},
            ]}>
            <Text>Processing</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              categorySelect('picked');
            }}
            style={[
              statusBarStyle.itemContainer,
              selectedCategory === 'picked'
                ? statusBarStyle.selectedStatus
                : {},
            ]}>
            <Text>Picked</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              categorySelect('shipped');
            }}
            style={[
              statusBarStyle.itemContainer,
              selectedCategory === 'picked'
                ? statusBarStyle.selectedStatus
                : {},
            ]}>
            <Text>SHIPPED</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              categorySelect('delivered');
            }}
            style={[
              statusBarStyle.itemContainer,
              selectedCategory === 'delivered'
                ? statusBarStyle.selectedStatus
                : {},
            ]}>
            <Text>Delivered</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              categorySelect('canceled');
            }}
            style={[
              statusBarStyle.itemContainer,
              selectedCategory === 'canceled'
                ? statusBarStyle.selectedStatus
                : {},
            ]}>
            <Text>Canceled</Text>
          </Pressable>
        </ScrollView>
      </View>
      <Content style={{flexBasis: '90%'}}>
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
    flexDirection: 'row',
  },
  itemContainer: {
    width: 100,
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedStatus: {
    borderBottomColor: 'green',
    borderBottomWidth: 5,
  },
});

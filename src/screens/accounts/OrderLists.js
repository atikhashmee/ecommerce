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
import {OrderContext} from '../../utils/OrderContext';
import {Col, Container, Content, Row} from 'native-base';

function ListItem({order}) {
  return (
    <Pressable
      onPress={() => {
        alert('click');
      }}>
      <Row style={listItemStyle.rowContainer}>
        <Col style={[listItemStyle.colGeneral]}>
          <View style={listItemStyle.columnView}>
            <View>
              <Text>IDE{order.id}</Text>
            </View>
            <View>
              <Text>${order.net_amount}</Text>
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
                <Text style={listItemStyle.statusColor}>{order.status}</Text>
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
    </Pressable>
  );
}

export default function OrderLists() {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const categorySelect = (str) => {
    setSelectedCategory(str);
    getUsersOrders(str);
  };
  const {orders, getUsersOrders} = React.useContext(OrderContext);

  React.useEffect(() => {
    getUsersOrders();
  }, []);
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
              categorySelect('complete');
            }}
            style={[
              statusBarStyle.itemContainer,
              selectedCategory === 'complete'
                ? statusBarStyle.selectedStatus
                : {},
            ]}>
            <Text>Completed</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              categorySelect('reject');
            }}
            style={[
              statusBarStyle.itemContainer,
              selectedCategory === 'reject'
                ? statusBarStyle.selectedStatus
                : {},
            ]}>
            <Text>Rejected</Text>
          </Pressable>
        </ScrollView>
      </View>
      <Content style={{flexBasis: '90%'}}>
        {orders.length > 0 &&
          orders.map((item, indexKey) => {
            return <ListItem key={indexKey} order={item} />;
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

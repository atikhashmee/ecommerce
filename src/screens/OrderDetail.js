import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Image, Pressable} from 'react-native';
import {Col, Container, Content, Icon, Row, Title, Badge} from 'native-base';
import Timeline from 'react-native-timeline-flatlist';
import {get_order} from '../api.json';
import {baseUrl} from '../env.json';

function OrderDetail({route}) {
  const [dataTimeLine, setDataTimeLine] = React.useState([]);
  const [orderId, setOrderId] = React.useState(null);
  const [orderdetail, setorderdetail] = React.useState(null);
  React.useEffect(() => {
    setOrderId(route.params.order_id);
  }, []);

  React.useEffect(() => {
    var formdata = new FormData();
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    fetch(baseUrl + get_order + '/' + orderId, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result, 'asdf');
      })
      .catch((error) => console.log('error', error));
  }, [orderId]);

  return (
    <Container style={{backgroundColor: '#d3d3d3'}}>
      <Content>
        <View
          style={{
            backgroundColor: '#fff',
            marginBottom: 10,
            paddingHorizontal: 5,
          }}>
          <Row style={styles.customRow}>
            <Col>
              <View style={[styles.topTextCenter]}>
                <Text>
                  Invoice <Text style={styles.heyperLink}>#123456</Text>
                </Text>
              </View>
            </Col>
            <Col>
              <View style={[styles.topTextCenter]}>
                <Text>2021-02-03</Text>
              </View>
            </Col>
          </Row>
          <Row style={styles.customRow}>
            <Col>
              <StatusChart />
            </Col>
          </Row>
          <Row style={styles.customRow}>
            <Col>
              <View style={{paddingVertical: 10, paddingHorizontal: 10}}>
                <Title style={{color: '#000'}}>ORDER TIMELINE</Title>
              </View>
              <Row style={styles.customRowTimeLine}>
                <Col style={styles.timeLineColFirst}>
                  <Text>3 Feb</Text>
                  <Text>07:40 PM</Text>
                </Col>
                <Col style={styles.timeLineColSecond}>
                  <View style={styles.leftBarDot} />
                  <View style={styles.leftBar} />
                  <Text style={styles.statusText}>Cancel</Text>
                  <Text style={styles.statusDescription}>
                    Order By Mistake - Customer{' '}
                  </Text>
                </Col>
              </Row>
              <Row style={styles.customRowTimeLine}>
                <Col style={styles.timeLineColFirst}>
                  <Text>5 Feb</Text>
                  <Text>07:40 PM</Text>
                </Col>
                <Col style={styles.timeLineColSecond}>
                  <View style={styles.leftBarDot} />
                  <View style={styles.leftBar} />
                  <Text style={styles.statusText}>Pending</Text>
                  <Text style={styles.statusDescription}>
                    Order By Mistake - Customer lorem ipsum lorem ipsum lorem
                    ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
                    ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  </Text>
                </Col>
              </Row>
            </Col>
          </Row>
        </View>
        <View style={{backgroundColor: '#fff', paddingHorizontal: 10}}>
          <View>
            <Title style={{color: '#000'}}>Products</Title>
          </View>
          {Array(5)
            .fill(0)
            .map((item, keyIn) => {
              return (
                <Row key={keyIn}>
                  <Col style={styles.prodcutColumnLeft}>
                    <View style={styles.imageBox}>
                      <Image
                        style={styles.tinyLogo}
                        source={{
                          uri:
                            'https://images.pexels.com/photos/56733/pexels-photo-56733.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                        }}
                      />
                    </View>
                  </Col>
                  <Col style={styles.prodcutColumnRight}>
                    <View style={styles.productDetail}>
                      <Text>Product Name</Text>
                      <Text style={{fontWeight: 'bold'}}>
                        Size: L, Color: off White
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text>$1250X 5</Text>
                        <Text>$1520</Text>
                      </View>
                    </View>
                  </Col>
                </Row>
              );
            })}
        </View>

        <View style={styles.eachSection}>
          <View style={styles.topHeader}>
            <Text style={styles.topHeaderTtitleStyle}>Order Summery</Text>
          </View>
          <View style={styles.contentContainer}>
            <Row>
              <Col>
                <Text>Subtotal</Text>
              </Col>
              <Col>
                <Text>$1560</Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text>Delivery Chagre</Text>
              </Col>
              <Col>
                <Text>$0</Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Title style={{color: '#000'}}>Total</Title>
              </Col>
              <Col>
                <Title style={{color: '#000'}}>$1530</Title>
              </Col>
            </Row>
          </View>
        </View>
        <View style={styles.eachSection}>
          <View style={styles.contentContainer}>
            <Row>
              <Col>
                <Text>Payment Status</Text>
              </Col>
              <Col>
                <Badge success>
                  <Text style={{color: '#fff'}}>$2260</Text>
                </Badge>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text>Account: $0</Text>
              </Col>
            </Row>
          </View>
        </View>
      </Content>
    </Container>
  );
}
function StatusChart() {
  return (
    <View style={styles.statusChart}>
      <View style={styles.eachBox}>
        <View style={styles.iconContainer}>
          <Icon name="x" type="Feather" style={styles.statusIcon} />
          <View style={styles.straightBar} />
        </View>
        <Text>Pending</Text>
      </View>
      <View style={styles.eachBox}>
        <View style={styles.iconContainer}>
          <Icon name="x" type="Feather" style={styles.statusIcon} />
          <View style={styles.straightBar} />
        </View>
        <Text>Confirmed</Text>
      </View>
      <View style={styles.eachBox}>
        <View style={styles.iconContainer}>
          <Icon name="x" type="Feather" style={styles.statusIcon} />
          <View style={styles.straightBar} />
        </View>
        <Text>Processing</Text>
      </View>
      <View style={styles.eachBox}>
        <View style={styles.iconContainer}>
          <Icon name="x" type="Feather" style={styles.statusIcon} />
          <View style={styles.straightBar} />
        </View>
        <Text>Picked</Text>
      </View>
      <View style={styles.eachBox}>
        <View style={styles.iconContainer}>
          <Icon name="x" type="Feather" style={styles.statusIcon} />
          <View style={styles.straightBar} />
        </View>
        <Text>Shipped</Text>
      </View>
      <View style={styles.eachBox}>
        <View style={styles.iconContainer}>
          <Icon name="x" type="Feather" style={styles.statusIcon} />
        </View>
        <Text>Delivered</Text>
      </View>
    </View>
  );
}
export default OrderDetail;

const styles = StyleSheet.create({
  topTextCenter: {
    alignItems: 'center',
  },
  customRow: {
    marginBottom: 20,
  },
  customRowTimeLine: {
    color: '#000',
  },
  timeLineColFirst: {
    flexBasis: '25%',
  },
  timeLineColSecond: {
    flexBasis: '70%',
  },
  heyperLink: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontFamily: 'UniNeue-Light',
    fontSize: 20,
  },
  statusChart: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  eachBox: {
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  straightBar: {
    position: 'absolute',
    left: 25,
    width: 40,
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    marginLeft: 2,
  },
  statusIcon: {
    backgroundColor: 'red',
    color: '#fff',
    borderRadius: 50,
  },
  statusText: {
    fontWeight: 'bold',
  },
  statusDescription: {
    paddingVertical: 10,
    fontFamily: 'UniNeue-Light',
  },
  leftBar: {
    position: 'absolute',
    left: -20,
    height: '100%',
    borderLeftWidth: 5,
    borderLeftColor: '#d2101052',
  },
  leftBarDot: {
    position: 'absolute',
    left: -28,
    borderWidth: 10,
    borderColor: 'red',
    borderRadius: 25,
  },
  imageBox: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  tinyLogo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#d3d3d3',
  },
  productDetail: {
    flexBasis: '65%',
  },
  prodcutColumnLeft: {
    flexBasis: '25%',
  },
  prodcutColumnRight: {
    flexBasis: '70%',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  eachSection: {
    marginTop: 10,
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: '#fff',
  },
  topHeader: {
    flexBasis: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  topHeaderTtitleStyle: {
    color: '#000',
    fontSize: 18,
    fontFamily: 'UniNeue-Light',
  },
  topHeaderActionButton: {
    color: 'red',
  },
  contentContainer: {
    flexBasis: '90%',
    color: '#fff',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
});

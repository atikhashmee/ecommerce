import React from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Col,
  Row,
} from 'native-base';

const Checkout = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Header transparent hasTabs>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" style={{color: '#000'}} />
          </Button>
        </Left>
        <Body>
          <Title style={{color: '#000'}}>Checkout</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Right>
      </Header>
      <Content style={{backgroundColor: '#d3d3d3'}}>
        <View style={styles.eachSection}>
          <View style={styles.topHeader}>
            <Text style={{color: '#000'}}>Shipping Address</Text>
            <Pressable>
              <Text style={{color: 'red'}}>Change</Text>
            </Pressable>
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.shippingAdressContainer}>
              <View style={styles.leftIcon}>
                <Icon name={'home'} type={'Ionicons'} />
              </View>
              <View style={styles.addressContent}>
                <Text>Lorem ipsum</Text>
                <Text>Lorem ipsum</Text>
                <Text>Lorem ipsum</Text>
                <Text>Lorem ipsum</Text>
              </View>
              <View style={styles.editIcon}>
                <Text style={styles.iconWrapper}>
                  <Icon
                    name={'pencil-outline'}
                    style={{fontSize: 18}}
                    type={'Ionicons'}
                  />
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.eachSection}>
          <View style={styles.topHeader}>
            <Text style={{color: '#000'}}>Billing Address</Text>
            <Pressable>
              <Text style={{color: 'red'}}>Change</Text>
            </Pressable>
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.shippingAdressContainer}>
              <View style={styles.leftIcon}>
                <Icon name={'home'} type={'Ionicons'} />
              </View>
              <View style={styles.addressContent}>
                <Text>Lorem ipsum</Text>
                <Text>Lorem ipsum</Text>
                <Text>Lorem ipsum</Text>
                <Text>Lorem ipsum</Text>
              </View>
              <View style={styles.editIcon}>
                <Text style={styles.iconWrapper}>
                  <Icon
                    name={'pencil-outline'}
                    style={{fontSize: 18}}
                    type={'Ionicons'}
                  />
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.eachSection}>
          <View style={styles.topHeader}>
            <Text style={{color: '#000'}}>Contact Number</Text>
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.shippingAdressContainer}>
              <View style={styles.leftIcon}>
                <Icon name={'call-outline'} type={'Ionicons'} />
              </View>
              <View style={styles.addressContent}>
                <Text>01735623513</Text>
              </View>
              <View style={styles.editIcon}>
                <Text style={styles.iconWrapper}>
                  <Icon
                    name={'pencil-outline'}
                    style={{fontSize: 18}}
                    type={'Ionicons'}
                  />
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.eachSection}>
          <View style={styles.topHeader}>
            <Text style={{color: '#000'}}>Products</Text>
          </View>
          <View style={styles.contentContainer}>
            {Array(5)
              .fill()
              .map((item, indd) => {
                return (
                  <View key={indd} style={styles.productContainer}>
                    <View style={styles.imageBox}>
                      <Image
                        style={styles.tinyLogo}
                        source={{
                          uri: 'bit.ly/2MUleBK',
                        }}
                      />
                    </View>
                    <View style={styles.productDetail}>
                      <Text>Cotton Full Sleeve Casual Shirt for Men-15</Text>
                      <Text style={{fontWeight: 'bold'}}>
                        Size: L, Color: off White
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text>$1250 X 1</Text>
                        <Text>$1250</Text>
                      </View>
                    </View>
                  </View>
                );
              })}
          </View>
        </View>
        <View style={styles.eachSection}>
          <View style={styles.topHeader}>
            <Text style={{color: '#000'}}>Order Summery</Text>
          </View>
          <View style={styles.contentContainer}>
            <Row>
              <Col>
                <Text>Subtotal</Text>
              </Col>
              <Col>
                <Text>$1500</Text>
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
                <Title style={{color: '#000'}}>$1500</Title>
              </Col>
            </Row>
          </View>
        </View>
        <View style={{alignItems: 'center', padding: 10}}>
          <Text>
            is simply dummy text of the printing and typesetting industry
          </Text>
          <Text>
            <Icon name={'time-outline'} type={'Ionicons'} /> is simply dummy
            text of the printing and typesetting industry
          </Text>
        </View>
      </Content>
      <View style={styles.checkoutFooterContainer}>
        <Row style={styles.row1Style}>
          <Col>
            <Text>Items 1</Text>
          </Col>
          <Col style={{alignItems: 'flex-end'}}>
            <Text>Total $1345</Text>
          </Col>
        </Row>
        <Row style={styles.row2Style}>
          <Col>
            <Button
              onPress={() => {
                alert('hello world');
              }}
              style={styles.placeOrderButtonStyle}>
              <Text style={styles.placeOrderButtonTextStyle}>Place Order</Text>
            </Button>
          </Col>
        </Row>
      </View>
    </Container>
  );
};
export default Checkout;

const styles = StyleSheet.create({
  productWrapperContainer: {
    flexBasis: '94%',
    height: hp('100%'),
    backgroundColor: '#f4f4f4',
    marginTop: 10,
  },
  productWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  checkoutFooterContainer: {
    backgroundColor: '#fff',
    minHeight: 100,
    bottom: 0,
    height: 100,
    width: '100%',
    zIndex: 999,
    paddingHorizontal: 10,
    borderWidth: 3,
    borderColor: '#d4d4d4',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  placeOrderButtonStyle: {
    width: '100%',
    padding: 10,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  placeOrderButtonTextStyle: {
    color: '#fff',
    fontSize: 22,
  },
  row1Style: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  row2Style: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 15,
  },
  eachSection: {
    marginBottom: 10,
    paddingHorizontal: 10,
    flex: 1,
  },
  topHeader: {
    flexBasis: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  contentContainer: {
    flexBasis: '90%',
    color: '#fff',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  shippingAdressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIcon: {
    flexBasis: '20%',
  },
  editIcon: {
    flexBasis: '20%',
  },
  addressContent: {
    flexBasis: '60%',
  },
  productContainer: {
    minHeight: 120,
    height: 120,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBox: {
    padding: 20,
    flexBasis: '35%',
    alignItems: 'center',
  },
  productDetail: {
    flexBasis: '65%',
  },
  tinyLogo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    backgroundColor: 'lightblue',
  },
  iconWrapper: {
    backgroundColor: '#d3d3d3',
    borderRadius: 25,
    width: 35,
    padding: 10,
  },
});

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
import TouchSpin from './TouchSpin';
import {UtilityContext} from '../providers/AppUtilityProvder';
import {CartContext} from '../utils/CartContext';

export default function CartModal() {
  let [variationImages, setvariationImages] = useState([
    'https://images.unsplash.com/photo-1533228100845-08145b01de14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=378&q=80',
    'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    'https://images.unsplash.com/photo-1556155092-8707de31f9c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
  ]);
  const {halfModalVisible, setHalfModalVisible} = React.useContext(
    UtilityContext,
  );
  const {currentCartItem, setCurrentCartItem} = React.useContext(CartContext);
  React.useEffect(() => {
    console.log(currentCartItem, 'itemssss');
  }, []);
  return (
    <Container>
      {currentCartItem !== null && (
        <Grid style={{padding: 10}}>
          <Row
            style={{
              height: '30%',
            }}>
            <Col style={{flexDirection: 'row'}}>
              <View style={styles.imageContainer}>
                <Image
                  source={{uri: currentCartItem.feature_image_url}}
                  style={AppStyle.image}
                />
              </View>
              <View style={styles.nameColor}>
                <Text style={{fontSize: 30}}>${currentCartItem.price||0}</Text>
                <Text style={{fontSize: 20}}>{currentCartItem.name}</Text>
              </View>
            </Col>
            <Col style={{alignItems: 'flex-end'}}>
              <Pressable
                onPress={() => {
                  setHalfModalVisible(false);
                  setCurrentCartItem(null);
                }}>
                <Icon name="close-outline" type="Ionicons" />
              </Pressable>
            </Col>
          </Row>
          <Content style={styles.contentContainer}>
            <Row>
              <Col
                style={{
                  paddingVertical: 8,
                  borderBottomColor: '#eee',
                  borderBottomWidth: 1,
                }}>
                <View>
                  <Text style={{fontSize: 20, paddingLeft: 10}}>
                    Color Family
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  {variationImages.map((img, ind) => (
                    <View
                      key={ind}
                      style={{width: 50, marginHorizontal: 10, height: 50}}>
                      <Image style={AppStyle.image} source={{uri: img}} />
                    </View>
                  ))}
                </View>
              </Col>
            </Row>
            <Row>
              <Col style={{borderBottomColor: '#eee', borderBottomWidth: 1}}>
                <View>
                  <View>
                    <Text>Quantity</Text>
                  </View>
                </View>
              </Col>
              <Col>
                <View style={{height: 30}}>
                  <TouchSpin updateCount={() => {}} initialCount={1} />
                </View>
              </Col>
            </Row>
            <Row>
              <Col style={{borderBottomColor: '#eee', borderBottomWidth: 1}}>
                <View>
                  <View>
                    <Text>Quantity</Text>
                  </View>
                </View>
              </Col>
              <Col>
                <View style={{height: 30}}>
                  <TouchSpin updateCount={() => {}} initialCount={1} />
                </View>
              </Col>
            </Row>
            <Row>
              <Col style={{borderBottomColor: '#eee', borderBottomWidth: 1}}>
                <View>
                  <View>
                    <Text>Quantity</Text>
                  </View>
                </View>
              </Col>
              <Col>
                <View style={{height: 30}}>
                  <TouchSpin updateCount={() => {}} initialCount={1} />
                </View>
              </Col>
            </Row>
            <Row>
              <Col style={{borderBottomColor: '#eee', borderBottomWidth: 1}}>
                <View>
                  <View>
                    <Text>Quantity</Text>
                  </View>
                </View>
              </Col>
              <Col>
                <View style={{height: 30}}>
                  <TouchSpin updateCount={() => {}} initialCount={1} />
                </View>
              </Col>
            </Row>
            <Row>
              <Col style={{borderBottomColor: '#eee', borderBottomWidth: 1}}>
                <View>
                  <View>
                    <Text>Quantity</Text>
                  </View>
                </View>
              </Col>
              <Col>
                <View style={{height: 30}}>
                  <TouchSpin updateCount={() => {}} initialCount={1} />
                </View>
              </Col>
            </Row>
            <Row>
              <Col style={{borderBottomColor: '#eee', borderBottomWidth: 1}}>
                <View>
                  <View>
                    <Text>Quantity</Text>
                  </View>
                </View>
              </Col>
              <Col>
                <View style={{height: 30}}>
                  <TouchSpin updateCount={() => {}} initialCount={1} />
                </View>
              </Col>
            </Row>
          </Content>
          <Button style={{width: '100%', justifyContent: 'center'}}>
            <Text style={{color: '#fff', textAlign: 'center'}}>
              Add To Cart
            </Text>
          </Button>
        </Grid>
      )}

      {/* when there is no data */}
      {currentCartItem === null && (
        <Grid style={{padding: 10}}>
          <Row
            style={{
              height: '30%',
            }}>
            <Col style={{flexDirection: 'row'}}>
              <Text>Not Item selected</Text>
            </Col>
            <Col style={{alignItems: 'flex-end'}}>
              <Pressable
                onPress={() => {
                  setHalfModalVisible(false);
                  setCurrentCartItem(null);
                }}>
                <Icon name="close-outline" type="Ionicons" />
              </Pressable>
            </Col>
          </Row>
        </Grid>
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    borderColor: '#eee',
    borderWidth: 1,
    height: 150,
    width: 150,
  },
  nameColor: {
    color: '#000',
    marginLeft: 10,
  },
  contentContainer: {
    backgroundColor: '#fff',
  },
});

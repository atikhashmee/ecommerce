import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import AppStyle from '../assets/style';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Product from '../components/Product';
import {AppContext} from '../utils/GlobalContext';
import ProductFilter from '../components/ProductFilter';
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
  Grid,
  Col,
  Row,
  Tabs,
  Tab,
  Badge,
  TabHeading,
  List, 
  ListItem, 
  Thumbnail,Item,Input,
  Footer,
  FooterTab,
} from 'native-base';
import { parse } from '@babel/core';

const Checkout = (props) => {
  const navigation = useNavigation();
  let {cartProducts, removeFromCart} = useContext(AppContext);
  let [totalPrice, setTotalPrice] = useState(0);
  useEffect(()=> {
        if (cartProducts.length>0) {
            let price = 0;
            cartProducts.forEach(item=>{
                price += parseFloat(item.price);
            });
            setTotalPrice(price);
        }
  }, [totalPrice])
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
      <Content>
        <List>
            {cartProducts.length> 0 && cartProducts.map((item, key) => <ListItem key={key} thumbnail>
                <Left>
                    <Thumbnail square source={{ uri: item.feature_image }} />
                </Left>
                <Body>
                    <Text>{item.name}</Text>
                    <Text note numberOfLines={1}>{item.price}</Text>
                </Body>
                <Right style={{ flex: 1, flexDirection: 'row' }}>
                <Item regular style={{ flexBasis: '50%' }}>
                    <Input value='20' />
                </Item>
                    <Button transparent  onPress={()=>{removeFromCart(item)}}>
                    <Icon name='close-outline' type="Ionicons" style={{ color: '#000' }} />
                    </Button>
                </Right>
            </ListItem>)}
        </List>
      </Content>
      <Footer>
          <FooterTab style={{ backgroundColor: '#fff' }}>
            <Button style={{ width: 30 }}>
                <Icon name='basket-outline' type="Ionicons" style={{ color: '#000' }} />
                <Text>Store</Text>
            </Button>
            <Button>
                <Text>${totalPrice}</Text>
            </Button>
            <Button   onPress={()=>{removeFromCart(item)}}
                style={{ backgroundColor: '#DB1C2B', height: 50, width: 50, borderRadius: 10}}>
                    <Text style={{ color: '#fff' }}>Place Order</Text>
                </Button>
          </FooterTab>
        </Footer>
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
});

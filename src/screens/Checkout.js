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
  Grid,
  Col,
  Row,
  Tabs,
  Tab,
  Badge,
  TabHeading,
  List, 
  ListItem, 
  Thumbnail,
  Footer,
  FooterTab,
} from 'native-base';

const Checkout = (props) => {
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
      <Content>
          <Text>Hello world</Text>
      </Content>
      <Footer>
          <FooterTab style={{ backgroundColor: '#fff' }}>
            <Button style={{ width: 30 }}>
                <Icon name='basket-outline' type="Ionicons" style={{ color: '#000' }} />
                <Text>Store</Text>
            </Button>
            <Button>
                <Text>$12</Text>
            </Button>
            <Button 
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

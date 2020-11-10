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
  Footer,
  FooterTab,
} from 'native-base';

const Products = (props) => {
  const navigation = useNavigation();
  let {cartProducts} = useContext(AppContext);
  return (
    <Container>
      <Header transparent hasTabs>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" style={{color: '#000'}} />
          </Button>
        </Left>
        <Body>
          <Title style={{color: '#000'}}>Products</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Right>
      </Header>
      <Content>
            <ProductPage props={props} />
      </Content>
      <Footer>
          <FooterTab style={{ backgroundColor: '#fff' }}>
            <Button style={{ width: 30 }}>
                <Icon name='basket-outline' type="Ionicons" style={{ color: '#000' }} />
                <Text>Store</Text>
            </Button>
            <Button style={{ width: 30 }}>
                <Icon name='heart-outline' type="Ionicons" style={{ color: '#000' }} />
                <Text>Wishlists</Text>
            </Button>
            <Button onPress={()=>{}}>
              <Text>
                <Icon name='cart-outline' style={{ color: '#000' }} />
                <Badge info> 
                  <Text style={{ color: '#fff' }}>{cartProducts.length}</Text>
                </Badge>
              </Text>
            </Button>
            <Button   onPress={()=>{navigation.navigate('checkout')}}
                style={{ backgroundColor: '#DB1C2B', height: 50, width: 50, borderRadius: 10}}>
                    <Text style={{ color: '#fff' }}>Checkout</Text>
                </Button>
          </FooterTab>
        </Footer>
      {/* <Tabs tabBarPosition="bottom">
        <Tab
          heading={
            <TabHeading>
              <Icon name="list" />
            </TabHeading>
          }>
          <ProductPage props={props} />
        </Tab>
        <Tab
          heading={
            <TabHeading>
              <Icon name="cart" />
              <Badge>
                <Text>2</Text>
              </Badge>
            </TabHeading>
          }>
          <Tab2 />
        </Tab>
      </Tabs> */}
    </Container>
  );
};
export default Products;
function ProductPage({props}) {
  let {loadProducts} = useContext(AppContext);
  const navigation = useNavigation();
  let [item, setItems] = useState({
    elements: [
      {
        id: 1,
        name: 'Accer BD 80',
        feature_category_image_url:
          'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '1230',
        old_price: '',
      },
      {
        id: 2,
        name: 'Lenovo BD 80',
        feature_category_image_url:
          'https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '1520',
        old_price: '1520',
      },
      {
        id: 3,
        name: 'HP BD 80',
        feature_category_image_url:
          'https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '1520',
        old_price: '1520',
      },
    ],
  });

  let [products, setProducts] = useState([]);

  useEffect(() => {
    let route_params = props.route.params;
    if ('category_id' in route_params) {
      loadProducts(route_params.category_id)
        .then((res) => res.json())
        .then((res) => {
          setProducts([...res.data.products]);
        });
    }
  }, []);
  return (
    <Content style={{backgroundColor: '#f4f4f4'}}>
      <Grid>
        <Row
          style={{
            backgroundColor: '#fff',
            height: '7%',
            borderColor: '#eee',
            borderWidth: 1,
            alignItems: 'center',
            marginBottom: 5,
          }}>
          <Col>
            <ProductFilter />
          </Col>
        </Row>
        <Row style={{height: '90%', borderColor: '#eee'}}>
          <Col>
            <ScrollView>
              <View style={styles.productWrapperContainer}>
                <View style={styles.productWrapper}>
                  {products.length > 0 &&
                    products.map((p, index) => (
                      <Product
                        product={p}
                        key={index}
                        handleClick={() => {
                          navigation.navigate('product_detail', {
                            product_id: p.id,
                          });
                        }}
                      />
                    ))}
                </View>
                {products.length == 0 && (
                  <View
                    style={{
                      height: hp('80%'),
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <ActivityIndicator size="large" color="#000000" />
                  </View>
                )}
              </View>
            </ScrollView>
          </Col>
        </Row>
      </Grid>
    </Content>
  );
}
function Tab2() {
  return (
    <View>
      <Text>tab 2</Text>
    </View>
  );
}
function Tab3() {
  return (
    <View>
      <Text>tab 3</Text>
    </View>
  );
}

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

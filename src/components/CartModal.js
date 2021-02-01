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
  const {halfModalVisible, setHalfModalVisible} = React.useContext(
    UtilityContext,
  );
  const {currentCartItem, setCurrentCartItem} = React.useContext(CartContext);
  const [variantColor, setVariantColor] = React.useState([]);
  const [variantSize, setVariantSize] = React.useState([]);
  const [selectedColor, setSelectedColor] = React.useState('');
  const [selectedSize, setSelectedSize] = React.useState('');
  const [variantPrice, setVariantPrice] = React.useState([]);
  const [productPrice, setProductPrice] = React.useState(0);
  const [displayImage, setDisplayImage] = React.useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(null);

  const getVariantPrice = () => {
    if (selectedColor !== '' && selectedSize !== '') {
      if (variantPrice.length > 0) {
        variantPrice.forEach((item) => {
          if (item.size === selectedSize && item.color === selectedColor) {
            setProductPrice(item.price);
          }
        });
      }
    }
  };

  React.useEffect(() => {
    getVariantPrice();
  }, [selectedColor, selectedSize]);

  React.useEffect(() => {
    let colors = [];
    let sizes = [];
    let var_prices = [];
    if (currentCartItem.variants.length > 0) {
      currentCartItem.variants.forEach((item, innd) => {
        let singleSize = '';
        if (item.opt1_name === 'size') {
          singleSize = item.opt1_value;
        } else if (item.opt2_name === 'size') {
          singleSize = item.opt2_value;
        }

        if (singleSize !== '') {
          if (sizes.indexOf(singleSize) === -1) {
            sizes.push(singleSize);
          }
        }

        let singlecolor = '';
        if (item.opt2_name === 'color') {
          singlecolor = item.opt2_value;
        } else if (item.opt1_name === 'color') {
          singlecolor = item.opt1_value;
        }

        if (singlecolor !== '') {
          if (colors.indexOf(singlecolor) === -1) {
            colors.push(singlecolor);
          }
        }
        if (singlecolor !== '' && singleSize !== '') {
          let variantPriceObj = {};
          variantPriceObj.color = singlecolor;
          variantPriceObj.size = singleSize;
          variantPriceObj.price = item.price;
          if (var_prices.indexOf(variantPriceObj) === -1) {
            var_prices.push(variantPriceObj);
          }
        }
      });

      setVariantSize(sizes);
      setVariantColor(colors);
      setVariantPrice(var_prices);
      setSelectedColor(colors[0]);
      setSelectedSize(sizes[0]);
      setDisplayImage(currentCartItem.feature_image_url);

      setSelectedImageIndex(
        currentCartItem.extra_images.indexOf(currentCartItem.feature_image_url),
      );
    }
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
                <Image source={{uri: displayImage}} style={AppStyle.image} />
              </View>
              <View style={styles.nameColor}>
                <Text style={{fontSize: 30}}>${productPrice}</Text>
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
            {currentCartItem.extra_images.length > 0 && (
              <Row>
                <Col
                  style={{
                    paddingVertical: 8,
                    borderBottomColor: '#eee',
                    borderBottomWidth: 1,
                  }}>
                  <View>
                    <Text style={{fontSize: 20, paddingLeft: 10}}>Images</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    {currentCartItem.extra_images.map((img, ind) => (
                      <Pressable
                        key={ind}
                        onPress={() => {
                          setDisplayImage(img);
                          setSelectedImageIndex(ind);
                        }}
                        style={
                          selectedImageIndex === ind
                            ? [styles.extra_images, styles.selectedItems]
                            : styles.extra_images
                        }>
                        <Image style={AppStyle.image} source={{uri: img}} />
                      </Pressable>
                    ))}
                  </View>
                </Col>
              </Row>
            )}

            <Row>
              <Col style={{borderColor: '#eee', borderWidth: 1}}>
                <View style={{height: 30}}>
                  <Text style={{fontSize: 20, paddingLeft: 10}}>Quantity</Text>
                </View>
              </Col>
              <Col>
                <View style={{height: 30}}>
                  <TouchSpin updateCount={() => {}} initialCount={1} />
                </View>
              </Col>
            </Row>
            {variantColor.length > 0 && (
              <Row>
                <Col>
                  <View>
                    <Text style={{fontSize: 20, paddingLeft: 10}}>Color</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    {variantColor.map((item, ind) => {
                      return (
                        <Pressable
                          key={ind}
                          onPress={() => {
                            setSelectedColor(item);
                            getVariantPrice();
                          }}
                          style={
                            selectedColor === item
                              ? [styles.variantBox, styles.selectedItems]
                              : styles.variantBox
                          }>
                          <Text>{item}</Text>
                        </Pressable>
                      );
                    })}
                  </View>
                </Col>
              </Row>
            )}
            {variantSize.length > 0 && (
              <Row>
                <Col>
                  <View>
                    <Text style={{fontSize: 20, paddingLeft: 10}}>Size</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    {variantSize.map((item, innd) => {
                      return (
                        <Pressable
                          key={innd}
                          onPress={() => {
                            setSelectedSize(item);
                            getVariantPrice();
                          }}
                          style={
                            selectedSize === item
                              ? [styles.variantBox, styles.selectedItems]
                              : styles.variantBox
                          }>
                          <Text>{item}</Text>
                        </Pressable>
                      );
                    })}
                  </View>
                </Col>
              </Row>
            )}
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
  variantBox: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 5,
  },
  selectedItems: {
    borderWidth: 2,
    borderColor: 'red',
  },
  extra_images: {
    width: 50,
    marginHorizontal: 10,
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
  },
});

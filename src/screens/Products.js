import React, {useEffect, useState} from 'react';
import {View, Text, Image, Pressable, ScrollView} from 'react-native';
import AppStyle from '../assets/style';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Product from '../components/Product';

const Products = (props) => {
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
  useEffect(() => {
    console.log(props.route.params);
  }, []);
  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: '#f4f4f4'}}>
        <View style={{flexBasis: '6%'}}>
          <Text>Hello world</Text>
        </View>
        <View
          style={{
            flexBasis: '94%',
            height: hp('100%'),
            backgroundColor: '#f4f4f4',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
              alignItems: 'flex-start',
              flexWrap: 'wrap',
            }}>
            {item.elements.length > 0 &&
              item.elements.map((p) => (
                <Product product={p} />
              ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default Products;

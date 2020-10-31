import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import AppStyle from '../assets/style';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Product from '../components/Product';
import {AppContext} from '../utils/GlobalContext';
import ProductFilter from '../components/ProductFilter';

const Products = (props) => {
  let {loadProducts} = useContext(AppContext);
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
    <View style={{flex: 1, backgroundColor: '#f4f4f4', padding: 5}}>
      <View style={{flexBasis: '6%', backgroundColor: '#fff'}}>
        <ProductFilter />
      </View>
      <ScrollView>
        <View
          style={{
            flexBasis: '94%',
            height: hp('100%'),
            backgroundColor: '#f4f4f4',
            marginTop: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
              alignItems: 'flex-start',
              flexWrap: 'wrap',
            }}>
            {products.length > 0 &&
              products.map((p, index) => <Product product={p} key={index} />)}
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
    </View>
  );
};
export default Products;

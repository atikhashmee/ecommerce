import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import AppStyle from '../assets/style';
import IonIcon from 'react-native-vector-icons/Ionicons';

const Product = ({product, handleClick}) => {
  return (
    <Pressable onPress={()=> {handleClick()}} 
    key={product.id} style={{...AppStyle.productBox, marginBottom: 10}}>
      <View style={AppStyle.prductContainer}>
        {/* feature_category_image_url */}
        <Image
          style={AppStyle.image}
          source={{uri: product.feature_category_image_url}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={AppStyle.prductTitle}>{product.name}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text>${product.price}</Text>
            {product.old_price !== '' && (
              <Text
                style={{
                  textDecorationLine: 'line-through',
                  marginLeft: 10,
                }}>
                ${product.old_price}
              </Text>
            )}
          </View>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Pressable
          onPress={() => alert('added to cart')}
          style={AppStyle.cartButton}>
          <IonIcon name="cart-outline" color="#000" size={20} />
        </Pressable>
        <Pressable
          onPress={() => alert('saved')}
          style={{
            ...AppStyle.cartButton,
            borderLeftWidth: 1,
          }}>
          <IonIcon name="heart-outline" color="#000" size={20} />
        </Pressable>
      </View>
    </Pressable>
  );
};

export default Product;

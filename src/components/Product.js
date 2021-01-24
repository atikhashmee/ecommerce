import React, {useContext} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import AppStyle from '../assets/style';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {AppContext} from '../utils/GlobalContext';
import {useNavigation} from '@react-navigation/native';

const Product = ({product, handleClick, itemType = null}) => {
  let {addToCart} = useContext(AppContext);
  let [cardItemType, setCardItemType] = React.useState(itemType);
  let [imageUrl, setImageUrl] = React.useState(null);
  const navigation = useNavigation();
  React.useEffect(() => {
    if (cardItemType !== null) {
      if (cardItemType === 'product') {
        setImageUrl(product.feature_image_url);
      } else if (cardItemType === 'category') {
        setImageUrl(product.feature_category_image_url);
      }
    } else {
      setImageUrl(product.feature_image_url);
    }
  }, [cardItemType]);
  return (
    <Pressable
      onPress={() => {
        handleClick();
      }}
      key={product.id}
      style={{...AppStyle.productBox, marginBottom: 10}}>
      <View style={AppStyle.prductContainer}>
        {/* feature_category_image_url */}
        <Image style={AppStyle.image} source={{uri: imageUrl}} />
      </View>
      {cardItemType === 'product' ? (
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
      ) : (
        <View>
          <Text style={AppStyle.prductTitle}>{product.category_name}</Text>
        </View>
      )}
      {cardItemType === 'product' ? (
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Pressable
            onPress={() => addToCart(product)}
            style={AppStyle.cartButton}>
            <IonIcon name="cart-outline" color="#000" size={20} />
          </Pressable>
          <Pressable
            onPress={() => {
              alert('saved');
            }}
            style={{
              ...AppStyle.cartButton,
              borderLeftWidth: 1,
            }}>
            <IonIcon name="heart-outline" color="#000" size={20} />
          </Pressable>
        </View>
      ) : (
        <View>
          <Pressable
            onPress={() => {
              handleClick();
            }}
            style={AppStyle.cartButton}>
            <Text> See Products </Text>
          </Pressable>
        </View>
      )}
    </Pressable>
  );
};

export default Product;

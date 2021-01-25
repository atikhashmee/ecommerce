import React, {useContext} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import AppStyle from '../assets/style';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {AppContext} from '../utils/GlobalContext';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {WishListsContext} from '../utils/WishListsContext';

const Product = ({product, handleClick, itemType = null}) => {
  let {addToCart} = useContext(AppContext);
  let [cardItemType, setCardItemType] = React.useState(itemType);
  let [imageUrl, setImageUrl] = React.useState(null);
  let {addToWishLists} = React.useContext(WishListsContext);

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
            padding: 10,
          }}>
          <View>
            <Text numberOfLines={1} style={AppStyle.prductTitle}>
              {product.name}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.priceTitle}>${product.price}</Text>
              {product.old_price !== '' && (
                <Text
                  style={[
                    styles.priceTitle,
                    {
                      textDecorationLine: 'line-through',
                      marginLeft: 10,
                    },
                  ]}>
                  ${product.old_price}
                </Text>
              )}
            </View>
          </View>
        </View>
      ) : (
        <View
          style={{
            padding: 10,
          }}>
          <Text numberOfLines={1} style={AppStyle.prductTitle}>
            {product.category_name}
          </Text>
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
              addToWishLists(product.id);
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
            <Text style={styles.priceTitle}> See Products </Text>
          </Pressable>
        </View>
      )}
    </Pressable>
  );
};

export default Product;

const styles = StyleSheet.create({
  priceTitle: {
    fontFamily: 'UniNeue-Light',
  },
});

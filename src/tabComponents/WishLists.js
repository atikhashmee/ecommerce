import React from 'react';
import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Title} from 'react-native-paper';
import FooterTabs from '../layouts/FooterTabs';
import {Container, Icon, Content} from 'native-base';
import {WishListsContextTwo} from '../utils/WishListsContextTwo';

function WishListItem({prop_item, removeItem}) {
  return (
    <View style={styles.wishListsItem}>
      <View style={styles.imageBox}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: prop_item.image,
          }}
        />
      </View>
      <View style={styles.wishListContent}>
        <View style={styles.title_container}>
          <Title style={styles.title}>{prop_item.name}</Title>
        </View>
        <View style={styles.price_container}>
          <Text style={styles.priceText}>${prop_item.price}</Text>
        </View>
        <View style={styles.actionBar}>
          <View style={styles.timeSection}>
            <Feather name={'clock'} size={20} color="#000" />
            <Text
              style={{
                color: '#000',
                marginLeft: 5,
                backgroundColor: '#fff',
                fontFamily: 'UniNeue-Light',
                fontSize: 16,
              }}>
              {prop_item.time}
            </Text>
          </View>
          <View style={styles.deleteAction}>
            <Pressable
              onPress={() => {
                removeItem(prop_item);
              }}>
              <Icon
                name={'trash-outline'}
                type="Ionicons"
                style={{
                  fontSize: 22,
                }}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

export default function WishLists() {
  const {wishlists, deleteWishItem} = React.useContext(WishListsContextTwo);
  const [wishListsItems, setWishLitsItems] = React.useState([]);
  React.useEffect(() => {
    if (wishlists.length > 0) {
      setWishLitsItems(
        wishlists.map((item) => {
          return {
            id: item.id,
            product_id: item.product_id,
            name: item.name,
            time: item.formatted_date,
            image: item.feature_image_url,
            price: item.price,
          };
        }),
      );
    }
  }, [wishlists]);

  function removeItem(item) {
    deleteWishItem(item.product_id);
    let removableItems = [...wishListsItems];
    removableItems.splice(removableItems.indexOf(item), 1);
    setWishLitsItems(removableItems);
  }
  return (
    <Container>
      {wishListsItems.length > 0 && (
        <Content style={styles.contentStyle}>
          {wishListsItems.map((item, ind) => {
            return (
              <WishListItem
                prop_item={item}
                key={ind}
                removeItem={removeItem}
              />
            );
          })}
        </Content>
      )}
      {wishListsItems.length == 0 && (
        <View style={styles.emptyBoxMessage}>
          <Image
            style={{width: 50, height: 50}}
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYNXiS_opVY9M5xFzDfsdyviAl_9jMliQ2wA&usqp=CAU',
            }}
          />
          <Text style={{fontSize: 20}}>
            You have not added anything to wishLists
          </Text>
        </View>
      )}
      <FooterTabs />
    </Container>
  );
}

const styles = StyleSheet.create({
  contentStyle: {
    padding: 10,
  },
  wishListsItem: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 120,
    height: 120,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
  imageBox: {
    padding: 20,
    flexBasis: '35%',
    alignItems: 'center',
  },
  tinyLogo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    backgroundColor: 'lightblue',
  },
  wishListContent: {
    flexBasis: '60%',
    marginLeft: 10,
    paddingVertical: 10,
    justifyContent: 'space-around',
  },
  actionBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    fontFamily: 'UniNeue-Light',
  },
  deleteAction: {
    marginRight: 0,
  },
  title_container: {
    color: '#000',
  },
  price_container: {
    color: '#000',
    // fontFamily: 'UniNeue-Light',
  },
  title: {
    fontSize: 18,
    lineHeight: 17,
    fontFamily: 'Assistant-VariableFont_wght',
  },
  priceText: {
    color: '#000',
    backgroundColor: '#fff',
    fontSize: 16,
    fontFamily: 'Assistant-VariableFont_wght',
  },
  timeSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyBoxMessage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

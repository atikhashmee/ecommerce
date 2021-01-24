import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Title} from 'react-native-paper';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {Pressable} from 'react-native';
import FooterTabs from '../layouts/FooterTabs';
import {
  Container,
  TabHeading,
  Icon,
  Header,
  Content,
  Tab,
  Tabs,
  Badge,
  FooterTab,
  Footer,
  Button,
} from 'native-base';

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
  const [wishListsItems, setWishLitsItems] = React.useState([
    {
      id: 1,
      name: 'Product Name 1 Product Name 1 Product Name 1 Product Name 1',
      time: '3 minuets ago',
      image:
        'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      price: 1250,
    },
    {
      id: 2,
      name: 'Product Name 2',
      time: '5 minuets ago',
      image:
        'https://cdn.pocket-lint.com/r/s/970x/assets/images/152137-laptops-review-apple-macbook-pro-2020-review-image1-qy49zfkn53-jpg.webp',
      price: 150,
    },
    {
      id: 3,
      name: 'Product Name 3',
      time: '2 days ago',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5cjupfd1pDuktX3dP1hp8_l1nXsLAFN1OGQ&usqp=CAU',
      price: 5550,
    },
    {
      id: 4,
      name: 'Product Name 4',
      time: '1 days ago',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5cjupfd1pDuktX3dP1hp8_l1nXsLAFN1OGQ&usqp=CAU',
      price: 5550,
    },
    {
      id: 5,
      name: 'Product Name 5',
      time: '1 Minuet ago',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5cjupfd1pDuktX3dP1hp8_l1nXsLAFN1OGQ&usqp=CAU',
      price: 5550,
    },
  ]);
  function removeItem(item) {
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
    borderRadius: 20,
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
    resizeMode: 'center',
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

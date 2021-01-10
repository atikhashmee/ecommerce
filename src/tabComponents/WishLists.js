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
        <View style={styles.title}>
          <Title>{prop_item.name}</Title>
        </View>
        <View style={styles.price}>
          <Text style={{color: '#000', backgroundColor: '#fff', fontSize: 16}}>
            ${prop_item.price}
          </Text>
        </View>
        <View style={styles.actionBar}>
          <View style={styles.timeSection}>
            <Text
              style={{color: '#000', backgroundColor: '#fff', fontSize: 16}}>
              <Feather name={'clock'} size={20} color="#000" /> {prop_item.time}
            </Text>
          </View>
          <View style={styles.deleteAction}>
            <Pressable
              onPress={() => {
                removeItem(prop_item);
              }}>
              <Feather name={'trash-2'} size={20} color="#000" />
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
      name: 'Product Name 1',
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
    }
  ]);
  function removeItem(item) {
    let removableItems = [...wishListsItems];
    removableItems.splice(removableItems.indexOf(item), 1);
    setWishLitsItems(removableItems);
  }
  return (
    <Container>
      <Content>
        <ScrollView>
          {wishListsItems.length > 0 &&
            wishListsItems.map((item, ind) => {
              return (
                <WishListItem
                  prop_item={item}
                  key={ind}
                  removeItem={removeItem}
                />
              );
            })}
        </ScrollView>
      </Content>
      <FooterTabs />
    </Container>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    padding: 5,
  },
  wishListsItem: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 120,
    height: 120,
    backgroundColor: '#fff',
    marginBottom: 5,
  },
  imageBox: {
    padding: 5,
    flexBasis: '20%',
    borderWidth: 1,
    borderColor: '#d3d3d3',
    alignItems: 'center',
  },
  tinyLogo: {
    width: '100%',
    height: '100%',
  },
  wishListContent: {
    flexBasis: '75%',
    marginLeft: 10,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  actionBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  deleteAction: {
    marginRight: 30,
  },
});

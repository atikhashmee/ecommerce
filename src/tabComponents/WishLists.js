import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function WishLists() {
  return (
    <View style={[styles.scene, {backgroundColor: '#dcdcdc'}]}>
      <ScrollView>
        <View style={styles.wishListsItem}>
          <View style={styles.imageBox}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri:
                  'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              }}
            />
          </View>
          <View style={styles.wishListContent}>
            <View style={styles.title}>
              <Text>Product names</Text>
            </View>
            <View style={styles.price}>
              <Text>$1250</Text>
            </View>
            <View style={styles.actionBar}>
              <View style={styles.timeSection}>
                <Text>
                <Feather name={'clock'} size={20} color="#000" /> 1 Minuet ago</Text>
              </View>
              <View style={styles.deleteAction}>
                <Feather name={'trash-2'} size={20} color="#000" />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  wishListsItem: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  imageBox: {
    padding: 15,
    flexBasis: '20%',
    borderWidth: 1,
    borderColor: '#d3d3d3',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  wishListContent: {
    flexBasis: '80%',
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

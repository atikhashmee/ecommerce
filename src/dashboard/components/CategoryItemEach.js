import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import AppStyle from '../../assets/style';

export default function CategoryItemEach(props) {
  return (
    <View style={styles.eachCategoryBox}>
      <View style={styles.topImageBox}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: props.category.category_image,
          }}
        />
      </View>
      <View style={styles.categoryTitleWrapper}>
        <Text style={styles.titleTxt}>{props.category.category_name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  eachCategoryBox: {
    height: 120,
    width: Dimensions.get('screen').width / 4,
    backgroundColor: '#fff',
    marginRight: 10,
    borderColor: '#d3d3d3',
    borderWidth: 1,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  topImageBox: {
    flexBasis: '70%',
    height: '100%',
  },
  categoryTitleWrapper: {
    backgroundColor: '#b3d8f5',
    height: '100%',
    flexBasis: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  titleTxt: {
    fontSize: 11,
    fontFamily: 'UniNeue-Light',
    color: '#000',
    textAlign: 'center',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  }
});

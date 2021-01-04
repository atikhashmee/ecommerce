import React from 'react';
import {View, ScrollView} from 'react-native';
import CategoryCardItem from './components/CategoryCardItem';

export default function Categories({navigation}) {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{backgroundColor: '#f8f8f8'}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
         <CategoryCardItem routeName={'products'} id={1} iconName={'gift'} name={'Gift Items'} />
         <CategoryCardItem routeName={'products'} id={1} iconName={'cart'} name={'Cart Items'} />
         <CategoryCardItem routeName={'products'} id={1} iconName={'tag'} name={'tags'} />
         <CategoryCardItem routeName={'products'} id={1} iconName={'motorbike'} name={'accessories'} />
         <CategoryCardItem routeName={'products'} id={1} iconName={'format-list-bulleted'} name={'All'} />
         <CategoryCardItem routeName={'products'} id={1} iconName={'format-list-bulleted'} name={'All'} />
         <CategoryCardItem routeName={'products'} id={1} iconName={'format-list-bulleted'} name={'All'} />
         <CategoryCardItem routeName={'products'} id={1} iconName={'format-list-bulleted'} name={'All'} />
         <CategoryCardItem routeName={'products'} id={1} iconName={'format-list-bulleted'} name={'All'} />
         <CategoryCardItem routeName={'products'} id={1} iconName={'format-list-bulleted'} name={'All'} />
         <CategoryCardItem routeName={'products'} id={1} iconName={'format-list-bulleted'} name={'All'} />
         <CategoryCardItem routeName={'products'} id={1} iconName={'format-list-bulleted'} name={'All'} />
      </View>
    </ScrollView>
  );
}

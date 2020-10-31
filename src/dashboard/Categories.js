import React, {Component} from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import AppStyle from '../assets/style';

export default function Categories({navigation}) {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{backgroundColor: '#f8f8f8'}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={AppStyle.categoryEachBox}>
          <Pressable
            onPress={() => {
              navigation.navigate('products', {
                category_id: 1,
              });
            }}>
            <View style={AppStyle.categoryIconHolder}>
              <Icon
                name="list"
                size={20}
                style={{textAlign: 'center'}}
                color="violet"
              />
            </View>
            <View
              style={{
                textAlign: 'center',
                verticalAlign: 'center',
                paddingLeft: 10,
                paddingRight: 5,
              }}>
              <Text style={{ fontFamily: 'Oswald-Regular', }} numberOfLines={1}>News</Text>
              <Text style={{ fontFamily: 'Oswald-Regular', }} numberOfLines={1}>feed</Text>
            </View>
          </Pressable>
        </View>
        <View style={AppStyle.categoryEachBox}>
          <Pressable
            onPress={() => {
              navigation.navigate('products', {
                category_id: 1,
              });
            }}>
            <View style={AppStyle.categoryIconHolder}>
              <Icon
                name="gift"
                size={20}
                style={{textAlign: 'center'}}
                color="lightblue"
              />
            </View>
            <View
              style={{
                textAlign: 'center',
                verticalAlign: 'center',
                paddingLeft: 10,
                paddingRight: 5,
              }}>
              <Text  style={{ fontFamily: 'Oswald-Regular', }} numberOfLines={1}>Gift</Text>
              <Text  style={{ fontFamily: 'Oswald-Regular', }} numberOfLines={1}>Card</Text>
            </View>
          </Pressable>
        </View>
        <View style={AppStyle.categoryEachBox}>
          <Pressable
            onPress={() => {
              navigation.navigate('products', {
                category_id: 1,
              });
            }}>
            <View style={AppStyle.categoryIconHolder}>
              <Icon
                name="tag"
                size={20}
                style={{textAlign: 'center'}}
                color="blue"
              />
            </View>
            <View
              style={{
                textAlign: 'center',
                verticalAlign: 'center',
                paddingLeft: 10,
                paddingRight: 5,
              }}>
              <Text style={{ fontFamily: 'Oswald-Regular', }}  numberOfLines={1}>Campa..</Text>
            </View>
          </Pressable>
        </View>

        <View style={AppStyle.categoryEachBox}>
          <Pressable
            onPress={() => {
              navigation.navigate('products', {
                category_id: 1,
              });
            }}>
            <View style={AppStyle.categoryIconHolder}>
              <Icon
                name="trademark"
                size={20}
                style={{textAlign: 'center'}}
                color="green"
              />
            </View>
            <View
              style={{
                textAlign: 'center',
                verticalAlign: 'center',
                paddingLeft: 10,
                paddingRight: 5,
              }}>
              <Text style={{ fontFamily: 'Oswald-Regular', }}  numberOfLines={1}>Categ..</Text>
            </View>
          </Pressable>
        </View>
        <View style={AppStyle.categoryEachBox}>
          <Pressable
            onPress={() => {
              navigation.navigate('products', {
                category_id: 1,
              });
            }}>
            <View style={AppStyle.categoryIconHolder}>
              <Icon
                name="exchange"
                size={20}
                style={{textAlign: 'center'}}
                color="red"
              />
            </View>
            <View
              style={{
                textAlign: 'center',
                verticalAlign: 'center',
                paddingLeft: 10,
                paddingRight: 5,
              }}>
              <Text style={{ fontFamily: 'Oswald-Regular', }}  numberOfLines={1}>Orders</Text>
            </View>
          </Pressable>
        </View>
        <View style={AppStyle.categoryEachBox}>
          <Pressable
            onPress={() => {
              navigation.navigate('products', {
                category_id: 1,
              });
            }}>
            <View style={AppStyle.categoryIconHolder}>
              <Icon
                name="exchange"
                size={20}
                style={{textAlign: 'center'}}
                color="red"
              />
            </View>
            <View
              style={{
                textAlign: 'center',
                verticalAlign: 'center',
                paddingLeft: 10,
                paddingRight: 5,
              }}>
              <Text  style={{ fontFamily: 'Oswald-Regular', }}  numberOfLines={1}>Orders</Text>
            </View>
          </Pressable>
        </View>
        <View style={AppStyle.categoryEachBox}>
          <Pressable
            onPress={() => {
              navigation.navigate('products', {
                category_id: 1,
              });
            }}>
            <View style={AppStyle.categoryIconHolder}>
              <Icon
                name="exchange"
                size={20}
                style={{textAlign: 'center'}}
                color="red"
              />
            </View>
            <View
              style={{
                textAlign: 'center',
                verticalAlign: 'center',
                paddingLeft: 10,
                paddingRight: 5,
              }}>
              <Text  style={{ fontFamily: 'Oswald-Regular', }}  numberOfLines={1}>Orders</Text>
            </View>
          </Pressable>
        </View>
        <View style={AppStyle.categoryEachBox}>
          <Pressable
            onPress={() => {
              navigation.navigate('products', {
                category_id: 1,
              });
            }}>
            <View style={AppStyle.categoryIconHolder}>
              <Icon
                name="exchange"
                size={20}
                style={{textAlign: 'center'}}
                color="red"
              />
            </View>
            <View
              style={{
                textAlign: 'center',
                verticalAlign: 'center',
                paddingLeft: 10,
                paddingRight: 5,
              }}>
              <Text style={{ fontFamily: 'Oswald-Regular', }}  numberOfLines={1}>Orders</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

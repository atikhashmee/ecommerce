import React, { PureComponent, useState, useEffect } from 'react';
import { Button, ScrollView, View, Text, Pressable, ActivityIndicator, Dimensions, Image  } from 'react-native';
import {Slider} from '../dashboard/Slider';
import Categories from '../dashboard/Categories';
import ExpressView from '../dashboard/ExpressView';
import {AppContext} from '../utils/GlobalContext';
import AppStyle from '../assets/style';
import IonIcon from 'react-native-vector-icons/Ionicons';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window');

function Home({navigation}){
    let {products, setInit} = React.useContext(AppContext);
   useEffect( ()=>{
        setInit();
   }, [])
    return  <ScrollView>
        <View style={{ height: '100%', flex: 1, paddingLeft: 10, paddingRight:10, backgroundColor: '#f9f9f9' }}>
            {/* slider */}
            {/* <View style={{ height: 130, borderRadius: 10 }}>
              <Slider />
            </View> */}
          {/* category tag */}
          <Button
            onPress={()=>{
              navigation.navigate('anotther_screen', {
                 user: 'jane',
              });
            }}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
            <View style={{ width: width, verticalAlign: 'center', textAlign:'center', marginTop: 10, marginBottom: 10}}>
                <Categories />
            </View>
            {/* express view */}
            {/* <View style={{ backgroundColor: '#fff' }}> 
              <ExpressView  />
            </View> */}
            {/* category products */}
            {products.length>0 && products.map(item=><View key={item.id} >
                <View style={{ flex: 1, flexBasis: '6%', paddingBottom: 10, paddingTop: 10 }}>
                    <Text style={ AppStyle.productCategory }> { item.name }</Text>
                </View>
                <View style={{ flexBasis: '94%' }}>
                  <View style={{ flexDirection: 'row', justifyContent:'space-between', marginBottom: 10, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                      {item.elements.length> 0 && item.elements.map(p=><View key={p.id} style={{...AppStyle.productBox, marginBottom: 10}}>
                          <View style={AppStyle.prductContainer}>
                          {/* feature_category_image_url */}
                          {item.frontEndTag =='category'?<Image style={AppStyle.image} source={{uri: p.feature_category_image_url}} />
                            :<Image style={AppStyle.image} source={{uri: p.feature_image_url}} /> }
                          </View>
                          { item.frontEndTag !=='category'?
                          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                              <View>
                                <Text style={ AppStyle.prductTitle }>{p.name}</Text> 
                               <View style={{ flexDirection: 'row' }}>
                                  <Text>${p.price}</Text>
                                  {p.old_price !== '' && <Text style={{ textDecorationLine: 'line-through', marginLeft: 10 }}>${p.old_price}</Text>}
                                </View>
                              </View>
                          </View>:
                          <View >
                            <Text style={ AppStyle.prductTitle }>{p.category_name}</Text> 
                      </View>}
                          { item.frontEndTag !=='category'?
                          <View style={{ alignItems: 'center',  flexDirection: 'row'}}>
                            <Pressable onPress={()=>alert('added to cart')} style={AppStyle.cartButton}> 
                                <IonIcon name="cart-outline"  color="#000"  size={20} />
                            </Pressable>
                            <Pressable onPress={()=>alert('saved')} style={{...AppStyle.cartButton, borderLeftWidth: 1}}>
                                <IonIcon name="heart-outline" color="#000" size={20}  />
                            </Pressable>
                          </View>
                          :
                          <View>
                            <Pressable onPress={()=>alert('saved')} style={AppStyle.cartButton}>
                                <Text> See Products </Text>
                            </Pressable>
                          </View>}
                      </View>)}
                  </View>
                </View>
            </View>)}
            { products.length == 0 &&<View style={{height: hp('80%'), justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator  size="large" color="#000000" />
            </View>}
      </View>
    </ScrollView>
  }
  export default Home;
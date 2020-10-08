import React from 'react';
import { View, Text, Image } from 'react-native';
import Swiper from 'react-native-swiper'
import  AppStyle  from '../assets/style';

export function Slider()
{
    return (
        <Swiper style={AppStyle.wrapper} 
            dot={
              <View
                style={{
                  backgroundColor: 'rgba(255,255,255,.3)',
                  width: 13,
                  height: 13,
                  borderRadius: 7,
                  marginLeft: 7,
                  marginRight: 7
                }}
              />
            }
            paginationStyle={{
              bottom: 10
            }}
            loop={true}
            >
          <View style={AppStyle.slide}>
              <View style={{...AppStyle.slide, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{ color: '#000', fontSize: 29 }}>New Platform | design</Text>
              </View>
          </View>
          <View style={AppStyle.slide}>
            <Image
                style={AppStyle.image}
                source={{uri: 'https://image.shutterstock.com/image-photo/beautiful-autumn-scene-hintersee-lake-260nw-747646759.jpg'}}
                resizeMode="cover"
              />
          </View>
          <View style={{...AppStyle.slide, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{ color: '#000', fontSize: 29 }}>Hello Evaly App design</Text>
          </View>
        </Swiper>
    );
}
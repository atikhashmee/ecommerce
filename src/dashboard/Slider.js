import React from 'react';
import {View, Text, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import AppStyle from '../assets/style';
import {AppContext} from '../utils/GlobalContext';

export function Slider() {
  let {sliders} = React.useContext(AppContext);
  return (
    <Swiper
      style={AppStyle.wrapper}
      dot={
        <View
          style={{
            backgroundColor: 'rgba(255,255,255,.3)',
            width: 13,
            height: 13,
            borderRadius: 7,
            marginLeft: 7,
            marginRight: 7,
          }}
        />
      }
      paginationStyle={{
        bottom: 10,
      }}
      loop={true}>
      {sliders.map((item, k) => {
        return (
          <View key={k} style={AppStyle.slide}>
            <Image
              style={AppStyle.image}
              source={{
                uri: item,
              }}
              resizeMode="cover"
            />
          </View>
        );
      })}
    </Swiper>
  );
}

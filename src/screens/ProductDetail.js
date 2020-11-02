import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Button,
} from 'react-native';
import AppStyle from '../assets/style'
import {widthPercentageToDP as wp } from 'react-native-responsive-screen';
import IonIcon from 'react-native-vector-icons/Ionicons';
import StarFive from '../components/StarFive';
import { Rating, AirbnbRating } from 'react-native-elements';

export default function ProductDetail(props) {
    console.log(props.route.params.product_id, 'props');
    return (
      <View style={styles.detailContainer}>
          <View style={styles.scrolSection}>
                <ScrollView>
                    <View style={{ height: 500 }}>
                        <Image  style={AppStyle.image} source={{uri: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?cs=srgb&dl=pexels-jess-bailey-designs-788946.jpg&fm=jpg'}} />
                    </View>
                    <View style={styles.scrollEachView}>
                        <View style={styles.priceSection}>
                            <View style={{ flexGrow: 1 }}> 
                                <Text>$15</Text> 
                                <Text style={{ textDecorationLine: 'line-through', }}>$15</Text>
                            </View>
                            <View> 
                                <IonIcon name="heart-outline" size={20} color="#000" />
                            </View>
                            <View> 
                                <IonIcon name="share-social-outline" size={20} color="#000" />
                            </View>
                        </View>
                    </View>
                    <View style={styles.scrollEachView}>
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                    </View>
                    <View style={styles.scrollEachView}>
                        <Rating
                            ratingCount={5}
                            imageSize={20}
                            readonly 
                            ratingBackgroundColor="red"
                            style={{ paddingVertical: 10, backgroundColor: 'none' }}
                        />
                    </View>
                </ScrollView>
          </View>
          <View style={styles.bottomCartSection}> 
               <View style={styles.bottomContent}>
                    <View style={styles.bottomEach}> 
                        <Text>aaaa</Text> 
                    </View>
                    <View style={styles.bottomEach}>
                         <Text>bbb</Text> 
                    </View>
                    <View style={styles.bottomEach}>  
                        <Button title="Checkout" /> 
                    </View>
                    <View style={styles.bottomEach}>  
                        <Button title="Add to Cart" /> 
                    </View>
               </View>
          </View>
      </View>
    );
}

const styles = StyleSheet.create({
    detailContainer: {
        flex: 1,
    },
    scrolSection: {
        flexBasis: '90%',
        borderColor: 'green',
        borderWidth: 1,
    },
    scrollEachView: {
        marginTop: 10,
        width: wp('100%'),
        paddingHorizontal: 10,
    },
    priceSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bottomCartSection: {
        flexBasis: '10%',
        borderColor: 'red',
        borderWidth: 1,
    },
    bottomContent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    bottomEach: {
        color: '#000',
    },
});
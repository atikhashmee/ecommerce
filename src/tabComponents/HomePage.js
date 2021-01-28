/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AppStyle from '../assets/style';
import {Slider} from '../dashboard/Slider';
import ExpressView from '../dashboard/ExpressView';
import {AppContext} from '../utils/GlobalContext';
const {width, height} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
import CategoryCardItem from '../dashboard/components/CategoryCardItem';
import CategoryItemEach from '../dashboard/components/CategoryItemEach';
import Product from '../components/Product';

export default function HomePage() {
  const navigation = useNavigation();
  let {products, homePageData} = React.useContext(AppContext);
  let [featuredCategory, setFeaturedCategory] = React.useState([]);
  React.useEffect(() => {
    setFeaturedCategory(homePageData.featured_category);
    // console.log(products, 'df');
  }, [homePageData]);
  return (
    <ScrollView>
      <View
        style={{
          height: '100%',
          flex: 1,
          paddingLeft: 10,
          paddingRight: 10,
          backgroundColor: '#f9f9f9',
        }}>
        {/* slider */}
        <View style={{height: 130, borderRadius: 10}}>
          <Slider />
        </View>
        {/* category tag */}
        <View style={styles.categoryContainer}>
          <HomePageTitle />
          <ScrollView
            horizontal={true}
            style={{width: '100%'}}
            showsHorizontalScrollIndicator={false}>
            {featuredCategory.length > 0 &&
              featuredCategory.map((item, key) => {
                return <CategoryItemEach key={key} category={item} />;
              })}
          </ScrollView>
        </View>
        {/* <View
          style={{
            width: width,
            verticalAlign: 'center',
            textAlign: 'center',
            marginTop: 10,
            marginBottom: 10,
          }}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <CategoryCardItem
              name={'All'}
              routeName={'allcategory'}
              id={null}
              iconName={'format-list-bulleted'}
            />
            <View>
              <Categories navigation={navigation} />
            </View>
          </View>
        </View> */}
        {/* express view */}
        {/* <View style={{backgroundColor: '#fff'}}>
          <ExpressView />
        </View> */}
        {/* category products */}
        {products.length > 0 &&
          products.map((item) => (
            <View key={item.id}>
              <View
                style={{
                  flex: 1,
                  flexBasis: '6%',
                  paddingBottom: 10,
                  paddingTop: 10,
                }}>
                <Text style={AppStyle.productCategory}> {item.name}</Text>
              </View>
              <View style={{flexBasis: '94%'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 10,
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                  }}>
                  {item.elements.length > 0 &&
                    item.elements.map((p, k) =>
                      item.frontEndTag == 'category' ? (
                        <Product
                          key={k}
                          product={p}
                          handleClick={() => {
                            navigation.navigate('products', {
                              category_id: item.id,
                            });
                          }}
                          itemType={'category'}
                        />
                      ) : (
                        <Product
                          key={k}
                          product={p}
                          handleClick={() => {
                            navigation.navigate('product_detail', {
                              product_id: p.id,
                            });
                          }}
                          itemType={'product'}
                        />
                      ),
                    )}
                </View>
              </View>
            </View>
          ))}
        {products.length == 0 && (
          <View
            style={{
              height: hp('80%'),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size="large" color="#000000" />
          </View>
        )}
      </View>
    </ScrollView>
  );
}

function HomePageTitle() {
  const navigation = useNavigation();
  return (
    <View style={styles.homePageTitleContainer}>
      <Pressable
        onPress={() => {
          alert('clicked');
        }}>
        <Text style={styles.homePageTitleLeftText}>Categories for you</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('allcategory', {
            category_id: 0,
          });
        }}>
        <Text style={styles.homePageTitleRightText}>Show All</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    width: '100%',
  },
  homePageTitleContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 5,
  },
  homePageTitleLeftText: {
    fontSize: 18,
    fontFamily: 'UniNeue-Light',
  },
  homePageTitleRightText: {
    fontSize: 12,
    fontFamily: 'UniNeue-Light',
  },
});

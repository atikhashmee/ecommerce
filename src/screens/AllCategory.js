import React, {useContext, useState, useEffect} from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import AppStyle from '../assets/style';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {AppContext} from '../utils/GlobalContext';
import SubCategories from './categoryComponents/SubCategories';

const AllCategory = ({navigation}) => {
  let {categories, loadCategories} = useContext(AppContext);
  let [showCategory, setShowCategory] = useState(false);
  let [currentCatId, setCurrentCatId] = useState(null);
  let [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    loadCategories();
    categoryToggle(1);
  }, []);

  function categoryToggle(category_id) {
    setShowCategory(true);
    setCurrentCatId(category_id);
    categories.forEach((el) => {
      if (el.id === category_id) {
        setSubCategories([...el.items]);
        navigation.setOptions({title: el.category_name});
      }
    });
  }
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{flexBasis: '20%', height: heightPercentageToDP('100%')}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{backgroundColor: '#fff'}}>
          <View style={{flex: 1}}>
            {categories.map((item, index) => {
              return (
                <Pressable
                  onPress={() => categoryToggle(item.id)}
                  key={index + item.id}
                  style={{
                    ...AppStyle.categoryEachBox,
                    marginRight: 0,
                    backgroundColor: item.id === currentCatId ? '#fff' : '#eee',
                    borderBottomColor: '#d4d4d4',
                    borderBottomWidth: 1,
                    padding: 10,
                  }}>
                  <View
                    style={{
                      ...AppStyle.categoryIconHolder,
                      backgroundColor:
                        item.id === currentCatId ? '#fff' : '#eee',
                      padding: 0,
                    }}>
                    <IonIcon
                      name="checkmark-circle-outline"
                      size={20}
                      style={{textAlign: 'center'}}
                      color={
                        currentCatId !== null && currentCatId == item.id
                          ? 'green'
                          : '#000'
                      }
                    />
                  </View>
                  <View style={{alignItems: 'center'}}>
                    <Text  style={{ fontFamily: 'Oswald-Regular' }} numberOfLines={1}>{item.category_name}</Text>
                  </View>
                </Pressable>
              );
            })}
          </View>
        </ScrollView>
      </View>
      {showCategory === true && (
        <View style={{flexBasis: '80%', height: heightPercentageToDP('100%')}}>
          <SubCategories
            navigation={navigation}
            subCategories={subCategories}
            currentCatId={currentCatId}
          />
        </View>
      )}
    </View>
  );
};
export default AllCategory;

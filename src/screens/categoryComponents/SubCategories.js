import React, {useEffect, useState, useContext} from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import IonIcon from 'react-native-vector-icons/Ionicons';
import CategoryItem from './CategoryItem';
import {AppContext} from '../../utils/GlobalContext';

const SubCategories = ({subCategories, currentCatId}) => {
    let [hasItem, setHasItem] = useState(false);
    let [subItems, setSubItems] = useState([]);
    let [subCategoryArr, setSubcategoryArr] = useState([]);
    let {categoryToggleItem} = useContext(AppContext);
    function loadSubItems (sub_cate_id) {
        categoryToggleItem(currentCatId, sub_cate_id);
        if (subCategories.length > 0) {
            subCategories.forEach(itt => {
                if (itt.id === sub_cate_id) {
                    if (itt.items.length > 0) {
                        setSubcategoryArr([...itt.items]);
                    }
                }
            });
        }
    }

    return <ScrollView showsVerticalScrollIndicator={false} style={ {backgroundColor: '#f8f8f8'}}>
            <View style={{ flex: 1 }}>
                { subCategories.length> 0 && subCategories.map((item, index) => {
                    return <><View key={index} style={{ flex: 1, flexDirection: 'row', height: heightPercentageToDP('7%'), alignItems: 'center', paddingTop: 2, paddingBottom: 2, paddingLeft: 2, marginLeft: 10, borderBottomColor: '#d3d3d3', borderBottomWidth: 1 }}>
                        <View style={{ flexBasis: '80%' }}>
                            <Text>{item.name}</Text>
                        </View>
                        {item.items.length>0 && <Pressable 
                        onPress={()=>{loadSubItems(item.id)}} style={{ flexBasis: '20%', borderLeftColor: '#d3d3d3', borderLeftWidth: 1 }}>
                            <IonIcon name={!item.isOpened ? "chevron-down-outline" : "chevron-up-outline"}  size={20} style={{ textAlign: 'center' }} color="#000"/>
                        </Pressable>}
                    </View>
                    {item.isOpened && <View key={index + 1} style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: "space-around", alignItems: 'flex-end'}}>
                        <CategoryItem subCategoryArr={subCategoryArr} />
                    </View>}
                </>}) }
            </View>       
        </ScrollView>;
}
export default SubCategories;
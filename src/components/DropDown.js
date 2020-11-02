import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View, Pressable, TouchableHighlight} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon  from 'react-native-vector-icons/Fontisto';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default function DropDown({style}) {
    let [items, setItem] = useState([
        {
            value: 'item1',
            label: 'item 1'
        },
        {
            value: 'item2',
            label: 'item 2'
        },
        {
            value: 'item3',
            label: 'item 3'
        },
    ]);
    const [selected, setselected] = useState({value: 'item1', label: 'item 1'});
    const [isOpen, setisOpen] = useState(false);

    return (<Pressable style={{...style, ...styles.dropDownContainer}} onPress={()=> { setisOpen(!isOpen) }}>
                <View style={{ paddingLeft: 10}}>
                    <Text>{selected.label}</Text>
                    {isOpen === true && <View style={ styles.listGroup}>
                        {items.length>0 && items.map( (item, idx) => <TouchableHighlight key={idx} onPress={()=>{ alert('hi'); setselected({...item}); setisOpen(!isOpen);  }}>
                            <View  style={styles.listItem} > 
                                <Text>{item.label}</Text> 
                                {selected.value ==item.value && <IonIcon name='checkmark-circle' style={{ marginRight: 30 }} size={18} color="blue" />}
                            </View>
                            </TouchableHighlight>
                        )}
                    </View>}
                </View>
               <View> 
                    <Icon name={isOpen?"angle-up":"angle-down"} color='#000' size={16} />
               </View>
    </Pressable>);
}

const styles = StyleSheet.create({
      dropDownContainer: {
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: wp('50%'),
      },
      listGroup: {
        position: 'absolute',
        zIndex: 99999999,
        width: wp('100%'),
        top: 30,
        right: 0,
        left: 0,
        height: 'auto',
        backgroundColor: '#fff',
        borderColor: 'red',
      },
      listItem: {
        padding: 10,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        marginBottom: 2, 
        textAlign: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }
  });
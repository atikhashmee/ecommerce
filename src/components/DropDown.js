import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import Icon  from 'react-native-vector-icons/Fontisto';

export default function DropDown({style}) {
    return (
          <View style={{...style, ...styles.dropDownContainer}}>
              <View>  
                  <Text>Basic Match</Text> 
                  <View style={ styles.listGroup}>
                        <View style={styles.listItem}> 
                            <Text>Item 1</Text> 
                        </View>
                        <View style={styles.listItem}> 
                            <Text>Item 2</Text> 
                        </View>
                        <View style={styles.listItem}> 
                            <Text>Item 3</Text> 
                        </View>
                  </View>
              </View>
               <View> 
                    <Icon name="angle-down" color='#000' size={16} />
               </View>
          </View>
    );
}

const styles = StyleSheet.create({
      dropDownContainer: {
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: widthPercentageToDP('50%'),
      },
      listGroup: {
        position: 'absolute',
        zIndex: 99999999,
        top: 0,
        left: 0,
        height: 'auto',
        backgroundColor: '#fff',
        borderColor: 'red',
      },
      listItem: {
          padding: 10,
          borderBottomColor: '#d4d4d4',
          borderBottomWidth: 1,
          marginBottom: 10, 
      }
  });
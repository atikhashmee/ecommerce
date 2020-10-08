import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default function Categories () {
    return (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexBasis: '18%' }}>
                <View style={{ 
                backgroundColor: '#eee',
                padding: 10, 
                borderRadius: 50, 
                width: '80%',
                textAlign: 'center' }}>
                    <Icon 
                    name="list"
                    size={20}
                    style={{ textAlign: 'center' }}
                    color="violet"
                    />
                </View>
                <Text>News Feed</Text>
            </View>
            <View style={{ flexBasis: '18%' }}>
                <View style={{  
                backgroundColor: '#eee', 
                padding: 10, 
                width: '80%',
                borderRadius: 50,
                    }}>
                <Icon 
                    name="gift"
                    size={20}
                    style={{ textAlign: 'center' }}
                    color="lightblue"
                    />
                </View>
                <Text>Gift Card</Text>
            </View>
            <View style={{ flexBasis: '18%' }}>
                <View style={{  
                backgroundColor: '#eee', 
                padding: 10, 
                width: '80%',
                borderRadius: 50,
                }}>
                <Icon 
                    name="tag"
                    size={20}
                    style={{ textAlign: 'center' }}
                    color="blue"
                    />
                </View>
                <Text>Campaigns</Text>
            </View>
                
            <View style={{ flexBasis: '18%' }}>
                <View style={{  
                backgroundColor: '#eee', 
                padding: 10, 
                width: '80%',
                borderRadius: 50,

                }}>
                <Icon 
                    name="trademark"
                    size={20}
                    style={{ textAlign: 'center' }}
                    color="green"
                    />
                </View>
                <Text>Categories</Text>
            </View>
            <View style={{ flexBasis: '18%' }}>
            <View style={{  
              backgroundColor: '#eee', 
              padding: 10, 
              width: '80%',
              borderRadius: 50,
              }}>
            <Icon 
                  name="exchange"
                  size={20}
                  style={{ textAlign: 'center' }}
                  color="red"
                />
            </View>
            <Text>Orders</Text>
          </View>
        </View>
    );
}
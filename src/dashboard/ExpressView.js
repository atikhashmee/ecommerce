import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default function ExpressView() {
  return (
    <>
      <View
        style={{
          flex: 1,
          flexBasis: '10%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text>Evaly Express</Text>
        </View>
        <View>
          <Text>Show All</Text>
        </View>
      </View>
      <View style={{flexBasis: '90%'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexBasis: '50%',
            justifyContent: 'space-between',
          }}>
          <View style={{flexBasis: '22%', textAlign: 'center', marginRight: 3}}>
            <View
              style={{
                width: 80,
                height: 80,
                backgroundColor: 'lightgreen',
              }}
            />
            <Text style={{textAlignVertical: 'center', textAlign: 'center'}}>
              Shorong
            </Text>
          </View>
          <View style={{flexBasis: '22%', textAlign: 'center', marginRight: 3}}>
            <View
              style={{
                width: 80,
                height: 80,
                backgroundColor: 'lightgreen',
              }}
            />
            <Text style={{textAlignVertical: 'center', textAlign: 'center'}}>
              Angelic
            </Text>
          </View>
          <View style={{flexBasis: '22%', textAlign: 'center', marginRight: 3}}>
            <View
              style={{
                width: 80,
                height: 80,
                backgroundColor: 'lightgreen',
              }}
            />
            <Text style={{textAlignVertical: 'center', textAlign: 'center'}}>
              SUHA
            </Text>
          </View>
          <View style={{flexBasis: '22%', textAlign: 'center', marginRight: 3}}>
            <View
              style={{
                width: 80,
                height: 80,
                backgroundColor: 'lightgreen',
              }}
            />
            <Text style={{textAlignVertical: 'center', textAlign: 'center'}}>
              Daily Bazar
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexBasis: '50%',
            justifyContent: 'space-between',
          }}>
          <View style={{flexBasis: '22%', textAlign: 'center', marginRight: 3}}>
            <View
              style={{
                width: 80,
                height: 80,
                backgroundColor: 'royalblue',
              }}
            />
            <Text style={{textAlignVertical: 'center', textAlign: 'center'}}>
              Khass Food
            </Text>
          </View>
          <View style={{flexBasis: '22%', textAlign: 'center', marginRight: 3}}>
            <View
              style={{
                width: 80,
                height: 80,
                backgroundColor: 'royalblue',
              }}
            />
            <Text style={{textAlignVertical: 'center', textAlign: 'center'}}>
              Khaleq
            </Text>
          </View>
          <View style={{flexBasis: '22%', textAlign: 'center', marginRight: 3}}>
            <View
              style={{
                width: 80,
                height: 80,
                backgroundColor: 'royalblue',
              }}
            />
            <Text style={{textAlignVertical: 'center', textAlign: 'center'}}>
              Unimart
            </Text>
          </View>
          <View style={{flexBasis: '22%', textAlign: 'center', marginRight: 3}}>
            <View
              style={{
                width: 80,
                height: 80,
                backgroundColor: 'royalblue',
              }}
            />
            <Text style={{textAlignVertical: 'center', textAlign: 'center'}}>
              Bengal Meat
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

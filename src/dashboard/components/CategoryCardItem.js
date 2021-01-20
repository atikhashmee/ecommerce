import React from 'react';
import AppStyle from '../../assets/style';
import {Avatar, Card, Title} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';

export default function CategoryCardItem(props) {
  let iconName = props.iconName;
  const LeftContent = (props) => <Avatar.Icon {...props} icon={iconName} />;
  const navigation = useNavigation();

  function categoryNavigate(routeName, id) {
    navigation.navigate(routeName, {
      category_id: id,
    });
  }
  return (
    <View style={AppStyle.categoryEachBox}>
      <Card
        onPress={() => categoryNavigate(props.routeName, 1)}
        style={AppStyle.categoryCard}>
        <Card.Title left={LeftContent} />
      </Card>
      <Title style={{textAlign: 'center', fontFamily: 'UniNeue-Light'}}>{props.name}</Title>
    </View>
  );
}

import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  ScrollView,
} from 'react-native';
import {
  Provider as PaperProvider,
  Avatar,
  Badge,
  Card,
  List,
  Title,
} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'native-base';

export default function AccountPage() {
  const navigation = useNavigation();
  return (
    <PaperProvider>
      <SafeAreaView>
        <ScrollView style={{height: 'auto', padding: 10}}>
          <View style={styles.profileContainer}>
            <View style={styles.picutreContainer}>
              <Card>
                <Card.Content style={{alignItems: 'center'}}>
                  <Card.Cover
                    style={{
                      width: 150,
                      height: 150,
                      borderRadius: 500,
                    }}
                    source={{uri: 'https://picsum.photos/700'}}
                  />
                  <View style={styles.infoSection}>
                    <Title>Your Name</Title>
                    <Text>Subtitle</Text>
                    <Badge
                      style={{
                        backgroundColor: 'green',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                      }}>
                      check balance
                    </Badge>
                  </View>
                  <View style={styles.overViewSetion}>
                    <Pressable
                      style={styles.eachItem}
                      onPress={() => {
                        navigation.navigate('order_list');
                      }}>
                      <View style={styles.iconBackground}>
                        <Icon name="file-text" type="Feather" />
                      </View>
                      <Text> Orders </Text>
                    </Pressable>
                    <Pressable
                      style={styles.eachItem}
                      onPress={() => {
                        alert('withdraw');
                      }}>
                      <View style={styles.iconBackground}>
                        <Icon name="user" type="Feather" />
                      </View>
                      <Text> Profile </Text>
                    </Pressable>
                    <Pressable
                      style={styles.eachItem}
                      onPress={() => {
                        alert('withdraw');
                      }}>
                      <View style={styles.iconBackground}>
                        <Icon name="map-pin" type="Feather" />
                      </View>
                      <Text> Address </Text>
                    </Pressable>
                    <Pressable
                      style={styles.eachItem}
                      onPress={() => {
                        alert('withdraw');
                      }}>
                      <View style={styles.iconBackground}>
                        <Icon name="message-square" type="Feather" />
                      </View>
                      <Text> Messages </Text>
                    </Pressable>
                  </View>
                </Card.Content>
              </Card>
            </View>
            <View style={styles.listSection}>
              <List.Item
                title="Notifications"
                left={(props) => <List.Icon {...props} icon="bell" />}
              />
              <List.Item
                title="Appointments"
                left={(props) => <List.Icon {...props} icon="folder" />}
              />
              <List.Item
                title="Payment History"
                left={(props) => <List.Icon {...props} icon="folder" />}
              />
              <List.Item
                title="Change Password"
                left={(props) => <List.Icon {...props} icon="lock" />}
              />
              <List.Item
                title="Change Language"
                left={(props) => <List.Icon {...props} icon="earth" />}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  infoSection: {
    alignItems: 'center',
  },
  overViewSetion: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  eachItem: {
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBackground: {
    backgroundColor: '#76e29796',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    padding: 10,
    borderRadius: 40,
  },
  cardTitle: {
    margin: -20,
    alignSelf: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: -10,
  },
});

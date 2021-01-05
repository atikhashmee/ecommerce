import React from 'react';
import {View, SafeAreaView, StyleSheet, Modal, Text, Dimensions, TouchableHighlight, ScrollView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Provider as PaperProvider, Avatar, Badge, Button, Card, List, Title, Paragraph } from 'react-native-paper';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function AccountPage() {
    const LeftContent = props => <Avatar.Icon {...props} style={{ margin: 0 }} icon="folder" />
    return (
        <PaperProvider>
             <SafeAreaView >
                <ScrollView style={{ height: 'auto', padding: 10 }}>
                <View style={styles.profileContainer}>
                  <View style={styles.picutreContainer}>
                    <Card>
                      <Card.Content style={{alignItems: 'center' }}>
                          <Card.Cover 
                          style={{ 
                            width: 150,
                            height: 150, 
                            borderRadius: 500 }}
                            source={{ uri: 'https://picsum.photos/700' }} 
                          />
                          <View style={styles.infoSection}>
                            <Title>Your Name</Title>
                            <Text>Subtitle</Text>
                            <Badge style={{ backgroundColor: 'green', marginRight: 'auto', marginLeft: 'auto' }}>check balance</Badge>
                          </View>
                          <View style={styles.overViewSetion}>
                              <View style={styles.eachItem}>
                                <Card.Title style={styles.cardTitle} left={LeftContent} />
                                <Title style={{ margin: 0 }}>Orders</Title>
                              </View>
                              <View style={styles.eachItem}>
                                <Card.Title style={styles.cardTitle} left={LeftContent} />
                                <Title>Profile</Title>
                              </View>
                              <View style={styles.eachItem}>
                                <Card.Title style={styles.cardTitle} left={LeftContent} />
                                <Title>Address</Title>
                              </View>
                              <View style={styles.eachItem}>
                                <Card.Title style={styles.cardTitle} left={LeftContent} />
                                <Title>Messages</Title>
                              </View>
                          </View>
                      </Card.Content>
                    </Card>
                  </View>
                  <View style={ styles.listSection }>
                      <List.Item
                        title="Notifications"
                        left={props => <List.Icon {...props} icon="bell" />}
                      />
                      <List.Item
                        title="Appointments"
                        left={props => <List.Icon {...props} icon="folder" />}
                      />
                      <List.Item
                        title="Payment History"
                        left={props => <List.Icon {...props} icon="folder" />}
                      />
                      <List.Item
                        title="Change Password"
                        left={props => <List.Icon {...props} icon="lock" />}
                      />
                      <List.Item
                        title="Change Language"
                        left={props => <List.Icon {...props} icon="earth" />}
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
      justifyContent: 'center',
    },
    eachItem: {
      alignItems: 'center',
      marginRight: 15,
      justifyContent: 'center',
    },
    cardTitle: {
      margin: -20,
      alignSelf: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: -10
    }
  });
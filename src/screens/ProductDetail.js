import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import AppStyle from '../assets/style'
import {heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { Rating, AirbnbRating } from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {
    Container,
    Content,
    Header,
    Button,
    Left,
    Body,
    Right,
    Icon,
    Title,
    Grid,
    Col,
    Row,
    Tabs,
    Tab,
    Badge,
    TabHeading,
    Footer,
    FooterTab
  } from 'native-base';

export default function ProductDetail(props) {
    console.log(props.route.params.product_id, 'props');
    const navigation = useNavigation();
    let [variationImages, setvariationImages] = useState([
        'https://images.unsplash.com/photo-1533228100845-08145b01de14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=378&q=80',
        'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        'https://images.unsplash.com/photo-1556155092-8707de31f9c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    ]);
    return (
        <Container style={{backgroundColor: "#fff"}}>
        <Header transparent>
            <Left>
                <Button transparent onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" style={{color: '#000'}} />
                </Button>
            </Left>
            <Body>
                <Title style={{color: '#000'}}>Detail</Title>
            </Body>
        </Header>
        <Content style={{backgroundColor: '#f4f4f4'}}>
            <Grid>
                <Row>
                    <Col>
                        <View style={styles.productImageSection}>
                            <View style={{ height: 500 }}>
                                <Image  style={AppStyle.image} source={{uri: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?cs=srgb&dl=pexels-jess-bailey-designs-788946.jpg&fm=jpg'}} />
                            </View>
                            <View style={styles.scrollEachView}>
                                <View style={styles.priceSection}>
                                    <View style={{ flexGrow: 1 }}> 
                                        <Text>$15</Text> 
                                        <Text style={{ textDecorationLine: 'line-through', }}>$15</Text>
                                    </View>
                                    <View> 
                                        <IonIcon name="heart-outline" size={20} color="#000" />
                                    </View>
                                    <View> 
                                        <IonIcon name="share-social-outline" size={20} color="#000" />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.scrollEachView}>
                                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                            </View>
                            <View style={styles.scrollEachView}>
                                <Rating
                                    ratingCount={5}
                                    imageSize={20}
                                    readonly 
                                    ratingBackgroundColor="red"
                                    style={{ paddingVertical: 10, backgroundColor: 'none' }}
                                />
                            </View>
                        </View>
                        <View style={styles.bottomSection}> 
                            <View style={styles.specificationSection}>
                                <View style={styles.leftSide}>
                                    <Text>Specifications  Brand, SKU</Text>
                                </View>
                                <View style={styles.rightSide}>
                                    <Pressable onPress={()=>{alert('hhh')}}>
                                        <IonIcon name="chevron-forward-outline" size={20} color="#000" />
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                        <View style={styles.bottomSection}> 
                            <View style={styles.variationsection}>
                                <View style={styles.variationcontent}>
                                    <View style={styles.variationleftside}>
                                        <Text>Variations Black</Text>
                                    </View>
                                    <View style={styles.variationrightside}>
                                        <Pressable onPress={()=>{alert('hhh')}}>
                                            <IonIcon name="chevron-forward-outline" size={20} color="#000" />
                                        </Pressable>
                                    </View>
                                </View>
                                <View style={styles.variationimagesection}>
                                    {variationImages.map((img,ind)=>
                                    <View key={ind} style={styles.variationimgContainer}>
                                        <Image style={AppStyle.image} source={{ uri: img }} />
                                    </View>
                                    )}
                                </View>
                            </View>
                        </View>
                        <View style={styles.bottomSection}>
                        <View style={styles.highlights}>
                            <View style={styles.highlightsHeader}>
                                <Text>Highlights</Text>
                            </View>
                            <View style={styles.highlightsContent}>
                                <View style={styles.highlightList}>
                                    <Text>. section 1</Text>
                                </View>
                                <View style={styles.highlightList}>
                                    <Text>. section 1</Text>
                                </View>
                                <View style={styles.highlightList}>
                                    <Text>. section 1</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.description}>
                            <View style={styles.descriptionHeader}>
                                <Text>Description</Text>
                            </View>
                            <View style={styles.descriptionContent}>
                                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                            </View>
                        </View>
                    </View>
                    </Col>
                </Row>
            </Grid>
        </Content>
        <Footer>
            <FooterTab style={{ backgroundColor: '#fff' }}>
                <Button style={{ width: 30 }}>
                    <Icon name='basket-outline' type="Ionicons" style={{ color: '#000' }} />
                    <Text>Store</Text>
                </Button>
                <Button style={{ width: 30 }}>
                    <Text>
                        <Icon name='cart-outline' style={{ color: '#000' }} />
                        <Badge info> 
                            <Text style={{ color: '#fff' }}>2</Text>
                        </Badge>
                    </Text>
                </Button>
                <Button style={{ backgroundColor: '#ED5838', height: 50, width: 50, borderRadius: 10}}>
                    <Text style={{ color: '#fff' }}>Buy Now</Text>
                </Button>
                <Button style={{ backgroundColor: '#DB1C2B', height: 50, width: 50, borderRadius: 10}}>
                    <Text style={{ color: '#fff' }}>Add to Cart</Text>
                </Button>
            </FooterTab>
        </Footer>
      </Container>
    );
}

const styles = StyleSheet.create({
    detailContainer: {
        flex: 1,
        backgroundColor: '#eee',
    },
    scrolSection: {
        flexBasis: '90%',
        borderColor: 'green',
        borderWidth: 1,
    },
    productImageSection: {
        backgroundColor: '#fff',
    },
    scrollEachView: {
        marginTop: 10,
        width: wp('100%'),
        paddingHorizontal: 10,
    },
    priceSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bottomCartSection: {
        flexBasis: '10%',
        borderColor: 'red',
        borderWidth: 1,
    },
    bottomContent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    bottomEach: {
        color: '#000',
    },
    bottomSection: {
        width: wp('100%'),
        marginVertical: 10,
        backgroundColor: '#fff',
    },
    specificationSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    variationcontent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    variationimgContainer: {
        width: 50,
        height: 50,
        marginHorizontal: 10,
    },
    variationimagesection: {
        flexDirection: 'row',
    },
    highlights: {
        paddingHorizontal: 10,
    },
    highlightsHeader: {
        paddingVertical: 15,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
    },
    description: {
        paddingHorizontal: 10,
    },
    descriptionHeader: {
        paddingVertical: 15,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
    },
});
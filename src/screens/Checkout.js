import React from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Col,
  Row,
  Input,
  Item,
  Picker,
} from 'native-base';
import {CheckoutContext, AddressContext} from '../utils/CheckoutContext';
import {CartContext} from '../utils/CartContext';
const Checkout = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [shippingAddresses, setShippingAddresses] = React.useState([
    {
      name: 'Atik bin Hashmee',
      phoneNumber: '01735623513',
      address: 'House #1, Road# 32, Uttara',
      address1: 'House #1, Road# 32, Uttara',
      city: {
        id: 1,
        name: 'Dhaka',
      },
      country: {
        id: 1,
        name: 'Bangladesh',
      },
      district: {
        id: 1,
        name: 'Dhaka',
      },
      zipCode: 1230,
    },
    {
      name: 'Atik bin Hashmee 2',
      phoneNumber: '01635623513',
      address: 'House #2, Road# 32, Uttara',
      address1: 'House #2, Road# 32, Uttara',
      city: {
        id: 1,
        name: 'Dhaka',
      },
      country: {
        id: 1,
        name: 'Bangladesh',
      },
      district: {
        id: 1,
        name: 'Dhaka',
      },
      zipCode: 1230,
    },
  ]);
  const [selectedShippingAddress, setSelectedShippingAddress] = React.useState(
    null,
  );
  const [billingAddresses, setBillingAddresses] = React.useState([
    {
      name: 'Atik bin Hashmee',
      phoneNumber: '01735623513',
      address: 'House #1, Road# 32, Uttara, billing',
      address1: 'House #1, Road# 32, Uttara billing',
      city: {
        id: 1,
        name: 'Dhaka',
      },
      country: {
        id: 1,
        name: 'Bangladesh',
      },
      district: {
        id: 1,
        name: 'Dhaka',
      },
      zipCode: 1230,
    },
    {
      name: 'Atik bin Hashmee 2',
      phoneNumber: '01635623513',
      address: 'House #2, Road# 32, Uttara billing',
      address1: 'House #2, Road# 32, Uttara billing',
      city: {
        id: 1,
        name: 'Dhaka',
      },
      country: {
        id: 1,
        name: 'Bangladesh',
      },
      district: {
        id: 1,
        name: 'Dhaka',
      },
      zipCode: 1230,
    },
  ]);
  const [selectedBillingAddress, setBillingShippingAddress] = React.useState(
    null,
  );
  const [modalDataType, setModalDataType] = React.useState('');
  const [formAddressData, setFormAddressData] = React.useState(null);
  const [addressLists, setAddresslists] = React.useState([]);
  const [paymentMethods, setPaymentMethods] = React.useState([
    {
      id: 1,
      name: 'Cash On Deliver',
    },
    {
      id: 2,
      name: 'PayPal',
    },
    {
      id: 3,
      name: 'Skrill',
    },
    {
      id: 4,
      name: 'WebMoney',
    },
    {
      id: 5,
      name: 'Stripe',
    },
  ]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = React.useState('');
  const [subTotal, setsubTotal] = React.useState(0);
  const [grandTotal, setGrandTotal] = React.useState(0);
  const {cartItems} = React.useContext(CartContext);

  const setCurrentAddress =
    modalDataType === 'shippingLists'
      ? setSelectedShippingAddress
      : setBillingShippingAddress;

  React.useEffect(() => {
    setBillingShippingAddress(billingAddresses[0]);
    setSelectedShippingAddress(shippingAddresses[0]);
    setSelectedPaymentMethod(paymentMethods[0]);
    let suTo = 0;
    cartItems.forEach((prod) => {
      suTo += parseInt(prod.originalPrice) + parseInt(prod.quantity);
    });
    setsubTotal(suTo);
    setGrandTotal(suTo);
  }, []);

  React.useEffect(() => {
    if (modalDataType === 'shippingLists') {
      setAddresslists(shippingAddresses);
    } else if (modalDataType === 'bllingLists') {
      setAddresslists(billingAddresses);
    }
  }, [modalDataType]);
  return (
    <Container style={styles.containerStyle}>
      <Header transparent hasTabs>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" style={{color: '#000'}} />
          </Button>
        </Left>
        <Body>
          <Title style={{color: '#000'}}>Checkout</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Right>
      </Header>
      <Content style={{backgroundColor: '#F0F0F0'}}>
        <View style={styles.eachSection}>
          <View style={styles.topHeader}>
            <Text style={styles.topHeaderTtitleStyle}>Shipping Address</Text>
            <Pressable
              onPress={() => {
                setModalVisible(true);
                setModalDataType('shippingLists');
              }}>
              <Text
                style={[
                  styles.topHeaderTtitleStyle,
                  styles.topHeaderActionButton,
                ]}>
                Change
              </Text>
            </Pressable>
          </View>
          <View style={styles.contentContainer}>
            <Row style={{alignItems: 'center'}}>
              <Col style={styles.leftIcon}>
                <Pressable
                  style={{
                    width: 40,
                    padding: 10,
                    borderRadius: 25,
                    backgroundColor: 'lightgreen',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name={'home-outline'}
                    style={{fontSize: 16}}
                    type={'Ionicons'}
                  />
                </Pressable>
              </Col>
              {selectedShippingAddress && (
                <Col style={styles.addressContent}>
                  <Title style={{color: '#000'}}>
                    {selectedShippingAddress.name}
                  </Title>
                  <Text>{selectedShippingAddress.address}</Text>
                  <Text>{selectedShippingAddress.city.name}</Text>
                  <Text>{selectedShippingAddress.country.name}</Text>
                </Col>
              )}
              <Col style={styles.editIcon}>
                <Pressable
                  onPress={() => {
                    setModalVisible(true);
                    setModalDataType('shippingFormData');
                    setFormAddressData(selectedShippingAddress);
                  }}
                  style={styles.iconWrapper}>
                  <Icon
                    name={'pencil-outline'}
                    style={{fontSize: 15}}
                    type={'Ionicons'}
                  />
                </Pressable>
              </Col>
            </Row>
          </View>
        </View>
        <View style={styles.eachSection}>
          <View style={styles.topHeader}>
            <Text style={styles.topHeaderTtitleStyle}>Billing Address</Text>
            <Pressable
              onPress={() => {
                setModalVisible(true);
                setModalDataType('bllingLists');
              }}>
              <Text
                style={[
                  styles.topHeaderTtitleStyle,
                  styles.topHeaderActionButton,
                ]}>
                Change
              </Text>
            </Pressable>
          </View>
          <View style={styles.contentContainer}>
            <Row style={{alignItems: 'center'}}>
              <Col style={styles.leftIcon}>
                <Pressable
                  style={{
                    width: 40,
                    padding: 10,
                    borderRadius: 25,
                    backgroundColor: 'lightgreen',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name={'home-outline'}
                    style={{fontSize: 16}}
                    type={'Ionicons'}
                  />
                </Pressable>
              </Col>
              {selectedBillingAddress && (
                <Col style={styles.addressContent}>
                  <Title style={{color: '#000'}}>
                    {selectedBillingAddress.name}
                  </Title>
                  <Text>{selectedBillingAddress.address}</Text>
                  <Text>{selectedBillingAddress.city.name}</Text>
                  <Text>{selectedBillingAddress.country.name}</Text>
                </Col>
              )}

              <Col style={styles.editIcon}>
                <Pressable
                  onPress={() => {
                    setModalVisible(true);
                    setModalDataType('billingFormData');
                    setFormAddressData(selectedBillingAddress);
                  }}
                  style={styles.iconWrapper}>
                  <Icon
                    name={'pencil-outline'}
                    style={{fontSize: 15}}
                    type={'Ionicons'}
                  />
                </Pressable>
              </Col>
            </Row>
          </View>
        </View>
        <View style={styles.eachSection}>
          <View style={styles.topHeader}>
            <Text style={styles.topHeaderTtitleStyle}>Payment Methods</Text>
          </View>
          <View style={styles.contentContainer}>
            <View
              style={[
                styles.paymentMethodWrapper,
                styles.shippingAdressContainer,
              ]}>
              {paymentMethods.map((item, inndd) => {
                return (
                  <Pressable
                    key={inndd}
                    onPress={() => {
                      setSelectedPaymentMethod(item);
                    }}
                    style={
                      selectedPaymentMethod.id === item.id
                        ? [
                            styles.paymentEachMethod,
                            styles.selectedpaymentMethod,
                          ]
                        : styles.paymentEachMethod
                    }>
                    <Text>{item.name}</Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
        </View>
        <View style={styles.eachSection}>
          <View style={styles.topHeader}>
            <Text style={styles.topHeaderTtitleStyle}>Products</Text>
          </View>
          <View style={styles.contentContainer}>
            {cartItems.map((item, indd) => {
              return (
                <View key={indd} style={styles.productContainer}>
                  <View style={styles.imageBox}>
                    <Image
                      style={styles.tinyLogo}
                      source={{
                        uri: item.productFeatureImageUrl,
                      }}
                    />
                  </View>
                  <View style={styles.productDetail}>
                    <Text>{item.productName}</Text>
                    <Text style={{fontWeight: 'bold'}}>
                      Size: L, Color: off White
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text>
                        ${item.originalPrice}X {item.quantity}
                      </Text>
                      <Text>${item.originalPrice * item.quantity}</Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
        <View style={styles.eachSection}>
          <View style={styles.topHeader}>
            <Text style={styles.topHeaderTtitleStyle}>Order Summery</Text>
          </View>
          <View style={styles.contentContainer}>
            <Row>
              <Col>
                <Text>Subtotal</Text>
              </Col>
              <Col>
                <Text>${subTotal}</Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text>Delivery Chagre</Text>
              </Col>
              <Col>
                <Text>$0</Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Title style={{color: '#000'}}>Total</Title>
              </Col>
              <Col>
                <Title style={{color: '#000'}}>${grandTotal}</Title>
              </Col>
            </Row>
          </View>
        </View>
        <View style={{alignItems: 'center', padding: 10}}>
          <Text>
            is simply dummy text of the printing and typesetting industry
          </Text>
          <Text>
            <Icon name={'time-outline'} type={'Ionicons'} /> is simply dummy
            text of the printing and typesetting industry
          </Text>
        </View>
      </Content>
      <View style={styles.checkoutFooterContainer}>
        <Row style={styles.row1Style}>
          <Col>
            <Text>Items {cartItems.length}</Text>
          </Col>
          <Col style={{alignItems: 'flex-end'}}>
            <Text>Total ${grandTotal}</Text>
          </Col>
        </Row>
        <Row style={styles.row2Style}>
          <Col>
            <Button
              onPress={() => {
                alert('hello world');
              }}
              style={styles.placeOrderButtonStyle}>
              <Text style={styles.placeOrderButtonTextStyle}>Place Order</Text>
            </Button>
          </Col>
        </Row>
      </View>
      <ModalView
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        formDataType={modalDataType}
        formAddressData={formAddressData}
        setCurrentAddress={setCurrentAddress}
        addressLists={addressLists}
        setFormAddressData={setFormAddressData}
        setModalDataType={setModalDataType}
        modalDataType={modalDataType}
      />
    </Container>
  );
};
export default Checkout;

const ModalView = ({
  modalVisible,
  setModalVisible,
  formDataType,
  formAddressData,
  addressLists,
  setCurrentAddress,
  setFormAddressData,
  setModalDataType,
  modalDataType,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}>
      <TouchableOpacity
        activeOpacity={1}
        onPressOut={() => {
          //setModalVisible(false);
        }}
        style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalFlexContainer}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 10,
              }}>
              <View
                style={{
                  width: 100,
                  borderWidth: 2,
                  borderColor: '#d3d3d3',
                }}></View>
            </View>
            {(formDataType === 'shippingLists' ||
              formDataType === 'bllingLists') && (
              <AddressManagement
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                setCurrentAddress={setCurrentAddress}
                addressLists={addressLists}
                setFormAddressData={setFormAddressData}
                setModalDataType={setModalDataType}
                modalDataType={modalDataType}
              />
            )}

            {(formDataType === 'billingFormData' ||
              formDataType === 'shippingFormData') && (
              <AddressUpdate
                formAddressData={formAddressData}
                setModalDataType={setModalDataType}
                modalDataType={modalDataType}
              />
            )}
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const AddressUpdate = ({formAddressData, setModalDataType, modalDataType}) => {
  const {countries, states, disctricts} = React.useContext(CheckoutContext);
  const [selectedCountry, setSelectedCountry] = React.useState(null);
  const [selectedstate, setSelectedstate] = React.useState(null);
  const [selectedDistrict, setSelectedDistrict] = React.useState(null);
  const [filteredStates, setFilteredStates] = React.useState([]);
  const [filteredDistricts, setFilteredDistricts] = React.useState([]);

  const {addAddressBook} = React.useContext(AddressContext);

  const [addressForm, setAddressForm] = React.useState({
    name: null,
    phoneNumber: null,
    address: null,
    address1: null,
    city: {
      id: null,
      name: null,
    },
    country: {
      id: null,
      name: null,
    },
    district: {
      id: null,
      name: null,
    },
    zipCode: null,
    address_type: modalDataType === "shippingLists" ? "shipping" : "billing"
  });

  React.useEffect(() => {
    if (formAddressData != null) {
      setAddressForm({
        ...addressForm,
        name: formAddressData.name,
        phoneNumber: formAddressData.phoneNumber,
        address: formAddressData.address,
        address1: formAddressData.address1,
        zipCode: formAddressData.zipCode,
      });
    }
  }, []);

  const saveData = () => {
    addAddressBook(addressForm);
  };

  React.useEffect(() => {
    let initialCountry = 19;
    let initialCity = 1;
    let initialDistrict = 1;
    setSelectedCountry(initialCountry);
    setAddressForm({
      ...addressForm,
      country: {...addressForm.country, id: initialCountry},
    });
    setAddressForm({
      ...addressForm,
      city: {...addressForm.city, id: initialCity},
    });
    setAddressForm({
      ...addressForm,
      district: {...addressForm.district, id: initialDistrict},
    });
    if (states.length > 0) {
      setFilteredStates(
        states.filter((item) => item.country_id === initialCountry),
      );
    }
    let initialState = filteredStates[0];
    if (disctricts.length > 0) {
      setFilteredDistricts(
        disctricts.filter((item) => item.state_id === initialState),
      );
    }
  }, []);

  return (
    <Container style={{paddingHorizontal: 10}}>
      <Content>
        <Row style={styles.addressFormRowDesign}>
          <Col>
            <Text style={styles.addressFormLabels}>Contact</Text>
            <Item regular>
              <Input
                onChangeText={(txt) => {
                  setAddressForm({...addressForm, name: txt});
                }}
                style={styles.addressInputField}
                value={addressForm.name}
              />
            </Item>
            <Text style={styles.addressFormLabels}>Phone Number</Text>
            <Item regular>
              <Input
                onChangeText={(txt) => {
                  setAddressForm({...addressForm, phoneNumber: txt});
                }}
                value={addressForm.phoneNumber}
              />
            </Item>
          </Col>
        </Row>
        <Row style={styles.addressFormRowDesign}>
          <Col>
            <Text style={styles.addressFormLabels}>Address 1</Text>
            <Item regular>
              <Input
                onChangeText={(txt) => {
                  setAddressForm({...addressForm, address: txt});
                }}
                value={addressForm.address}
                style={styles.addressInputField}
              />
            </Item>
          </Col>
        </Row>
        <Row style={styles.addressFormRowDesign}>
          <Col>
            <Text style={styles.addressFormLabels}>Address 2</Text>
            <Item regular>
              <Input
                style={styles.addressInputField}
                onChangeText={(txt) => {
                  setAddressForm({...addressForm, address1: txt});
                }}
                value={addressForm.address1}
              />
            </Item>
          </Col>
        </Row>
        <Row style={styles.addressFormRowDesign}>
          <Col>
            <Text style={styles.addressFormLabels}>Country</Text>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{width: undefined}}
                placeholder="Select Country"
                placeholderStyle={{color: '#bfc6ea'}}
                placeholderIconColor="#007aff"
                selectedValue={selectedCountry}
                onValueChange={(changeSelect) => {
                  setSelectedCountry(changeSelect);
                  setAddressForm({
                    ...addressForm,
                    country: {...addressForm.country, id: changeSelect},
                  });
                }}>
                {countries.length > 0 &&
                  countries.map((item, innd) => {
                    return (
                      <Picker.Item
                        key={innd}
                        label={item.name}
                        value={item.id}
                      />
                    );
                  })}
              </Picker>
            </Item>
          </Col>
          <Col>
            <Text style={styles.addressFormLabels}>State</Text>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{width: undefined}}
                placeholder="Select State"
                placeholderStyle={{color: '#bfc6ea'}}
                placeholderIconColor="#007aff"
                selectedValue={selectedstate}
                onValueChange={(changeSelect) => {
                  setSelectedstate(changeSelect);
                  setAddressForm({
                    ...addressForm,
                    city: {...addressForm.city, id: changeSelect},
                  });
                }}>
                {states.length > 0 &&
                  states.map((item, innd) => {
                    return (
                      <Picker.Item
                        key={innd}
                        label={item.name}
                        value={item.id}
                      />
                    );
                  })}
              </Picker>
            </Item>
          </Col>
        </Row>
        <Row style={styles.addressFormRowDesign}>
          <Col>
            <Text style={styles.addressFormLabels}>District</Text>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{width: undefined}}
                placeholder="Select District"
                placeholderStyle={{color: '#bfc6ea'}}
                placeholderIconColor="#007aff"
                selectedValue={selectedDistrict}
                onValueChange={(changeSelect) => {
                  setSelectedDistrict(changeSelect);
                  setAddressForm({
                    ...addressForm,
                    district: {...addressForm.district, id: changeSelect},
                  });
                }}>
                {disctricts.length > 0 &&
                  disctricts.map((item, innd) => {
                    return (
                      <Picker.Item
                        key={innd}
                        label={item.name}
                        value={item.id}
                      />
                    );
                  })}
              </Picker>
            </Item>
          </Col>
          <Col>
            <Text style={styles.addressFormLabels}>Zip Code</Text>
            <Item regular>
              <Input
                style={styles.addressInputField}
                onChangeText={(txt) => {
                  setAddressForm({...addressForm, zipCode: txt});
                }}
                value={addressForm.zipCode}
              />
            </Item>
          </Col>
        </Row>
        <Row style={styles.addressFormRowDesign}>
          <Col>
            <Item>
              <Button
                onPress={() => {
                  saveData();
                }}
                style={styles.placeOrderButtonStyle}>
                <Text style={styles.placeOrderButtonTextStyle}>
                  Update Address
                </Text>
              </Button>
            </Item>
          </Col>
        </Row>
      </Content>
    </Container>
  );
};

const AddressManagement = (props) => {
  const {addresses, resetArr, adrsDispacth, getAddress} = React.useContext(
    AddressContext,
  );
  const [addrestype, setAddresstype] = React.useState(props.modalDataType);
  const [addressLists, setAddressLists] = React.useState([]);
  React.useEffect(() => {
    if (addressLists.length === 0) {
      if (addrestype === 'shippingLists') {
        getAddress('shipping');
      } else if (addrestype === 'bllingLists') {
        getAddress('billing');
      }
    }
    if (addresses.length !== 0) {
      setAddressLists(addresses);
    }
  }, [addrestype, addresses]);

  function modalClose() {
    props.setModalVisible(false);
    setAddressLists([]);
  }

  return (
    <Container style={adrsM.containerStyle}>
      <Row style={adrsM.topBarStyle}>
        <Col style={adrsM.topBarCol1}>
          <Pressable
            onPress={() => {
              modalClose();
            }}>
            <Icon name="arrow-back-outline" type="Ionicons" />
          </Pressable>
        </Col>
        <Col style={adrsM.tobarCol2}>
          <Text style={adrsM.topbarTextMiddle}>Select Address</Text>
        </Col>
        <Col style={adrsM.topbarCol3}>
          <Pressable
            onPress={() => {
              props.setModalVisible(true);
              if (props.modalDataType === 'shippingLists') {
                props.setModalDataType('shippingFormData');
              } else {
                props.setModalDataType('billingFormData');
              }
              props.setFormAddressData(null);
            }}>
            <Icon name="add-outline" type="Ionicons" />
          </Pressable>
        </Col>
      </Row>
      <Content>
        {addressLists.length > 0 &&
          addressLists.map((item, innd) => {
            return (
              <Pressable
                key={innd}
                onPress={() => {
                  props.setCurrentAddress(item);
                  props.setModalVisible(false);
                }}
                style={adrsM.addressListItem}>
                <Row style={adrsM.itemRow}>
                  <Col style={adrsM.leftIconStyle}>
                    <Pressable style={adrsM.IconWrapper}>
                      <Icon
                        name="home-outline"
                        style={adrsM.contentLeftIconStyle}
                        type="Ionicons"
                      />
                    </Pressable>
                  </Col>
                  <Col style={adrsM.middleContentStyle}>
                    <Title style={{color: '#000'}}>{item.name}</Title>
                    <Text>{item.address_line_1}</Text>
                    <Text>{item.city}</Text>
                    <Text>{item.country_id}</Text>
                  </Col>
                </Row>
                <View style={adrsM.itemActionButtonWrapper}>
                  <Pressable
                    style={adrsM.IconWrapper}
                    onPress={() => {
                      alert('sdfa');
                    }}>
                    <Icon
                      name="pencil-outline"
                      style={adrsM.contentLeftIconStyle}
                      type="Ionicons"
                    />
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      alert('sdfa');
                    }}
                    style={[adrsM.IconWrapper, adrsM.contentDeleteIconStyle]}>
                    <Icon
                      name="trash-outline"
                      style={[
                        adrsM.contentLeftIconStyle,
                        adrsM.deleteIconStyle,
                      ]}
                      type="Ionicons"
                    />
                  </Pressable>
                </View>
              </Pressable>
            );
          })}
      </Content>
    </Container>
  );
};

const adrsM = StyleSheet.create({
  containerStyle: {
    padding: 10,
  },
  topBarStyle: {
    alignItems: 'center',
    height: 50,
  },
  topbarTextMiddle: {
    fontSize: 19,
    fontFamily: 'UniNeue-Light',
  },
  topBarCol1: {
    flexBasis: '10%',
  },
  tobarCol2: {
    flexBasis: '80%',
    alignItems: 'center',
  },
  topbarCol3: {
    flexBasis: '10%',
  },
  addressListItem: {
    padding: 10,
    marginBottom: 10,
    borderColor: '#d3d3d3',
    borderWidth: 1,
  },
  itemRow: {
    color: '#000',
  },
  leftIconStyle: {
    flexBasis: '20%',
  },
  middleContentStyle: {
    flexBasis: '80%',
  },
  IconWrapper: {
    padding: 10,
    width: 40,
    backgroundColor: 'lightgreen',
    borderRadius: 500,
    alignItems: 'center',
    marginRight: 5,
  },
  contentLeftIconStyle: {
    fontSize: 17,
    color: '#0f0f0f',
  },
  contentDeleteIconStyle: {
    backgroundColor: 'red',
  },
  deleteIconStyle: {
    color: '#fff',
  },
  itemActionButtonWrapper: {
    borderColor: 1,
    borderColor: 'red',
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
});

const styles = StyleSheet.create({
  productWrapperContainer: {
    flexBasis: '94%',
    height: hp('100%'),
    backgroundColor: '#f4f4f4',
    marginTop: 10,
  },
  productWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  checkoutFooterContainer: {
    backgroundColor: '#fff',
    minHeight: 100,
    bottom: 0,
    height: 100,
    width: '100%',
    zIndex: 999,
    paddingHorizontal: 10,
    borderWidth: 3,
    borderColor: '#d4d4d4',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  placeOrderButtonStyle: {
    width: '100%',
    padding: 10,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  placeOrderButtonTextStyle: {
    color: '#fff',
    fontSize: 22,
  },
  row1Style: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  row2Style: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 15,
  },
  eachSection: {
    marginBottom: 10,
    paddingHorizontal: 10,
    flex: 1,
  },
  topHeader: {
    flexBasis: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  topHeaderTtitleStyle: {
    color: '#000',
    fontSize: 18,
    fontFamily: 'UniNeue-Light',
  },
  topHeaderActionButton: {
    color: 'red',
  },
  contentContainer: {
    flexBasis: '90%',
    color: '#fff',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  shippingAdressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentMethodWrapper: {
    flexWrap: 'wrap',
    paddingVertical: 10,
  },
  paymentEachMethod: {
    borderWidth: 2,
    borderColor: '#d3d3d3',
    borderRadius: 25,
    padding: 5,
    margin: 3,
  },
  leftIcon: {
    flexBasis: '20%',
  },
  editIcon: {
    flexBasis: '20%',
  },
  addressContent: {
    flexBasis: '60%',
  },
  productContainer: {
    minHeight: 120,
    height: 120,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBox: {
    padding: 20,
    flexBasis: '35%',
    alignItems: 'center',
  },
  productDetail: {
    flexBasis: '65%',
  },
  tinyLogo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    backgroundColor: 'lightblue',
  },
  iconWrapper: {
    backgroundColor: 'lightgreen',
    borderRadius: 25,
    alignSelf: 'center',
    width: 35,
    padding: 10,
  },
  centeredView: {
    //modal styles
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    width: Dimensions.get('screen').width - 15,
    height: Dimensions.get('screen').height - 200,
    bottom: -16,
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalFlexContainer: {
    width: '100%',
    height: '100%',
    paddingVertical: 10,
  },
  addressFormRowDesign: {
    marginBottom: 10,
  },
  addressFormLabels: {
    fontSize: 22,
    marginLeft: 10,
    marginBottom: 4,
    fontFamily: 'UniNeue-Light',
  },
  addressInputField: {
    borderWidth: 1,
    borderColor: '#d3d3d3',
    width: '100%',
  },
  selectedpaymentMethod: {
    borderWidth: 2,
    borderColor: 'red',
  },
});

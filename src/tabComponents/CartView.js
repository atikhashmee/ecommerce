import React from 'react';
import {View, Text, Modal, Image, StyleSheet, ScrollView} from 'react-native';
import {List, Title, Button, Checkbox} from 'react-native-paper';
import TouchSpin from '../components/TouchSpin';
import FooterTabs from '../layouts/FooterTabs';
import {Container, Header, Left, Body, Right, Icon, Content} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {CartContext} from '../utils/CartContext';
import {AppContext} from '../utils/GlobalContext';

function CartItem({product, updateCartArr}) {
  const [checked, setChecked] = React.useState(product.isChecked);
  const [quantity, setQuantity] = React.useState(1);
  const [productPrice, setProductPrice] = React.useState(1250);
  const {toggleSingle, cartDispatch} = React.useContext(CartContext);
  function updateQuantity(quantity) {
    updateCartArr(product.id, quantity, 'quantity');
  }

  React.useEffect(() => {
    cartDispatch(toggleSingle(product.id));
    updateCartArr(product.id, checked, 'check');
  }, [checked]);

  return (
    <View style={styles.cartEachItem}>
      <View style={styles.checkBox}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
      </View>
      <View style={styles.imageBox}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: product.imageUrl,
          }}
        />
      </View>
      <View style={styles.contentArea}>
        <View>
          <Title>{product.name}</Title>
        </View>
        <View style={styles.actionCenter}>
          <View style={styles.priceSection}>
            <Text style={styles.price}>
              ${product.price} X {product.quantity}
            </Text>
            <Text style={product.price}>
              ${product.price * product.quantity}
            </Text>
          </View>
          <View style={styles.quantityAction}>
            <TouchSpin
              updateCount={updateQuantity}
              initialCount={product.quantity}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default function CartView() {
  const [modalVisible, setModalVisible] = React.useState(true);
  const [totalCartPrice, setTotalCartPrice] = React.useState(0);
  const {cartItems, toggleAll, cartDispatch} = React.useContext(CartContext);
  const {auth, isLoggedin, setIsAuthModalOpen} = React.useContext(AppContext);
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState(false);
  const [cartArr, setCartArr] = React.useState([]);

  function updateCartArr(product_id, data, flag = '') {
    let cartArrToUpdate = [...cartArr];
    cartArrToUpdate.forEach((product) => {
      if (product.id === product_id) {
        if (flag === 'quantity') {
          product.quantity = data;
        } else if (flag === 'check') {
          product.isChecked = data;
          //console.log('called first time', product);
        }
      }
    });
    setCartArr([...cartArrToUpdate]);
  }

  const toggleAllItems = () => {
    cartArr.forEach((item) => {
      item.isChecked = !item.isChecked;
    });
    selectedItemsCheckBox();
    cartDispatch(toggleAll());
  };

  const deleteAllCartItems = () => {
    cartArr.forEach((product) => {
      if (product.isChecked) {
        cartArr.splice(cartArr.indexOf(product), 1);
      }
    });
  };

  const selectedItemsCheckBox = () => {
    let totalChekcedProducts = 0;
    cartArr.forEach((product) => {
      if (product.isChecked) {
        totalChekcedProducts++;
      }
    });
    if (totalChekcedProducts === cartArr.length) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  React.useEffect(() => {
    let totalPrice = 0;
    cartArr.forEach((product) => {
      totalPrice += product.calculatedPrice();
    });
    selectedItemsCheckBox();
    setTotalCartPrice(totalPrice);
  }, [cartArr]);

  React.useEffect(() => {
    //console.log(cartItems, 'is items ddd');
    if (cartItems.length > 0) {
      setCartArr(
        cartItems.map((item) => {
          return {
            id: item.productId,
            name: item.productName,
            quantity: item.quantity,
            price: item.originalPrice,
            imageUrl: item.productFeatureImageUrl,
            isChecked: item.isChecked,
            calculatedPrice: function () {
              return this.isChecked ? this.price * this.quantity : 0;
            },
          };
        }),
      );
    }
  }, []);

  const goToCheckout = () => {
    if (isLoggedin()) {
      if (cartItems.length > 0) {
        navigation.navigate('checkout');
      } else {
        alert('No Items');
      }
    } else {
      setIsAuthModalOpen(true);
    }
  };

  return (
    <Container>
      <Header
        style={{
          backgroundColor: '#fff',
          elevation: 5,
        }}>
        <Left
          style={{
            marginLeft: -10,
          }}>
          <Button
            style={{marginLeft: -10}}
            transparent
            onPress={() => {
              navigation.navigate('home');
            }}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Shopping Cart</Title>
        </Body>
        <Right>
          <Button
            transparent
            onPress={() => {
              deleteAllCartItems();
            }}>
            <Icon name="trash-2" type="Feather" />
          </Button>
        </Right>
      </Header>

      {cartItems.length > 0 && (
        <Content style={{marginTop: 20}}>
          <View style={styles.itemContainer}>
            {cartArr.length > 0 &&
              cartArr.map((item, index) => {
                return (
                  <CartItem
                    key={index}
                    product={item}
                    updateCartArr={updateCartArr}
                  />
                );
              })}
          </View>
        </Content>
      )}
      {cartItems.length === 0 && (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Text>No Item selected</Text>
        </View>
      )}
      <View style={styles.cartViewPageFooterContainer}>
        <View style={styles.cartViewPageFooterContent}>
          <View style={{flexBasis: '10%'}}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                toggleAllItems();
              }}
            />
          </View>
          <View style={{flexBasis: '30%', alignItems: 'flex-end'}}>
            <Title>Total ${totalCartPrice}</Title>
          </View>
          <View style={{flexBasis: '50%', alignItems: 'flex-end'}}>
            <Button
              style={{backgroundColor: 'blue'}}
              icon="cart"
              mode="contained"
              onPress={() => {
                goToCheckout();
              }}>
              Checkout
            </Button>
          </View>
        </View>
      </View>
      <FooterTabs />
    </Container>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  itemContainer: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    marginBottom: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 20,
  },
  imageBox: {
    padding: 15,
    flexBasis: '20%',
    borderWidth: 1,
    borderColor: '#d3d3d3',
    alignItems: 'center',
  },
  checkBox: {
    flexBasis: '10%',
  },
  cartEachItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    maxHeight: 100,
    height: 100,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  contentArea: {
    flexBasis: '60%',
  },
  actionCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quantityAction: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginRight: 10,
  },
  priceSection: {
    backgroundColor: '#fff',
  },
  price: {
    fontFamily: 'Oswald',
    fontSize: 18,
    fontWeight: '400',
    margin: 0,
    padding: 0,
    color: '#000',
  },
  cartViewPageFooterContainer: {
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderTopWidth: 1,
    borderTopColor: '#d3d3d3',
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    height: 70,
    backgroundColor: '#fff',
  },
  cartViewPageFooterContent: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

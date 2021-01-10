import React from 'react';
import {View, Text, Modal, Image, StyleSheet, ScrollView} from 'react-native';
import {List, Title, Button, Checkbox} from 'react-native-paper';
import TouchSpin from '../components/TouchSpin';
import FooterTabs from '../layouts/FooterTabs';
import {Container, Content} from 'native-base';

function CartItem({product, category, updateCartArr}) {
  const [checked, setChecked] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);
  const [productPrice, setProductPrice] = React.useState(1250);
  function updateQuantity(quantity) {
    updateCartArr(category, product.id, quantity, 'quantity');
  }

  function updateSelection() {
    setChecked(!checked);
    updateCartArr(category, product.id, checked, 'check');
  }

  return (
    <View style={styles.cartEachItem}>
      <View style={styles.checkBox}>
        <Checkbox
          status={product.isChecked ? 'checked' : 'unchecked'}
          onPress={() => {
            updateSelection();
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
  const [checked, setChecked] = React.useState(false);
  const [cartArr, setCartArr] = React.useState([
    {
      category_id: 1,
      category_name: 'Category Name first',
      category_products: [
        {
          id: 1,
          name: 'product 1',
          quantity: 1,
          price: 123,
          imageUrl:
            'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          isChecked: true,
          calculatedPrice: function () {
            return this.isChecked ? this.price * this.quantity : 0;
          },
        },
        {
          id: 2,
          name: 'product 2',
          quantity: 1,
          price: 233,
          calculatedPrice: function () {
            return this.isChecked ? this.price * this.quantity : 0;
          },
          imageUrl:
            'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          isChecked: true,
        },
        {
          id: 3,
          name: 'product 3',
          quantity: 1,
          price: 333,
          calculatedPrice: function () {
            return this.isChecked ? this.price * this.quantity : 0;
          },
          imageUrl:
            'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          isChecked: true,
        },
      ],
    },
    {
      category_id: 2,
      category_name: 'Category Name two',
      category_products: [
        {
          id: 1,
          name: 'product 1',
          quantity: 1,
          price: 123,
          calculatedPrice: function () {
            return this.isChecked ? this.price * this.quantity : 0;
          },
          imageUrl:
            'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          isChecked: true,
        },
        {
          id: 2,
          name: 'product 2',
          quantity: 1,
          price: 233,
          calculatedPrice: function () {
            return this.isChecked ? this.price * this.quantity : 0;
          },
          imageUrl:
            'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          isChecked: true,
        },
        {
          id: 3,
          name: 'product 3',
          quantity: 1,
          price: 333,
          calculatedPrice: function () {
            return this.isChecked ? this.price * this.quantity : 0;
          },
          imageUrl:
            'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          isChecked: true,
        },
      ],
    },
  ]);

  function updateCartArr(cat_id, product_id, data, flag = '') {
    let cartArrToUpdate = [...cartArr];
    cartArrToUpdate.forEach((category) => {
      if (category.id === cat_id) {
        if (category.category_products.length > 0) {
          category.category_products.forEach((product) => {
            if (product.id === product_id) {
              if (flag === 'quantity') {
                product.quantity = data;
              } else if (flag === 'check') {
                product.isChecked = data;
              }
            }
          });
        }
      }
    });
    setCartArr([...cartArrToUpdate]);
  }

  React.useEffect(() => {
    let totalPrice = 0;
    cartArr.forEach((category) => {
      category.category_products.forEach((product) => {
        totalPrice += product.calculatedPrice();
      });
    });
    setTotalCartPrice(totalPrice);
  }, [cartArr]);

  return (
    <Container>
      <Content>
        {cartArr.length > 0 &&
          cartArr.map((item, index) => {
            return (
              <View key={index} style={styles.itemContainer}>
                <View>
                  <Title>{item.category_name}</Title>
                </View>
                {item.category_products.length > 0 &&
                  item.category_products.map((product, ind) => {
                    return (
                      <CartItem
                        key={ind}
                        product={product}
                        category={item.id}
                        updateCartArr={updateCartArr}
                      />
                    );
                  })}
              </View>
            );
          })}
      </Content>
      <View
        style={{
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
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            padding: 10,
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <View style={{flexBasis: '10%'}}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
          </View>
          <View style={{flexBasis: '30%', alignItems: 'flex-end'}}>
            <Title>Total ${totalCartPrice}</Title>
          </View>
          <View style={{flexBasis: '50%', alignItems: 'flex-end'}}>
            <Button
              style={{backgroundColor: 'blue'}}
              icon="camera"
              mode="contained"
              onPress={() => console.log('Pressed')}>
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
});

function HalfModal() {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View
        style={{
          position: 'absolute',
          backgroundColor: '#fff',
          bottom: 0,
          height: '50%',
          width: '100%',
        }}>
        <Text>Hello world</Text>
      </View>
    </Modal>
  );
}

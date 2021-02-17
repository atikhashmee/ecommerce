import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import {Col, Container, Icon, Row} from 'native-base';

function OrderSubmitted() {
  return (
    <Container>
      <Row>
        <Col>
          <View style={styles.orderPlaceContainer}>
            <Icon
              type="Feather"
              style={styles.submittedIcon}
              name="check-circle"
            />
            <Text style={styles.orderPlaceText}>Order has been placed</Text>
          </View>
        </Col>
      </Row>
      <Row>
        <Col>
          <View style={[styles.orderPlaceContainer, styles.downTextContainer]}>
            <Text>Tract Order</Text>
            <Pressable
              onPress={() => {
                alert('go to another');
              }}>
              <Text style={styles.heyperLink}>#124586</Text>
            </Pressable>
          </View>
        </Col>
      </Row>
    </Container>
  );
}
export default OrderSubmitted;

const styles = StyleSheet.create({
  submittedIcon: {
    color: 'green',
    fontSize: 100,
  },
  heyperLink: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontFamily: 'UniNeue-Light',
    fontSize: 30,
  },
  orderPlaceContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderPlaceText: {
    fontSize: 30,
    fontFamily: 'UniNeue-Light',
  },
  downTextContainer:{
    justifyContent: null,
  }
});

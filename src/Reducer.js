import React from 'react';
import {baseUrl} from './env.json';
const defaultArr = {
  store_id: 1,
  api_token: '2y12QoRuPscrVSVZcPCREXSO9gcY8u0FQXP8EBmfMWnltjsoqyWhaNMO',
};

export default {
  setInit: async () => {
    let formD = new FormData();
    formD.append('api_token', defaultArr.api_token);
    formD.append('store_id', defaultArr.store_id);
    await fetch(baseUrl + 'home-content', {
      method: 'POST',
      body: formD,
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((res) => {
        setLoadData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  loadCategories: async () => {
    let formD = new FormData();
    formD.append('api_token', defaultArr.api_token);
    formD.append('store_id', defaultArr.store_id);
    await fetch(baseUrl + 'get-all-categories', {
      method: 'POST',
      body: formD,
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  loadProducts: async (category_id) => {
    let formD = new FormData();
    formD.append('api_token', defaultArr.api_token);
    formD.append('store_id', defaultArr.store_id);
    formD.append('category_id', category_id);
    return await fetch(baseUrl + 'get-category-products', {
      method: 'POST',
      body: formD,
    });
  },
  categoryToggleItem(category_id, subCategory_id) {
    let modifyCate = [...categories];
    modifyCate.forEach((category) => {
      if (category.id === category_id) {
        if (category.items.length > 0) {
          category.items.forEach((subs) => {
            if (subs.id === subCategory_id) {
              subs.isOpened = !subs.isOpened;
            }
          });
        }
      }
    });
    setCategories([...modifyCate]);
  },
  addToCart(product) {
    alert('added');
    // let productItems = [...cartProducts];
    // let is_there = false;
    // if (cartProducts.length > 0) {
    //   cartProducts.forEach((item) => {
    //     if (item.id === product.id) {
    //       is_there = true;
    //     }
    //   });
    // }

    // if (!is_there) {
    //   productItems.push(product);
    //   setCartProducts((cartProducts) => [...cartProducts, product]);
    // }
    // LocalStorage.put('cart_items', JSON.stringify(productItems)).then(
    //   (res) => {
    //     console.log(res, 'saved');
    //   },
    // );
  },
  removeFromCart(product) {
    let productItems = [...cartProducts];
    let is_there = false;
    if (cartProducts.length > 0) {
      cartProducts.forEach((item) => {
        if (item.id === product.id) {
          is_there = true;
        }
      });
    }

    if (is_there) {
      productItems.splice(productItems.indexOf(product), 1);
      setCartProducts([...productItems]);
    }
    console.log(productItems, productItems.length, 'lllll');
    LocalStorage.put('cart_items', JSON.stringify(productItems)).then((res) => {
      console.log(res, 'saved');
    });
  },
  modifyAuth: async (user, isLoggedin, auth_token) => {
    let auth_obj = {...auth};
    auth_obj.user = user;
    auth_obj.isLoggedin = isLoggedin;
    auth_obj.auth_token = auth_token;
    return await LocalStorage.put('auth', JSON.stringify(auth_obj)).then(
      (res) => {
        console.log(auth_obj, 'login auth obj');
        setAuth(auth_obj);
      },
    );
  },
  logout: async () => {
    let auth_obj = {...auth};
    auth_obj.user = null;
    auth_obj.isLoggedin = false;
    auth_obj.auth_token = null;
    return await LocalStorage.put('auth', JSON.stringify(auth_obj)).then(
      (d) => {
        console.log(auth_obj, 'logout auth obj');
        setAuth(auth_obj);
      },
    );
  },
};

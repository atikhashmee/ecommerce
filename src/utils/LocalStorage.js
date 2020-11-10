import AsyncStorage from '@react-native-async-storage/async-storage';

let LocalStorage = {
  put: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log('Error Stoaring Data', e);
    }
  },
  get: async key => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (e) {
      console.log('Error retriving Data', e);
    }
  },
  remove: async key => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.log('Error occured', e);
    }

    console.log('Done.');
  },
};

export {LocalStorage};
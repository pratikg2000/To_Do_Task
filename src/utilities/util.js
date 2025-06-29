import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {constants} from '../values/String';

const Util = {
  call_Post_by_URI_Login: async (
    uri,
    collection,
    callback,
    type,
    navigation,
  ) => {
    let URL = constants.URL;
    let url = URL + uri;
    console.log('url:', url);

    const token = 'Bearer ' + (await Util.getTokens());
    let typeValue = 'application/json';
    if (type === 'multipart') {
      typeValue = 'multipart/form-data';
    }

    console.log('token:', token);
    console.log('post ===>', url, JSON.stringify(collection), typeValue);

    if (token !== 'Bearer null') {
      try {
        const res = await callApi_post(url, collection, token, typeValue);
        console.log('post response =>', JSON.stringify(res.data));
        if (callback) callback(res.data, true);
      } catch (error) {
        console.log('error from axios', error);
        const status = error?.response?.status;
        const message =
          error?.response?.data?.message || 'Something went wrong';

        if (callback) callback(message, false);
      }
    } else {
      try {
        const res = await callApi_postNoToken(url, collection, typeValue);
        console.log('post response =>', JSON.stringify(res.data));
        if (callback) callback(res.data, true);
      } catch (error) {
        console.log('error response', error?.response);
        if (callback) {
          if (error?.response?.data) {
            callback(error.response.data, false);
          } else {
            callback('Network error', false);
          }
        }
      }
    }
  },

  call_Get_by_URI: async (uri, callback = () => {}, dispatch, navigation) => {
    try {
      const URL = constants.URL;
      const url = URL + uri;

      const token = 'Bearer ' + (await Util.getTokens());
      const headers = {
        Authorization: token,
      };

      const response = await axios.get(url, {headers});

      console.log('GET response =====> ', JSON.stringify(response.data));
      callback(response.data, true);
    } catch (error) {
      const status = error?.response?.status;
      console.log('GET error =====> ', status);

      if (
        status === 401 ||
        error?.response?.data?.message === 'Unauthenticated'
      ) {
        Util.toastMessage('Session expired. Please login again.');
        await AsyncStorage.removeItem('token');
        // Optionally navigate to login
        navigation?.replace?.('LoginScreen');
      } else {
        callback(error?.response?.data?.message || 'Something went wrong');
      }
    }
  },

  getTokens: async () => {
    try {
      return await AsyncStorage.getItem('token');
    } catch (e) {
      return null;
    }
  },

  setTokens: async token => {
    try {
      await AsyncStorage.setItem('token', token);
    } catch (e) {
      console.log('Token save error', e);
    }
  },
};

const callApi_post = async (url, params, token, type) => {
  return await axios.post(url, params, {
    headers: {
      'Content-Type': type,
      Authorization: token,
    },
    crossDomain: true,
  });
};

const callApi_postNoToken = async (url, params, type) => {
  return await axios.post(url, params, {
    headers: {
      'Content-Type': type,
    },
    crossDomain: true,
  });
};

const callApi_get = async (url, token) => {
  return await axios.get(url, {
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  });
};

export default Util;

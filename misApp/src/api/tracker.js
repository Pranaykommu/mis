import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';

const instance = axios.create({
 // baseURL: 'http://1eb941d158c5.ngrok.io'
  baseURL: 'http://13.233.138.227:8080/mis-web-app'
});

instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
); 

export default instance;

/*
http://13.233.138.227:8080/mis-web-app
*/
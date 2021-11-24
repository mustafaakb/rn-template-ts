import * as Sentry from '@sentry/react-native';
import axios, {AxiosError, AxiosInstance, AxiosResponse} from 'axios';
import {API_KEY, API_URL} from '../api.config';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': API_KEY,
  },
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    Sentry.captureException(error);
    return Promise.reject(error);
  },
);

// axiosInstance.interceptors.response.use(
//   async res => {
//     const token = await AsyncStorage.getItem('Token');
//     if (token) {
//       res.headers.Authorization = `Bearer ${token}`;
//     }
//     return res;
//   },
//   async error => {
//     console.log({AxisoInstanceError: error});
//     const originalConfig = error.config;
//     if (originalConfig.url !== '/login-or-register' && error.response) {
//       if (error.response.status === 401 && !originalConfig._retry) {
//         const JWT = await auth().currentUser?.getIdToken(true);
//         if (JWT) {
//           axiosInstance.defaults.headers.Authorization = `Bearer ${JWT}`;
//         }
//         axiosInstance.post(apiEndpoints.LOGIN);
//       }
//     }
//   },
// );

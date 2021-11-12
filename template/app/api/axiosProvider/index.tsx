import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios, {AxiosInstance} from 'axios';
import MockAdapter from 'axios-mock-adapter';
import React, {createContext, ReactNode, useEffect, useMemo} from 'react';
import {apiEndpoints} from '..';
import {mockEndpoints} from '../axiosMock/mock.endpoints';

interface IAxiosContext {
  axios: AxiosInstance;
}

export const AxiosContext = createContext<IAxiosContext>({
  axios: Axios.create(),
});

export const AxiosProvider = ({children}: {children: ReactNode}): Element => {
  const axios = useMemo(() => {
    const axiosInstance = Axios.create({
      baseURL: 'http://ip.jsontest.com',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    axiosInstance.interceptors.request.use(
      async config => {
        const token = await AsyncStorage.getItem('Token');
        if (token) {
          // @ts-ignore
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      error => {
        Promise.reject(error);
      },
    );

    axiosInstance.interceptors.response.use(
      async res => {
        const token = await AsyncStorage.getItem('Token');
        if (token) {
          res.headers.Authorization = `Bearer ${token}`;
        }
        return res;
      },
      async error => {
        if (error.config.url !== apiEndpoints.LOGIN() && error.response) {
          if (error.response.status === 401 && !error.config._retry) {
            const JWT = ''; //TODO: Refresh Token // await auth().currentUser?.getIdToken(true);
            if (JWT) {
              axios.defaults.headers.common.Authorization = `Bearer ${JWT}`;
            }
            await axios.post(apiEndpoints.LOGIN());
          }
        }
      },
    );

    return axiosInstance;
  }, []);

  const setMockInUse = async (setMock: boolean) => {
    const mock = await new MockAdapter(axios, {onNoMatch: 'passthrough'});
    if (setMock) {
      mockEndpoints(mock);
    }
  };

  useEffect(() => {
    setMockInUse(true);
  });

  return (
    <AxiosContext.Provider value={{axios}}>{children}</AxiosContext.Provider>
  );
};

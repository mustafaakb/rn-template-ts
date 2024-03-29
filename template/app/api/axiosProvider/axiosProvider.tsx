import Axios, {AxiosInstance} from 'axios';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import {API_KEY, API_URL} from '../api.config';

interface IAxiosContext {
  axios: AxiosInstance;
}

export const AxiosContext = createContext<IAxiosContext>({
  axios: Axios.create(),
});

export function useAxios(): IAxiosContext {
  return useContext(AxiosContext);
}

export const AxiosProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const axios = useMemo(() => {
    const axiosInstance = Axios.create({
      baseURL: API_URL,
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
      },
    });
    //axiosInstance.defaults.headers.common['x-api-key'] = API_KEY; // Replace this with your API Key

    // axiosInstance.interceptors.request.use(
    //   async config => {
    //     const token = await AsyncStorage.getItem('Token');
    //     if (token) {
    //       // @ts-ignore
    //       config.headers.Authorization = `Bearer ${token}`;
    //     }
    //     return config;
    //   },
    //   error => {
    //     Promise.reject(error);
    //   },
    // );

    // axiosInstance.interceptors.response.use(
    //   async res => {
    //     const token = await AsyncStorage.getItem('Token');
    //     if (token) {
    //       res.headers.Authorization = `Bearer ${token}`;
    //     }
    //     return res;
    //   },
    //   async error => {
    //     if (error.config.url !== apiEndpoints.LOGIN() && error.response) {
    //       if (error.response.status === 401 && !error.config._retry) {
    //         const JWT = ''; //TODO: Refresh Token // await auth().currentUser?.getIdToken(true);
    //         if (JWT) {
    //           axios.defaults.headers.common.Authorization = `Bearer ${JWT}`;
    //         }
    //         await axios.post(apiEndpoints.LOGIN());
    //       }
    //     }
    //   },
    // );

    return axiosInstance;
  }, []);

  useEffect(() => {
    //setMockInUse(true, axios);
  });

  return (
    <AxiosContext.Provider value={{axios}}>{children}</AxiosContext.Provider>
  );
};

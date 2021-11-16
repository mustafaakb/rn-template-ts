import {apiEndpoints, AxiosContext} from '@app/api';
import {SCREENS} from '@app/screens';
import {useNavigation} from '@react-navigation/core';
import React, {useContext} from 'react';
import {Button, View} from 'react-native';

export const RegisterScreen = () => {
  const {axios} = useContext(AxiosContext);
  const {navigation} = useNavigation();

  const handleLogin = async () => {
    //const params: REGISTERParams = {};
    axios
      .get(apiEndpoints.IMAGE_SEARCH(), {params: {limit: 1, size: 'full'}})
      .then(({data}) => {
        console.log({data});
        navigation.navigate(SCREENS.main);
      })
      .catch(err => {
        console.log({err});
      });
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Register and Login" onPress={handleLogin} />
    </View>
  );
};

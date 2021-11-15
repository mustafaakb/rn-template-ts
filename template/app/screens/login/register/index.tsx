import React, {useContext} from 'react';
import {View} from 'react-native';
import {apiEndpoints} from '../../../api';
import {AxiosContext} from '../../../api/axiosProvider';
import {Button} from '../../../components';
import {SCREENS} from '../../enums';

export const RegisterScreen = ({navigation}) => {
  const {axios} = useContext(AxiosContext);
  function handleLogin() {
    //const params: REGISTERParams = {};
    axios
      .post(apiEndpoints.LOGIN())
      .then(({data}) => {
        console.log({data});
        navigation.navigate(SCREENS.main);
      })
      .catch(err => {
        console.log({err});
      });
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Register and Login" onPress={handleLogin} />
    </View>
  );
};

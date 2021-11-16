import React, {useContext} from 'react';
import {View} from 'react-native';
import {apiEndpoints} from '../../../api';
import {AxiosContext} from '../../../api/axiosProvider';
import {Button} from '../../../components';
import {SCREENS} from '../../enums';

export const RegisterScreen = ({navigation}) => {
  const {axios} = useContext(AxiosContext);
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

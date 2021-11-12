import React, {useContext, useEffect} from 'react';
import {View} from 'react-native';
import {apiEndpoints} from '../../../api';
import {AxiosContext} from '../../../api/axiosProvider';
import {Button} from '../../../components';
import {SCREENS} from '../../enums';

export const RegisterScreen = ({navigation}) => {
  const {axios} = useContext(AxiosContext);

  useEffect(() => {
    axios.get(apiEndpoints.LOGIN()).then(({data}) => {
      console.log({data});
    });
  });

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Register and Login"
        onPress={() => navigation.navigate(SCREENS.main)}
      />
    </View>
  );
};

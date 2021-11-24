import {SCREENS} from '@app/screens';
import React from 'react';
import {Button, View} from 'react-native';

export const RegisterScreen = ({navigation}) => {
  const handleLogin = async () => {
    //const params: REGISTERParams = {};
    // axios
    //   .get(apiEndpoints.IMAGE_SEARCH(), {params: {limit: 1, size: 'full'}})
    //   .then(({data}) => {
    //     console.log({data});
    //     navigation.navigate(SCREENS.main);
    //   })
    //   .catch(err => {
    //     console.log({err});
    //   });
    navigation.navigate(SCREENS.main);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Register and Login" onPress={handleLogin} />
    </View>
  );
};

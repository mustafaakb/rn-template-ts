import React from 'react';
import {View} from 'react-native';
import {Button} from '../../../components';
import {SCREENS} from '../../enums';

export const RegisterScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Register and Login"
        onPress={() => navigation.navigate(SCREENS.main)}
      />
    </View>
  );
};

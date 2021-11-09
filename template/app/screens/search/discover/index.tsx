import React from 'react';
import {View} from 'react-native';
import {Button} from '../../../components';
import {SCREENS} from '../../enums';

export const DiscoverScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Discover"
        onPress={() => navigation.navigate(SCREENS.home)}
      />
    </View>
  );
};

import React from 'react';
import {Text, View} from 'react-native';
import {Colors} from '../../theme';

const LocationModal = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.palette.background,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Location Modal</Text>
    </View>
  );
};

export default LocationModal;

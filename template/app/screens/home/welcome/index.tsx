import React from 'react';
import {View} from 'react-native';
import StyledText from '../../../components/atoms/text';

export const WelcomeScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <StyledText boldest fontSize={20}>
        Home Screen
      </StyledText>
    </View>
  );
};

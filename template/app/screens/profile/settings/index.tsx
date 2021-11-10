import React from 'react';
import {Text} from 'react-native';
import {StyledText, StyledViewCenter} from '../../../components';

export const SettingsScreen = () => {
  return (
    <StyledViewCenter>
      <StyledText lighter fontSize={10}>
        Profile/Settings Screen
      </StyledText>
      <Text style={{fontSize: 10}}>Profile/Settings Screen</Text>
    </StyledViewCenter>
  );
};

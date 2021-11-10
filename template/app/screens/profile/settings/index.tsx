import React from 'react';
import {Text} from 'react-native';
import {StyledText, StyledViewCenter} from '../../../components';

export const SettingsScreen = () => {
  return (
    <StyledViewCenter>
      <StyledText boldest fontSize={15} style={{color: 'red'}}>
        Profile/Settings Screen
      </StyledText>
      <Text style={{fontSize: 20}}>Styless Text</Text>
    </StyledViewCenter>
  );
};

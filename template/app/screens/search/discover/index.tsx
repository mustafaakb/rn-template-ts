import React from 'react';
import {Button, StyledViewCenter} from '../../../components';
import {SCREENS} from '../../enums';

export const DiscoverScreen = ({navigation}) => {
  return (
    <StyledViewCenter>
      <Button
        title="Discover"
        onPress={() => navigation.navigate(SCREENS.profile)}
      />
    </StyledViewCenter>
  );
};

import {apiClient} from '@app/api';
import React from 'react';
import {Image} from 'react-native';
import {Button, StyledViewCenter} from '../../../components';
import {SCREENS} from '../../enums';

export const DiscoverScreen = ({navigation}) => {
  const imageParams = apiClient.useGetImageParams(3, 100, 'DESC');
  return (
    <StyledViewCenter>
      <Button
        title="Discover"
        onPress={() => navigation.navigate(SCREENS.profile)}
      />
      <Image
        source={{uri: imageParams.data?.data[0].url}}
        style={{width: '90%', height: 200, borderWidth: 1}}
      />
    </StyledViewCenter>
  );
};

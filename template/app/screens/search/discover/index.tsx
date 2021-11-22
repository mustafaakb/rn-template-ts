import {apiClient} from '@app/api';
import React from 'react';
import {Image} from 'react-native';
import {Button, StyledViewCenter} from '../../../components';
import {SCREENS} from '../../enums';

export const DiscoverScreen = ({navigation}) => {
  const {data, isLoading} = apiClient.useGetAllImage();
  console.log({uri: data?.data[0].url});

  return (
    <StyledViewCenter>
      <Button
        title="Discover"
        onPress={() => navigation.navigate(SCREENS.profile)}
      />
      <Image
        source={{uri: data?.data[0].url}}
        style={{width: '90%', height: 200, borderWidth: 1}}
      />
    </StyledViewCenter>
  );
};

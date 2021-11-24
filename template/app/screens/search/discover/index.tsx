import {apiClient} from '@app/api';
import React from 'react';
import {Image} from 'react-native';
import {Button, StyledViewCenter} from '../../../components';

export const DiscoverScreen = ({navigation}) => {
  const getImages = apiClient.useGetImageParams(3, 100, 'DESC');
  const postVote = apiClient.usePostVote();

  const handlePress = () => {
    postVote.mutate({
      params: {
        image_id: getImages.data?.data[0].url || 'url',
        value: 1,
        sub_id: 'user123',
      },
    });
    //navigation.navigate(SCREENS.profile);
  };

  return (
    <StyledViewCenter>
      <Button title="Discover" onPress={handlePress} />
      <Image
        source={{uri: getImages.data?.data[0].url}}
        style={{width: '90%', height: 200, borderWidth: 1}}
      />
    </StyledViewCenter>
  );
};

import {useQuery} from '@apollo/client';
import {apiGQL} from '@app/api';
import React from 'react';
import {StyledText, StyledViewCenter} from '../../../components';

export const UploadPhotoScreen = () => {
  const {loading, error, data} = useQuery(apiGQL.GET_POSTS, {
    variables: {limit: 5},
  });
  return (
    <StyledViewCenter>
      <StyledText fontSize={20}>Upload Photo Screen</StyledText>
    </StyledViewCenter>
  );
};

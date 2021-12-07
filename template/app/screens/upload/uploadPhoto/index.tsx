import {useMutation, useQuery} from '@apollo/client';
import {apiGQL} from '@app/api';
import React from 'react';
import {StyledText, StyledViewCenter} from '../../../components';

export const UploadPhotoScreen = () => {
  const {
    loading: getLoading,
    error: getError,
    data: dataGet,
  } = useQuery(apiGQL.GET_POSTS, {
    variables: {limit: 5},
  });
  const [
    mutateFunction,
    {data: dataMutation, loading: mutateLoading, error: mutateError},
  ] = useMutation(apiGQL.CREATE_POST);
  console.log(
    mutateFunction({variables: {title: 'titleText', body: 'bodyText'}}),
  );

  return (
    <StyledViewCenter>
      <StyledText fontSize={20}>Upload Photo Screen</StyledText>
    </StyledViewCenter>
  );
};

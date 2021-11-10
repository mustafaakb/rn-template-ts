import React from 'react';
import {View} from 'react-native';

export const StyledViewCenter = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  return (
    <View
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      {...props}>
      {children}
    </View>
  );
};

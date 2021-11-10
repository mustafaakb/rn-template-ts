import React from 'react';
import {View} from 'react-native';
import {Colors} from '../../../theme';

export const StyledViewCenter = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.palette.background,
      }}
      {...props}>
      {children}
    </View>
  );
};

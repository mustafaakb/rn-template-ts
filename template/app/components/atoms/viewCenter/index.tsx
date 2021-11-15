import React from 'react';
import {View} from 'react-native';
import {Colors} from '../../../theme';

export const StyledViewCenter = ({
  children,
  style,
  ...props
}: {
  children: React.ReactNode;
  style: any;
}) => {
  return (
    <View
      style={[
        {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.palette.background,
        },
        style,
      ]}
      {...props}>
      {children}
    </View>
  );
};

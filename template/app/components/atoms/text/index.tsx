import React from 'react';
import {Text} from 'react-native';
import {Fonts} from '../../../assets/fonts';
import {Mixins} from '../../../theme';

type StyledTextProps = {
  bolder?: boolean;
  boldest?: boolean;
  lighter?: boolean;
  lightest?: boolean;
  fontSize?: number;
  children?: React.ReactNode;
  style?: {};
};

export const StyledText = ({
  bolder,
  boldest,
  lighter,
  lightest,
  fontSize,
  children,
  style,
  ...props
}: StyledTextProps) => {
  const normal = !boldest && !bolder && !lighter && !lightest;
  return (
    <Text
      style={[
        boldest && {fontFamily: Fonts.bold},
        bolder && {fontFamily: Fonts.bold},
        normal && {fontFamily: Fonts.medium},
        lighter && {fontFamily: Fonts.regular},
        lightest && {fontFamily: Fonts.light},
        {color: 'black'},
        fontSize && {fontSize: Mixins.scaleFont(fontSize)},
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

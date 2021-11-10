import React from 'react';
import {Text} from 'react-native';
import {Fonts} from '../../../assets/fonts';

const normalizeFont = (size: number) => {
  return size * 2;
};

type StyledTextProps = {
  bolder?: boolean;
  boldest?: boolean;
  lighter?: boolean;
  lightest?: boolean;
  fontSize?: number;
  children?: React.ReactNode;
  style?: {};
};

const StyledText = ({
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
        fontSize && {fontSize: normalizeFont(fontSize)},
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export default StyledText;

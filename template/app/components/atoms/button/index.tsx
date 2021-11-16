import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {StyledText} from '../text';
type ButtonProps = {
  onPress?: () => void;
  title?: string;
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#F4F9F9',
    borderRadius: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export const Button = ({title = 'Press to Button', onPress}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <StyledText lighter style={styles.title}>
        {title}
      </StyledText>
    </Pressable>
  );
};

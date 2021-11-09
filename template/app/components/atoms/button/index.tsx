import _ from 'lodash';
import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
type ButtonProps = {
  onPress?: () => void;
  title?: string;
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#87AAAA',
    borderRadius: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export const Button = ({
  title = 'Press to Button',
  onPress = _.noop(),
}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

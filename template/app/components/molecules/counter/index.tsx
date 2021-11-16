import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {StyledText} from '../..';
import {styleShadow} from '../../../theme/mixins';

interface ICounter {
  count: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

const styles = StyleSheet.create({
  counterRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export const Counter = ({count, onIncrement, onDecrement}: ICounter) => {
  return (
    <View style={[styles.counterRow, styleShadow(5)]}>
      <Pressable onPress={onDecrement}>
        <StyledText boldest fontSize={20} style={{margin: 5}}>
          -
        </StyledText>
      </Pressable>
      <StyledText>{count}</StyledText>
      <Pressable onPress={onIncrement}>
        <StyledText boldest fontSize={20} style={{margin: 5}}>
          +
        </StyledText>
      </Pressable>
    </View>
  );
};

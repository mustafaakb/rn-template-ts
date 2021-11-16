import {Counter, StyledText, StyledViewCenter} from '@app/components';
import {useAppDispatch, useAppSelector} from '@app/store';
import {decrement, increment} from '@app/store/reducers/counter';
import React from 'react';
import {View} from 'react-native';

export const WelcomeScreen = () => {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <StyledViewCenter style={{backgroundColor: 'white'}}>
      <StyledText lightest fontSize={25}>
        Welcome Screen
      </StyledText>
      <View>
        <StyledText fontSize={15}>Counter</StyledText>
        <Counter
          count={count}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </View>
    </StyledViewCenter>
  );
};

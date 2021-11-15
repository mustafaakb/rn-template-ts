import React from 'react';
import {View} from 'react-native';
import {StyledText, StyledViewCenter} from '../../../components';
import Counter from '../../../components/molecules/counter';
import {useAppDispatch, useAppSelector} from '../../../store';
import {decrement, increment} from '../../../store/reducers/counter';

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

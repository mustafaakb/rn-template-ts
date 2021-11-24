import {StyledText, StyledViewCenter} from '@app/components/atoms';
import {Counter} from '@app/components/molecules';
import {useAppDispatch, useAppSelector} from '@app/store/hooks';
import {decrement, increment} from '@app/store/reducers/counter';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {showMessage} from 'react-native-flash-message';

export const WelcomeScreen = () => {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  useEffect(() => {
    showMessage({
      type: 'success',
      message: 'Sign In',
    });
  }, []);

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

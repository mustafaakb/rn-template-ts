import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {asyncTest} from '../../utils';

interface CounterState {
  value: number;
  status: 'pending' | 'fulfilled' | 'rejected';
}

const initialState: CounterState = {
  value: 0,
  status: 'fulfilled',
};

export const incrementAsync = createAsyncThunk(
  'counter/asyncTest',
  async (amount: number) => {
    const response = await asyncTest();
    if (response === 'fulfilled') {
      return 2 * amount;
    } else {
      return amount;
    }
  },
);

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value++;
    },
    decrement: state => {
      state.value--;
    },
    // reset
  },
  extraReducers: builder => {
    builder
      .addCase(incrementAsync.pending, state => {
        state.status = 'pending';
      })
      .addCase(
        incrementAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.status = 'fulfilled';
          state.value += action.payload;
        },
      )
      .addCase(incrementAsync.rejected, state => {
        state.status = 'rejected';
      });
  },
});

export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;

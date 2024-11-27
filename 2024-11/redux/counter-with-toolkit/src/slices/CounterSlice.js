import { createSlice } from '@reduxjs/toolkit';

const CounterSlice = createSlice({
    name: 'counter',
    initialState: { count: 0 },
    reducers: {
        increment: (state) => { state.count += 1 },
        decrement: (state) => { state.count -= 1  },
        reset: (state) => { state.count = 0 },
        set: (state, action) => { state.count = action.payload }
    }
});

export const { increment, decrement, reset, set } = CounterSlice.actions;
export default CounterSlice.reducer;
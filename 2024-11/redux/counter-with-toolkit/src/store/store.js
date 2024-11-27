import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slices/CounterSlice.js';

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

export default store;
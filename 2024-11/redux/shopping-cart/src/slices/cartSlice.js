import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: { items: [
        { id: 1234, name: "bottle", price:5.90, quantity:1 }
    ], totalQuantity: 0, totalPrice: 0},
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
            state.totalQuantity++;
            state.totalPrice += action.payload.price;
        },
        removeItem: (state, action) => {
            //1. find item index
            const itemIndex = state.items.findIndex((item) => item.id === action.payload);

            //2. filter index
            const item = state.items[itemIndex]
        }
    }
})
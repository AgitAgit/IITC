import { createSlice } from '@reduxjs/toolkit';

type task = {
    title:string
    description:string
    dueDate:Date
    priority: "Low" | "Medium" | "High"
    status: "Pending" | "In Progress" | "Completed"
}

const taskSlice = createSlice({
    name: 'task',
    initialState: { tasks:[] },
    reducers: {
        // increment: (state) => { state.count += 1 },
        // set: (state, action) => { state.count = action.payload }
        add:() => {},//add a task
        get:() => {},//get all tasks
        update:() => {},//update a task
        delete:() => {},
    }
});

export const { increment, decrement, reset, set } = CounterSlice.actions;
export default taskSlice.reducer;
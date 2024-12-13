import { createSlice } from '@reduxjs/toolkit';

export type Task = {
    title:string
    description:string
    dueDate:Date
    priority: "Low" | "Medium" | "High"
    status: "Pending" | "In Progress" | "Completed"
}

//should I do something like that? can I force the addTask reducer
//to accept only actions with payload of type Task using that?
// type AddTaskAction = {
//     payload: Task
//     type:string
// }

const taskSlice = createSlice({
    name: 'task',
    initialState: { tasks:[] },
    reducers: {
        // increment: (state) => { state.count += 1 },
        // set: (state, action) => { state.count = action.payload }
        addTask:(state, action) => {
            console.log(`addTask reducer called.\nstate:${state}\naction:${action}`);
        },
        getTask:(state, action) => {
            console.log("getTask reducer called");
        },
        updateTask:(state, action) => {
            console.log("updateTask reducer called");
        },
        deleteTask:(state, action) => {
            console.log("deleteTask reducer called");
        },
    }
});

export const { addTask, getTask, updateTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
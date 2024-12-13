import { createSlice } from '@reduxjs/toolkit';

export type Task = {
    id:string
    title:string
    description:string
    dueDate:string
    priority: "Low" | "Medium" | "High"
    status: "Pending" | "In Progress" | "Completed"
}

const defaultTasks:Task[] = [
    {id:"1", title:"task1", description:"task1 description", dueDate: Date(), priority:"Low",status:"In Progress"},
    {id:"2", title:"task2", description:"task2 description", dueDate: Date(), priority:"High",status:"Completed"},
    {id:"3", title:"task3", description:"task3 description", dueDate: Date(), priority:"Medium",status:"Pending"}
]
//should I do something like that? can I force the addTask reducer
//to accept only actions with payload of type Task using that?
// type AddTaskAction = {
//     payload: Task
//     type:string
// }

const taskSlice = createSlice({
    name: 'task',
    initialState: { tasks:[...defaultTasks], test:"3000duck" },
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
            console.log("state.tasks", state.tasks);
            console.log("state.tasks", state.test);
        },
    }
});

export const { addTask, getTask, updateTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
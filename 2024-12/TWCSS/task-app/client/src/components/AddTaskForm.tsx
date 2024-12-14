import React from 'react'
import { type Task, addTask } from '../state/taskSlice.ts';
import { useSelector, useDispatch } from 'react-redux'

function AddTaskForm() {
    const tasks = useSelector(state => state.task.tasks);
    const dispatch = useDispatch();

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const formDataObject = Object.fromEntries(formData.entries());
        const { fId, fTitle, fDescription, fDueDate, fPriority, fStatus } = formDataObject;
        try {
            const id = fId as string;
            const title = fTitle as string;
            const description = fDescription as string;
            const dueDate = fDueDate as string;
            const priority = fPriority as string;
            const status = fStatus as string;
            const task = { id, title, description, dueDate, priority, status };
            console.log("task:", task);
            dispatch(addTask(task));
        } catch (error) {
            console.log(error);
        }
        console.log("formDataObject:", formDataObject);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>id:</label>
            <input name='fId'></input>
            <br></br>
            <label htmlFor="">title:</label>
            <input name='fTitle'></input>
            <br></br>
            <label htmlFor="">description:</label>
            <input name='fDescription'></input>
            <br></br>
            <label htmlFor="">due date:</label>
            <input name='fDueDate' type="date"></input>
            <br></br>
            <label>Priority:</label>
            <select name='fPriority'>
                <option>{"Low"}</option>
                <option>{"Medium"}</option>
                <option>{"High"}</option>
            </select>
            <br></br>
            <label>Status:</label>
            <select name='fStatus'>
                <option>{"Pending"}</option>
                <option>{"In Progress"}</option>
                <option>{"Complete"}</option>
            </select>
            <br></br>
            <button className='bg-green-400 rounded p-1'>Add</button>
        </form>
    )
}

export default AddTaskForm
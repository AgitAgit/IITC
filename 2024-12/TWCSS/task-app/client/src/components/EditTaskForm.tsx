import React from 'react'
import { type Task, addTask, updateTask } from '../state/taskSlice.ts';
import { useSelector, useDispatch } from 'react-redux'

function EditTaskForm({ id }) {
    const tasks:Task[] = useSelector(state => state.task.tasks);
    const dispatch = useDispatch();
    const originalTask = tasks.find(task => task.id === id)
    function formatDate() {
        if(!originalTask) return;
        const date = new Date(originalTask.dueDate);
      
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString();
      
        const formattedDate = `${year}-${month}-${day}`;
        // console.log("formatted date:",formattedDate);
        return formattedDate;
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const formDataObject = Object.fromEntries(formData.entries());
        const { fTitle, fDescription, fDueDate, fPriority, fStatus } = formDataObject;
        try {
            const title = fTitle as string;
            const description = fDescription as string;
            const dueDate = fDueDate as string;
            const priority = fPriority as string;
            const status = fStatus as string;
            const task = { id, title, description, dueDate, priority, status };
            console.log("edit task form says: task:", task);
            dispatch(updateTask(task));
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
        { originalTask && <form onSubmit={handleSubmit}>
            <label>id:{id}</label>
            <br></br>
            <label htmlFor="">due date:</label>
            <input name='fDueDate' type="date" defaultValue={formatDate()}></input>
            <br></br>
            <label htmlFor="">title:</label>
            <input name='fTitle' defaultValue={originalTask.title}></input>
            <br></br>
            <label htmlFor="">description:</label>
            <input name='fDescription' defaultValue={originalTask.description}></input>
            <br></br>
            <label>Priority:</label>
            <select name='fPriority' defaultValue={originalTask.priority}>
                <option>{"Low"}</option>
                <option>{"Medium"}</option>
                <option>{"High"}</option>
            </select>
            <br></br>
            <label>Status:</label>
            <select name='fStatus' defaultValue={originalTask.status}>
                <option>{"Pending"}</option>
                <option>{"In Progress"}</option>
                <option>{"Complete"}</option>
            </select>
            <br></br>
            <button type='submit'>Edit</button>
            {/* <button onClick={(event) => handleCancel(event)}>Cancel</button> */}
        </form>}
        </>
    )
}

export default EditTaskForm
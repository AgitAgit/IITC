import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, updateTask, type Task } from '../state/taskSlice.ts';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import EditTaskForm from './EditTaskForm.tsx';

const extraDetails = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, sapiente perspiciatis molestias in odit repellendus blanditiis cupiditate odio! Quae iste esse laborum quibusdam molestias quas rem autem fugit qui dignissimos.";

function TaskDetails({ id }) {
    const task = useSelector(state => state.task.tasks.find(task => task.id === id));
    const dispatch = useDispatch();
    return (
        <div>
            <p>{task.title}</p>
            <p>{`Description: ${task.description}`}</p>
            <p>{`Due Date: ${task.dueDate.slice(0, 15)}`}</p>
            <label>Priority: {task.priority}</label>
            <br></br>
            <label>Status: {task.status}</label>
            <br></br>
            <label>Extra details:</label>
            <p>{extraDetails}</p>
            <div>
                <button className='bg-red-400 rounded p-1' onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                <Dialog>
                    <DialogTrigger className='bg-yellow-400 rounded p-1'>Edit</DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle></DialogTitle>
                            <DialogDescription></DialogDescription>
                        </DialogHeader>
                        <EditTaskForm id={task.id} />
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

export default TaskDetails;
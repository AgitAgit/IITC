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

function TaskComponent({ id }) {
  const task = useSelector(state => state.task.tasks.find(task => task.id === id));
  const dispatch = useDispatch();
  return (
    <div>
      <hr />
      <p>{task.title}</p>
      <p>{`Description: ${task.description}`}</p>
      <p>{`Due Date: ${task.dueDate.slice(0, 15)}`}</p>
      <label>Priority: {task.priority}</label>
      <br></br>
      <label>Status: {task.status}</label>
      <div>
          <button className='bg-red-400 rounded p-1' onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
      <Dialog>
        <DialogTrigger className='bg-yellow-400 rounded p-1'>Edit</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <EditTaskForm id={task.id}/>
        </DialogContent>
      </Dialog>
      </div>
      <hr />
    </div>
  )
}

export default TaskComponent;
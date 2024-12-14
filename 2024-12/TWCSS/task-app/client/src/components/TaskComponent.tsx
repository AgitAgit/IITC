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

//TODO HERE
//the select elements don't return to default value on re render.
//that's their normal behaviour. need to do something so the
//select value will be updated. Perhaps use value and onchange
//instead of defaultvalue.
function TaskComponent({ id }) {
  const task = useSelector(state => state.task.tasks.find(task => task.id === id));
  const dispatch = useDispatch();
  //should add background color by priority.
  return (
    <div>
      <hr />
      <p>{task.title}</p>
      <p>{`Description: ${task.description}`}</p>
      <p>{`Due Date: ${task.dueDate.slice(0, 15)}`}</p>
      <label>Priority: </label>
      <select defaultValue={task.priority}>
        <option>{"Low"}</option>
        <option>{"Medium"}</option>
        <option>{"High"}</option>
      </select>
      <br></br>
      <label>Status: </label>
      <select defaultValue={task.status}>
        <option>{"Pending"}</option>
        <option>{"In Progress"}</option>
        <option>{"Complete"}</option>
      </select>
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
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, type Task } from '../state/taskSlice.ts';

function TaskList() {
    const tasks: Task[] = useSelector(state => state.task.tasks);
    const dispatch = useDispatch();

    return (
        <div>
            {tasks.map(task =>
                <div key={task.id}>
                    <hr />
                    <p>{task.title}</p>
                    <p>{task.description}</p>
                    <p>{`due date:${task.dueDate}`}</p>
                    <label>Priority:</label>
                    <select defaultValue={task.priority}>
                        <option>{"Low"}</option>
                        <option>{"Medium"}</option>
                        <option>{"High"}</option>
                    </select>
                    <label>Status:</label>
                    <select defaultValue={task.status}>
                        <option>{"Pending"}</option>
                        <option>{"In Progress"}</option>
                        <option>{"Complete"}</option>
                    </select>
                    <button className='bg-red-500 rounded p-1' onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                    <hr />
                </div>
            )}
        </div>
    )
}

export default TaskList
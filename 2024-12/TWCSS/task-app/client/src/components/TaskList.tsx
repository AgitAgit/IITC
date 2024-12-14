import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, type Task } from '../state/taskSlice.ts';
import TaskComponent from './TaskComponent.tsx';
function TaskList() {
    const tasks: Task[] = useSelector(state => state.task.tasks);
    // const dispatch = useDispatch();

    return (
        <div>
            {tasks.map(task =>
                <TaskComponent key={ task.id } id={ task.id } />
            )}
        </div>
    )
}

export default TaskList
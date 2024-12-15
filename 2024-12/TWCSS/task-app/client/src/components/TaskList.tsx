import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, type Task } from '../state/taskSlice.ts';
import TaskComponent from './TaskComponent.tsx';
function TaskList() {
    const tasks: Task[] = useSelector(state => state.task.tasks);
    const [ filter, setFilter ] = useState({status:"All", priority:"All"});

    const filteredTasks = tasks.filter(task => {
        let statusFilter = true;
        let priorityFilter = true;
        if(filter.status !== "All"){
            statusFilter = task.status === filter.status;
        }
        if(filter.priority !== "All"){
            priorityFilter = task.priority === filter.priority;
        }
        if(statusFilter && priorityFilter) return task;
    });

    function updateFilter(event:React.ChangeEvent<HTMLSelectElement>, filterType:"status"|"priority"){
        const newFilter = {...filter}
        newFilter[filterType] = event.target.value;
        console.log("newFilter:", newFilter);
        setFilter(newFilter);
    }

    return (
        <div>
            <label>Filter by Status:</label>
            <select onChange={(event) => updateFilter(event, "status")}>
                <option>All</option>
                <option>Pending</option>
                <option>In Progress</option>
                <option>Complete</option>
            </select>
            <br></br>
            <label>Filter by Priority:</label>
            <select onChange={(event) => updateFilter(event, "priority")}>
                <option>All</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
            {filteredTasks.map(task =>
                <TaskComponent key={ task.id } id={ task.id } />
            )}
        </div>
    )
}

export default TaskList
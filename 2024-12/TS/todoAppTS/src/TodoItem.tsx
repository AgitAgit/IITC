import { useState } from 'react';

import { Todo } from './App.tsx';

type TodoItemProps = {
    todo:Todo;
    handleDelete: (id: string) => void;
    setDone: (id:string, value:boolean) => void;
}

export default function TodoItem( { todo, handleDelete, setDone }:TodoItemProps ) {
    return (
        <>
            <hr></hr>
            <input type='checkbox' defaultChecked={todo.completed} onChange={() => {console.log("clicked todo id:",todo.id); setDone(todo.id, !(todo.completed))}}></input>
            <p> {todo.text} </p>
            {todo.description && <p>Description:{todo.description}</p>}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            <hr></hr>
        </>
    )
}
import { useState } from 'react'
import './App.css'

import TodoItem from './TodoItem.tsx';

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
  description?: string;
}

//suppose I wanted all objects of type Todo to have a toggleCompleted function with a certain behavior,
//how could I do that? Class like in C#?
const defaultTodos:Todo[] = [
  { id: "1", text: "do laundry", completed: true },
  { id: "2", text: "load dishwasher", description:"use detergent tablet", completed: true },
  { id: "3", text: "unload dishwasher", completed: false }
]

function App() {
  const [todos, setTodos] = useState(defaultTodos);

  function handleDelete(id:string) {
    setTodos( todos => todos.filter((todo) => todo.id !== id))
  }

  function setDone(id:string, value:boolean){
    // console.log("id:",id);
    console.log(todos);
    const indexToEdit = todos.findIndex((todo) => {return todo.id === id});
    console.log("index to edit:", indexToEdit);
    if(indexToEdit === -1) return;
    const updatedTodos = [...todos];
    console.log(updatedTodos);
    updatedTodos[indexToEdit].completed = value;
    setTodos(updatedTodos);
  }

  function handleSubmit(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const formDataObject = Object.fromEntries(formData.entries());
    console.log(formDataObject);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        id:
        <input name='id'></input>
        text:
        <input name='text'></input>
        description:
        <input name='description'></input>
        done:
        <input name='done' type="checkbox"></input>
        <button>Add</button>
      </form>
      {todos.map((todo) => <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete} setDone={setDone}/>)}
    </>
  )
}

export default App

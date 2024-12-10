import { useState } from 'react'
import './App.css'

import TodoItem from './TodoItem.tsx';

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
  description?: string;
}

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

  return (
    <>
      <form>
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
      {todos.map((todo) => <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete}/>)}
    </>
  )
}

export default App

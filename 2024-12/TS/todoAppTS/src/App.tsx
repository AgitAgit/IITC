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
  const [currentTodos, setCurrentTodos] = useState("todos");
  const activeTodos = todos.filter(todo => todo.completed === false);
  const doneTodos = todos.filter(todo => todo.completed === true);//all todos which are not in active todos

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

  function addTodo(id:string, text:string, completed:boolean, description?:string){
    setTodos([...todos, {id, text, completed, description}]);
  }

  function handleSubmit(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    // const formDataObject = Object.fromEntries(formData.entries());
    const { id, text, description, completed } = Object.fromEntries(formData.entries());
    const completedBoolean = completed as string === "on";
    const desc = description as string;
    addTodo(id as string, text as string, completedBoolean, desc !== '' ? desc:undefined)
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
        <input name='completed' type="checkbox"></input>
        <button>Add</button>
      </form>

      <div>
        <button onClick={() => setCurrentTodos("todos")}>todos</button>
        <button onClick={() => setCurrentTodos("active")}>active todos</button>
        <button onClick={() => setCurrentTodos("done")}>done todos</button>
      </div>
      
      {currentTodos === "todos" && todos.map((todo) => <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete} setDone={setDone}/>)}
      {currentTodos === "active" && activeTodos.map((todo) => <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete} setDone={setDone}/>)}
      {currentTodos === "done" && doneTodos.map((todo) => <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete} setDone={setDone}/>)}
    </>
  )
}

export default App

import './App.css'

import { Provider } from "react-redux";
import { store } from './store';
import TodoList from './components/TodoList/TodoList.jsx';

function App() {

  return <> 
    <Provider store={store}>
      <h1>Redux To-Do List</h1>
      <TodoList />
    </Provider>
  </>
}

export default App

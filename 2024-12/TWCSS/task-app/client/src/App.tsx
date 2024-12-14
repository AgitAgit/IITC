import './App.css'
import { Provider } from 'react-redux';
import store from './state/store.ts';

import TaskList from './components/TaskList.tsx';
import AddTaskForm from './components/AddTaskForm.tsx';

function App() {
  return (
    <>
      <Provider store={ store }>
        <AddTaskForm />
        <TaskList />
      </Provider>
    </>
  )
}

export default App

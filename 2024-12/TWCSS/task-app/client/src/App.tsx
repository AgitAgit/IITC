import './App.css'
import { Provider } from 'react-redux';
import store from './state/store.ts';

import TaskList from './components/TaskList.tsx';

function App() {
  return (
    <>
      <Provider store={ store }>
        <TaskList />
      </Provider>
    </>
  )
}

export default App

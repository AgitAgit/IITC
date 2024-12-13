import './App.css'
import { Provider } from 'react-redux';
import store from './state/store.ts';
function App() {

  return (
    <>
      <Provider store={ store }>
      </Provider>
    </>
  )
}

export default App

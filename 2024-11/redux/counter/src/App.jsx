import './App.css'
import { Provider } from 'react-redux';

import store from './store';
import Counter from './components/Counter/Counter.jsx';

function App() {

  return (
    <>
      <Provider store={store}>
        <Counter />
      </Provider>
    </>
  )
}

export default App

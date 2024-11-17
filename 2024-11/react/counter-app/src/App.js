import './App.css';

let currentCount = 0;

function App() {
  return (
    <div className="App">
      <h1>Counter App</h1>
      <div className="counter-container">
        <button>-</button>
        <p>Count</p>
        <button>+</button>
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick = () => {
    const request = fetch('/ping');
    request
    .then(response => response.json())
    .then(data => console.log('data: ', data))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleClick}>Click ME</button>
      </header>
    </div>
  );
}

export default App;

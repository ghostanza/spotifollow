import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick = () => {
    const request = fetch('/ping');
    request
    .then(response => response.json())
    .then(data => console.log('data: ', data))
  }
  function buildLoginLink(){
    const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const redirect_uri = process.env.REACT_APP_REDIRECT_URI;
    const scope = encodeURIComponent('user-read-email user-top-read playlist-modify-public user-read-currently-playing user-read-recently-played');
    const response_type = 'code';
    const auth_link = 'https://accounts.spotify.com/authorize'
    return `${auth_link}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&response_type=${response_type}`;
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
        <a href={buildLoginLink()}>LOGIN</a>
        <p>{process.env.REACT_APP_SPOTIFY_CLIENT_ID}</p>
        <p>{process.env.REACT_APP_TEST}</p>
        <p>{process.env.REACT_APP_GO}</p>
      </header>
    </div>
  );
}

export default App;

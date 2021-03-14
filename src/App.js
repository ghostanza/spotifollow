import './App.css';

function App() {
  function buildLoginLink(){
    const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const redirect_uri = process.env.REACT_APP_REDIRECT_URI;
    const scope = encodeURIComponent('user-read-email user-top-read playlist-modify-public user-read-currently-playing user-read-recently-played');
    const response_type = 'code';
    const auth_link = 'https://accounts.spotify.com/authorize'
    return `${auth_link}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&response_type=${response_type}`;
  }
  return (
    <div>
      <a href={buildLoginLink()}>CLICK HERE TO LOG IN</a>
    </div>
  );
}

export default App;

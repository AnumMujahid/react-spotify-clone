import './App.css';
import { useEffect, useState } from 'react';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useStateValue } from './StateProvider';

const spotify = new SpotifyWebApi();
function App() {
  const [{ user, token }, dispatch] = useStateValue();
  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    window.location.hash = '';
    if (_token) {
      spotify.setAccessToken(_token);
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user,
        });
      });
    }
  }, []);
  return (
    <div className="app">
      {!token && <Login />}
      {token && <Player spotify={spotify} />}
    </div>
  );
}

export default App;

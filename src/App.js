import './App.css';
import { useEffect, useState } from 'react';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useStateValue } from './StateProvider';

const spotify = new SpotifyWebApi();
function App() {
  const [playlistId, setPlaylistId] = useState('');
  const [{ token }, dispatch] = useStateValue();
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
      spotify.getUserPlaylists().then((playlists) => {
        setPlaylistId(playlists.items[0].id);
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists,
        });
      });
      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: 'SET_TOP_ARTISTS',
          top_artists: response,
        })
      );
    }
  }, [token, dispatch]);

  useEffect(() => {
    if (token && playlistId) {
      spotify.getPlaylist(playlistId).then((playlist) => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: playlist,
        });
      });
    }
  }, [token, playlistId, dispatch]);
  return (
    <div className="app">
      {!token && <Login />}
      {token && <Player spotify={spotify} playlist={playlistId} />}
    </div>
  );
}

export default App;

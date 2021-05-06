import './App.css';
import { useEffect, useState } from 'react';
import Login from './Login';
import { getTokenFromUrl } from './spotify';

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    window.location.hash = '';
    if (_token) {
      setToken(_token);
    }
  });
  return <div className="app">{token ? <h1>Logged In</h1> : <Login />}</div>;
}

export default App;

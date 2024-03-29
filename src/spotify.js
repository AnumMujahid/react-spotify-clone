import { clientId } from './config.js';

export const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectURL = 'https://spotify-clone-by-anum.web.app/'; //enter your redirect uri
const client = clientId; //enter your client id here

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      var parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginURL = `${authEndpoint}?client_id=${client}&redirect_uri=${redirectURL}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`;

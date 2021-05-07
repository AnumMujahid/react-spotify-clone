export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  items: null,
  token:
    'BQAT24mOED0BoHKZuNkA2sruD-JpQG2SngrrzXgYXWFI2XWUxH3rkqrbnVVxbmVINrgtaAPDleR4DbfLKe3S88px2UJCQA7mHwagQ2KP8mAEXKNugggKicI8ozO2UEPx8M5mVAAP8I1YoJZ9TXcjQuBU8v7Jyg-Qnkt82oWXh2nA81Ve',
  // token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.user };
    case 'SET_TOKEN':
      return { ...state, token: action.token };
    case 'SET_PLAYLISTS':
      return { ...state, playlists: action.playlists };
    default:
      return state;
  }
};

export default reducer;

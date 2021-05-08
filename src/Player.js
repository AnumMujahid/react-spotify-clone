import React from 'react';
import './Player.css';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';

const Player = ({ spotify, playlist }) => {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} playlist={playlist} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
};

export default Player;

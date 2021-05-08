import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import { useStateValue } from './StateProvider';

const Header = () => {
  const [{ user }, dispatch] = useStateValue();
  const logout = () => {
    dispatch({
      type: 'SET_TOKEN',
      token: null,
    });
  };
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for Artists, Songs or Podcasts"
        />
      </div>
      <div className="header__right" onClick={logout}>
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;

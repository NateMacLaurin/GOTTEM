import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">NAV-Img-Placeholder</h2>
      </Link>
      <div>
        <Link className="navLink" to={loginLinkData.path}>
          {loginLinkData.text}
        </Link>

        {user.id && (
          <>
            <Link className="navLink" to="/info">
              Info Page
            </Link>
            <Link className="navLink" to="/inventory">
              Inventory Page
            </Link>
            <Link className="navLink" to="/item">
              Item Page
            </Link>
            <LogOutButton className="navLink" />
          </>
        )}

        {user.id && (
          <Link className="navLink" to="/admin">
            Admin Page
          </Link>
        )}

        <Link className="navLink" to="/about">
          About Page
        </Link>
      </div>
    </div>
  );
}

export default Nav;

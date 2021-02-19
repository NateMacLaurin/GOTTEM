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
        <Link className="navLink" to="/about">
          About
        </Link>
        
        {user.id && (
          <>
            <Link className="navLink" to="/inventory">
              Inventory
            </Link>
            <Link className="navLink" to="/item">
              Item Details
            </Link>
            <Link className="navLink" to="/admin">
              Admin
            </Link> 
            <LogOutButton className="navLink" />
          </>
        )}

      </div>
    </div>
  );
}

export default Nav;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext.jsx';
import './HamburgerMenu.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, user, logout } = useAuth();
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className={`sidebar ${isOpen ? 'show' : ''}`}>
        <ul>
          <li className="menu-item"><Link to="/">Home</Link></li>
        </ul>
        {isLoggedIn && user ? (
          <>
            <div className="sidebar-header">
              <div className="user-photo">User Photo</div>
              <div className="user-name">user.name</div>
            </div>
            <ul>
              <li className="menu-item"><Link to="/settings">Settings</Link></li>
              <li className="menu-item">Exit Study</li>
              <li className="menu-item" onClick={logout}>Logout</li>
            </ul>
          </>
        ) : (
          <ul>
            {/* Consider adding a generic header if needed */}
            <li className="menu-item"><Link to="/login">Login</Link></li>
            <li className="menu-item"><Link to="/create-account">Register</Link></li>
          </ul>
        )}
          
        
      </div>
    </>
  );
};

export default HamburgerMenu;

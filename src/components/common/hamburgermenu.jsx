import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HamburgerMenu.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className={`sidebar ${isOpen ? 'show' : ''}`}>
          <div className="sidebar-header">
            <div className="user-photo">User Photo</div>
            <div className="user-name">John Smith</div>
          </div>
        <ul>
          <li className="menu-item"><Link to="/">Home</Link></li>
          <li className="menu-item"><Link to="/settings">Settings</Link></li>
          <li className="menu-item">Exit Study</li>
        </ul>
      </div>
    </>
  );
};

export default HamburgerMenu;

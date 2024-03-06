import React, { useState } from 'react';
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
        <div className="menu-item">Home</div>
        <div className="menu-item">Settings</div>
        <div className="menu-item">Exit Study</div>
      </div>
    </>
  );
};

export default HamburgerMenu;

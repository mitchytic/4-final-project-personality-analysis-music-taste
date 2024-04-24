import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext.jsx';
import './HamburgerMenu.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false); 
  
  const toggleMenu = () => {
      setIsOpen(!isOpen);
  };

  const handleLogout = () => {
      localStorage.removeItem('token');
  }
  return (
      <>
          <button onClick={toggleMenu} className={`menu-button ${isOpen ? 'open' : ''}`}>☰</button> {/* Menu open button */}
          <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
              <button onClick={toggleMenu} className="close-menu">✕</button> {/* Close button */}
              <h2>PAMT</h2>
              <nav>
                  <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                    <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
                  </ul>
              </nav>
          </div>
      </>
  );
};

export default HamburgerMenu;

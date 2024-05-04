import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext.jsx';
import './HamburgerMenu.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const { user, logout } = useAuth();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
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
                    {user ? (
                      <>
                        <li><h3>Welcome, {user.username}</h3></li> {/* Display the username */}
                        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                        <li><Link to="/settings" onClick={toggleMenu}>Settings</Link></li>
                        <li><Link to="/" onClick={() => { handleLogout(); toggleMenu(); }}>Logout</Link></li>
                      </>
                    ) : (
                      <>
                        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                        <li><Link to="/login" onClick={toggleMenu}>Login</Link></li>
                      </>
                    )}
                  </ul>
              </nav>
          </div>
      </>
  );
};

export default HamburgerMenu;

import React from 'react';
import './AccountSettings.css'; 
import { Link } from 'react-router-dom';

const AccountSettings = ({ onNavigateToTerms }) => {

  return (
    <div className="account-settings">
      <div className="hamburger-menu">
        <button className="menu-icon">☰</button>
      </div>
      <ul className='settings-list'>
        <li><Link to="/change-password">Change Password</Link></li>
        <li><Link to="/support"></Link>Support</li>
        <li><Link to="/privacy-policy"></Link>Privacy Policy</li>
        <li><Link to="/about"></Link>About</li>
        <li><Link to="/tnc"></Link>Terms & Conditions</li>
      </ul>
    </div>
  );
};

export default AccountSettings;

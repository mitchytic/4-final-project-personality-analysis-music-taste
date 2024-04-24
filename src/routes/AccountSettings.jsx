import React from 'react';
import './AccountSettings.css'; 
import { Link } from 'react-router-dom';
import HamburgerMenu from "../components/common/hamburgermenu";
import Footer from '../components/common/Footer'; 

const AccountSettings = () => {

  return (
  <div className="account-settings">
    <HamburgerMenu />
    <div className="welcome-message">
      <h1>Welcome to The Music Study</h1>
      <p>We want to get an idea of your music taste!</p>
    </div>

    <div className='settings-list'>
      <li><Link to="/change-password">Change Password</Link></li>
      <li><Link to="/privacy-policy">Privacy Policy</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/tnc">Terms & Conditions</Link></li>
    </div>
    <Footer />
  </div>
  );
};

export default AccountSettings;

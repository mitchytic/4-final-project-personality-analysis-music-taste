import React from 'react';
import './AccountSettings.css'; 
import { Link } from 'react-router-dom';
import HamburgerMenu from "../components/common/hamburgermenu";

const AccountSettings = () => {

  return (
    <>
      <HamburgerMenu />
      <div className="account-settings">
        <ul className='settings-list'>
          <li><Link to="/change-password">Change Password</Link></li>
          <li><Link to="/support">Support</Link></li>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/tnc">Terms & Conditions</Link></li>
        </ul>
      </div>
    </>
    
  );
};

export default AccountSettings;

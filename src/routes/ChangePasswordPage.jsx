
import React from 'react';
import './ChangePasswordPage.css';
import HamburgerMenu from '../components/common/hamburgermenu';

const ChangePasswordPage = () => {
  return (
    <>
      <HamburgerMenu />
      <div className="change-password-page">

        <div className="change-form">
          <input type="password" placeholder="Enter Old Password" />
          <input type="password" placeholder="Enter New Password" />
          <button type="submit">Submit</button>
        </div>
      </div>
    </>
    
  );
};

export default ChangePasswordPage;

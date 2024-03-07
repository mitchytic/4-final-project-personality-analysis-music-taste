
import React from 'react';
import './ChangePasswordPage.css';

const ChangePasswordPage = () => {
  return (
    <div className="change-password-page">
      <div className="hamburger-menu">
        <button className="menu-icon">☰</button>
      </div>

      <div className="change-form">
        <input type="password" placeholder="Enter Old Password" />
        <input type="password" placeholder="Enter New Password" />
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

export default ChangePasswordPage;

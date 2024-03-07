import React from 'react';
import './AccountSettings.css'; 

const AccountSettings = ({ onNavigateToTerms }) => {
  const handleChangePassword = () => {
    onNavigateToPassword();
  }

  const handleSupport = () => {
    onNavigateToSupport();
  };

  const handlePrivacyPolicy = () => {
    onNavigateToPrivacyPolicy();
  };

  const handleAbout = () => {
    onNavigateToAbout();
  };

  const handleTermsConditions = () => {
    onNavigateToTerms();
  };

  return (
    <div className="account-settings">
      <div className="hamburger-menu">
        <button className="menu-icon">☰</button>
      </div>
      <div className="settings-list">
        <div className="settings-item" onClick={handleChangePassword}>Change Password</div>
        <div className="settings-item" onClick={handleSupport}>Support</div>
        <div className="settings-item" onClick={handlePrivacyPolicy}>Privacy Policy</div>
        <div className="settings-item" onClick={handleAbout}>About</div>
        <div className="settings-item" onClick={handleTermsConditions}>Terms & Conditions</div>
      </div>
    </div>
  );
};

export default AccountSettings;

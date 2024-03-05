import React from 'react';
import './AccountSettings.css'; 

const AccountSettings = () => {
  const handleSupport = () => {
    console.log("Support clicked");
  };

  const handlePrivacyPolicy = () => {
    console.log("Privacy Policy clicked");
  };

  const handleAbout = () => {
    console.log("About clicked");
  };

  const handleTermsConditions = () => {
    console.log("Terms & Conditions clicked");
  };

  return (
    <div className="account-settings">
      <div className="menu-icon">
        <button onClick={() => window.history.back()}>☰</button>
      </div>
      <div className="settings-list">
        <div className="settings-item" onClick={handleSupport}>Support</div>
        <div className="settings-item" onClick={handlePrivacyPolicy}>Privacy Policy</div>
        <div className="settings-item" onClick={handleAbout}>About</div>
        <div className="settings-item" onClick={handleTermsConditions}>Terms & Conditions</div>
      </div>
    </div>
  );
};

export default AccountSettings;

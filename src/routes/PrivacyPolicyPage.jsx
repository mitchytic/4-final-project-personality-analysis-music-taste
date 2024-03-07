
import React from 'react';
import './PrivacyPolicyPage.css';

const PrivacyPolicyPage = () => {
  return (
    <div className="privacy-policy-page">
      <div className="hamburger-menu">
        <button className="menu-icon">☰</button>
      </div>

      <div className="privacy-content">
        <h1>Privacy Policy</h1>
        {/* The actual content of the privacy policy should be inserted here */}
        <p>
          [Privacy policy content]
        </p>
      </div>

      <button className="back-button">Back</button>
    </div>
  );
};

export default PrivacyPolicyPage;

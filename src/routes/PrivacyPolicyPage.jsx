
import React from 'react';
import './PrivacyPolicyPage.css';
import HamburgerMenu from '../components/common/hamburgermenu';
import { useNavigate } from 'react-router-dom'; 

const PrivacyPolicyPage = () => {
  const navigate = useNavigate(); 

  const goBackToAccountSettings = () => {
    navigate('/settings');  
  };

  return (
    <div className="privacy-policy-page">
      <HamburgerMenu />
      <div className="privacy-content">
        <h1>Privacy Policy</h1>
        {/* The actual content of the privacy policy should be inserted here */}
        <p>
          [Privacy policy content]
        </p>
      </div>

      <button className="back-button" onClick={goBackToAccountSettings}>
        Back
      </button>
    </div>
  );
};

export default PrivacyPolicyPage;

import './PrivacyPolicyPage.css';
import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import HamburgerMenu from '../components/common/hamburgermenu';
import Footer from '../components/common/Footer'; ;


const PrivacyPolicyPage = () => {
  const navigate = useNavigate(); 

  const goBackToAccountSettings = () => {
    navigate('/settings');  
  };

  return (
    <div className="privacy-policy-page">
      <HamburgerMenu />
      <div className="welcome-message">
        <h1>Welcome to The Music Study</h1>
        <p>We want to get an idea of your music taste!</p>
      </div>

      <div className="privacy-content">
        <h2>Privacy Policy</h2>
        {/* The actual content of the privacy policy should be inserted here */}
        <p> Privacy Policy for Personality Insights from Music <br />
          Effective Date: [04/30/2024] <br />
          Welcome to the Personality Insights from Music app ("App"), owned and operated by [Company Name] ("we", "us", or "our"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our App. Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the App. <br />
          Contact Us <br />
          If you have any questions about this Privacy Policy, please contact us at: [questions@pabmt.com]. <br />
        </p>
      </div>

      <button className="back-button" onClick={goBackToAccountSettings}>
        Back
      </button>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;

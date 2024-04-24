import './TermsAndConditionsPage.css';
import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import HamburgerMenu from '../components/common/hamburgermenu';
import Footer from '../components/common/Footer'; ;

const TermsAndConditionsPage = ({ onBackClick }) => {
  const navigate = useNavigate(); 

  const goBackToAccountSettings = () => {
    navigate('/settings');  
  };

  return (
    <div className="terms-conditions-page">
      <HamburgerMenu />
      <div className="welcome-message">
        <h1>Welcome to The Music Study</h1>
        <p>We want to get an idea of your music taste!</p>
      </div>

      <div className="terms-conditions-content">
        <h2>Terms & Conditions</h2>
        {/* The actual content of the terms-conditions should be inserted here */}
        <p> Welcome to Personality Analysis based on Music Taste, a service provided by [Company Name] ("we", "us", "our"). These Terms and Conditions ("Terms") govern your use of our mobile application and any related services (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Service. <br />
        </p>
      </div>

      <button className="back-button" onClick={goBackToAccountSettings}>
        Back
      </button>
      <Footer />
    </div>

  );
};

export default TermsAndConditionsPage;

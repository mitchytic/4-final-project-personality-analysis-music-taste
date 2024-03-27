import React from 'react';
import './TermsAndConditionsPage.css';
import HamburgerMenu from '../components/common/hamburgermenu';
import { useNavigate } from 'react-router-dom'; 

const TermsAndConditionsPage = ({ onBackClick }) => {
  const navigate = useNavigate(); 

  const goBackToAccountSettings = () => {
    navigate('/settings');  
  };

  return (
    <div className="terms-conditions-page">
      <HamburgerMenu />
      <header className="header">
        <h1>Terms and Conditions</h1>
      </header>
      <div className="terms-content">
        {"dfasfasfasfdasdfsafdsadfasd"}
      </div>
      <button className="back-button" onClick={goBackToAccountSettings}>Back</button>
    </div>
  );
};

export default TermsAndConditionsPage;

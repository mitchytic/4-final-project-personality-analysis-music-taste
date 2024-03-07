import React from 'react';
import './TermsAndConditionsPage.css';
import HamburgerMenu from '../components/common/hamburgermenu';

const TermsAndConditionsPage = ({ onBackClick }) => {
  return (
    <div className="terms-conditions-page">
      <HamburgerMenu />
      <header className="header">
        <h1>Terms and Conditions</h1>
      </header>
      <div className="terms-content">
        {"dfasfasfasfdasdfsafdsadfasd"}
      </div>
      <button className="back-button" onClick={onBackClick}>Back</button>
    </div>
  );
};

export default TermsAndConditionsPage;

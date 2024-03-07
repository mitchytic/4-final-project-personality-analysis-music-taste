import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import './TermsAndConditionsPage.css';

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

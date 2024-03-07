import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import './TermsAndConditionsPage.css';

const AboutPage = ({ onBackClick }) => {
  return (
    <div className="terms-conditions-page">
      <HamburgerMenu />
      <p>We are a company that sells things!!!</p>
    </div>
  );
};

export default AboutPage;

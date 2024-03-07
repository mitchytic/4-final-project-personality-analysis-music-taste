import React from 'react';
import './TermsAndConditionsPage.css';
import HamburgerMenu from '../components/common/hamburgermenu';

const AboutPage = ({ onBackClick }) => {
  return (
    <div className="terms-conditions-page">
      <HamburgerMenu />
      <p>We are a company that sells things!!!</p>
    </div>
  );
};

export default AboutPage;

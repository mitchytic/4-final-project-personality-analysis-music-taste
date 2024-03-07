import React from 'react';
import './AboutPage.css';
import HamburgerMenu from '../components/common/hamburgermenu';

const AboutPage = () => {
  return (
    <>
      <HamburgerMenu />
      <div className="about-page">
        <p>We are a company that sells things!!!</p>
      </div>
    </>
    
  );
};

export default AboutPage;

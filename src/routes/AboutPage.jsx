import React from 'react';
import './AboutPage.css';
import HamburgerMenu from '../components/common/hamburgermenu';
import { useNavigate } from 'react-router-dom'; 

const AboutPage = () => {
  const navigate = useNavigate(); 

  const goBackToAccountSettings = () => {
    navigate('/settings');  
  };

  return (
    <>
      <HamburgerMenu />
      <div className="about-page">
        <p>We are a company that sells things!!!</p>

        <button className="back-button" onClick={goBackToAccountSettings}>
        Back
        </button>

      </div>
    </>
    
  );
};

export default AboutPage;

import './AboutPage.css';
import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import HamburgerMenu from '../components/common/hamburgermenu';
import Footer from '../components/common/Footer'; ;


const AboutPage = () => {
  const navigate = useNavigate(); 

  const goBackToAccountSettings = () => {
    navigate('/settings');  
  };

  return (
    <div className="about-page">
      <HamburgerMenu />
      <div className="welcome-message">
        <h1>Welcome to The Music Study</h1>
        <p>We want to get an idea of your music taste!</p>
      </div>

      <div className="about-content">
        <h2>About us</h2>
        {/* The actual content of the about us should be inserted here */}
        <p> Welcome to Harmonic Insights, where music meets the mind. We believe that music is not just a form of entertainment but a mirror to the soul. Our app, Harmonic Insights, is designed to uncover the layers of your personality through the music you love.<br />
        Our Mission: At Harmonic Insights, our mission is to create a deeper connection between you and your music, revealing aspects of your personality you might never have known. We aim to provide personalized insights that help you understand your emotions, preferences, and character traits, all through the analysis of your music taste. <br />
        </p>
      </div>

      <button className="back-button" onClick={goBackToAccountSettings}>
        Back
      </button>
      <Footer />
    </div>
    
  );
};

export default AboutPage;

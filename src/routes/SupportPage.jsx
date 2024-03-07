import React from 'react';
import './SupportPage.css';

const SupportPage = () => {
  return (
    <div className="support-page">
      <div className="hamburger-menu">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div className="support-form">
        <input type="email" placeholder="MusicHelp@email.com" />
        <textarea placeholder="Type Question"></textarea>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

export default SupportPage;

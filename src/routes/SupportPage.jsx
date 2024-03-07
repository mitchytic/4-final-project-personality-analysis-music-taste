import React from 'react';
import './SupportPage.css';
import HamburgerMenu from '../components/common/hamburgermenu';

const SupportPage = () => {
  return (
    <>
      <HamburgerMenu />
      <div className="support-page">

        <div className="support-form">
          <input type="email" placeholder="MusicHelp@email.com" />
          <textarea placeholder="Type Question"></textarea>
          <button type="submit">Submit</button>
        </div>
      </div>
    </>
  );
};

export default SupportPage;

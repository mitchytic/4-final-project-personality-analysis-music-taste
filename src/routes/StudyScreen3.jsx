import React, { useState } from 'react';
import './StudyScreen3.css'; 
import { Link } from 'react-router-dom';
import HamburgerMenu from '../components/common/hamburgermenu';

const StudyScreen3 = () => {
  const [setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="study-screen">
      <HamburgerMenu />
      <div className="content-block title">Trolley Problem</div>
      <div className="content-block image-placeholder">IMAGE</div>
      <button className="option-button" onClick={() => handleOptionClick('A')}>
        Option A
      </button>
      <button className="option-button" onClick={() => handleOptionClick('B')}>
        Option B
      </button>
      <Link to="/result" className="submit-button">Submit</Link>
      <Link to="/result" className="exit-button">Exit Study</Link>
    </div>
  );
};

export default StudyScreen3;

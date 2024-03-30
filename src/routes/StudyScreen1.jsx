import React, { useState } from 'react';
import './StudyScreen1.css';
import HamburgerMenu from '../components/common/hamburgermenu';
import { Link } from 'react-router-dom';

const StudyScreen1 = () => {
  const [selectedRating, setSelectedRating] = useState(null);

  const handleRating = (rating) => {
    setSelectedRating(rating);
  };


  return (
    <div className="study-screen">
      <HamburgerMenu />
      <button className="play-song">Play song</button>
      <div className="rate-song">Rate song [1-7]</div>
      <div className="ratings">
        {[...Array(7)].map((_, index) => (
          <button
            key={index}
            className={`rating-button ${selectedRating === index + 1 ? "selected" : ""}`}
            onClick={() => handleRating(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <Link to="/sc2" className="submit-button">Submit</Link>
      <Link to="/result" className="exit-button">Exit Study</Link>

    </div>
  );
};

export default StudyScreen1;

import React, { useState } from 'react';
import './StudyScreen1.css';

const StudyScreen1 = () => {
  const [selectedRating, setSelectedRating] = useState(null);

  const handleRating = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmit = () => {
    // Here you would handle the form submission to your backend server
    console.log(`Rating submitted: ${selectedRating}`);
  };

  return (
    <div className="study-screen">
      <div className="hamburger-menu">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
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
      <button className="submit" onClick={handleSubmit}>Submit</button>
      <button className="exit-study">Exit Study</button>
    </div>
  );
};

export default StudyScreen1;

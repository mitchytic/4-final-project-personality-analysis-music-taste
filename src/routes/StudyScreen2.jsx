import React, { useState } from 'react';
import './StudyScreen2.css';
import HamburgerMenu from '../components/common/hamburgermenu';
import Footer from '../components/common/Footer'; 
import { Link } from 'react-router-dom';

const emotions = [
  'Joy', 'Nostalgia', 'Groove', 'Awe', 'Sadness',
  'Anxiety', 'Disgust', 'Anger', 'Nothing', 'Reflection'
];

const StudyScreen2 = () => {
  const [selectedEmotions, setSelectedEmotions] = useState(new Set());

  const toggleEmotion = (emotion) => {
    setSelectedEmotions(prevSelectedEmotions => {
      const updatedEmotions = new Set(prevSelectedEmotions);
      if (updatedEmotions.has(emotion)) {
        updatedEmotions.delete(emotion);
      } else {
        updatedEmotions.add(emotion);
      }
      return updatedEmotions;
    });
  };

  return (
    <div className="study-screen-2">
      <HamburgerMenu />
      <div className="welcome-message">
        <h1>Welcome to The Music Study</h1>
        <p>We want to get an idea of your music taste!</p>
      </div>

      <div className="instructions">Listen to this song and check all emotions evoked</div>
      <button className="play-button">PLAY SONG</button>
      <div className="emotions-list">
        {emotions.map((emotion) => (
          <button 
            key={emotion}
            className={`emotion-button ${selectedEmotions.has(emotion) ? 'selected' : ''}`}
            onClick={() => toggleEmotion(emotion)}
          >
            {emotion}
          </button>
        ))}
      </div>
      <Link to="/result" className="submit-button">Submit</Link>
      <Footer />
    </div>
  );
};

export default StudyScreen2;

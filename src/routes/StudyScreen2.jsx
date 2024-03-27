import React, { useState } from 'react';
import './StudyScreen2.css';
import HamburgerMenu from '../components/common/hamburgermenu';

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

  const handleSubmit = () => {
    // Here you would typically handle the submission, e.g., sending to an API
    console.log(Array.from(selectedEmotions));
  };

  return (
    <div className="study-screen-2">
      <HamburgerMenu />
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
      <button className="submit-button" onClick={handleSubmit}>Submit!</button>
      <button className="exit-button">Exit Study</button>
    </div>
  );
};

export default StudyScreen2;

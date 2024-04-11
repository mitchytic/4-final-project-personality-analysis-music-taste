import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './StudyScreen1.css'; 
import HamburgerMenu from '../components/common/hamburgermenu';
import { useNavigate } from 'react-router-dom';

const StudyScreen1 = () => {
  const initialRatings = {
    cleanSpaces: '',
    startSocializing: '',
    enjoyExperimenting: '',
    solitaryHobbies: '',
    moodChanges: '',
    followHeart: '',
    feelInsecure: '',
    preferAlone: '',
    decisionFocus: '',
  };
  
  const [selectedRating, setSelectedRating] = useState(initialRatings);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSongUrl = async () => {
      try {
        const response = await axios.get('/get-song');
        audioRef.current.src = response.data.songUrl;
      } catch (error) {
        console.error('Error fetching song URL:', error);
      }
    };

    fetchSongUrl();

    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    };
  }, []);

  useEffect(() => {
    isPlaying ? audioRef.current.play().catch(error => console.error('Playback failed', error)) : audioRef.current.pause();
  }, [isPlaying]);

  const handleVolumeChange = (e) => {
    audioRef.current.volume = e.target.value;
  };

  const handleTimeChange = (e) => {
    audioRef.current.currentTime = e.target.value;
  };

  const handleRatingChange = (question, value) => {
    setSelectedRating({
      ...selectedRating,
      [question]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      await axios.post('/submit-ratings', selectedRating);
      navigate('/sc2');
    } catch (error) {
      console.error('Error submitting ratings:', error);
    }
  };

  return (
    <div className="study-screen">
      <HamburgerMenu />
      <h2>Song Name Here</h2>
      <button className="control-button" onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? 'Pause' : 'Play'} song</button>
      <div>
        <label htmlFor="volume">Volume:</label>
        <input type="range" id="volume" min="0" max="1" step="0.01" defaultValue="1" onChange={handleVolumeChange} className="volume-slider"/>
      </div>
      <div>
        <label htmlFor="song-progress">Song Progress:</label>
        <input type="range" id="song-progress" min="0" max={audioRef.current.duration || 100} value={audioRef.current.currentTime} onChange={handleTimeChange} className="song-slider"/>
      </div>
      <h2> How do you feel in response to this song? </h2>
      {[
         { id: 'cleanSpaces', question: 'Your living and working spaces are clean and organized.' },
         { id: 'startSocializing', question: 'You will start socializing at first when you face a group of people on the first day.' },
         { id: 'enjoyExperimenting', question: 'You enjoy experimenting with new and untested approaches.' },
         { id: 'solitaryHobbies', question: 'You enjoy solitary hobbies or activities more than group ones.' },
         { id: 'moodChanges', question: 'Your mood can change very quickly.' },
         { id: 'followHeart', question: 'When facts and feelings conflict, you usually find yourself following your heart.' },
         { id: 'feelInsecure', question: 'You rarely feel insecure.' },
         { id: 'preferAlone', question: 'You prefer to be alone.' },
         { id: 'decisionFocus', question: 'When making decisions, you focus more on how the affected people might feel than on what is most logical or efficient.' },
      ].map((item) => (
        <div key={item.id} className="question">
          <label>{item.question}</label>
          <select value={selectedRating[item.id]} onChange={(e) => handleRatingChange(item.id, e.target.value)}>
            {[...Array(5)].map((_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
      ))}
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default StudyScreen1;

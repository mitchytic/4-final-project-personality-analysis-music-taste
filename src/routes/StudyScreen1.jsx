import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './StudyScreen1.css';
import HamburgerMenu from '../components/common/hamburgermenu';
import { useNavigate } from 'react-router-dom';

const StudyScreen1 = () => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSongUrl = async () => {
      try {
        const response = await axios.get('/get-song');
        audioRef.current.src = response.data.songUrl;
        // Set song name if you're fetching it, e.g., setSongName(response.data.songName);
      } catch (error) {
        console.error('Error fetching song URL:', error);
      }
    };

    fetchSongUrl();

    // Cleanup function to stop music when component unmounts
    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset song time
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

  const handleSubmit = () => {
    // Here, you'd also handle the submission logic, e.g., saving the rating
    navigate('/sc2');
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
      <div className="rating-system">
        Rate the song:
        {[...Array(7)].map((_, index) => (
          <button key={index} className={`rating-button ${selectedRating === String(index + 1) ? "selected" : ""}`} onClick={() => setSelectedRating(String(index + 1))}>
            {index + 1}
          </button>
        ))}
      </div>
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default StudyScreen1;

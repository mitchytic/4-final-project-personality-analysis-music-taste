import React, { useState } from 'react';
import './HomePage.css'; 
import HamburgerMenu from "../components/common/hamburgermenu";
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [songs, setSongs] = useState([
    'Hello (Adele)',
    'Kill Bill (SZA)',
    'One Dance (Drake)',
    'Falling (Trevor)',
    'Starboy (Weekend)'
  ]);
  const [selectedSongIndex, setSelectedSongIndex] = useState(null);

  const handleSongClick = (index) => {
    if (selectedSongIndex !== null) {
      let newSongs = [...songs];
      [newSongs[selectedSongIndex], newSongs[index]] = [newSongs[index], newSongs[selectedSongIndex]];
      setSongs(newSongs);
      setSelectedSongIndex(null); 
    } else {
      setSelectedSongIndex(index);
    }
  };

  return (
    <div className="home-page">
      <HamburgerMenu />
      <div className="content">
        <div className="welcome-message">
          <h1>Welcome to The Music Study</h1>
          <p>We want to get an idea of your music taste!</p>
        </div>
        <div className="song-ranking">
          <h2>Please rank the following songs from best to worst</h2>
          <ul>
            {songs.map((song, index) => (
              <li 
                key={index} 
                onClick={() => handleSongClick(index)}
                className={selectedSongIndex === index ? 'selected' : ''}
              >
                {song}
              </li>
            ))}
          </ul>
        </div>
        <button className="next-button"><Link to = "sc1">NEXT</Link></button>
        <button className="exit-button"><Link to = "result">Exit Study</Link></button>
      </div>
    </div>
  );
};

export default HomePage;

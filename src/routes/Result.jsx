import React, { useEffect, useState } from 'react';
import './Result.css';
import HamburgerMenu from '../components/common/hamburgermenu';

const ResultPage = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch('/get-music-recommendations')
      .then(response => response.json())
      .then(data => {
        setSongs(data);
      })
      .catch(error => console.error('Failed to fetch music recommendations', error));
  }, []);

  return (
    <div className="result-page">
      <HamburgerMenu className="hamburger-menu" />
      <div className="logo-section">
        LOGO {/* Replace with your actual logo */}
      </div>
      <div className="thank-you-message">
        Thank you for taking the study!
      </div>
      <div className="song-recommendations">
        <p>Based on your responses, here are some songs we think you'll love:</p>
        <ul>
        {songs.map((song, index) => (
          <li key={index} className="song-item">
            <span>{`${song.artist} - ${song.name}`}</span>
            <a href={song.spotify_link} target="_blank" rel="noopener noreferrer" style={{ color: 'green' }}>Open in Spotify</a>
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
};

export default ResultPage;

import React, { useEffect, useState } from 'react';
import './Result.css';
import HamburgerMenu from '../components/common/hamburgermenu';
import Footer from '../components/common/Footer'; 

const ResultPage = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    // Fetch music recommendations as soon as the component mounts
    fetch('/get-music-recommendations')
      .then(response => response.json())
      .then(data => {
        setSongs(data); // Update state with fetched songs
      })
      .catch(error => console.error('Failed to fetch music recommendations', error));
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="result-page">
      <HamburgerMenu />
        <div className="welcome-message">
          <h1>Welcome to The Music Study</h1>
          <p>We want to get an idea of your music taste!</p>
        </div>
      <div className="thank-you-message">Thank you for taking the study!</div>
      <div className="song-recommendations">
        <p>Based on your responses, here are some songs we think you'll love:</p>
        <ul>
          {songs.map((song, index) => (
            <li key={index} className="song-item">
              <span>{`${song.artist} - ${song.name}`}</span>
              <a href={song.spotify_link} target="_blank" rel="noopener noreferrer">Open in Spotify</a>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default ResultPage;
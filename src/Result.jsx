import React from 'react';
import './Result.css';

const ResultPage = () => {
  const songs = [
    { id: 1, name: 'Song 1', spotifyLink: 'https://open.spotify.com/track/song1' },
    { id: 2, name: 'Song 2', spotifyLink: 'https://open.spotify.com/track/song2' },
    { id: 3, name: 'Song 3', spotifyLink: 'https://open.spotify.com/track/song3' },
    { id: 4, name: 'Song 4', spotifyLink: 'https://open.spotify.com/track/song4' },
    { id: 5, name: 'Song 5', spotifyLink: 'https://open.spotify.com/track/song5' },
  ];

  return (
    <div className="result-page">
      <div className="hamburger-menu">
        <button className="menu-icon">☰</button>
      </div>
      <div className="logo-section">
        LOGO {/* Replace with a logo */}
      </div>
      <div className="thank-you-message">
        Thank you for taking the study!
      </div>
      <div className="song-recommendations">
        <p>Based on your responses, we were able to build a library of songs we think you'll love!</p>
        <p>Here it is:</p>
        <ul>
          {songs.map(song => (
            <li key={song.id} className="song-item">
              <span>{song.name}</span>
              <a href={song.spotifyLink} target="_blank" rel="noopener noreferrer">Open in Spotify</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResultPage;

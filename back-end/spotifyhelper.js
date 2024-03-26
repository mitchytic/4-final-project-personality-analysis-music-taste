const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

const clientID = 'YOUR_CLIENT_ID'; // Replace with your Spotify Client ID
const clientSecret = 'YOUR_CLIENT_SECRET'; // Replace with your Spotify Client Secret

//function to get an access token using the Client Credentials Flow
async function getAccessToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + Buffer.from(clientID + ':' + clientSecret).toString('base64')
    },
    body: 'grant_type=client_credentials'
  });

  const data = await response.json();
  return data.access_token;
}
//function to convert artist name to Spotify artist ID
async function getArtistID(artistName) {
  const accessToken = await getAccessToken();
  const encodedArtistName = encodeURIComponent(artistName);

  const response = await fetch(`https://api.spotify.com/v1/search?q=${encodedArtistName}&type=artist`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });

  const data = await response.json();
  if (data.artists && data.artists.items.length > 0) {
    return data.artists.items[0].id;
  } else {
    throw new Error('Artist not found');
  }
}

//recommendation function
async function getRecommendationsByArtistId(artistId) {
  const accessToken = await getAccessToken();

  const response = await fetch(`https://api.spotify.com/v1/recommendations?seed_artists=${artistId}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });

  const data = await response.json();
  return data;
}

// Express route to get artist ID by name
app.get('/artist-id/:name', async (req, res) => {
  try {
    const artistId = await getArtistID(req.params.name);
    res.json({ artistId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Express route to get recommendations by artist ID
app.get('/recommendations/:artistId', async (req, res) => {
  try {
    const recommendations = await getRecommendationsByArtistId(req.params.artistId);
    res.json(recommendations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

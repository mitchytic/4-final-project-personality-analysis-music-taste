const express = require('express');
require('dotenv').config();
const fs = require('fs');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const Rating = require('./models/RatingModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
app.use(express.json()); // Middleware to parse JSON bodies

const dataPath = './accounts.json'; // Path to the JSON file
app.use('/music', express.static(path.join(__dirname, 'music')));
// bodyParser middleware
app.use(bodyParser.json());

// Need to use a service to keep this actually secret
const SECRET_KEY = 'fake_secret_key_xd'

// Serve static files from the React app
const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

mongoose.connect('mongodb+srv://liuzhuang0429:MXt3V2szIX9YZef9@cluster0.4yn6cah.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

// Utility function to read accounts from the JSON file
function readAccounts() {
  return new Promise((resolve, reject) => {
    fs.readFile(dataPath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
}

// This serves the React build files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../front-end/build')));

  app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../front-end/build/index.html'));
  });
}

app.post('/submit-ratings', async (req, res) => {
  try {
      const newRating = new Rating(req.body);
      await newRating.save();
      const ratingString = JSON.stringify(req.body);
      // Write to file, overwriting any existing data
      fs.writeFile(path.join(__dirname, 'survey-results.jsonl'), ratingString + "\n", (err) => {
          if (err) {
              console.error('Failed to write to file', err);
              return res.status(500).json({ message: 'Error saving survey results to file', error: err.message });
          }
          res.status(200).json({ message: 'Ratings submitted successfully.' });
      });
  } catch (error) {
      console.error('Failed to save rating', error);
      res.status(500).json({ message: 'Error submitting ratings', error: error.message });
  }
});

const songData = JSON.parse(fs.readFileSync(path.join(__dirname, 'songs.json'), 'utf-8'));

app.get('/get-music-recommendations', async (req, res) => {
    try {
        const lines = fs.readFileSync(path.join(__dirname, 'survey-results.jsonl'), 'utf-8').trim().split('\n');
        const totalScores = lines.map(line => {
            const results = JSON.parse(line);
            return Object.values(results).reduce((acc, value) => acc + parseInt(value), 0) / Object.keys(results).length;
        });
        const overallAverage = totalScores.reduce((acc, cur) => acc + cur, 0) / totalScores.length;

        let genre;
        // Define the genre based on the overall average score
        if (overallAverage <= 2) genre = 'hip_hop';
        else if (overallAverage <= 3) genre = 'indie';
        else if (overallAverage <= 4) genre = 'rock';
        else if (overallAverage <= 5) genre = 'punk';
        else genre = 'pop';

        // Select 5 random songs from the chosen genre
        const selectedSongs = songData[genre]
            .sort(() => 0.5 - Math.random())
            .slice(0, 5);

        res.json(selectedSongs);
    } catch (error) {
        console.error('Error fetching music recommendations:', error);
        res.status(500).json({ message: 'Failed to fetch music recommendations', error: error.message });
    }
});

app.get('/get-song', (req, res) => {
  const songFileName = 'JID_MONEY.mp3';
  res.json({ songUrl: `/music/${songFileName}` });
});


// Utility function to write accounts to the JSON file
function writeAccounts(accounts) {
  return new Promise((resolve, reject) => {
    fs.writeFile(dataPath, JSON.stringify(accounts, null, 2), (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

app.post('/submit-login', async (req, res) => { 
  const { username, password } = req.body;
  const users = await fs.readJson(USERS_FILE);
  const user = users.find(user => user.username === username);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).send('Authentication failed.');
  }

  const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });

  res.status(200).json({ token });
});


app.post('/add-user', async (req, res) => {
  const { username, password } = req.body;
  const accounts = await readAccounts();
  if (accounts.some(account => account.username === username)) {
    return res.status(400).send({ message: 'User already exists' });
  }
  accounts.push({ username, password, "Music Taste": 1 }); // Adding with default "Music Taste"
  await writeAccounts(accounts);
  res.send({ message: 'User added successfully' });
});

app.post('/check-user', async (req, res) => {
  const { username, password } = req.body;
  const accounts = await readAccounts();
  const user = accounts.find(account => account.username === username && account.password === password);
  res.send({ exists: !!user });
});

app.delete('/delete-user', async (req, res) => {
  const { username, password } = req.body;
  let accounts = await readAccounts();
  const initialLength = accounts.length;
  accounts = accounts.filter(account => !(account.username === username && account.password === password));
  if (accounts.length < initialLength) {
    await writeAccounts(accounts);
    res.send({ message: 'User deleted successfully' });
  } else {
    res.status(404).send({ message: 'User not found' });
  }
});

//Catchall function that gets requests that don't fit above, don't move from bottom
// Maybe could replace with 404 or something?
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});

module.exports = app;
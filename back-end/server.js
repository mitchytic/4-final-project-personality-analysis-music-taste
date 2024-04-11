const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const Rating = require('./models/RatingModel'); // Adjust the path to your Rating model
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');
app.use(cors());

app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/yourDatabaseName');

// Serve MP3 files from the 'music' directory
app.use('/music', express.static(path.join(__dirname, 'music')));

// An endpoint to get the song's URL
app.get('/get-song', (req, res) => {
    // The file name should match the actual MP3 file name in the 'music' directory
    const songFileName = 'JID_MONEY.mp3';
    
    // Check if the song exists
    if (fs.existsSync(path.join(__dirname, 'music', songFileName))) {
        res.json({ songUrl: `/music/${songFileName}` });
    } else {
        res.status(404).json({ message: 'Song not found' });
    }
});

// This serves the React build files in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../front-end/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../front-end/build/index.html'));
    });
}

app.post('/submit-ratings', async (req, res) => {
    try {
      // Save to MongoDB
      const newRating = new Rating(req.body);
      await newRating.save();

      // Convert the rating object to a string
      const ratingString = JSON.stringify(req.body);

      // Append the string to a file, with a newline character for JSON Lines format
      fs.appendFile(path.join(__dirname, 'survey-results.jsonl'), ratingString + "\n", (err) => {
        if (err) {
          console.error('Failed to write to file', err);
          // Respond with error message if file writing fails
          return res.status(500).json({ message: 'Error saving survey results to file', error: err.message });
        }
        // Respond success after saving to both MongoDB and file
        res.status(200).json({ message: 'Ratings submitted successfully.' });
      });
    } catch (error) {
      console.error('Failed to save rating', error);
      res.status(500).json({ message: 'Error submitting ratings', error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
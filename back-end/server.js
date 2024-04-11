require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const qs = require('querystring');
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


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
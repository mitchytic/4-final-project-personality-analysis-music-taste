const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

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

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

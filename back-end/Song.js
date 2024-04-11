const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  year: Number,
  genres: [String]
});

async function addSongs() {
  try {
    await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB Connected...');

    const songs = [
      { title: "Shape of You", artist: "Ed Sheeran", year: 2017, genres: ["Pop"] },
      { title: "Blinding Lights", artist: "The Weeknd", year: 2019, genres: ["Synth-Pop"] },
      { title: "Rockstar", artist: "Post Malone", year: 2018, genres: ["Rap", "Rock"] },
      { title: "Someone Like You", artist: "Adele", year: 2011, genres: ["Pop", "Soul"] },
      { title: "Closer", artist: "The Chainsmokers", year: 2016, genres: ["Dance-pop", "Electropop"] }
    ];

    await Song.insertMany(songs);
    console.log('Songs added successfully!');
    mongoose.connection.close();
  } catch (err) {
    console.error('Failed to add songs:', err);
    mongoose.connection.close();
  }
}

addSongs();


const Song = mongoose.model('Song', SongSchema);

module.exports = Song;

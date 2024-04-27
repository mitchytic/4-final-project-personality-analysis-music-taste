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
      { title: "Closer", artist: "The Chainsmokers", year: 2016, genres: ["Dance-pop", "Electropop"] },
      { title: "Levitating", artist: "Dua Lipa", year: 2020, genres: ["Disco", "Pop"] },
      { title: "Dance Monkey", artist: "Tones and I", year: 2019, genres: ["Electropop", "Dance"] },
      { title: "Watermelon Sugar", artist: "Harry Styles", year: 2019, genres: ["Pop", "Rock"] },
      { title: "Memories", artist: "Maroon 5", year: 2019, genres: ["Pop"] },
      { title: "Circles", artist: "Post Malone", year: 2019, genres: ["Pop", "Rock"] },
      { title: "All of Me", artist: "John Legend", year: 2013, genres: ["R&B", "Soul"] },
      { title: "Thinking Out Loud", artist: "Ed Sheeran", year: 2014, genres: ["Pop", "Soul"] },
      { title: "Uptown Funk", artist: "Mark Ronson", year: 2014, genres: ["Funk", "Pop"] },
      { title: "Can't Feel My Face", artist: "The Weeknd", year: 2015, genres: ["Pop", "R&B"] },
      { title: "Bad Romance", artist: "Lady Gaga", year: 2009, genres: ["Pop", "Dance"] },
      { title: "Rolling in the Deep", artist: "Adele", year: 2010, genres: ["Pop", "Soul"] },
      { title: "Firework", artist: "Katy Perry", year: 2010, genres: ["Pop"] },
      { title: "Royals", artist: "Lorde", year: 2013, genres: ["Pop"] },
      { title: "Get Lucky", artist: "Daft Punk", year: 2013, genres: ["Disco", "Funk"] },
      { title: "Starboy", artist: "The Weeknd", year: 2016, genres: ["R&B", "Electro"] },
      { title: "Hotline Bling", artist: "Drake", year: 2015, genres: ["Rap", "R&B"] },
      { title: "Shape of You", artist: "Ed Sheeran", year: 2017, genres: ["Pop"] },
      { title: "Despacito", artist: "Luis Fonsi", year: 2017, genres: ["Pop", "Reggaeton"] },
      { title: "That's What I Like", artist: "Bruno Mars", year: 2017, genres: ["R&B", "Pop"] },
      { title: "Cheap Thrills", artist: "Sia", year: 2016, genres: ["Pop", "Electro"] },
      { title: "One Dance", artist: "Drake", year: 2016, genres: ["R&B", "Dancehall"] },
      { title: "Humble", artist: "Kendrick Lamar", year: 2017, genres: ["Hip Hop"] },
      { title: "Hello", artist: "Adele", year: 2015, genres: ["Pop", "Soul"] },
      { title: "Love Yourself", artist: "Justin Bieber", year: 2015, genres: ["Pop", "Acoustic"] },
      { title: "24K Magic", artist: "Bruno Mars", year: 2016, genres: ["Funk", "Pop"] },
      { title: "Stressed Out", artist: "Twenty One Pilots", year: 2015, genres: ["Alternative", "Pop"] },
      { title: "Can't Stop the Feeling!", artist: "Justin Timberlake", year: 2016, genres: ["Pop", "Disco"] },
      { title: "Pillowtalk", artist: "Zayn", year: 2016, genres: ["Pop", "R&B"] },
      { title: "Believer", artist: "Imagine Dragons", year: 2017, genres: ["Rock", "Pop"] },
      { title: "Thunder", artist: "Imagine Dragons", year: 2017, genres: ["Pop", "Rock"] },
      { title: "Let Me Love You", artist: "DJ Snake ft. Justin Bieber", year: 2016, genres: ["Electronic", "Dance"] },
      { title: "Faded", artist: "Alan Walker", year: 2015, genres: ["Electronic", "House"] },
      { title: "Perfect", artist: "Ed Sheeran", year: 2017, genres: ["Pop", "Acoustic"] },
      { title: "Girls Like You", artist: "Maroon 5 ft. Cardi B", year: 2018, genres: ["Pop", "Hip Hop"] },
      { title: "New Rules", artist: "Dua Lipa", year: 2017, genres: ["Pop"] },
      { title: "Attention", artist: "Charlie Puth", year: 2017, genres: ["Pop", "R&B"] },
      { title: "Havana", artist: "Camila Cabello", year: 2017, genres: ["Pop", "R&B"] },
      { title: "Senorita", artist: "Shawn Mendes, Camila Cabello", year: 2019, genres: ["Latin", "Pop"] },
      { title: "God's Plan", artist: "Drake", year: 2018, genres: ["Hip Hop"] },
      { title: "Psycho", artist: "Post Malone", year: 2018, genres: ["Rap", "R&B"] },
      { title: "In My Feelings", artist: "Drake", year: 2018, genres: ["Hip Hop", "R&B"] },
      { title: "Thank U, Next", artist: "Ariana Grande", year: 2019, genres: ["Pop"] },
      { title: "Shallow", artist: "Lady Gaga, Bradley Cooper", year: 2018, genres: ["Pop", "Ballad"] },
      { title: "Sucker", artist: "Jonas Brothers", year: 2019, genres: ["Pop", "Rock"] },
      { title: "Gangnam Style", artist: "PSY", year: 2012, genres: ["K-pop", "Dance"] },
      { title: "Eyes, Nose, Lips", artist: "Taeyang", year: 2014, genres: ["K-pop", "R&B"] },
      { title: "Lemon", artist: "Kenshi Yonezu", year: 2018, genres: ["J-pop", "Ballad"] },
      { title: "Tum Hi Ho", artist: "Arijit Singh", year: 2013, genres: ["Bollywood", "Pop"] },
      { title: "DDU-DU DDU-DU", artist: "BLACKPINK", year: 2018, genres: ["K-pop", "Hip Hop"] },
      { title: "Kathang Isip", artist: "Ben&Ben", year: 2017, genres: ["OPM", "Indie"] },
      { title: "Pretender", artist: "Official HIGE DANDism", year: 2019, genres: ["J-pop"] },
      { title: "Mandarin Ducks", artist: "Jay Chou", year: 2018, genres: ["C-pop", "Pop"] },
      { title: "Lit", artist: "Lay Zhang", year: 2020, genres: ["C-pop", "Hip Hop"] },
      { title: "How You Like That", artist: "BLACKPINK", year: 2020, genres: ["K-pop", "Dance"] }
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

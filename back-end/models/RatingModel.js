const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  cleanSpaces: Number,
  startSocializing: Number,
  enjoyExperimenting: Number,
  solitaryHobbies: Number,
  moodChanges: Number,
  followHeart: Number,
  feelInsecure: Number,
  preferAlone: Number,
  decisionFocus: Number,
}, { timestamps: true });

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;

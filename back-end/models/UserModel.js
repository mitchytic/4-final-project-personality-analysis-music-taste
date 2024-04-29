const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  personality_scores: {
    joy: { type: Number, required: true, min: 0, max: 100 },
    sorrow: { type: Number, required: true, min: 0, max: 100 },
    fear: { type: Number, required: true, min: 0, max: 100 },
    anger: { type: Number, required: true, min: 0, max: 100 },
    surprise: { type: Number, required: true, min: 0, max: 100 },
    disgust: { type: Number, required: true, min: 0, max: 100 }
  }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;

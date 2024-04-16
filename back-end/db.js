const mongoose = require('mongoose');

const connectDatabase = () => {
  mongoose.connect('mongodb+srv://liuzhuang0429:MXt3V2szIX9YZef9@cluster0.4yn6cah.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error(err));
};

module.exports = connectDatabase;


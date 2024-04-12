const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://liuzhuang0429:MXt3V2szIX9YZef9@cluster0.4yn6cah.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


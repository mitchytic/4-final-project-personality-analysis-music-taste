const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

const uri = ""; // Your MongoDB URI
const client = new MongoClient(uri, {
  tlsAllowInvalidCertificates: true,
  serverApi: ServerApiVersion.v1
});

const databaseName = "account";
const collectionName = "Username+Password";
let collection;

async function connectToMongo() {
  try {
    await client.connect();
    const database = client.db(databaseName);
    collection = database.collection(collectionName);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Could not connect to MongoDB:', error);
  }
}

app.post('/add-user', async (req, res) => {
  const { username, password } = req.body;
  if (await collection.findOne({ username })) {
    return res.status(400).send({ message: 'User already exists' });
  }
  await collection.insertOne({ username, password });
  res.send({ message: 'User added successfully' });
});

app.post('/check-user', async (req, res) => {
  const { username, password } = req.body;
  const user = await collection.findOne({ username, password });
  res.send({ exists: !!user });
});

app.delete('/delete-user', async (req, res) => {
  const { username, password } = req.body;
  const result = await collection.deleteOne({ username, password });
  if (result.deletedCount > 0) {
    res.send({ message: 'User deleted successfully' });
  } else {
    res.status(404).send({ message: 'User not found' });
  }
});

connectToMongo().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
});

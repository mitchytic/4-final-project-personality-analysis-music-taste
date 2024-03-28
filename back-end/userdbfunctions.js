const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

const dataPath = './accounts.json'; // Path to the JSON file

// Utility function to read accounts from the JSON file
function readAccounts() {
  return new Promise((resolve, reject) => {
    fs.readFile(dataPath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
}

// Utility function to write accounts to the JSON file
function writeAccounts(accounts) {
  return new Promise((resolve, reject) => {
    fs.writeFile(dataPath, JSON.stringify(accounts, null, 2), (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

app.post('/add-user', async (req, res) => {
  const { username, password } = req.body;
  const accounts = await readAccounts();
  if (accounts.some(account => account.username === username)) {
    return res.status(400).send({ message: 'User already exists' });
  }
  accounts.push({ username, password, "Music Taste": 1 }); // Adding with default "Music Taste"
  await writeAccounts(accounts);
  res.send({ message: 'User added successfully' });
});

app.post('/check-user', async (req, res) => {
  const { username, password } = req.body;
  const accounts = await readAccounts();
  const user = accounts.find(account => account.username === username && account.password === password);
  res.send({ exists: !!user });
});

app.delete('/delete-user', async (req, res) => {
  const { username, password } = req.body;
  let accounts = await readAccounts();
  const initialLength = accounts.length;
  accounts = accounts.filter(account => !(account.username === username && account.password === password));
  if (accounts.length < initialLength) {
    await writeAccounts(accounts);
    res.send({ message: 'User deleted successfully' });
  } else {
    res.status(404).send({ message: 'User not found' });
  }
});

app.post('/check-user', async (req, res) => {
  const { username, password } = req.body;
  const accounts = await readAccounts();
  const user = accounts.find(account => account.username === username && account.password === password);
  res.send({ exists: !!user });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

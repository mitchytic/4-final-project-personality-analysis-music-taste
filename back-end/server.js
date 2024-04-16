const app = require('./index.js');
const PORT = 27017;

const connectDatabase = require('./ds.js');

connectDatabase();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
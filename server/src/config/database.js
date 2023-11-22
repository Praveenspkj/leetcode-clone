const mongoose = require('mongoose');

// Replace the connection string with your actual MongoDB connection string
const mongoURI = 'mongodb://127.0.0.1:27017/leetcode';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Bind connection to events (to get notifications)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Export the connection
module.exports = db;

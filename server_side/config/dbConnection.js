require('dotenv').config();
const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING)
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDb;

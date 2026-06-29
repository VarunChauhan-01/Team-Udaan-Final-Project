const mongoose = require('mongoose');

const connectDB = async () => {
  // Fixed: matching the exact variable name in Render
  const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/jeevansetu';

  console.log("Using Mongo URI:", mongoURI.replace(/:([^@]+)@/, ':***@')); // Safely masks password in logs

  try {
    await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log("✅ MongoDB Connected successfully.");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1); // Stop execution if DB connection fails
  }
};

module.exports = connectDB;
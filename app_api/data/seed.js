/**
 * seed.js - Populates the MongoDB travlr database with sample trip data
 * Run with: npm run seed  (or: node app_api/data/seed.js)
 */

const path = require('path');
const mongoose = require('mongoose');

// Connect to DB and load model
require('../models/db');
require('../models/travlr');

const Trip = mongoose.model('trips');
const trips = require('../../data/trips.json');

const seedDB = async () => {
  try {
    // Clear existing trips
    await Trip.deleteMany({});
    console.log('Existing trips removed');

    // Insert sample data
    await Trip.insertMany(trips);
    console.log(`${trips.length} trips inserted successfully`);
  } catch (err) {
    console.error('Seed error:', err);
  } finally {
    await mongoose.connection.close();
    console.log('Database connection closed');
    process.exit(0);
  }
};

// Wait for connection before seeding
mongoose.connection.once('connected', seedDB);

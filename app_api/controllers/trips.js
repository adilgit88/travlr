const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

// GET /api/trips - return all trips as JSON
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find({}).exec();
    if (!trips) {
      return res.status(404).json({ message: 'No trips found' });
    }
    return res.status(200).json(trips);
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err });
  }
};

// GET /api/trips/:tripCode - return a single trip by code
const tripsGetByCode = async (req, res) => {
  try {
    const trip = await Trip.find({ code: req.params.tripCode }).exec();
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    return res.status(200).json(trip);
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err });
  }
};

module.exports = { tripsList, tripsGetByCode };

const Trip = require('../models/travlr');

// GET /api/trips - return all trips as JSON
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find({}).sort({ start: 1 }).exec();
    return res.status(200).json(trips);
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// GET /api/trips/:tripCode - return a single trip by code
const tripsOne = async (req, res) => {
  try {
    const tripCode = req.params.tripCode;

    if (!tripCode) {
      return res.status(400).json({ message: 'Trip code is required' });
    }

    const trip = await Trip.findOne({ code: tripCode }).exec();

    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    return res.status(200).json(trip);
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// POST /api/trips - create a new trip
const tripsAddTrip = async (req, res) => {
  try {
    const trip = await Trip.create({
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image,
      description: req.body.description
    });

    return res.status(201).json(trip);
  } catch (err) {
    return res.status(400).json({ message: 'Unable to create trip', error: err.message });
  }
};

// PUT /api/trips/:tripCode - update an existing trip
const tripsUpdateTrip = async (req, res) => {
  try {
    const tripCode = req.params.tripCode;

    if (!tripCode) {
      return res.status(400).json({ message: 'Trip code is required' });
    }

    const trip = await Trip.findOneAndUpdate(
      { code: tripCode },
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
      },
      { new: true, runValidators: true }
    ).exec();

    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    return res.status(200).json(trip);
  } catch (err) {
    return res.status(400).json({ message: 'Unable to update trip', error: err.message });
  }
};

// DELETE /api/trips/:tripCode - delete a trip by code
const tripsDeleteTrip = async (req, res) => {
  try {
    const tripCode = req.params.tripCode;

    if (!tripCode) {
      return res.status(400).json({ message: 'Trip code is required' });
    }

    const result = await Trip.findOneAndDelete({ code: tripCode }).exec();

    if (!result) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    return res.status(204).send();
  } catch (err) {
    return res.status(400).json({ message: 'Unable to delete trip', error: err.message });
  }
};

module.exports = {
  tripsList,
  tripsOne,
  tripsAddTrip,
  tripsUpdateTrip,
  tripsDeleteTrip
};

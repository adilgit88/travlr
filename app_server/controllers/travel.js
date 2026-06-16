const Trip = require('../../app_api/models/travlr');

const travel = async (req, res) => {
  try {
    const trips = await Trip.find({}).sort({ start: 1 }).lean().exec();

    res.render('travel', {
      title: 'Travel - Travlr Getaways',
      trips
    });
  } catch (err) {
    res.status(500).render('error', {
      message: 'Unable to load travel packages',
      error: err
    });
  }
};

module.exports = { travel };

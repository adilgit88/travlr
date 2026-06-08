const fs   = require('fs');
const path = require('path');

const tripsData = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../data/trips.json'), 'utf8')
);

const travel = (req, res) => {
  res.render('travel', {
    title: 'Travel - Travlr Getaways',
    trips: tripsData
  });
};

module.exports = { travel };

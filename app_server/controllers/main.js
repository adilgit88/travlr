/* app_server/controllers/main.js
 * Controller for all customer-facing pages.
 * Each function maps to a route and renders the matching HBS view.
 */

// Sample trip data — will be replaced with MongoDB later
const trips = [
  {
    code:        'B0101',
    name:        'Cancun Beach Getaway',
    length:      '4 nights / 5 days',
    start:       'February 14, 2025',
    resort:      'Emerald Bay Resort (3-star)',
    perPerson:   799,
    image:       'reef1.jpg',
    description: 'White sand beaches, crystal clear water, and vibrant nightlife — Cancun has it all.'
  },
  {
    code:        'B0103',
    name:        'Barbados Paradise',
    length:      '5 nights / 6 days',
    start:       'February 28, 2025',
    resort:      'Castaway Cove Resort (4-star)',
    perPerson:   1299,
    image:       'reef2.jpg',
    description: 'Experience the calm turquoise waters of the Caribbean with luxury all-inclusive amenities.'
  },
  {
    code:        'B0401',
    name:        'Panama City Beach',
    length:      '4 nights / 5 days',
    start:       'March 21, 2025',
    resort:      'Sunseeker Surf Resort (4-star)',
    perPerson:   1199,
    image:       'reef3.jpg',
    description: 'The Emerald Coast awaits — powdery white sand beaches stretching as far as the eye can see.'
  },
  {
    code:        'B0701',
    name:        'Tahiti Escape',
    length:      '6 nights / 7 days',
    start:       'March 28, 2025',
    resort:      'Hedonist Heaven Resort (5-star)',
    perPerson:   1799,
    image:       'kayak.jpg',
    description: 'Overwater bungalows, coral reefs, and breathtaking sunsets — this is paradise.'
  },
  {
    code:        'B0901',
    name:        'French Riviera Luxury',
    length:      '5 nights / 6 days',
    start:       'April 11, 2025',
    resort:      'Chateau Royal (5-star)',
    perPerson:   2499,
    image:       'sea-sound.jpg',
    description: 'Glamour, history, and stunning Mediterranean coastline — the Riviera is in a class of its own.'
  }
];

// GET /
const index = (req, res) => {
  res.render('index', {
    title:        'Home',
    homeSelected: true
  });
};

// GET /travel
const travel = (req, res) => {
  res.render('travel', {
    title:          'Travel Packages',
    travelSelected: true,
    trips:          trips
  });
};

// GET /rooms
const rooms = (req, res) => {
  res.render('rooms', {
    title:         'Rooms',
    roomsSelected: true
  });
};

// GET /meals
const meals = (req, res) => {
  res.render('meals', {
    title:         'Meals',
    mealsSelected: true
  });
};

// GET /news
const news = (req, res) => {
  res.render('news', {
    title:       'Travel News',
    newsSelected: true
  });
};

// GET /about
const about = (req, res) => {
  res.render('about', {
    title:         'About Us',
    aboutSelected: true
  });
};

// GET /contact
const contact = (req, res) => {
  res.render('contact', {
    title:           'Contact Us',
    contactSelected: true
  });
};

module.exports = {
  index,
  travel,
  rooms,
  meals,
  news,
  about,
  contact
};

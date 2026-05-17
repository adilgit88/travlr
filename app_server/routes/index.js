/* app_server/routes/index.js
 * Router for the customer-facing website.
 * Each route maps an HTTP GET request to the matching controller function.
 */

const express    = require('express');
const router     = express.Router();
const controller = require('../controllers/main');

// Home page
router.get('/', controller.index);

// Travel packages
router.get('/travel', controller.travel);

// Rooms
router.get('/rooms', controller.rooms);

// Meals / dining
router.get('/meals', controller.meals);

// News
router.get('/news', controller.news);

// About
router.get('/about', controller.about);

// Contact
router.get('/contact', controller.contact);

module.exports = router;

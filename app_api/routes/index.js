const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');
const authenticationController = require('../controllers/authentication');
const { authenticate } = require('../middleware/auth');

router.post('/register', authenticationController.register);
router.post('/login', authenticationController.login);

router
  .route('/trips')
  .get(tripsController.tripsList)
  .post(authenticate, tripsController.tripsAddTrip);

router
  .route('/trips/:tripCode')
  .get(tripsController.tripsOne)
  .put(authenticate, tripsController.tripsUpdateTrip)
  .delete(authenticate, tripsController.tripsDeleteTrip);

module.exports = router;

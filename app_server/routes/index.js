var express = require('express');
var router = express.Router();
var controller = require('../controllers/main');

router.get('/', controller.index);
router.get('/about', controller.about);
router.get('/contact', controller.contact);
router.get('/meals', controller.meals);
router.get('/news', controller.news);
router.get('/rooms', controller.rooms);

module.exports = router;

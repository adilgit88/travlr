var express = require('express');
var path = require('path');

var app = express();

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Set port
var port = 3000;
app.listen(port, function() {
  console.log('Travlr Getaways server running on http://localhost:' + port);
});

module.exports = app;

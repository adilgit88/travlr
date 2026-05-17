var express = require('express');
var path    = require('path');
var hbs     = require('hbs');

var indexRouter = require('./app_server/routes/index');

var app = express();

// ── View Engine: Handlebars ──────────────────────────────────────────────────
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

// Register the partials folder (header.hbs, footer.hbs)
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

// ── Static Files (CSS, images, JS) ──────────────────────────────────────────
app.use(express.static(path.join(__dirname, 'public')));

// ── Routes ───────────────────────────────────────────────────────────────────
app.use('/', indexRouter);

// ── Start Server ─────────────────────────────────────────────────────────────
var port = 3000;
app.listen(port, function () {
  console.log('Travlr Getaways server running on http://localhost:' + port);
});

module.exports = app;

const mongoose = require('mongoose');

const host = process.env.DB_HOST || '127.0.0.1';
const dbURI = `mongodb://${host}/travlr`;

mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// Graceful shutdown - nodemon restart
process.once('SIGUSR2', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose disconnected through nodemon restart');
    process.kill(process.pid, 'SIGUSR2');
  });
});

// Graceful shutdown - app termination
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose disconnected through app termination');
    process.exit(0);
  });
});

// Graceful shutdown - Heroku/cloud app termination
process.on('SIGTERM', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose disconnected through app shutdown');
    process.exit(0);
  });
});

// Bring in the Trips schema
require('./travlr');
require('./users');

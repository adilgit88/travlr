const mongoose = require('mongoose');
const { createToken } = require('../middleware/auth');
const User = mongoose.model('users');

const register = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email
    });

    user.setPassword(req.body.password);
    await user.save();

    return res.status(200).json({ token: createToken(user) });
  } catch (err) {
    return res.status(400).json({ message: 'Unable to register user', error: err.message });
  }
};

const login = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const user = await User.findOne({ email: req.body.email.toLowerCase() }).exec();

    if (!user || !user.validPassword(req.body.password)) {
      return res.status(401).json({ message: 'Invalid login credentials' });
    }

    return res.status(200).json({ token: createToken(user) });
  } catch (err) {
    return res.status(500).json({ message: 'Login failed', error: err.message });
  }
};

module.exports = {
  register,
  login
};

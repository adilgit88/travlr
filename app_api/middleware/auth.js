const crypto = require('crypto');

const secret = process.env.JWT_SECRET || 'travlr-module-seven-secret';

const base64Url = (input) => Buffer.from(input)
  .toString('base64')
  .replace(/=/g, '')
  .replace(/\+/g, '-')
  .replace(/\//g, '_');

const sign = (data) => crypto
  .createHmac('sha256', secret)
  .update(data)
  .digest('base64')
  .replace(/=/g, '')
  .replace(/\+/g, '-')
  .replace(/\//g, '_');

const createToken = (user) => {
  const header = base64Url(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const payload = base64Url(JSON.stringify({
    _id: user._id,
    email: user.email,
    name: user.name,
    exp: Math.floor(Date.now() / 1000) + (60 * 60)
  }));
  const unsignedToken = `${header}.${payload}`;

  return `${unsignedToken}.${sign(unsignedToken)}`;
};

const decodePayload = (payload) => {
  const normalized = payload.replace(/-/g, '+').replace(/_/g, '/');
  const padded = normalized + '='.repeat((4 - normalized.length % 4) % 4);
  return JSON.parse(Buffer.from(padded, 'base64').toString('utf8'));
};

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.substring(7) : null;

  if (!token) {
    return res.status(401).json({ message: 'Authorization token required' });
  }

  const parts = token.split('.');

  if (parts.length !== 3) {
    return res.status(401).json({ message: 'Invalid authorization token' });
  }

  const unsignedToken = `${parts[0]}.${parts[1]}`;
  const expectedSignature = sign(unsignedToken);

  if (parts[2] !== expectedSignature) {
    return res.status(401).json({ message: 'Invalid authorization token' });
  }

  try {
    const payload = decodePayload(parts[1]);

    if (!payload.exp || payload.exp < Math.floor(Date.now() / 1000)) {
      return res.status(401).json({ message: 'Authorization token expired' });
    }

    req.auth = payload;
    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid authorization token' });
  }
};

module.exports = {
  authenticate,
  createToken
};

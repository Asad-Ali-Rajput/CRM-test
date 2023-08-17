const jwt = require('jsonwebtoken');
const User = require('../models/user');
require('dotenv').config();

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({ error: 'Authentication token is required' });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    } catch (verifyError) {

      return res.status(401).json({ error: 'Token verification failed', details: verifyError.message });
    }

    const user = await User.findOne({ email: decoded.email });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    if (decoded.exp < Date.now() / 1000) {
      return res.status(401).json({ error: 'Token has expired' });
    }

    req.user = user;

    next();
  } catch (error) {
    res.status(401).json({ error: 'Authentication failed', detailed: error });
  }
};

module.exports = authMiddleware;

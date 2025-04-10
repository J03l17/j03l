const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to J03l Express API',
    version: '1.0.0'
  });
});

// Example route
router.get('/status', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date(),
    environment: process.env.NODE_ENV || 'development'
  });
});

module.exports = router;

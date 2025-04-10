const express = require('express');
const config = require('./config/app.config');
const routes = require('./routes');

// Initialize Express app
const app = express();
const PORT = config.server.port;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS middleware (if needed)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', config.cors.allowedOrigins.join(','));
  res.header('Access-Control-Allow-Methods', config.cors.allowedMethods.join(','));
  res.header('Access-Control-Allow-Headers', config.cors.allowedHeaders.join(','));
  next();
});

// API Routes
app.use(`${config.api.prefix}/${config.api.version}`, routes);

// Simple route for the home page
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to J03l Express Server',
    status: 'Server is running successfully',
    apiEndpoint: `${config.api.prefix}/${config.api.version}`
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: err.message
  });
});

// Handle 404 routes
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: 'The requested resource was not found on this server'
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`API available at http://localhost:${PORT}${config.api.prefix}/${config.api.version}`);
  console.log(`Environment: ${config.server.env}`);
});

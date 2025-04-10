/**
 * Application configuration settings
 */
module.exports = {
  // Server configuration
  server: {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'development',
  },
  
  // API configuration
  api: {
    prefix: '/api',
    version: 'v1',
  },
  
  // CORS configuration
  cors: {
    allowedOrigins: ['http://localhost:3000'],
    allowedMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }
};

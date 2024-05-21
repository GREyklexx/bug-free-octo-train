const express = require('express');
const zooRoutes = require('./src/routes/zooRoutes');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());
// Use the zooRoutes for /zoos endpoint
app.use('/zoos', zooRoutes);

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server running on port 3000');
});

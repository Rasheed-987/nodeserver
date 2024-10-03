const express = require('express');
const app = express();

// Define a port for the server
const PORT = 3000;

// Create a simple route
app.get('/', (req, res) => {
  res.send('Hello, World! This is a simple Express server.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

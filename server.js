require('dotenv').config();
const express = require('express');
const app = express();
const port = 5000;

// Start the Express server
app.listen(port, () => {
    console.log(`Express server running on port ${port}`);
  });
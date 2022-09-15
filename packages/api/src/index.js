const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./utils/db');

// Middleware
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log('Server is running on port 5000.');
});
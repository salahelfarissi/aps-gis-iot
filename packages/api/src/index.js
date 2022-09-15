const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./utils/db');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/metrics', async (req, res) => {
  try {
    const { timestamp, sensor_type, metric } = req.body;
    const newMetric = await pool.query(
      'INSERT INTO metrics (timestamp, sensor_type, metric) VALUES ($1, $2, $3) RETURNING *',
      [timestamp, sensor_type, metric]);

    res.json(newMetric.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000.');
});
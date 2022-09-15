const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./utils/db');

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// Create a metric
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

// Get all metrics
app.get('/metrics', async (req, res) => {
  try {
    const allMetrics = await pool.query('SELECT * FROM metrics');
    res.json(allMetrics.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Get a metric
app.get('/metrics/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const metric = await pool.query('SELECT * FROM metrics WHERE sensor_id = $1', [id]);
    res.json(metric.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000.');
});
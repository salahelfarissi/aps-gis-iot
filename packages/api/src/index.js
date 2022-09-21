const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./utils/db');

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// Create a measure
app.post('/measures', async (req, res) => {
  try {
    const { timestamp, sensor_type, measure } = req.body;
    const newMeasure = await pool.query(
      'INSERT INTO measures (timestamp, sensor_type, measure) VALUES ($1, $2, $3) RETURNING *',
      [timestamp, sensor_type, measure]);

    res.json(newMeasure.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Get all measures
app.get('/measures', async (req, res) => {
  try {
    const allMeasures = await pool.query("SELECT timestamp, measure->'displacement' AS displacement from measures");
    res.json(allMeasures.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Get a measure
app.get('/measures/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const measure = await pool.query('SELECT * FROM measures WHERE sensor_id = $1', [id]);
    res.json(measure.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Update a measure
app.put('/measures/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { timestamp, sensor_type, measure } = req.body;
    const updateMeasure = await pool.query(
      'UPDATE measures SET timestamp = $1, sensor_type = $2, measure = $3 WHERE sensor_id = $4',
      [timestamp, sensor_type, measure, id]);

    res.json('Measure was updated!');
    } catch (err) {
      console.error(err.message);
    }
});

// Delete a measure
app.delete('/measures/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteMeasure = await pool.query('DELETE FROM measures WHERE sensor_id = $1', [id]);
    res.json('Measure was deleted!');
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
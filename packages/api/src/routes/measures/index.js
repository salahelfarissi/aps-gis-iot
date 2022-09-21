const express = require('express');
const router = express.Router();
const pool = require('../../utils/db');
const { createMeasure, getAllMeasures, getMeasure, updateMeasure, deleteMeasure} = require('../../controller/measures');

// Routes

// Create a measure
router.post('/', createMeasure);

// Get all measures
router.get('/', getAllMeasures);

// Get a measure
router.get('/:id', getMeasure);

// Update a measure
router.put('/:id', updateMeasure);

// Delete a measure
router.delete('/:id', deleteMeasure);

module.exports = router;
import { Router } from 'express';

// Controllers
import * as controllers from '../../controller/measures';

const router = Router();

// Create a measure
router.post('/', controllers.createMeasure);

// Get all measures
router.get('/', controllers.getAllMeasures);

// Get a measure
router.get('/:id', controllers.getMeasure);

// Update a measure
router.put('/:id', controllers.updateMeasure);

// Delete a measure
router.delete('/:id', controllers.deleteMeasure);

module.exports = router;
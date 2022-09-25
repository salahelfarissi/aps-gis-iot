import { Router } from 'express';

// Controllers
import * as controllers from '../../controller/forge';

const config = require('../../forge.config');

if (config.credentials.client_id == null || config.credentials.client_secret == null) {
  console.error('Missing FORGE_CLIENT_ID or FORGE_CLIENT_SECRET env. variables.');
}

const router = Router();

// Get access token
router.get('/oauth/token', controllers.oauth);
router.get('/oss', controllers.oss);
router.get('/modelderivative', controllers.modelderivative);

export default router;
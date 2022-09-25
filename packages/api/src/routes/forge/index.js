import { Router } from 'express';

// Controllers
import oauth from '../../controller/forge';

const router = Router();

// Get access token
router.get('/oauth', oauth);

export default router;
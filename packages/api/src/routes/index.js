import { Router } from "express";

import measures from "./measures";
import oauth from "./forge/oauth";
import oss from "./forge/oss";

const config = require('../forge.config');
if (config.credentials.client_id == null || config.credentials.client_secret == null) {
    console.error('Missing FORGE_CLIENT_ID or FORGE_CLIENT_SECRET env. variables.');
}

const router = Router();

router.use("/measures", measures);
router.use("/forge/oauth", oauth);
router.use("/forge/oss", oss);

export default router;
import { Router } from "express";

import measures from "./measures";
import forge from "./forge";

const router = Router();

router.use("/measures", measures);
router.use("/forge", forge);

export default router;
import { Router } from "express";

import measures from "./measures";

const router = Router();

router.use("/measures", measures);

export default router;
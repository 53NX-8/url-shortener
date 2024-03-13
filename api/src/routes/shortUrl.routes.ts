import express from "express"
import { destroy, index, show, store } from "../controllers/shortUrl.controller";

const router = express.Router()

router.post("", store);
router.get("", index);
router.get("/:id", show);
router.delete("/:id", destroy);

export default router;
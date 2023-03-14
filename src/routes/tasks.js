import { Router } from "express";
import {
  createRefi,
  deleteRefi,
  getRefis,
  getRefi,
  getRefiCount,
  updateRefi,
} from "../controllers/tasks";
const router = Router();

router.get("/refi/", getRefis);
router.get("/refi/count", getRefiCount);
router.get("/refi/:id", getRefi);

router.post("/refi/", createRefi);
router.delete("/refi/:id", deleteRefi);
router.put("/refi/:id", updateRefi);

export default router;

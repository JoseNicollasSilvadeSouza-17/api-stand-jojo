import { Router } from "express";
import StandControllers from "../controllers/stand.controllers.js";

const router: Router = Router();
const standControllers = new StandControllers();

router.get("/", standControllers.index);

router.get("/:id", standControllers.getStand);

router.post("/", standControllers.postStand);

router.put("/:id", standControllers.putStand);

router.patch("/:id", standControllers.patchStand);

router.delete("/:id", standControllers.deleteStand);

export default router;
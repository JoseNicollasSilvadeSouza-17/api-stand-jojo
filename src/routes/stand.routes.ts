import { Router } from "express";
import StandControllers from "../controllers/stand.controllers.js";
import { uploadSingleImage } from "../middlewares/uploads.js";

const router: Router = Router();
const standControllers = new StandControllers();

router.get("/", standControllers.all);

router.get("/count", standControllers.getStandCount);

router.get("/:id", standControllers.getStand);

router.post("/", standControllers.postStand);

router.post("/:id", uploadSingleImage, standControllers.postUploadImage);

router.put("/:id", standControllers.putStand);

router.patch("/:id", standControllers.patchStand);

router.delete("/:id", standControllers.deleteStand);

export default router;
